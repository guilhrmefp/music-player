/*=========================
||  Packages do projeto  ||
=========================*/
var gulp         = require('gulp');                    //gulp
var sass         = require('gulp-sass');               //sass
var postcss      = require('gulp-postcss');            //postcss
var autoprefixer = require('autoprefixer');            //vendor prefixer de css
var cssnano      = require('cssnano');                 //minificador css
var sourcemaps   = require('gulp-sourcemaps');         //gerador de mapa para debuggar arquivo minificado
var del          = require('del');                     //exclui arquivos do diretório
var cache        = require('gulp-cache');              //limpar cache
var runSequence  = require('run-sequence')             //define a sequência em que as terefas devem ser iniciadas
var browserSync  = require('browser-sync').create();   //live-reload
var webpack      = require('webpack-stream')           //used for imports


/*=========================
||         TASKS         ||
=========================*/
//https://github.com/twbs/bootstrap-sass#sass-autoprefixer
browsersComp = [
  "Android 2.3",
  "Android >= 4",
  "Chrome >= 20",
  "Firefox >= 24",
  "Explorer >= 8",
  "iOS >= 6",
  "Opera >= 12",
  "Safari >= 6"
]

//gerar arquivos css e minificar
gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.+(scss|sass)') //Gets all files ending with .scss in src/sass and children dirs
         .pipe(sourcemaps.init())
         .pipe(sass().on('error', sass.logError)) //usando plugin do sass
         .pipe(postcss([
            autoprefixer({browsers: browsersComp}),
            cssnano()
         ]))
         .pipe(sourcemaps.write('/'))//cria sourcemap na pasta de css
         .pipe(gulp.dest('dist/css'))
         .pipe(browserSync.reload({ //metodo adicionado para live-reload do browser
            stream: true
         }));
});

//copiar js
gulp.task('js', function() {
  return gulp.src('src/js/*.js')
         .pipe(webpack({
           output: {
             filename: 'main.js'
           }
         }))
         .pipe(gulp.dest('dist/js'))
         .pipe(browserSync.reload({ //metodo adicionado para live-reload do browser
            stream: true
         }));
});

//copiar html
gulp.task('html', function() {
  return gulp.src('src/*.html')
         .pipe(gulp.dest('dist'))
         .pipe(browserSync.reload({ //metodo adicionado para live-reload do browser
            stream: true
         }));
});

//apagar diretório final
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

//limpar cache do gulp
gulp.task('clean:cache', function(callback) {
  return cache.clearAll(callback);
});

//task de live-reload do browser
gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    port: 8080,
    startPath: 'main.html'
  });
});

//método que observa quais arquivos são modificados e quando rodar uma tarefa
gulp.task('watch', function(){
  //gulp.watch('files-to-watch', ['tasks', 'to', 'run']); //exemplo
  //um watch separado pra cada tipo de arquivo
  gulp.watch('src/sass/**/*.+(scss|sass)', ['sass']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/*.html', ['html']);
});

//compilar projeto final
gulp.task('build', function(callback){
  runSequence(
    'clean:dist',
    ['sass', 'js', 'html'],
    callback
  );
});

//tarefa padrão
gulp.task('default', function(callback){
  runSequence(
    'build',
    ['browserSync', 'watch'],
    callback
  );
});

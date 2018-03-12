## Como funciona: ##
Cria uma playlist local (nada é realmente salvo e se perde ao atualizar a página) em um player no browser. É possível selecionar arquivos da sua máquina ou inserir links diretos. Deve ser atribuido um nome e o artista para a música a ser adicionada. Ao clicar em 'Add to playlist', uma imagem é adicionada a música através da api de busca da Google, após isso, uma api de reconhecimento de imagem da Google extrai as cores e 3 delas são usadas para troca das cores da página referente a música que está tocando.

## Pré-requisitos: ##
* Node JS (base para o Gulp) - https://nodejs.org/
* Gulp (via linha de comando):
```
npm install gulp -g //Caso já tenho o gulp instalado globalmente, ignorar este comando
```

## Preenchendo os pré-requisitos, instalar dependências (presentes no arquivo package.json) ##
```
npm install
```

## Tasks específicas ##
* **sass**        => Gera e minifica CSS com vendor prefixes e sourcemap
* **js**          => Compila JS e seus módulos
* **html**        => Copia arquivos HTML para o diretório 'dist'
* **clean:dist**  => Apaga o diretório 'dist'
* **clean:cache** => Limpa o cache do Gulp
* **browserSync** => live-reload para os browsers
* **watch**       => Arquivos que devem ter modificações vigiadas

## Tasks produção ##
* **build**       => Compila todo o projeto para produção
* **default**     => Compila todo o projeto (task 'build') e roda as tasks 'browserSync' e 'watch' para desenvolvimento

## Pastas ignoradas no versionamento: ##
* .sass-cache/ **-->** *(cache criado pelo sass)*
* node_modules/ **-->** *(packages usados no projeto depois de 'npm install')*
* npm-debug.log **-->** *(log do node)*
* \*\*/_notes **-->** *(arquivos geralmente criados pelo Dreamweaver)*
* dist/ **-->** *(pasta final com arquivo compilados)*
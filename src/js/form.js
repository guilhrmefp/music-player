const formField = document.querySelectorAll('.form__field')

for (let i = 0; i < formField.length; i++) {
  formField[i].addEventListener('focus', function(e) {
    inputFocus(e.target)
  });
  formField[i].addEventListener('blur', function(e) {
    inputBlur(e.target)
  });
}

function inputFocus (input) {
  input.classList.add('fill')
}
function inputBlur (input) {
  if (!input.value) {
    input.classList.remove('fill')
  }
}

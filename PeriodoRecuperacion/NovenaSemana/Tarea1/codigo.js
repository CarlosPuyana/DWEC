    var select = document.getElementById('provincia').value
    select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
  })
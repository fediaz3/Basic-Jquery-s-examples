$(function() {
  $('#selector').change(function() { // en el id=selector del html, cuando cambien su value
    $('#selected-value').text('Selected value is: ' + this.value);
    // imprimir el texto seleccionado, en el id=selected-value del html.
  });
});

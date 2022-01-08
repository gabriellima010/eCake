$(document).ready(function () {
  $("#btnForm").on('click', function () {
    var formData = {
      'nome': $("#nome").val(),
      'sobrenome': $("#sobrenome").val(),
      'dataEntrega': $("#dataEntrega").val(),
      'horaEntrega': $("#horaEntrega").val(),
      'telefone': $("#telefone").val(),
      'email': $("#email").val(),
      'endereco': $("#endereco").val(),
      'endereco2': $("#endereco2").val(),
      'cidade': $("#cidade").val(),
      'regiao': $("#regiao").val(),
      'cep': $("#cep").val(),
      'pais': $("#pais").val(),
      'tipoDeBolo': $("input[type='radio'][name='radioCake']:checked").val(),
    }

    $.ajax({
      type: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: JSON.stringify({
        title: 'Teste Gabriel',
        body: formData,
        userId: 11,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      success: function (data, textStatus, request) {
        console.log(request.getAllResponseHeaders())
        alert("Dados enviados com sucesso!")
        console.log(textStatus);
        console.log(data)
      },
      error: function (errorMessage) {
        alert("Não foi possível realizar o envio dos dados")
      }
    });
  });
})
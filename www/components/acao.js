$(document).on("click", ".salvar", function(){
  var parametros  = {
    "saborPizza":$("#saborPizza").val(),
    "valorPizza":$("#valorPizza").val()
  };

  $.ajax({
      type:"post", //Forma de envio
      url: "https://projetopizzaria.000webhostapp.com/cadastrar.php",  //Local de envio
      data: parametros, // Os dados enviados
      success: function(data){ //Função de Sucesso de Cadastro
          navigator.notification.alert(data);
          $("#saborPizza").val("");
          $("#valorPizza").val("");
      },
      error: function(data){
          navigator.notification.alert("Erro ao cadastrar");
      }
  });
}); 

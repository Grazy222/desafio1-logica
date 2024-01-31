alert('Olá, seja bem vindo!');

var mensagemCriptografada = ""; // Variável para armazenar a mensagem criptografada

  function criptografar() {
    let mensagemInput = document.getElementById("mensagemInput").value;
    mensagemCriptografada = "";

    for (var i = 0; i < mensagemInput.length; i++) {
      var charCode = mensagemInput.charCodeAt(i);
      mensagemCriptografada += String.fromCharCode(charCode + 1);
    }

    document.getElementById("mensagemCriptografada").textContent = mensagemCriptografada;
  }

  function descriptografar() {
    let mensagemDescriptografada = "";

    for (var i = 0; i < mensagemCriptografada.length; i++) {
      let charCode = mensagemCriptografada.charCodeAt(i);
      mensagemDescriptografada += String.fromCharCode(charCode - 1);
    }

    document.getElementById("mensagemDescriptografada").textContent = mensagemDescriptografada;
  }
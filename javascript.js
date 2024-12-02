// Função para mostrar mensagem de sucesso após envio de formulário
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário
  
    // Animação suave de fade-in da mensagem de sucesso
    const sucessoMensagem = document.getElementById("mensagem-sucesso");
    sucessoMensagem.style.display = "block";
    sucessoMensagem.classList.add("sucesso");
    
    // Simula um atraso antes de limpar o formulário
    setTimeout(function() {
      // Limpa os campos do formulário
      document.getElementById("nome").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mensagem").value = "";
      
      // Anima novamente para esconder a mensagem de sucesso após 5 segundos
      setTimeout(function() {
        sucessoMensagem.style.display = "none";
      }, 5000);
    }, 2000);
  });
  
  // Animação de carregamento das seções quando entram na tela
  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.sobre, .carros, .contato');
    sections.forEach(section => {
      section.setAttribute('data-aos', 'fade-up');
    });
  });
  
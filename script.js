function handleSubmit(event) {
  event.preventDefault(); // Impede o envio tradicional do formulário
  
  // Captura os dados do formulário
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulando o envio do formulário e exibição de um alerta
  alert(`Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}\n\nSeus dados foram enviados com sucesso!`);
  
  // Opcionalmente, você pode limpar o formulário
  document.getElementById('formContato').reset();
  
  return false; // Retorna falso para evitar o comportamento padrão do formulário
}
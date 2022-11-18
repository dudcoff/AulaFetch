const consultaUsuario = async (evento) => {
    evento.preventDefault();
    const campoMensagem = document.getElementById('mensagem');
    const campoAvatar = document.getElementById('avatar');

    // Obté, URL
    const usuario = document.getElementById('usuario').value;
    const url = `https://api.github.com/users/${usuario}`

    // Executa a consulta à API do GitHub
    const resposta = await fetch(url);
    console.log(resposta);

    if (!resposta.ok) {
        campoMensagem.innerHTML = 'Não encontrado';
    
        return;
    }

    const resultado = await resposta.json();

    //Exibir
    campoMensagem.innerHTML = resultado.name;
    campoAvatar.setAttribute('src', resultado.avatar_url);
};

document.addEventListener('DOMContentLoaded', () => {
    const botaoConsultar = document.getElementById('consultar');
    botaoConsultar.addEventListener('click', consultaUsuario);
});

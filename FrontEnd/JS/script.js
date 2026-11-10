const API_URL = "IPv4 PúblicO API(EC2):PORTA/TABELA" //IP DA API


const formCadastro = document.getElementById("formCadastro");
const formBusca = document.getElementById("formBusca");
const formAtualizacao = document.getElementById("formAtualizacao")
const formExclusao = document.getElementById("formExclusao");



const btnListar = document.getElementById("btnListar")
const listaUsuarios = document.getElementById("listaUsuarios");
const resultadoBusca = document.getElementById("resultadoBusca");
const mensagem = document.getElementById("mensagem");


//listar usuarios - GET
function listarUsuarios(){
    fetch(API_URL) // Consultar 
        .then(resposta => resposta.json())
        .then(usuarios=> {
            listaUsuarios.innerHTML="";
            usuarios.forEach(usuario => {
                listaUsuarios.innerHTML+=`
                <tr>
                        <td>${usuario.id}</td>
                        <td>${usuario.nome}</td>
                </tr>
                `;
            });
        });
}

//Cadastrar Usuario - POST
formCadastro.addEventListener("submit",function(evento){
    evento.preventDefault();
    const nome = document.getElementById("nomeCadastro").value;
    fetch(API_URL,{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({nome:nome})
    })
    .then(()=>{ //sucesso do post para o backend
        mensagem.textContent = "Usuário cadastrado!";
        formCadastro.reset();
        listarUsuarios();
    });
});

//Consultar Usuario por id - GET
formBusca.addEventListener("submit",function(evento){
    evento.preventDefault();
    const id = document.getElementById("idBusca").value;

    fetch(API_URL + "/" + id)
        .then(resposta=>resposta.json())
        .then(usuario => {
            resultadoBusca.textContent = "ID: " + usuario.id + " - Nome: "+usuario.nome;
        
        });
});




//Atualizar usuario - PUT
formAtualizacao.addEventListener("submit",function(evento){
    evento.preventDefault();
    const id=document.getElementById("idAtualizacao").value;
    const nome = document.getElementById("nomeAtualizacao").value;

    const usuario = {
        nome: nome
    }

    fetch(API_URL + '/'+id,{
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(usuario)
    })
        .then(() => {
            mensagemAlterar.textContent = "Usuário atualizado!";
            listarUsuarios();
        });

});

// EXCLUIR USUÁRIO - DELETE
formExclusao.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const id = document.getElementById("idExclusao").value;

    fetch(API_URL + "/" + id, {
        method: "DELETE"
    })
        .then(() => {
            mensagemExcluir.textContent = "Usuário excluído!";
            formExclusao.reset();
            listarUsuarios();
        });
});





//listener do botão de listagem
btnListar.addEventListener("click", listarUsuarios);
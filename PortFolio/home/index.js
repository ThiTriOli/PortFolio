// Função para alternar entre modo claro e escuro
function toggleTheme() {
    const body = document.body;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Salva a preferência do usuário no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        localStorage.setItem('theme', 'light');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
}

// Verifica a preferência do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    if (savedTheme === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
});

// Adiciona o evento de clique ao botão de modo claro/escuro
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Rola a página até a seção de projetos
document.getElementById('btn-projetos').addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    const projetosSection = document.getElementById('projetos-section');
    projetosSection.scrollIntoView({ behavior: 'smooth' });
});

// Funções de máscara simplificadas
function mascara_nome() {
    var nome = document.getElementById("nome").value;
    localStorage.setItem("nome", nome);
}

function mascara_endereço() {
    var endereco = document.getElementById("endereço").value;
    localStorage.setItem("endereço", endereco);
}

function mascara_telefone() {
    var tel = document.getElementById("telefone");
    var valor = tel.value;

    valor = valor.replace(/\D/g, ""); // Remove tudo que não é dígito
    valor = valor.slice(0, 11); // Limita a 11 dígitos (incluindo DDD)

    if (valor.length > 2) {
        valor = "(" + valor.substring(0, 2) + ") " + valor.substring(2);
    }
    if (valor.length > 10) {
        valor = valor.substring(0, 10) + "-" + valor.substring(10);
    }
    
    tel.value = valor;
    localStorage.setItem("numtel", valor);
}
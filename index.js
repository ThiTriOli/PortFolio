document.getElementById('btn-projetos').addEventListener('click', function() {
    const projetosSection = document.getElementById('projetos-section');
    projetosSection.scrollIntoView({ behavior: 'smooth' });

    // Adiciona a classe "visible" após um pequeno atraso
    setTimeout(() => {
        projetosSection.classList.add('visible');
    }, 300); // Ajuste o tempo conforme necessário
});
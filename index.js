document.getElementById('btn-projetos').addEventListener('click', function() {

    const projetosSection = document.getElementById('projetos-section');
    projetosSection.scrollIntoView({ behavior: 'smooth' });
   
    setTimeout(() => {
        projetosSection.classList.add('visible');
    }, 0); 
});
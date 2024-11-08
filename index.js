document.getElementById('btn-projetos').addEventListener('click', function() {
    const projetosSection = document.getElementById('projetos-section');
    projetosSection.scrollIntoView({ behavior: 'smooth' });

  
    setTimeout(() => {
        projetosSection.classList.add('visible');
    }, 300);
});
function mascara_nome(){
    
    var nome = document.getElementById("nome").value
    console.log(nome)
    localStorage.setItem("nome",nome)
}
function mascara_endereço(){
    
    var endereço = document.getElementById("endereço").value
    console.log(endereço)
    localStorage.setItem("endereço",endereço)
}
function mascara_telefone ()
        {
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14)
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
            
            localStorage.setItem("numtel",tel_formatado)
        }
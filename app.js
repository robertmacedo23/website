'use strict'; 

// Seleção do botão de troca
const switcher = document.querySelector('.btn');

// Inicia o texto do botão com base no tema atual
window.addEventListener('load', function() {
    const className = document.body.className; // Obtém a classe atual do body
    if (className === "light-theme") {
        switcher.textContent = "Dark";  // Se o tema for claro, o botão mostra "Dark"
    } else {
        switcher.textContent = "Light";  // Se o tema for escuro, o botão mostra "Light"
    }
});


switcher.addEventListener('click', function () {
   
    document.body.classList.toggle('dark-theme');
    
    
    const className = document.body.className;
    if (className === "light-theme") {
        this.textContent = "Dark";  
    } else {
        this.textContent = "Light";  
    }

    console.log('Tema atual: ' + className); 
});

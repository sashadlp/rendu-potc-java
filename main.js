//code java pour passez du mode sombre a clair
let Bouton = document.getElementById("BoutonTheme");//creatio de la variable qui va permettre de recuperer dans le html l'id boutontheme
let bodyElement = document.getElementById("body"); //creation de la variable qui va permettre de recuperer dans le html l'id body

Bouton.addEventListener("click", function() {
    bodyElement.classList.toggle("light"); //nous permet de passez de sombre a clair en ajoutant ou en enlevant le mode claire
    
    if (bodyElement.classList.contains("light")) {
        Bouton.innerHTML = "Passer en mode sombre";//nous permet de changer de couleur de texte quand on passe en mode sombre
    } else {
        Bouton.innerHTML = "Passer en mode clair"; //nous permet de changer la couleur du texte pour le mettre en mode claire
    }
});

// code java du menu burger
let boutonmenu = document.getElementById("boutonmenu");
let Menu = document.getElementById("Menu");

boutonmenu.addEventListener("click", function() {
    Menu.classList.toggle("show");//permet dafficher ou faire disparaitre le menu 
});

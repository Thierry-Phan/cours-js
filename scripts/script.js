// function test() {
//     console.info("Toto")
// }
// setInterval(test, 3000)

// let tab = [22, 11, 93];
// let obj = { 1: 22, 2: 11, 3: 93 };

// ***************************exo1*******************************/ Création du carrousel
let imgCarrousel = [
    "https://www.vita-europe.com/beehealth/wp-content/uploads/VitaG299.jpg",
    "https://hotel-interlaken.dorint.com/typo3temp/_processed_/0/6/csm_bea_aussen-19_01_81e3bc7166.jpg",
    "http://www.bahrami.ch/wp-content/uploads/2014/12/image-contact-form-960x360.jpg"
];

let occurrenceCarrousel = 0

setInterval(function() {
    let img = document.querySelector('#slider img')
    img.src = imgCarrousel[occurrenceCarrousel];
    occurrenceCarrousel++
    if (occurrenceCarrousel == imgCarrousel.length) {
        occurrenceCarrousel = 0;
    }
}, 5000)

// *****************************exo2*****************************/ Mélanger les lettres des titre du nav



// Randomtext - Rend une chaîne de caractere de manier aléatoire
// @param text: string - chaîne de caractère à mélanger

function randomText(text = "Mike le roi") {

    let tableau = text.split(""); //Convertir une chaîne de caractère en tableau de caractère
    tableau = arrayToStringRandom(tableau).join(''); //faire appel à la function
    return tableau; //retourne une string aléatoire
}

/**
 * arraytoStringRandom - renvoi un nouveau tableau avec les éléments de l'ancien de manière aléatoire
 * @param tab - Tableau à mélanger 
 * @returns newArray - un nouveau tableau
 */
function arrayToStringRandom(tab = []) {
    let tabRandom = [] //Tableau des entiers deja récuprer - Eviter les doublons de caractère
    let random, newArray = []; //création de 2 variables - random est la variable qui stockera le nombre aléatoire -
    // new array sera le nouveau tableau créé à partir des nombres aléatoires
    for (let i = 0; i < tab.length; i++) { //permet de générer tous les caractères selon la taille du tableau -> tab
        do {
            random = getRandomInt(0, tab.length); // Retour un entier aléatoire compris entre 0 et la taille du tableau (tab)
        }
        while (tabRandom.includes(random)); //verifie si l'entier à deja été récupéré, si oui, relance l'appel de la fonction getRandomInt()
        tabRandom.push(random); //ajouter l'entier aleatoire dans le tableau (tabRandom)
        newArray.push(tab[random]); //ajouer le caractère aleatoire dans le tableau (newArray)
        console.log(random);
    }
    return newArray;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


let baliseA = document.querySelectorAll("#header > nav a")
console.log(baliseA);
for (let i = 0; i < baliseA.length; i++) {
    baliseA[i].innerHTML = randomText(baliseA[i].innerHTML); //Appel à la function
}

//*******************************exo 3**************************************/ Apparition d'image lors d'un click

let imgClick = ["https://allfreshwallpapers.com/uploads/posts/wallpaper-wide-nature/thumb/main_wallpaper-wide-nature.jpg",
    "http://wallpaperstorage.com/uploads/posts/panda-bear-wallpaper/thumb/main_panda-bear-wallpaper.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Le_Stade_Olympique_de_Montr%C3%A9al_Nuit_Arriere_Edit_1.jpg/290px-Le_Stade_Olympique_de_Montr%C3%A9al_Nuit_Arriere_Edit_1.jpg"
]


let imgA = document.querySelectorAll('#services img');
console.log(imgA);

for (let i = 0; i < imgA.length; i++) {
    imgA[i].addEventListener('click', function() {
        imgA[i].src = imgClick[i]

    })
}
// imgA.addEventListener('click', function(event) {
//     imgA.classId.add('imgClick')
// });

//**************************************exo4********************************/
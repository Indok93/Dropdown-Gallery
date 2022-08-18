const myGallery = document.getElementById("app");
const mySelect = document.getElementById("animals");

// events
mySelect.addEventListener("change", animalSelected);

function animalSelected(){
    // console.log(mySelect.value);

    switch(mySelect.value){
        case "Tiger":
            buildAnimalCard("Tiger", "https://knuthenborg.dk/wp-content/uploads/2021/05/hi-igtv-keni-thumb-e1620816735137.png", "Stor kat");
            break;
        case "Koala":
            buildAnimalCard("Koala", "https://pandaclub.dk/wp-content/uploads/sites/3/2020/05/koa.png", "Venlig koalabjørn");
            break;
        case "Edderkop":
            buildAnimalCard("Edderkop", "https://cdn.lorry.bazo.dk/images/25d31ab4-d761-46bf-9d94-00f72349efff", "Ækelt kæledyr");
            break;
        case "Dovendyr":
            buildAnimalCard("Dovendyr", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFA_ykvjIJ81XYMi8Jv0BrqABODi1B0elZ9A&usqp=CAU", "Dovendyret Arne har begået mord");
            break;
        case "Fritte":
            buildAnimalCard("Fritte", "https://www.petworld.dk/resources/category/9.7/.4/9.7.4.jpg?width=400&height=230&format=jpg", "Dette er en fritte");
            break;
        default:
            alert("are you an animal?")
    }
    

}

// function buildAnimalCard(testvalue){
//     console.log("her er et dyr");
//     console.log(testvalue);

    
// }

function buildAnimalCard(myHeadline, myUrl, myDescription){
    // card elements

    // clear gallery html
    myGallery.innerHTML = "";

    // create needed elements for card
    const myCard = document.createElement("figure");
    const cardHeadline = document.createElement("h2");
    const cardDescription = document.createElement("p")
    const cardImage = document.createElement("img");


    // Assign elements corrosponding values
    cardImage.src = myUrl;
    cardHeadline.innerText = myHeadline;
    cardDescription.innerHTML = myDescription;

    //
    myCard.appendChild(cardHeadline);
    myCard.appendChild(cardImage);
    myCard.appendChild(cardDescription);

    //append card
    myGallery.appendChild(myCard);
}
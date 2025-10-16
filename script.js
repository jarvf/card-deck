// insert card elements here
const containerElement = document.querySelector('.container');

class Card {
    // your code goes here
    constructor(data) {
        this.name = data.name;
        this.number = data.number;
        this.suit = data.suit;
        this.image = data.image;
    }

    // add your class functions here
    createCardElement() {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const img = document.createElement('img');
        img.src = this.image;       
        img.alt = this.name;

        const title = document.createElement('h2');
        title.textContent = this.name;

        const subtitle = document.createElement('p');
        subtitle.textContent = `${this.number} ${this.suit}`;

        cardDiv.appendChild(img);
        cardDiv.appendChild(title);
        cardDiv.appendChild(subtitle);

        return cardDiv;
    }
}

function getData() {
    // your code goes here
    fetch('data.json')
        .then(response => response.json())
        .then(data => displayCards(data));
}

function displayCards(cards) {
    // your code goes here
    cards.forEach(cardData => {
        const card = new Card(cardData);
        const cardElement = card.createCardElement();
        containerElement.appendChild(cardElement);
    });
}

// call your functions here
getData();


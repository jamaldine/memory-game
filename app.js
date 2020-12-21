document.addEventListener("DOMContentLoaded", (event) => {
  const eat = [
    {
        name: "cheeseburger",
        src: "./images/cheeseburger.png",
      },
      {
        name: "cheeseburger",
        src: "./images/cheeseburger.png",
      },
      {
        name: "fries",
        src: "./images/fries.png",
      },
      {
        name: "fries",
        src: "./images/fries.png",
      },
      {
        name: "hotdog",
        src: "./images/hotdog.png",
      },
      {
        name: "hotdog",
        src: "./images/hotdog.png",
      },
      {
        name: "ice-cream",
        src: "./images/ice-cream.png",
      },
      {
        name: "ice-cream",
        src: "./images/ice-cream.png",
      },
      {
        name: "milkshake",
        src: "./images/milkshake.png",
      },
      {
        name: "milkshake",
        src: "./images/milkshake.png",
      },
      {
        name: "pizza",
        src: "./images/pizza.png",
      },
      {
        name: "pizza",
        src: "./images/pizza.png",
      },
  ];

  const cards = document.getElementById("cards");

  let score = document.querySelector("h1");

  let cardIdChosen = [];
  let cardsChosen = [];
  let max = 11;
  let cardsVerified = [];
  let counter=0;
  function createBoard() {
    for (let i = 0; i < eat.length; i++) {
      let imgCard = document.createElement("img");
      imgCard.setAttribute("src", "./images/blank.png");
      imgCard.setAttribute("data-id", i);
      imgCard.addEventListener("click", flipcard);
      cards.appendChild(imgCard);
    }
  }
  function result() {
    if (cardIdChosen.length === 2) {
      setTimeout(function () {
        if (
          cardsChosen[0].getAttribute("src") ===
          cardsChosen[1].getAttribute("src")
        ) {
          cardsChosen[0].setAttribute("src", "./images/white.png");
          cardsChosen[1].setAttribute("src", "./images/white.png");
        } else {
          cardsChosen[0].setAttribute("src", "./images/blank.png");
          cardsChosen[1].setAttribute("src", "./images/blank.png");
        }
        cardIdChosen = [];
        cardsChosen = [];
      }, 500);
      counter++;
    } else {
        //else statements
    }
  }
  function assigneAttribute(rdm) {
    eat.splice(rdm, 1);
    max--;
  }
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function verifyAttribute(cardSelected) {

    let rdm = randomIntFromInterval(0, max);
    let randomImgSrc = [];
    if(eat.length !== 0) randomImgSrc = eat[rdm].src
    if (cardsVerified.length !== 0) {
      const found = cardsVerified.some(
        (el) => el.dataId === cardSelected.getAttribute("data-id")
      );
      if (found) {
        for (let element of cardsVerified) {
          if (cardSelected.getAttribute("data-id") === element.dataId) {
            cardSelected.setAttribute("src", element.src);
            break;
          }
        }
      } else {
        cardSelected.setAttribute("src", randomImgSrc);
        cardsVerified.push({
          dataId: cardSelected.getAttribute("data-id"),
          src: cardSelected.getAttribute("src"),
        });
        assigneAttribute(rdm);
      }
    } else {
      cardSelected.setAttribute("src", randomImgSrc);
      cardsVerified.push({
        dataId: cardSelected.getAttribute("data-id"),
        src: cardSelected.getAttribute("src"),
      });
      eat.splice(rdm, 1);
      max--;
    }
  }
  function flipcard() {
    var cardId = this.getAttribute("data-id");
    var cardSelected = this;
    verifyAttribute(cardSelected);
    cardIdChosen.push(cardId);
    cardsChosen.push(cardSelected);
    result();
    console.log(score);
    score.innerText=`Score: ${counter}`;
  }
  createBoard();
});

import Hand from './components/Hand';

import './App.css';


const CARD_DATA = [
  {
    id: 1,
    suit: "Diamonds",
    value: 6
  },
  {
    id: 2,
    suit: "Diamonds",
    value: 7
  },
  {
    id: 3,
    suit: "Diamonds",
    value: 8
  },
  {
    "id": 4,
    suit: "Diamonds",
    value: 9
  },
  {
    id: 5,
    suit: "Diamonds",
    value: "Queen"
  }
];

const getImage = (card) => {
  if (card.faceDown) {
    return 'images/red_back.png';
  }
  const fileName = card.value.toString()[0] + card.suit[0].toUpperCase() + '.png';
  return `images/${ fileName }`;
}

const App = () => {
  const cards = CARD_DATA.map((cardData) => {
    cardData.faceDown = true;
    cardData.image = getImage(cardData);
    return cardData;
  });


  return (
    <div className="App">
      <header>
        <h1>Playing Cards</h1>
      </header>
      <main>
        <Hand cards={cards} />
      </main>

    </div>
  );
}

export default App;

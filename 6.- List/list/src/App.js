import React,{useState} from 'react'
import './App.css';
import Card from './Card';
import faker from 'faker'
function App() {
  const [cards,setCards] = useState([
    {
      id :'123',
      name: faker.name.firstName(),
      title: faker.name.jobTitle(),
      avatar: faker.image.avatar()
    },
    {
      id :'423',
      name: faker.name.firstName(),
      title: faker.name.jobTitle(),
      avatar: faker.image.avatar()
    },
    {
      id :'121',
      name: faker.name.firstName,
      title: faker.name.jobTitle(),
      avatar: faker.image.avatar()
    }

  ])
  // Para mostrar y esconder algo , se usa state y luego el operador ? true : false (&& se usa si no tiene false)
  const [showCard,setShowCard] = useState(true)
  const toggleShowCard= ()=> setShowCard(!showCard)

  const deleteCardHanddler = (cardIndex)=> {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex,1)
    console.log(cards_copy)
    console.log(cards)
    setCards(cards_copy)

  }

  const changeNameHandler = (event,id)=>{
    //1. Saber que carta es (con el id)
    const cardIndex = cards.findIndex(card=>card.id=id)
    //2. Hacer copia de la carta
    const cards_copy = [...cards]
    //3. Cambiar el nombre de la carta especifica 
    cards_copy[cardIndex].name = event.target.value
    //4. Actualizar carta con su ultima copia
    setCards(cards_copy)
  }

  const cardMarkup=showCard && (
  cards.map((card,index)=><Card
      avatar={card.avatar}
      name={card.name}
      title={card.title}
      key={card.id}
      onDelete = {() =>deleteCardHanddler(index)}
      onChangeName = {(event)=>changeNameHandler(event,card.id)}
    />)
  )
  return (
    <div className="App"> 
      <button className="button" onClick={toggleShowCard}>
        Toggle Show/Hide
      </button>
      {cardMarkup}
    </div>
  );
}

export default App;
import React,{useState} from 'react'
import './App.css';
import Card from './Card';
import faker from 'faker'
function App() {
  const [name,setName] = useState("Alan Smith")
  const buttonMarkup = (
    <div>
      <button className="button button2">SI</button>
      <button className="button button3">NO</button>
    </div> 
  )

  const changeNameHandler = name =>setName(name)
  const changeInputHandler = event => setName(event.target.value)
  
  // Para mostrar y esconder algo , se usa state y luego el operador ? true : false (&& se usa si no tiene false)
  const [showCard,setShowCard] = useState(true)
  const toggleShowCard= ()=> setShowCard(!showCard)

  const cardMarkup=showCard && 
  <Card
    avatar="https://cdn.fakercloud.com/avatars/sebashton_128.jpg"
    name={name}
    title="International Brand Strategist"
    onChangeName={() =>changeNameHandler("Matias Errazuriz")}
    onChangeInput={changeInputHandler}
  >
    {buttonMarkup}
  </Card>


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


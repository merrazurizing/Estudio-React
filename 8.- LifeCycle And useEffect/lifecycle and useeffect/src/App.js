import React,{Component} from 'react'
import './App.css';
import Card from './element/Card'
import faker from 'faker'
import {ThemeProvider} from 'styled-components'
import Button from './element/Button'

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

class App extends Component {


constructor(props){
  super(props)
  this.state={
    cards: [
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
  
    ],
    showCard:true
  }
}
  // Para mostrar y esconder algo , se usa state y luego el operador ? true : false (&& se usa si no tiene false)
  toggleShowCard= ()=> this.setState({showCard: !this.state.showCard})

  deleteCardHanddler = (cardIndex)=> {
    const cards_copy = [...this.state.cards]
    cards_copy.splice(cardIndex,1)
    this.setState({cards:cards_copy})

  }

  changeNameHandler = (event,id)=>{
    //1. Saber que carta es (con el id)
    const cardIndex = this.state.cards.findIndex(card=>card.id === id)
    //2. Hacer copia de la carta
    const cards_copy = [...this.state.cards]
    //3. Cambiar el nombre de la carta especifica 
    cards_copy[cardIndex].name = event.target.value
    //4. Actualizar carta con su ultima copia
    this.setState({cards:cards_copy})
  }

render(){ 
  const classes = ['button']

  if(this.state.cards.length<3) classes.push('pink')
  if(this.state.cards.length<2) classes.push('red text')

  const cardMarkup=this.state.showCard && (
  this.state.cards.map((card,index)=><Card
      avatar={card.avatar}
      name={card.name}
      title={card.title}
      key={card.id}
      onDelete = {() => this.deleteCardHanddler(index)}
      onChangeName = {(event)=> this.changeNameHandler(event,card.id)}
    />)
  )
  
  
  return (
  <ThemeProvider theme={theme}>
    <div className="App">
    <Button color="mango"length={this.state.cards.length} onClick={this.toggleShowCard}> Toggle </Button>
    <button className={classes.join(' ')} onClick={this.toggleShowCard}>
      Toggle Show/Hide
    </button>
    {cardMarkup}
  </div>
  </ThemeProvider>
);}

 
}

export default App;
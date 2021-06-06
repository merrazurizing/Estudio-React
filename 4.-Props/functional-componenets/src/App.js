import React from 'react'
import './App.css';
import Card from './Card';
import faker from 'faker'
function App() {
  const buttonMarkup = (
    <div>
      <button className="button button2">SI</button>
      <button className="button button3">NO</button>
    </div> 
  )



  return (
    <div className="App"> 
      <Card
        avatar={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.firstName()}`}
        title={faker.name.jobTitle()}
      >
        {buttonMarkup}
      </Card>

      <Card
        avatar={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.firstName()}`}
        title={faker.name.jobTitle()}
      >
        {buttonMarkup}
      </Card>

      <Card
        avatar={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.firstName()}`}
        title={faker.name.jobTitle()}
      >
        {buttonMarkup}
      </Card>

    </div>
  );
}

export default App;


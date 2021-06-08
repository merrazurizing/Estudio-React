import React from 'react'
import './App.css';

export const Card = (props) => {
    console.log(props)
    return (    
            <div className="card">
                <img src={props.avatar} alt="Avatar" style={{width: '100%'}}></img>
                <div className="container">
                <h4><b>{props.name}</b></h4> 
                <p>{props.title}</p>
                <input type="text" onChange={props.onChangeName} value={props.name}></input>
                <p><button className="button button-red" onClick={props.onDelete}>Eliminar</button></p>
                <div>{props.children}</div>
                </div>
            </div>
    )
}

export default Card;
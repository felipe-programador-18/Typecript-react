import React from 'react';
import { Firstcomponent } from './Component/Firstcomponent';
import { AnotherComponent } from './Component/anothercomponent';
import './App.css';

function App() {
let a:String = 'felipe'
const working :Boolean = true

//2 create function
const Greetings = (a:String): String => {
   return `name is ${a}`
}





  return (
    <div className="App">
     <h1>Typescript with react!!!
     Nome: {a} 
    </h1>
      
     <p>{Greetings(a)}</p> 

    <AnotherComponent/>
    {working && <p> trabalhando</p> }
    <Firstcomponent/>
    
    </div>
  );
}

export default App;

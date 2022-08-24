import React from 'react';
import { Firstcomponent } from './Component/Firstcomponent';
import { AnotherComponent } from './Component/anothercomponent';
import './App.css';


import { TraninDesctruc }  from './Component/destructing'



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
    <Firstcomponent name='felipe programmer 18'  />

    <TraninDesctruc  title='adding practice quite about typescript and react!!' age={2334234}  tags={['receive here more issues to need practice more and more always', 'on the other hand',
  'programmer Felipe Progammer Felipe']} />
    
    </div>
  );
}

export default App;

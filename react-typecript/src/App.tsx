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

const phase:string ='I am fullstack developer react node typescript and who know in the future i study about ruby on ralls  '

const Presentation = (phase:string): string =>{
  return `i need training more about typescript with graphql ${phase}`
}

let v: number =323
let t:number =323

const Increased = (t:number, v:number):number => {
  return t*v
}


  return (
    <div className="App">
     <h1>Typescript with react!!!
     Nome: {a} 
    </h1>
      
     <p>My sum is !! {Increased(t,v)} </p>
     <p>{Greetings(a)}</p> 
      
     <h1> {Presentation(phase)} </h1>


    <AnotherComponent/>
    {working && <p> trabalhando</p> }
    <Firstcomponent name='felipe programmer 18'  />

    <TraninDesctruc commets='today I want traning little bit about graphql and typescript'  title='adding practice quite about typescript and react!!' age={2334234}  tags={['receive here more issues to need practice more and more always', 'on the other hand',
  'programmer Felipe Progammer Felipe']} />
    
    </div>
  );
}

export default App;

import React, {createContext} from 'react';
import { Firstcomponent } from './Component/Firstcomponent';
import { AnotherComponent } from './Component/anothercomponent';
import './App.css';

import { DoMore } from './Component/traningmore';
import { TraninDesctruc, Category }  from './Component/destructing'

import StateReact from './Component/state.type';
import AnotherState from './Component/interesting.state';
import CreateMore from './Component/addingmoreprops';
import AnotherApp from './Component/Statemore';
import PracticeMore from './Component/context';
import TraningMore from './Component/practicemore';
import AnotherContext from './Component/AnotherContext';
import ThrirdCode from './Component/ThirdComponent';
import { PracticeLittle } from './Component/practice';
import { Cadastre } from './Component/morePractice';
import { TreatedCode } from './Component/otherCode';




//creating another code about type
type AddingTest =  string | null


interface AddingContext{
 age: string
 project: string
 traning: number
}

interface AnoterContext{
  agetwo: number
  salary: number
  cellphone: number
}
interface Employees{
  work: string
  email: string 
  location: number

}

export const manageContext = createContext<AddingContext|null>(null)
export const AddingOtherContext =createContext<AnoterContext| null>(null)

export const LastDataHere =createContext<Employees|null>(null)
 

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

// type with typescript

//type
const receive: AddingTest = 'adding testing here';
let receiveanother:AddingTest = null;
receiveanother ='adding another text here practice my freinds!!'



const objectContext:AddingContext ={
  age :"mrtins",
  project:'adding mroe',
  traning: 34
}


const anotherDates:AnoterContext ={
  agetwo:12,
  cellphone:32332432,
  salary:23231231
} 


const objectReceive:Employees={
 work:'programmer',
 email:'machadofelipe2016@outlook.com',
 location:232323
} 


  return (
    <manageContext.Provider  value={objectContext} > 
     
    <div> 
    <AddingOtherContext.Provider value={anotherDates} >
    
    <LastDataHere.Provider value={objectReceive} >
    <ThrirdCode/>
                    
    <div className="App">
    <PracticeMore/>
    <AnotherContext/>

    {receive && <p>Adding more testing here {receiveanother}</p>}

     <CreateMore age={232323}  name='Programmer Felipe Floripa' children={[12]}  />

     <AnotherApp/>
     <h1>Typescript with react!!!
     Nome: {a} 
    </h1>
    <AnotherState/>
     <p>My sum is !! {Increased(t,v)} </p>
     <p>{Greetings(a)}</p> 
      
     <h1> {Presentation(phase)} </h1>


    <AnotherComponent/>
    {working && <p> trabalhando</p> }
    <Firstcomponent name='felipe programmer 18'  />

    <TraninDesctruc commets='today I want traning little bit about graphql and typescript'  title='adding practice quite about typescript and react!!' age={2334234}  tags={['receive here more issues to need practice more and more always', 'on the other hand',
    'programmer Felipe Progammer Felipe']} 
    category={Category.JS}


  />

    <DoMore name='Felipe Programmer' age={23} salary={20000} 
    gender='M' email='programmerfloripa@outlook.com'
    />
   
  
   <StateReact/>

    
    <TraningMore age={35} gender='m' name='Programmer Felipe'  />
    </div>
    
    </LastDataHere.Provider>
    </AddingOtherContext.Provider>
    </div> 
    <PracticeLittle
     name='Felipe Martins'
     email='machadofelipe@2016@outlook.com'
     age={27} />

     <Cadastre 
       name={'Felipe18'} 
       age={27} 
       gender='M' 
       email='machadofelipe2016@outlook.com' />

       <TreatedCode/>
    </manageContext.Provider>
  );
}

export default App;

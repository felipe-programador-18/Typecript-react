import React, {useState, ChangeEvent, useContext, createContext} from 'react'

export interface AnotherPropsHere{
    name:string
    age: number
    arrys:number[]
    sobrenome:Nickname
}

export interface Coworkers{
   city:string 
   email:string
   salary:number
}
// to create my context below here

export const ManageMycontext = createContext<Coworkers|null>(null)



let nome:string="Programmer"
let idade:number=28
let testA:number=1290
let testB:number =323123

const FelipeOne = (nome:string,idade:number) =>{
    return nome + " I am younger yet " + idade 
}

const ShowMyResults = (testA:number, testB:number) => {
 return `${testA} + ${testB}`

}


// practice to remember about enum  
export enum Nickname {
  nameOne= "Programmer Felipee",
  nameTwo ="I need to get start to learning more about gramer",
  age=343
}

const getUser: Coworkers={
 city:"porto alegre",
 email:"machadofelipe2016@outlook.com",
 salary:15400

}




//Typescript a bit!!! 
export const PracticeMoreAndMore = ({name, age, arrys, sobrenome }:AnotherPropsHere) => {
    const [machine, setMachine] = useState<string|null>(null)
    const [writing, setWriting] = useState<string|null>(null)
    
    const HandleSubmit = (e:ChangeEvent<HTMLInputElement> )=>{
        e.preventDefault()
        setMachine(e.target.value)
      
    }

    const OtherHandleSubmit= (e:ChangeEvent <HTMLInputElement>) => {
        e.preventDefault()
        setWriting(e.target.value)
    }
    
    return(<> 

    <ManageMycontext.Provider value={getUser}  > 
     <h1>TEST TEST TEST TEST TEST TEST</h1>

    <h1>to practice a bit here my broo</h1>
    
    <input type="text" onChange={HandleSubmit} />
     type something here a bit  {machine}
    
    <input type="text" onChange={OtherHandleSubmit}  />
    {writing}

    Here I have my ENUM HERE NOW !!! {sobrenome}
    
    <h2>{name} and my {age}</h2>
    <h1>testing my arrys{arrys.map((arr) => arr*2) }</h1>
     
     <p>Testing of my code here {FelipeOne(nome, idade)} </p>
     <p>my results is {ShowMyResults(testA, testB)} </p>
     </ManageMycontext.Provider>
    </>)
}
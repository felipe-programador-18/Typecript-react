import React from 'react'

export interface AnotherPropsHere{
    name:string
    age: number
    arrys:number[]
}

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


//Typescript a bit!!! 
export const PracticeMoreAndMore = ({name, age, arrys }:AnotherPropsHere) => {
    
    return(<>      
    <h1>to practice a bit here my broo</h1>
    <h2>{name} and my {age}</h2>
    <h1>testing my arrys{arrys.map((arr) => arr*2) }</h1>
     
     <p>Testing of my code here {FelipeOne(nome, idade)} </p>
     <p>my results is {ShowMyResults(testA, testB)} </p>

    </>)
}
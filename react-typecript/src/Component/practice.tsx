import * as React from 'react'

export interface Dates{
  name:string,
  email:string,
  age:number
}

export const  PracticeLittle = ({name,email,age}:Dates) => {

    return (<>
     <h1>Hello my name is {name} I {age} my email is: {email} </h1>
    </>)
}
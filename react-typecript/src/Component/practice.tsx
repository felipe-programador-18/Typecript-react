import  React,{useState, ChangeEvent} from 'react'

export interface Dates{
  name:string,
  email:string,
  age:number
}

export const  PracticeLittle = ({name,email,age}:Dates) => {
     
    const [carrer, setCarrer] = useState<string|null>(null)
     
    const Handlechange = (e:ChangeEvent<HTMLInputElement>) => {
        setCarrer(e.target.value)
    }
    return (<>
     <h1>Hello my name is {name} I {age} my email is: {email} </h1>
      
      {carrer}
     <input 
     type="text" 
     placeholder='adding your name' 
     onChange={Handlechange}
     />
    </>)
}
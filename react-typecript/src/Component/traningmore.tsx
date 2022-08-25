import * as React from 'react';

export interface IAppProps {
   name:string
   age:number
   salary:number 
   gender?:"F"|"M"
   email:string

}

export function DoMore ( {name,age,salary,email,gender}: IAppProps) {
  return (
    <div>
    <p>My name is {name}, my age is{age}</p>
    <p>Every month i received almost{salary} and i am {gender} my adress 
    email is {email}  </p>

      
    </div>
  );
}

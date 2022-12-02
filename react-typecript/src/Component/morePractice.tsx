import  React from 'react';

export interface MyDates{
name: string
age: number,
gender?:"F"|"M"
email: string
}

export function Cadastre ({name, age, gender, email}: MyDates) {
  return (
    <div>
      <h2>Programmer{name}</h2>
      <h5>my gender is{gender} and my age is {age}</h5>
      <h4>If you want to create a new webpage you can acess here
        {email}
      </h4>

    </div>
  );
}

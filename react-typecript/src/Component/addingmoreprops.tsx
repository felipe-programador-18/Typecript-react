import React from 'react';

export interface IAppProps {
  name : string
  age: number
  children: [number]
}

const CreateMore  = ({name, age, children}: IAppProps) =>  {
  return (
    <div>
        <p>Practice little bit about {name} </p>
        <p> this is word ??{age}</p>
        <span>children {children} </span>
      
    </div>
  );
}

export default CreateMore
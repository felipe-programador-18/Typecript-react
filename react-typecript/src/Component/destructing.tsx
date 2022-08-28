import * as React from 'react';

export interface AnotherInter{
    title: String
    age: Number
    tags : String[]
    commets: String
    
    category: Category
    // eight enum
}

export enum Category {
  JS = 'adding enum here interest functionality',
  TS ='Typescript is very good',
  P ="python"
}

export function TraninDesctruc ({title, age,tags, commets, category}:AnotherInter) {
  return (<> 
    Now i need destructing my props {`This my title ${title} and my ${age}`}
    <div> 
      {tags.map((tag) => (<p> {tag} </p>))}
      {commets}

      <h1>Categoria :  {category} </h1>
    </div>

 
  </> );
}

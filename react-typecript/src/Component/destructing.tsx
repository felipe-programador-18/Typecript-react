import * as React from 'react';

export interface AnotherInter{
    title: String
    age: Number
    tags : String[]
}

export function TraninDesctruc ({title, age,tags}:AnotherInter) {
  return (<> 
    Now i need destructing my props {`This my title ${title} and my ${age}`}
    <div>
        
        {tags.map((tag) => (<p> {tag} </p>))}

    </div>

 
  </> );
}

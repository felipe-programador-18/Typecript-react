//creating my first component typescript
// this new  interesting ways


import * as React from 'react';

export interface IAppProps {
  name:String

}
export function Firstcomponent (props:IAppProps) {
  return (
    <div>
      <h1>My first component here with typescript {props.name}</h1>
  
    </div>
  );
}


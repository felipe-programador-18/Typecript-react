import React, {useState, ChangeEvent} from 'react';

const StateReact = () => {
  
  const[name, setName] = useState<string|null>(null)

  const HandlingChange = (e:ChangeEvent<HTMLInputElement> ) => {
   e.preventDefault()
   setName(e.target.value)
  }

  return (
  <div>
     <p> the name of text is !! {name}</p>
    
      <input type="text"  onChange={HandlingChange} />
   

  </div>
  );
}

export default StateReact


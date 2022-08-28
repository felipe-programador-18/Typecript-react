import React,{useState, ChangeEvent } from 'react';



const  AnotherState = () => {
  const [name, setName] = useState<string|null>(null)
  const HandValue = (e:ChangeEvent<HTMLInputElement>) => { 
    setName(e.target.value)
  }
  
    return (
    <div>
     <h4>Adding new traning here to practice and learn how its works typescript and react together</h4>
     
     {name} 
    <input type='text' onChange={HandValue} />

    </div>
  );
}

export default AnotherState
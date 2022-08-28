import  React, {useState, ChangeEvent } from 'react';



const  AnotherApp =  () => {
  const [name , setName] = useState<string|null>(null)

  const HandAnother = (e: ChangeEvent <HTMLInputElement> ) => {
    e.preventDefault()
    setName(e.target.value)
  } 
  
    return (
    <div>   
     <input type="text" placeholder='Adding another value inside here' onChange={ HandAnother}  />
        Adding new phase!! {name}
    </div>
  );
}


export default AnotherApp
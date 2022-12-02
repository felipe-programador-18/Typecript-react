import React,{useState, ChangeEvent} from 'react';


export const TreatedCode = ()  =>{
    const [test, setTest] = useState<string|null>(null)
     
    const HandleForm = (e: ChangeEvent <HTMLInputElement> ) => {
     e.preventDefault()
     setTest(e.target.value)
    }
 
    return (
    <div>

        <input 
          type="text" 
          placeholder='testing my input!!' 
          onChange={HandleForm} 
        />
        
        Testing More  {test}
    </div>
  );
}

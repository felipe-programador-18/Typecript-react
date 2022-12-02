import React,{useState, ChangeEvent} from 'react';


export const TreatedCode = ()  =>{
    const [ test, setTest] = useState<string|null>(null)
     
    const HandleForm = (e: ChangeEvent <HTMLInputElement> ) => {
     e.preventDefault()
     setTest(test)
    }
 
    return (
    <div>

        <input type="text" onChange={() => HandleForm} />
         {test}
    </div>
  );
}

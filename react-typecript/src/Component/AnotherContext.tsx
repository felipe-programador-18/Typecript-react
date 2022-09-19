import React,{useContext} from 'react';
import { AddingOtherContext } from '../App';

const AnotherContext= () => {
    const Anotherdetails = useContext(AddingOtherContext)
    console.log(Anotherdetails)
    return (
    <div>
        {Anotherdetails &&  
        <div>
            {Anotherdetails.agetwo}
            {Anotherdetails.cellphone}
            {Anotherdetails.salary}
        </div>
        }
      
    </div>
  );
}


export default AnotherContext
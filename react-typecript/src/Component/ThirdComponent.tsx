import  React, {useContext} from 'react';
import { LastDataHere } from '../App';


const ThrirdCode = () => {
   const receiveDates = useContext(LastDataHere)
   console.log('Here have a much dates', receiveDates) 
   return (
    <div>
        {receiveDates && <p>
            {receiveDates.work}
            {receiveDates.email}
            {receiveDates.location}
        </p> }
      
    </div>
  );
}

export default ThrirdCode

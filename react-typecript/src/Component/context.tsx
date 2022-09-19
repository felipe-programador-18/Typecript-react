import  React,{useContext} from 'react';

import { manageContext } from '../App';

const PracticeMore  = () => {
  const details = useContext(manageContext)
  return (
   <>
        {details && <p>
          {details.age}
          {details.traning}
          {details.project}
          </p>}
   </>
  );
}

export default PracticeMore




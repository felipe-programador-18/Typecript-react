

export interface IAppProps {
  name : string,
  age: number,
  gender?:"f"|"m"
}

const TraningMore  =  ({name, age, gender}: IAppProps) => {
  return (
    <div>
    <h3>Hi there!!, today i am here training more about typescript!!</h3>
      <p>my name is {name}</p>
      <p>now i have {age}</p>
      <p>My gender is {gender} </p>
    </div>
  );
}

export default TraningMore 

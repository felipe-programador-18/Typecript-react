import React from 'react'


export interface Code {
 name: string
 nickname: string
 age: number
 children: React.ReactNode
}

export const CreateNewCode = ({name, nickname, age,children}:Code) => {

  return (<>
  <h1>My name is, {name}, {nickname}, my age is {age} and  </h1>
  
  </>)

}

export const FatherRc: React.FC<Code> = ({name, age, nickname}) => {

    return (<>
         {name} ,
         {age}, {nickname}
        
        
        </>)
}
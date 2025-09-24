import React, { createContext, useState } from 'react'
import Comp2 from './Comp2';

export const UserApp = createContext();

function Comp1() {
    const [username,setUserName] = useState ("Guest");
  return (
    <div className='box1'>
      <UserApp.Provider value={username}>
        <h2>Parent</h2>
        <p>Welcome{username}</p>
        <input type="text" placeholder= "Enter your username"
        onChange={(e)=>{
            setUserName(e.target.value)
        }}/>
        <Comp2 />
        </UserApp.Provider>
    </div>
  )
}

export default Comp1
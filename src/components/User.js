import React from 'react'

const user = ({user,selectid}) => {
    const onChange =() => {
        console.log( user.id)
        const A=user.id;
        selectid(A);
      }
    return (
        <>
          <li> <input 
          type="checkbox" 
          className="user"  
          onChange={onChange}        
          />{user.pseudo}</li>
        </>
    )
}

export default user

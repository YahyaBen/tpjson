import React from 'react'

const user = ({user,selectid}) => {
    const onChange =() => {
        const A=user.id;
        selectid(A);
        console.log(A + " User ID Active")
        
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

import React from 'react'

const user = ({user,onChange}) => {
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

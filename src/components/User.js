import React from 'react'

const user = ({user}) => {
    return (
        <>
          <li> <input type="checkbox" />{user.pseudo}</li>
        </>
    )
}

export default user

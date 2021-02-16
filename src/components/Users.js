import React from 'react'
import User from './User.js'

const Users = ({users ,selectid}) => {
    return (
        <ol>
            {users.map((user) => 
            <User user={user} key={user.id}  selectid={selectid} 
            />)}
        </ol>
    )
}

export default Users

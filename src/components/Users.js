import React from 'react'
import User from './User.js'

const Users = ({users}) => {
    return (
        <ol>
            {users.map((user) => (
            <User user={user}
            />))}
        </ol>
    )
}

export default Users

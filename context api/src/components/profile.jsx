import React, { useContext } from 'react'
import usercontext from '../context/User context'

function Profile() {
    const {user} = useContext(usercontext)

    if (!user) return <div>Please Login</div>

    return <div>Welcome {user.usernam}</div>
    
}

export default Profile

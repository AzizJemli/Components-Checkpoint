import React from 'react'
import profilepic from '../../profilepic.jpg'
const ProfilePhoto = () => {
    return (
        <div>
        <img src= {profilepic} alt="ProfilePhoto"   style={{width: 350, height: 350, borderRadius: 100/ 2}}  /> 

        </div>
    )
}

export default ProfilePhoto;    




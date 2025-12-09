import React from 'react'
import { useSelector } from 'react-redux';
const Profile = () => {
  const user = useSelector((state) => state.authReducer.user);
  console.log(user);
  return (
    <div>
      <h1>Hello {user.email}</h1>
      <p>Welcome to your profile page!</p>
    </div>
  )
}

export default Profile

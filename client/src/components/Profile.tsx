import React from 'react'
import { useStore } from '../hooks/useStore'
import { googleLogout } from '@react-oauth/google'

const Profile = () => {
  const {authData, setAuthData} = useStore()
  
  return (
    <div>
      {authData && authData?.name && (<>
      <h1>Profile</h1>
      <h3>{authData.name}</h3>
      <h3>{authData.email}</h3>
      <img src={authData.image} />
      
      <button onClick={() => {
        googleLogout()
        localStorage.setItem('authData', '{}')
        setAuthData({})
      }}>Logout</button>
      
      </>


      )}
    </div>
  )
}

export default Profile
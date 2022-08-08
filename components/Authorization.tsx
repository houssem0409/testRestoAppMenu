import React, { useContext } from 'react'
import AccessDenied from './AccessDenied'
import { UserContext } from './UserContext'
const Authorization = (WrappedComponent) => (props) => {
  const { user, setTokens, tokens, token, mystartupManage } =
    useContext(UserContext)
  return (
    <div>
      {!user ? (
        <div>
          <AccessDenied />
        </div>
      ) : (
        <div>
          <WrappedComponent />
        </div>
      )}
    </div>
  )
}

export default Authorization

import { useRouter } from 'next/router'
import * as React from 'react'
import { UserContextType, User } from '../@types/user'
import { getUserInfo } from '../services/auth.service'
const url = 'http://localhost:3000'

export const UserContext = React.createContext<User | null>(null)

const Auth: React.FC<React.ReactNode> = ({ children }: any) => {
  const [user, setUser] = React.useState<User>()
  const [isAuthenticated, setIsAuthenticated] = React.useState()
  const [loading, setLoading] = React.useState(true)
  const route = useRouter()
  const logout = () => {
    setIsAuthenticated(false)
    delete localStorage['jwt']
    setLoading(true)
    setUser()
    route.push('/user/signin')
    setLoading(false)
  }

  React.useEffect(() => {
    const authenticate = async () => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('jwt')
        if (token) {
          await getUserInfo(token).then((res: any) => {
            setUser(res)
            console.log(res)

            return res
          })
        } else {
          logout()
        }
        setLoading(false)
      }
    }
    authenticate()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {!loading ? children : <div>Loading...</div>}{' '}
    </UserContext.Provider>
  )
}

export default Auth

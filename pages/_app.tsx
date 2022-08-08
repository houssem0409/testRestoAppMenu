import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { Provider } from 'react-redux'
import store from '../Redux/store'
import Auth from '../components/UserContext'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Auth>
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </Auth>
    </>
  )
}

export default MyApp

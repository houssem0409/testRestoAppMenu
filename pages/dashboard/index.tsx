import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import Authorization from '../../components/Authorization'
import { UserContext } from '../../components/UserContext'
import { getItems } from '../../Redux/actions/product'
import itemService from '../../services/item.service'
function index() {
  const { user, setTokens, tokens, token, mystartupManage } =
    useContext(UserContext)

  useEffect(() => {
    console.log(user)
  }, [])
  return (
    <div>
      <div className='flex flex-row w-11/12 h-full ml-14 mt-14'>
        <div className=' h-96 w-1/4 bg-slate-400 '>
          <h1 className=' font-light text-2xl text-violet-600 italic m-5'>
            Admin Links{' '}
          </h1>
          <Link href='/dashboard/categories'>
            <h2 className='italic m-5'>Categories Management</h2>
          </Link>
          <Link href='/dashboard/items'>
            <h2 className='italic m-5'>Items Management</h2>
          </Link>
        </div>
        <div className=' h-96 w-3/4 bg-orange-100'>
          <h1 className=' justify-center content-center'></h1>
          {JSON.stringify(user)}
          <div className='flex flex-col'></div>
        </div>
      </div>
    </div>
  )
}
export default Authorization(index)

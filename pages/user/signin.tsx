import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { signinService } from '../../services/auth.service'
import { useRouter } from 'next/router'
import { UserContext } from '../../components/UserContext'
function signin() {
  const { user, setUser } = useContext(UserContext)
  const [loginSuccess, setLoginSuccess] = useState()
  const [error, setError] = useState()
  const router = useRouter()

  const {
    register,
    formState: { errors },
    formState: { isSubmitting },
    formState: { isValid },
    formState: { isSubmitSuccessful },
    handleSubmit,
  } = useForm({
    mode: 'onTouched',
  })
  const onSubmit = (data: any) => {
    console.log(data)
    signinService(data).then((res: any) => {
      if (res.success == false) {
        setError(res.message)
      } else {
        console.log(res)
        localStorage.setItem('jwt', res.token)
        setUser(res.user)
        router.push('/dashboard')

        setLoginSuccess(true)
      }
    })
  }
  useEffect(() => {
    console.log('nheb narja3 ')
    console.log(user)

    user && router.push('/dashboard')
  }, [])

  const logError = () => (
    <div className='btn md:btn-lg w-1/4 m-5 rounded-lg	'>
      <h5 className='  bg-red-400 rounded-lg p-5	'> {error}</h5>
    </div>
  )
  const logSuccess = () => (
    <div className='btn md:btn-lg w-1/4'>
      <h5 className=' bg-green-300'> Logged in succefuly</h5>
    </div>
  )
  return (
    <div className=' justify-self-auto relative inset-1/4 mt-40 '>
      <div>{loginSuccess && logSuccess()}</div>
      <div>{error && logError()}</div>
      <form
        className='grid lg:grid-cols-2  gap-4  border-x-2 border-y-2 border-solid  w-1/2'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=' input-type w-full'>
          <input
            {...register('email', { required: 'This is required.' })}
            type='text'
            name='email'
            className='border w-full px-5 py-3 focus:outline-none rounded-lg'
            placeholder='Email'
          />
          <input
            {...register('password', { required: 'This is required.' })}
            type='password'
            name='password'
            className='border w-full px-5 py-3 focus:outline-none rounded-lg'
            placeholder='Password'
          />

          <button
            type='submit'
            className='flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover: border-green-500 hover:text-green-500 mt-3 '
          >
            Signin <span></span>
          </button>
        </div>
      </form>
    </div>
  )
}
export default signin

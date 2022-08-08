import React, { useState } from 'react'
import { useReducer } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

import { AddCategories, getAllCategories } from '../Redux/actions/category'
import { useDispatch } from 'react-redux'
import addItems from '../services/item.service'

export default function Form() {
  const dispatch = useDispatch()
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
  interface item {
    title: string
    description: string
    price: number
  }
  const onSubmit = (data: any) => {
    console.log(data)
    dispatch(AddCategories(data))
    dispatch(getAllCategories())
  }
  return (
    <form
      className='grid lg:grid-cols-2 w-full gap-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=' input-type'>
        <input
          {...register('name', { required: 'This is required.' })}
          type='text'
          name='name'
          className='border w-full px-5 py-3 focus:outline-none rounded-md'
          placeholder='Food Name'
        />

        <button
          type='submit'
          className='flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover: border-green-500 hover:text-green-500 mt-3 '
        >
          Add <span></span>
        </button>
      </div>
    </form>
  )
}

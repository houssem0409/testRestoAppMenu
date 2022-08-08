import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { AddItems, getItems } from '../Redux/actions/product'
import { useDispatch } from 'react-redux'
import categoryService from '../services/category.service'

export default function Form() {
  const [categories, setCategories] = useState([])
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

    dispatch(AddItems(data))
    dispatch(getItems())
  }
  useEffect(() => {
    categoryService.getCategories().then((catgs: any) => {
      setCategories(catgs)
      return categories
    })
  }, [])
  console.log(categories)

  return (
    <form
      className='grid lg:grid-cols-2 w-full gap-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=' input-type'>
        <input
          {...register('title', {
            required: 'the title is required and should contain 5 chars',
            minLength: 3,
          })}
          type='text'
          name='title'
          className='border w-full px-5 py-3 focus:outline-none rounded-md'
          placeholder='Food Name'
        />
        <ErrorMessage
          errors={errors}
          name='title'
          render={({ message }) => <p>{message}</p>}
        />
        <input
          {...register('description', {
            required: 'the description is required and should contain 10 chars',
            minLength: 10,
          })}
          type='text'
          name='description'
          className='border w-full px-5 py-3 focus:outline-none rounded-md'
          placeholder='Description'
        />
        <ErrorMessage
          errors={errors}
          name='description'
          render={({ message }) => <p>{message}</p>}
        />
        <input
          {...register('price', { required: 'This is required.' })}
          type='number'
          name='price'
          className='border w-full px-5 py-3 focus:outline-none rounded-md'
          placeholder='Price'
        />

        <label
          htmlFor='countries'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
        >
          Choose Category
        </label>

        <select
          id='countries'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          {...register('category ', { required: 'This is required.' })}
        >
          {categories.map((cate: any, e: any) => (
            <option value={cate.id} key={e}>
              {cate.name}
            </option>
          ))}
        </select>
        <ErrorMessage
          errors={errors}
          name='category'
          render={({ message }) => <p>{message}</p>}
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

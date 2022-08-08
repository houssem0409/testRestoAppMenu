import React, { useEffect, useState } from 'react'
import Form from '../../../components/Form'
import Table from '../../../components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { AddItems, getItems } from '../../../Redux/actions/product'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import UpdateForm from '../../../components/UpdateForm'
import Link from 'next/link'
import Authorization from '../../../components/Authorization'

function index() {
  const [itemToEdit, setItemToEdit] = useState()
  const [value, setValue] = useState(false)
  const dispatch = useDispatch()
  interface item {
    title: string
    description: string
    price: number
  }
  const items: any = useSelector((state: any) => state)
  console.log(items.items)
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
  console.log(itemToEdit)
  const changeVisibility = () => {
    if (value == true) {
      setValue(false)
      setItemToEdit(undefined)
    } else {
      setValue(true)
    }
  }
  useEffect(() => {
    dispatch(getItems())
  }, [])

  return (
    <div>
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
          <div className=' h-full w-3/4  bg-orange-100'>
            <main className=' py-5'>
              <h1 className='text-xl md:text-5xl text-center font-bold py-10'>
                items management
              </h1>
              <div className='container mx-auto flex justify-between py-5 border-b'>
                <div className='left flex gap-3'>
                  <button
                    className='flex bg-indigo-500 text-white px-4 border m-5 rounded-md hover:bg-gray-50 hover:border-indigo-500  hover:text-gray-800'
                    onClick={() => {
                      changeVisibility()
                    }}
                  >
                    Add Item <span className='px-1'></span>
                  </button>
                </div>
              </div>
              <div className='container mx-auto py-5 px-2'>
                {itemToEdit !== undefined ? (
                  <UpdateForm props={itemToEdit} />
                ) : (
                  value && <Form />
                )}
              </div>

              <div className='container mx-auto'>
                <Table props={items.items} setItemToEdit={setItemToEdit} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Authorization(index)

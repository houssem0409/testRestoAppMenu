import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Carousel from '../../components/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../Redux/actions/category'
import itemsService from '../../services/item.service'
export default function index() {
  const [itemsByCateg, setItemsByCateg] = useState([])
  const dispatch = useDispatch()
  const categories: any = useSelector((state: any) => state)

  const getItemsBycat = (id: any) => {
    itemsService.getItemsByCategories(id).then((res: any) => {
      setItemsByCateg(res)
    })
  }

  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  console.log(itemsByCateg)

  return (
    <div className=' m-10'>
      <h2 className=' w-full text-3xl text-center text-rose-600'>
        Look at the menu ! and have idea about what we have :D
      </h2>
      <Carousel />
      <div className='flex flex-row w-11/12 h-full ml-14 mt-14'>
        <div className=' h-96 w-1/4 bg-slate-400  rounded-xl'>
          {categories.categories.map((categ: any, e: any) => (
            <button
              onClick={() => {
                getItemsBycat(categ.id)
              }}
              type='button'
              className='text-white flex flex-row ml-5 mt-5 text-2xl bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
            >
              {categ.name}
            </button>
          ))}
        </div>
        <div className=' h-full w-3/4 bg-emerald-300 m-5 rounded-xl'>
          <h1 className=' justify-center content-center'>
            {itemsByCateg.map((itm: any, e: any) => (
              <div className='border-x-2 border-y-2 border-solid  w-11/12 m-5'>
                <hr className=' font-black bg-black'></hr>
                <h1 className=' justify-center content-center  text-3xl'>
                  {' '}
                  {itm.title}
                </h1>
                <p>Description : {itm.description}</p>
                <p>{itm.price} $</p>
              </div>
            ))}
          </h1>

          <div className='flex flex-col'></div>
        </div>
      </div>
    </div>
  )
}

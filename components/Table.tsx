import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteItems, getItems } from '../Redux/actions/product'

export default function Table({ props, setItemToEdit }) {
  const dispatch = useDispatch()

  const Delete = (item: any) => {
    dispatch(DeleteItems(item.id))
    dispatch(getItems())
  }

  return (
    <table className=' w-11/12 table-auto m-5 '>
      <thead>
        <tr className=' bg-gray-800'>
          <th className='px-16 py-auto'>
            <span className='text-gray-200'>Name</span>
          </th>
          <th className='px-16 py-auto'>
            <span className='text-gray-200'>Description</span>
          </th>
          <th className='px-16 py-auto'>
            <span className='text-gray-200'>Price</span>
          </th>
          <th className='px-16 py-auto'>
            <span className='text-gray-200'>Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className=' bg-gray-200'>
        {props.map((item: any, e: any) => (
          <tr key={e} className=' bg-gray-50 text-center'>
            <td className=' px-16 py-2 flex flex-row items-center'>
              <img src='#' alt='' />
              <span className=' text-center ml-2 font-semibold '>
                {item?.title}
              </span>
            </td>
            <td className=' px-16 py-2'>
              <span> {item?.description}</span>
            </td>
            <td className=' px-16 py-2'>
              <span>{item?.price}$</span>
            </td>
            <td className=' px-16 py-2 flex justify-around gap-5'>
              <button
                className='cursor m-1'
                onClick={() => {
                  setItemToEdit(item)
                }}
              >
                Edit
              </button>
              <button
                className='cursor m-1'
                onClick={() => {
                  Delete(item)
                }}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

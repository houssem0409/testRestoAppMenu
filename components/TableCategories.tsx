import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteCategories, getAllCategories } from '../Redux/actions/category'

export default function TableCategories({ props, setCategoryToEdit }) {
  const dispatch = useDispatch()

  const Delete = (category: any) => {
    dispatch(DeleteCategories(category.id))
    dispatch(getAllCategories())
  }

  return (
    <table className=' w-11/12 table-auto m-5 '>
      <thead>
        <tr className=' bg-gray-800'>
          <th className='px-16 py-auto'>
            <span className='text-gray-200'>Name</span>
          </th>

          <th className='px-16 py-auto'>
            <span className='text-gray-200'>Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className=' bg-gray-200'>
        {props?.map(
          (category: any, e: any) =>
            category !== '' && (
              <tr key={e} className=' bg-gray-50 text-center'>
                <td className=' px-16 py-2 flex flex-row items-center'>
                  <img src='#' alt='' />
                  <span className=' text-center ml-2 font-semibold '>
                    {category?.Name || category?.name}
                  </span>
                </td>

                <td className=' px-16 py-auto'>
                  <button
                    className='cursor m-1 justify-between bg-yellow-600 rounded-xl  '
                    onClick={() => {
                      setCategoryToEdit(category)
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className='cursor m-1 justify-between bg-red-400 rounded-xl '
                    onClick={() => {
                      Delete(category)
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            )
        )}
      </tbody>
    </table>
  )
}

import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { type } from 'os'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

export default function Navbar() {
  const { user, setUser, logout } = useContext(UserContext)
  const [show, setShow] = useState(false)
  const [item, setItem] = useState(String)
  const handleShow = () => {
    show ? setShow(false) : setShow(true)
  }

  const router = useRouter()
  useEffect(() => {
    console.log(item)

    const it = localStorage.getItem('jwt')
    setItem(it)
    console.log(user)
  }, [])
  return (
    <div>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8' />
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>

              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>

              <svg
                className='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <img
                className='block lg:hidden h-8 w-auto'
                src='https://www.kindpng.com/picc/m/201-2011748_restaurant-black-icon-download-restaurant-black-and-white.png'
                alt='Workflow'
              />
              <img
                className='hidden lg:block h-8 w-auto'
                src='https://www.kindpng.com/picc/m/201-2011748_restaurant-black-icon-download-restaurant-black-and-white.png'
                alt='Workflow'
              />

              <div className='hidden sm:block sm:ml-6'>
                <div className='flex space-x-4'>
                  <Link href='/dashboard'>
                    <a
                      href='#'
                      className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                      aria-current='page'
                    >
                      Dashboard
                    </a>
                  </Link>

                  <Link href='/menu'>
                    <a
                      href='#'
                      className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                      aria-current='page'
                    >
                      Menu
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <button
                type='button'
                className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              >
                <span className='sr-only'>View notifications</span>
              </button>
              {user ? (
                <div className='ml-3 fixed top-5 right-5'>
                  <div>
                    <button
                      onClick={() => {
                        handleShow()
                      }}
                      type='button'
                      className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                      id='user-menu-button'
                      aria-expanded='false'
                      aria-haspopup='true'
                    >
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </button>
                  </div>

                  <div className={show ? 'block' : 'hidden'}>
                    <div
                      className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='user-menu-button'
                    >
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700'
                        role='menuitem'
                        id='user-menu-item-0'
                      >
                        Your Profile
                      </a>

                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700'
                        role='menuitem'
                        id='user-menu-item-2'
                        onClick={() => logout()}
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='ml-3 fixed top-5 right-5 flex flex-row'>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm  text-white'
                    role='menuitem'
                    id='user-menu-item-2'
                    onClick={() => router.push('/user/signin')}
                  >
                    Signin
                  </a>
                  /
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm  text-white'
                    role='menuitem'
                    id='user-menu-item-2'
                    onClick={() => router.push('/user/signup')}
                  >
                    Signup
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='sm:hidden' id='mobile-menu'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <a
              href='#'
              className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
              aria-current='page'
            >
              Dashboard
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

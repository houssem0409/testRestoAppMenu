import React, { Component, useEffect, useState } from 'react'
import { CarouselData } from './CarouselData'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Swipe from 'react-easy-swipe'

export default function Carousel() {
  const [paused, setPaused] = useState(Boolean)
  const [currentSlide, setCurrentSlide] = useState(Number)

  useEffect(() => {}, [])

  const nextSlide = () => {
    let newSlide: any =
      currentSlide === CarouselData.length - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  const prevSlide = () => {
    let newSlide: any =
      currentSlide === 0 ? CarouselData.length - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  const setcurrentSlide = (index: any) => {
    setCurrentSlide(index)
  }

  return (
    <div className='mt-8  ml-96'>
      <div className=' max-w-3xl h-72 flex overflow-hidden relative'>
        <AiOutlineLeft
          onClick={() => prevSlide()}
          className='absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer'
        />

        <Swipe onSwipeLeft={() => nextSlide()} onSwipeRight={() => prevSlide()}>
          {CarouselData.map((slide: any, index: any) => {
            return (
              <img
                src={slide.image}
                alt='This is a carousel slide'
                key={index}
                className={
                  index === currentSlide
                    ? 'block w-full h-auto object-cover'
                    : 'hidden'
                }
                onMouseEnter={() => {
                  setPaused(true)
                }}
                onMouseLeave={() => {
                  setPaused(true)
                }}
              />
            )
          })}
        </Swipe>

        <div className='absolute w-full flex justify-center bottom-0'>
          {CarouselData.map((element: any, index: any) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? 'h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer'
                    : 'h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer'
                }
                key={index}
                onClick={() => {
                  setcurrentSlide(index)
                }}
              ></div>
            )
          })}
        </div>

        <AiOutlineRight
          onClick={() => nextSlide()}
          className='absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer'
        />
      </div>
    </div>
  )
}

import React from 'react'
import CardElement from './Elements/Home/CardElement'
import TextSection from './Elements/Home/TextSection'


const Home = () => {
  return (
    <>
    <div className='max-w-[99%] mx-auto my-1'>
    <img className='w-full aspect-square md:aspect-auto' src="./MicrosoftTeams-image_13.jfif" alt="" />
    </div>
      <TextSection />
      <CardElement />
    </>
  )
}

export default Home
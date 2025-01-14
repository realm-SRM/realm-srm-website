import React from 'react'
import Mainlogo from '../assets/realm.svg'

const Home = () => {
  return (
    <>
       <div className="flex justify-center items-center min-h-screen bg-[#1E1F36]">
      <div className="relative bottom-[100px]">
        <img
          src={Mainlogo} 
          alt="Background Circle"
          className="h-[451px] w-[460px]"
        />
        <div className="absolute bottom-[10px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-[#FBE7CF] font-poppins text-[168px] font-medium tracking-widest  text-stroke text-stroke-black">
  realm
</span>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Home

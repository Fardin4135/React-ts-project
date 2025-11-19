import React from 'react'
import check from '../assets/icon-check.svg'
const Modal3 = ({setOpen,setShow}) => {


  setShow(false)
  return (

    <div>
      <div className="fixed inset-0 bg-black/60 z-40"></div>
    <div className='px-5 py-10 flex flex-col justify-between bg-white z-100 rounded-lg items-center gap-5 justify-center
    w-[80%] sm:w-[70%] absolute md:w-[35%] top-[72%] sm:top-[70%]  left-1/2 -translate-x-1/2 border z-50
    '>
      <div>
        <img src={check} alt="" />
      </div>
      <h3 className='font-bold text-black text-center pt-4'>Thanks for your support</h3>
      <p className='text-gray-400 text-center text-sm'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>

      <div>
        <button className='py-2 px-5 rounded-full text-white bg-[hsl(176,50%,47%)] text-sm' onClick={()=>setOpen(false)}>Got it!</button>
      </div>
    </div>
    </div>
  )
}

export default Modal3


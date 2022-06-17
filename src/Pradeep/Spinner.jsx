import React from 'react'
import load from "./loading.gif";

const Spinner = () => {
  return (
    <div className='text-center'>
        <img className="my-5" src={load} />
    </div>
  )
}

export default Spinner
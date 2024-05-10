import React from 'react'

function Footer() {
    return (
        <div className='lg:px-36 lg:py-10 p-5 bg-neutral-800 text-white'>
            <h1 className='text-5xl text-center font-bold pb-6'>Footer</h1>
            <div className='flex lg:flex-row flex-col justify-around gap-5 pb-5'>
                <div className='flex flex-col justify-between gap-5'>
                    <h1 className='font-semibold text-lg text-center'>Footer</h1>
                    <h1 className='font-semibold text-lg text-center'>Footer</h1>
                    <h1 className='font-semibold text-lg text-center'>Footer</h1>
                </div>
                <div className='flex flex-col justify-between gap-5'>
                    <h1 className='font-semibold text-lg text-center'>Footer</h1>
                    <h1 className='font-semibold text-lg text-center'>Footer</h1>
                    <h1 className='font-semibold text-lg text-center'>Footer</h1>
                </div>
                <div className='flex flex-col justify-between gap-5'>
                    <h1 className='font-semibold text-lg text-center'>Footer</h1>
                    <h1 className='font-semibold text-lg text-center'>Footer</h1>
                    <h1 className='font-semibold text-lg text-center'>Footer</h1>
                </div>
            </div>
            <p className='text-center font-semibold text-neutral-500'>Developed By: <span className='text-neutral-400 font-bold'>OPM</span></p>
        </div>
    )
}

export default Footer

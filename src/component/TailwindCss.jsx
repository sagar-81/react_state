import React from 'react'

const TailwindCss = () => {
    return (
        <>
            <div className='p-4'>
                <div className='border border-black'>
                    <div className='bg-linear-to-r from-cyan-500 to-blue-500 p-5 d-flex items-center'><h2 className='text-white'>News You Can Trust</h2></div>
                    <div>
                        <b className='m-4'>Stay up to date with Latest!</b>
                        <p>Subscribe to our newsletter for the latest news straight into your inbox</p>
                        <input />
                        <button>Subscribe Now</button>
                        <p>We value your privacy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TailwindCss
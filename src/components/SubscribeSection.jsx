import React from 'react'

const SubscribeSection = () => {
  return (
    <div className='container py-5 '>
      <img
        src='../../src/assets/Ellipse 1 copy 2.png'
        alt=''
        style={{ width: '100px', height: '100px', margintop: '20rem' }}
      />
      <div className='card bg-primary text-white rounded-4'>
        <div className='container my-5'>
          <h5 className='card-title text-white text-center fs-2 py-3'>
            Receive the latest updates on how to protect trails. <br />{' '}
            Subscribe to the monthly edition of Paperless Trails.
          </h5>
          <form className='form-inline mb-5 mt-5 px-5  d-flex align-items-center flex-column'>
            <div className='form-group my-4 px-5 w-100 d-flex flex-column align-items-center gap-4'>
              <input
                type='text'
                className='form-control  w-50 py-3'
                id='name'
                placeholder='Name'
                style={{
                  backgroundColor: 'white',
                  color: 'white'
                }}
              />

              <input
                type='email'
                className='form-control w-50 py-3'
                id='email'
                placeholder='Email'
                style={{
                  backgroundColor: 'white',
                  color: 'white'
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SubscribeSection

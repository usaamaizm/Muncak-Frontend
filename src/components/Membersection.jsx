import React from 'react'

const Membersection = () => {
  return (
    <>
      <div className='container-fluid px-4 py-5 my-5 text-center'>
        <div className='lc-block mb-0'>
          <div>
            <h4 className='fw-bold'>
              With the support of our members, and partners, we've <br />
              improved trail access for millions of people
            </h4>
          </div>

          <div className='container mt-4'>
            <div className='row'>
              <div className='col-md-4 mb-4'>
                <div className='card border-0'>
                  <div className='card-body'>
                    <p className='d-flex flex-column '>
                      <span className='text-black my-1'>We've Mobilized </span>
                      <span className='fw-bold my-2 fs-4 text-primary'>558,768</span>
                      <span> Trail Volunteers</span>
                    </p>
                  </div>
                </div>
                <img
                  src='../../src/assets/Ellipse 1 copy 2.png'
                  alt=''
                  style={{ width: '50px', height: '50px', marginRight: '80rem' }}
                />
              </div>{' '}
              <div className='col-md-4 mb-4'>
                <div className='card border-0'>
                  <div className='card-body'>
                    <p className='d-flex flex-column content '>
                      <span className='text-black  my-1'>We've Mobilized </span>
                      <span className='fw-bolder my-2 fs-4 text-primary'>558,768</span>
                      <span> Trail Volunteers</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='card border-0'>
                  <div className='card-body'>
                    <p className='d-flex flex-column '>
                      <span className='text-black  my-1'>We've Mobilized </span>
                      <span className='fw-bolder my-2 fs-4 text-primary'>558,768</span>
                      <span> Trail Volunteers</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Membersection

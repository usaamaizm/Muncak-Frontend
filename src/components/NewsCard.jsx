import React from 'react'

const NewsCard = () => {
  return (
    <>
    <div className="full-height-container ">
    <div className='container'>
        
        <div className='main-heading py-1'>
          <h4 className='text-center fw-bolder '>
            Protecting Trails: Current News and Issues
          </h4>
        </div>
        <div className='container mt-4 d-flex '>
          <div className='row'>
            <div className='col-md-4 mb-5'>
              <div className='card w-75 shadow-lg '>
                <img
                  src='../../src/assets/hiking1.jpg'
                  className='card-img-top rounded-top'
                  alt='Image'
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    2,802 Miles of Trail to be Improved on International Trails
                    Day
                  </h5>
                  <p className='card-text'>
                    On June 2, 2018, people across the worldwill come together
                    to collectively improve 2,802 miles of trail-the distance{' '}
                  </p>
                </div>

                <a
                  href='#'
                  className='card-link text-primary text-decoration-underline p-3'
                >
                  Read more
                </a>
              </div>
            </div>

            <div className='col-md-4 mb-4'>
              <div className='card w-75 shadow-lg'>
                <img
                  src='../../src/assets/hiking2.jpg'
                  className='card-img-top rounded-top-3'
                  alt='Image'
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    Four Ways to Celebrate International Trails Day on a Bicycle
                  </h5>
                  <p className='card-text'>
                    There are many ways to celebrate the international Trails
                    Day on June 2, it's even possible to participate on a
                    bicycle.
                  </p>
                  <a
                    href='#'
                    className='card-link text-primary text-decoration-underline p-0'
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-4 px-0 ml-2'>
              <div className='card w-75 shadow-lg'>
                <img
                  src='../../src/assets/hiking1.jpg'
                  className='card-img-top rounded-top'
                  alt='Image'
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    Millennials are the Future of our Trails
                  </h5>
                  <p className='card-text'>
                    The smell of fresh dew is a welcome scent, as the crunch of
                    my boots melds with the sound of the birds singing their
                    morning song, it's early and I am wearing layers,{' '}
                  </p>
                </div>

                <a
                  href='#'
                  className='card-link text-primary text-decoration-underline p-3'
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default NewsCard

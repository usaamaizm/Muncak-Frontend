import './herosection.css'
import Header from './Header'
import Footer from './Footer'
import Membersection from './membersection'
import NewsCard from './NewsCard'
import SubscribeSection from './SubscribeSection'


const Homepage = () => {
  return (
    <>
    <Header />
      <div className='container-fluid bg-img-content' >
        <div className='container-fluid px-3 py-5 my-5 mr-3 text-center'>
          <div className='lc-block mb-4'>
            <div>
              <h4 className='fw-bold'>
                We envision a world where everyone has permanent access to a
                hiking trail.
              </h4>
            </div>
          </div>
        </div>

        <div className=' container my-5'>
          <div className='container'>
            <div className='row ' style={{ marginLeft: '19rem' }}>
              <div className='col-md-5 mb-4'>
                <div className='text-center'>
                  <img
                    src='../../src/assets/icon.png'
                    alt='Image 1'
                    className='p-5 shadow-right'
                    style={{ width: '45%', height: '45%' }}
                  />
                </div>
                <div
                  className='card text-center px-3'
                  style={{ boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.2)' }}
                >
                  <div className='card-body'>
                    <h5 className='card-title py-4 text-start'>Advocate</h5>
                    <p className='card-text text-start'>
                      We work with Congress, Federal agencies, and partners on
                      policy issues and legislation to ensure funding for
                      trails, preservation of natural areas, and protection of
                      the hiking experience.
                    </p>
                  </div>
                </div>
                <img
                  src='../../src/assets/Ellipse 1 copy 2.png'
                  alt=''
                  style={{ width: '50px', height: '50px', marginLeft: '20rem' }}
                />
              </div>

              <div className='row'>
                <div className='col-md-5 ' style={{ marginLeft: '25rem' }}>
                  <div className='text-center'>
                    <img
                      src='../../src/assets/1-Vector Smart Object copy 2.png'
                      alt='Image 2'
                      className='p-5 shadow-right'
                      style={{ width: '45%', height: '45%' }}
                    />
                  </div>
                  <div
                    className='card text-center px-3'
                    style={{
                      boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.2)',
                      padding: '20px'
                    }}
                  >
                    <div className='card-body'>
                      <h5 className='card-title p-2 text-start'>Volunteer</h5>
                      <p className='card-text text-start'>
                        Trails don't maintain themselves. Individuals of any age
                        and experience level can become trail stewards. Give
                        back to the trails you love, meet new people, and enjoy
                        the experience!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row' style={{ marginLeft: '20rem' }}>
              <div className='col-md-5 my-5 '>
                <div className='text-center'>
                  <img
                    src='../../src/assets/Vector Smart Object4 copy.png'
                    alt='Image 3'
                    className='p-5 shadow-right'
                    style={{ width: '45%', height: '45%' }}
                  />
                </div>
                <div
                  className='card text-center py-1'
                  style={{ boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.2)' }}
                >
                  <div className='card-body'>
                    <h5 className='card-title py-4 p-2 text-start'>Explore</h5>
                    <p className='card-text text-start'>
                      Feel confident when you set out on your next trail
                      adventure. Check out our free hiking resources like tips
                      for hiking with families, gear checklists, finding the
                      best trail for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Membersection />
      <NewsCard />
      <SubscribeSection />
      <Footer />
    </>
  )
}

export default Homepage

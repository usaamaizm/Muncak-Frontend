
import { Link } from 'react-router-dom'
import './herosection.css'
const Header = () => {

  return (
    <>

      <div  className="bg-img">

        <nav  className="navbar navbar-expand-lg  mx-4">
          <div  className="container-fluid header-nav ">
            <a  className="navbar-brand font-weight-bolder" href="#">Muncak</a>
            <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span  className="navbar-toggler-icon"></span>
            </button>
            <div  className="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
              <ul  className="navbar-nav  ">
                <li  className="nav-item mx-3 ">
                  <a  className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li  className="nav-item mx-3">
                  <Link  className="nav-link" href="#">Go Hiking</Link>
                </li>
                <li  className="nav-item mx-3">
                  <Link className='text-decoration-none' to='/about'>About</Link>
                </li>
                <button type="button"  className="btn btn-light mx-3 bg-white rounded-3 px-5"> <Link to="/login">Login</Link></button>
              </ul>

            </div>


          </div>

        </nav>
        <div  className="container py-5 mb-4">
      <div  className="p-5 mb-4 lc-block background-container w-50" >
        <div  className="lc-block">
          <div>
          
            <h2  className="fw-bolder w-50 my-4 ">Let's get the top of Mountain</h2>
          </div>
        </div>
        <div  className="lc-block col-md-8">
          <div>
            <p  className="lead ">Embark on an extraordinary journey, where every step leads to an unforgettable adventure. </p>
          </div>
        </div>
        <div>
          <a  className=" my-3 btn btn-primary rounded-pill px-4 py-2 shadow-lg rounded mb-4 p-3" href="#" role="button">Get Started</a>
        </div>
      </div>
    </div>
    
      </div>
    </>
  )
}

export default Header
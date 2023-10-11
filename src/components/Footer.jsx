import './footer.css'
const Footer = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    lineHeight: '2px',
    transition: 'color 0.2s'
  }

  const linkHoverStyle = {
    color: 'lightgray'
  }

  return (
    <footer className='bg-black text-white  '>
      <div className='container py-5 px-5 d-flex align-items-center justify-content-center '>
        <div className='row'>
          <div className='col-md-3 heading'>
            <h6 className='py-3'>CONTACT US</h6>
            <ul className='list-unstyled '>
              <li className='my-3'>
                Muncak biking society Our 8605 Second Ave Silver{' '}
              </li>
              <li>Email: info@muncak.org</li>
              <li>Phone: 1-301-565-6704 (Main)</li>
            </ul>
          </div>
          <div className='col-md-2'>
            <h6 className='py-3'>ABOUT US</h6>
            <ul className='list-unstyled'>
              <li>
                <a href='#' style={linkStyle}>
                  Our Mission
                </a>
              </li>
              <li>
                <a href='#' style={linkStyle}>
                  Our Team
                </a>
              </li>
              <li>
                <a href='#' style={linkStyle}>
                  Corporate Sponsors
                </a>
              </li>
              <li>
                <a href='#' style={linkStyle}>
                  Financials
                </a>
              </li>
              <li>
                <a href='#' style={linkStyle}>
                  Media Center
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-2'>
            <h6 className='py-3'>OUR PROGRAMS</h6>
            <ul className='list-unstyled'>
              <li>
                <a href='#' style={linkStyle}>
                  Hike the Hill
                </a>
              </li>
              <li>
                <a href='#' style={linkStyle}>
                  Alternative
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-2'>
            <h6 className='py-3'>SUPPORT TRAILS</h6>
            <ul className='list-unstyled'>
              <li>
                <a href='#' style={linkStyle}>
                  Donate
                </a>
              </li>
              <li>
                <a href='#' style={linkStyle}>
                  Membership
                </a>
              </li>
              <li>
                <a href='#' style={linkStyle}>
                  Gift Membership
                </a>
              </li>
              <li>
                <a href='#' style={linkStyle}>
                  Hiker Store
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h6 className='py-3'>HIKING RESOURCES</h6>
            <ul className='list-unstyled'>
              <li>
                <a href='#' style={linkStyle}>
                  Hikes New Year
                </a>
              </li>
              <li>
                <a href='#' style={linkStyle}>
                  Hiking 101
                </a>
              </li>
              <li>
                <a href='#' style={linkStyle}>
                  Muncak Blog
                </a>
              </li>
              <li>
                <a href='#' style={linkStyle}>
                  Hiking Organization
                </a>
              </li>
            </ul>
          </div>
        </div>
      
      </div>
      <div className="container">

      <div className='row px-5 mt-4 d-flex'>
        <div className='col d-flex  flex-start icons-left'>
          <a
            href='https://www.facebook.com'
            className='text-whit px-2'
            style={linkStyle}
            onMouseEnter={() => (linkStyle.color = 'lightgray')}
            onMouseLeave={() => (linkStyle.color = 'white')}
          >
            <i className='fab fa-facebook fa-lg '></i>
          </a>
          <a
            href='https://www.instagram.com'
            className='text-white ml-3 px-2'
            style={linkStyle}
            onMouseEnter={() => (linkStyle.color = 'lightgray')}
            onMouseLeave={() => (linkStyle.color = 'white')}
          >
            <i className='fab fa-instagram fa-lg'></i>
          </a>
          <a
            href='https://www.twitter.com'
            className='text-white ml-3 px-2'
            style={linkStyle}
            onMouseEnter={() => (linkStyle.color = 'lightgray')}
            onMouseLeave={() => (linkStyle.color = 'white')}
          >
            <i className='fab fa-twitter fa-lg'></i>
          </a>
        </div>
      </div>
      </div>
      
    </footer>
  )
}

export default Footer

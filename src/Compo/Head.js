
import React from 'react'
import '../Compo/css/bootstrap.min.css'
export default function Head() {
    return (
        <div>
            <div className="col-md-12 text-center" align="center">
          <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
          </a>

          <ul className="nav col-2 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                Home
              </a>
            </li>
            <li>
              <a href="/Timmer" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                Timmer
              </a>
            </li>
            <li>
              <a href="/DB" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                About
              </a>
            </li>
            
            { /*<li>
              <a href="/px" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                Waste Text
              </a>
            </li>*/ }
            
          </ul>
        </div>
        </div>
    )
}

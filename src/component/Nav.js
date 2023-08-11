import React from 'react'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'

function Nav({Toggle}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-light mt-1 m-1" >
  
          <i className="navbar-brand bi bi-justify-left " onClick={Toggle}></i>
         <button className="navbar-toggler d-lg-none fs-4" type="button" data-bs-toggle="collapse" 
           data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
           aria-expanded="false" aria-label="Toggle navigation"> <i className='bi bi-justify'></i>
          </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
          data-bs-toggle="dropdown" aria-expanded="false">
            OneShop
          </a>
          <div className='dropdown-menu min-w-0' style={{minWidth:'25px'}} aria-labelledby='navbarDropdown'>
          
            <a className="dropdown-item " href="#">Profile</a>
            <a className="dropdown-item "  href="#">Settings</a>
             <a className="dropdown-divider fs-5">Logout </a>
          </div>
    </li>
    </ul>

      
      </div>
      </nav>
  )
}
export default Nav
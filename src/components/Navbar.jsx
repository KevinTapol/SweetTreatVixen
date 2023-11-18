import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="fixed-top opacity-hover-off" id="myNavbar">
  <div class="container-fluid d-flex justify-content-center">
      <ul class="navbar-nav flex-row">
        <li class="nav-item">
          <a class="nav-link fs-2" href="#" >HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-2" href="#menu" >MENU</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-2" href="#about" >ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-2" href="#contact" >CONTACT</a>
        </li>
      </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar
import React from 'react'

const Hero = () => {
  return (
    <div>
        <header class="bg-img d-flex flex-column justify-content-between" id="home">
            <div></div>
            <div class="d-flex flex-column text-center">
              <span class="display-1">REALLY GOOD PIZZA</span>
              <p><a href="#menu" class="btn btn-lg btn-dark hover-btn fs-2">Let me see the menu</a></p>
            </div>
            <div class="d-flex justify-content-start">
              <span class="bg-dark text-white p-3 h2">Open from 10am to 11pm - Call 555-555-5555</span>
            </div>
        </header>
    </div>
  )
}

export default Hero
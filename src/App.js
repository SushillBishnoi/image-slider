import React, { useState } from 'react'

// array of images 
const images = [
  'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2&w=500',
  'https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load&w=500',
  'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load&w=500',
  'https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load&w=500',
  'https://images.pexels.com/photos/4709291/pexels-photo-4709291.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load&w=500'
]

// default App Component
function App() {

  // getting the state with useState hook 
  const [current, setCurrent] = useState(0)

  // next slide function 
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  // previous slide function
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }
  


  return (
    <div className="container my-5">
      <div className="row text-center">
        <div className="col-6">
          <div id="carouselExample" className="carousel slide">
            {
              images.map((value, index) =>
                current === index && (
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={value} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                )
              )
            }
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={prevSlide}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={nextSlide}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
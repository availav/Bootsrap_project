// import React from 'react'
import "./Home.css"
import Navbar from "../../Component/Navbar/Navbar"
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
// const carousel = new bootstrap.Carousel('#myCarousel')
import Carousel from 'react-bootstrap/Carousel'
import img from "../../assets/home.jpg"


function Home() {
  return (
    <section className="home">
      <Navbar/>
      
     
        <Carousel data-bs-theme="dark" id="slider" >
        
          <Carousel.Item className="c-item"   > 
            <img
              className=" c-img d-block w-100 "
              src={img}
              alt="First slide"
            />
            <Carousel.Caption className="c-caption" > 
              <h5>First slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nihil obcaecati, dicta porro iure blanditiis corrupti corporis molestiae. Illum, totam earum?</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="c-item"  >
            <img
              className="c-img d-block w-100"
              src={img}
              alt="Second slide"
            />
            <Carousel.Caption className="c-caption" >
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae magnam animi rem quia autem eligendi aspernatur minus, tempore temporibus! Provident.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="c-item"   >
            <img
              className=" c-img d-block w-100"
              src={img}
              alt="Third slide"
            />
            <Carousel.Caption className="c-caption" >
              <h5>Third slide label</h5>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint incidunt qui commodi, quidem iusto repellat soluta. Dicta earum doloremque in?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      
    </section>





  )
}

export default Home
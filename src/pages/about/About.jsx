// import React from 'react'
import img from "../../assets/home.jpg";
import "./about.css"

function About() {
  return (
    <section className="hero">
      <div className="hero-img">
        {/* <h1>About us</h1> */}
        <img className="hero_img_img" src={img} alt="aboutimg" />
      </div>
      <div className="hero-text">
        <h4>cdshaf bdqwdf bckwid nxjswsi njwhdionx kjjdsjol</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          explicabo corrupti officia iure, ut .
        </p>
        <ul>
          <li>
            <p>cbvhjafl jsdbuki bjskdf</p>
          </li>
          <li>sncaj khadi hqifo klajf jhc okkopio dfdg fghhj</li>
          <li>
            <p>cbvhjafl jsdbuki bjskdf</p>
          </li>
          <li>
            <p>cbvhjafl jsdbuki bjskdf</p>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, vel? Reiciendis quisquam qui esse, maiores eveniet recusandae explicabo, nobis, officiis optio error reprehenderit repudiandae repellat in assumenda placeat nesciunt voluptates. Inventore delectus magnam quae, quod beatae eligendi ipsam iste, animi eos molestias vel numquam reiciendis assumenda. Nostrum vero repellat cum.
        </p>
      </div>
    </section>
  );
}

export default About;


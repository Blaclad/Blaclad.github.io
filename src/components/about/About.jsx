import "./about.css"
import React from 'react'
import tolu1 from "../../img/tolu1.png"
import plant from "../../img/plant.jpg"

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card"></div>
            <div className="a-card bg"></div>
            <div className="a-card">
            <img src={tolu1} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="a-award">
                <img src={plant} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">International Designer</h4>
                    <p className="a-award-desc">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
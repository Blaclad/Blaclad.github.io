import React, { useContext, useRef, useState } from 'react';
import "./contact.css";
import phone1 from "../../img/phone1.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6ypx3jb', 'template_vzcqj1w', formRef.current, 'P65KOBT19TlCGbPIS')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });

    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss the project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                    <img src={phone1} alt="" className="c-icon" />
                    +234 903 0432 217
                    </div>
                    <div className="c-info-item">
                    <img src={email} alt="" className="c-icon" />
                    Timuyi01@gmail.com
                    </div>
                    <div className="c-info-item">
                    <img src={address} alt="" className="c-icon" />
                    Ile-Ife, Damico Estate
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                <b>Contrary to popular belief</b> Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
                </p>
                <form method='post' ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333", color:darkMode && "white",}}type="text" placeholder='Name' name='user_name' />
                    <input style={{backgroundColor: darkMode && "#333", color:darkMode && "white",}}type="text" placeholder='Subject' name='user_subject' />
                    <input style={{backgroundColor: darkMode && "#333", color:darkMode && "white",}}type="email" placeholder='Email' name='user_email' />
                    <textarea style={{backgroundColor: darkMode && "#333", color:darkMode && "white"}}rows="5" placeholder='Message' name='message'/>
                    <button>Submit</button>
                    {done && "Thank you...."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
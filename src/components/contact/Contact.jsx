import './Contact.css' 
import phone from '../../img/phone.png'
import email from '../../img/email.png'
import address from '../../img/address.png'
import { useRef,useState } from 'react'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'
import { useContext } from 'react';




const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false);

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e)=> {
        e.preventDefault();
        emailjs.sendForm('service_lhp7gx8', 'template_v0c7ivf', formRef.current, '4-CpEkQLhOXwttwmd')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }

    return(
        <div className="c">
            <div className='c-bg'></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />
                            +45 8192 8406
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon" />
                            richpong@hotmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="" className="c-icon" />
                           Munkebjergvaenget 28
                           Odense 5000 Dk
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className='c-desc'>
                        <b>What's your story?</b> Get in touch. Always freelancing if the right
                        project comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                       <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Name' name='user_name' /> 
                       <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Subject' name='user_subject' />
                       <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Email' name='user_email' />
                       <textarea style={{backgroundColor: darkMode && '#333'}} rows='5' placeholder='Message' name='message' />
                       <button>Submit</button>
                       {done && 'successfully sent'}
                    </form>
                </div>
            </div>
        </div>
    )
}

export  default Contact
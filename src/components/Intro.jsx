import './intro.css'
import me from '../img/me.jpg'

const Intro = () => {
    return (
        <div className='i'>
           <div className='i-left'>
             <div className='i-left-wrapper'>
               <h2 className='i-intro'>Hello, My name  is</h2>
               <h1 className='i-name'>Richard Acheampong</h1>
               <div className='i-title'>
                  <div className='i-title-wrapper'>
                     <div className='i-title-item'>Front-End React App Developer</div>
                  </div> 
               </div>
               <div className='i-desc'>
                  I develop react application for customers of all size,
                  specializing in creating stylish, modern applications.
               </div>
             </div>    
           </div> 
           <div className='i-right'>
               <div className='i-bg'>
                 <img src={me} alt='' className='i-img' /> 
               </div>
           </div>
        </div>
    )
}

export default Intro
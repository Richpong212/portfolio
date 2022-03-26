import './about.css'
import setup from '../../img/setup.jpg'
import git from '../../img/git.svg'
import Youtube from '../../img/Youtube.png'
import insta from '../../img/insta.png'


const About = () => {
    return (
        <div className="a">
          <div className='a-left'>
              <div className='a-card bg'></div>
              <div className='a-card'>
                <img src={setup} alt="" className="a-card" />
              </div>
          </div>
        
          <div className='a-right'>
          <h1 className='a-title'>About Me</h1>
              <p className='a-sub'>
                Hello World! I am Richard Acheampong, a Front-End Developer based in Denmark. I love combining the worlds of
                logic and creative design to make eye-catching, accessiible, and user-friedly websites and applications
              </p>
              <p className='a-sub'>
                Technology leads, society follows. I am excited to make the leap and continue
                refining my skills with the right company.  
              </p>
              <div className='a-follow'>
                  <img src={git} alt="" className='a-img' />
                  <img src={Youtube} alt="" className='a-img' />
                  <img src={insta} alt="" className='a-img' />
              </div>
          </div>
        </div>
    )
}

export default  About ;
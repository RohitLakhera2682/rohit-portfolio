
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Rohit Lakhera,</span> fullstack devloper based in India</h1>
        <p>I'm a full stack devloper from Haryana, India</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            {/* <div className='hero-resume'>My resume</div> */}
            <a href='https://drive.google.com/file/d/16HcVoh3hHzHtPXuq8k7ROIpY8px4PhRQ/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='hero-resume'>My resume</a>
        </div>
    </div>
  )
}

export default Hero
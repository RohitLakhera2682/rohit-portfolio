
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className='about-para'>
                    <p>My passion for fullstack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>Tailwindcss</p><hr style={{width:"70%"}} /></div>
                    <div className='about-skill'><p>React.js</p><hr style={{width:"100%"}} /></div>
                    <div className='about-skill'><p>Node.js</p><hr style={{width:"60%"}} /></div>
                    <div className='about-skill'><p>Next.js</p><hr style={{width:"80%"}} /></div>
                    <div className='about-skill'><p>Express.js</p><hr style={{width:"75%"}} /></div>
                    <div className='about-skill'><p>Prisma</p><hr style={{width:"70%"}} /></div>
                    <div className='about-skill'><p>Docker</p><hr style={{width:"60%"}} /></div>
                    <div className='about-skill'><p>Typescript</p><hr style={{width:"80%"}} /></div>                </div>
            </div>
        </div>
        {/* <div className='about-achievements'>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>Projects completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            
        </div> */}
    </div>
  )
}

export default About
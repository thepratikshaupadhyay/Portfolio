import '../compcss/intro.css'
import profilePic from '../assets/profile.jpeg'

function Intro(){
    return(
    <div>
    <div style={{ width: '50px' }}>   </div>
    <div className="introTextArea">
        <h1 className="introText1">Welcome to My</h1>
        <h1 className="introText2">Cosmos</h1>
    </div>

    <div className="aboutsection" id="about">
        <div className="abouttext">
            <h2 className="myname">Pratiksha <br/> &emsp; &emsp; Upadhyay</h2>
            <p className="about"> A mind that questions, a heart that creates, and a soul that wanders between 
                logic and poetry. I find beauty in how things work, wonder in what they could become, and
                 meaning in the things we have yet to understand. Somewhere between code and cosmos, science 
                 and imagination, I'm trying to build things that matter.</p>
        </div>
        <div className="profilepicarea">
            <img src={profilePic} alt="Profile Picture" className="profilepic"/>
        </div>
    </div>
    </div>
    )
}

export default Intro;
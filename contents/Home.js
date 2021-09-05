import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/pro-pic.jpeg';
import Social from '../components/Social';




class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['என் பெயர் ஸ்ரீலக்ஷ்மி','I am an aspiring Full Stack Developer']} speed={95} eraseDelay={700}/>
            <Social />
            </div>
            
            
            
            )
        }
    }
    
    export default Home;
    
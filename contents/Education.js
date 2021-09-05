import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="BE CSE" where="Chennai Institute Of Technology" from="July 2019" to="Present"/>
            <Widecard title="Level B1" where="Alliance Francaise de Madras" from="June 2019" to="May 2021"/>
            <Widecard title="12th Grade" where="Sir Sivaswami Kalalaya Higher Secondary School" from="June 2017" to="May 2019"/>
            <Widecard title="10th Grade" where="P S Senior Secondary School" from="June 2009" to="May 2017"/>
            </div>
            )
        }
    }
    
export default Education;
    
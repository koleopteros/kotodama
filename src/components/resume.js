import React, {Component} from 'react';
import me from './img/me.jpg'

/* Importing MDL Components */
import { Grid, Cell } from 'react-mdl';

/* Importing resume components */
import Education from './resume/education';
import Experience from './resume/experience';
import Skill from './resume/skill';
import Award from './resume/award';


class Resume extends Component {
    render(){
        return (
            <div className="resume">
                <Grid className="resume-grid">
                    <Cell col={5} className="resume-left-col">
                        <div style={{textAlign:'center'}}>
                            <img src={me} alt="Jerome"/>
                        </div>
                        <h2 style={{paddingTop:'1em'}}> Jerome Ching </h2>
                        <h4 style={{color:'#222'}}>Developer</h4>
                        <hr style={{borderTop:'3px solid lightgrey', width:'50%' }}/>
                        <h2>Career Goals</h2>
                        <p>Solving problems and understanding new perspectives will always be my goal; However, I find that the greatest feeling in life is learning by teaching.  I suppose my ultimate goal is to accrue knowledge through hardwork, and then sharing that knowledge with others to broaden the understanding.</p>
                        <hr style={{borderTop:'3px solid lightgrey', width:'50%'}}/>
                        <h5>Address</h5>
                        <p>570 Huntingwood Drive, M1W 1G8</p>
                        <h5>Phone</h5>
                        <p>647-708-3955</p>
                        <h5>Email</h5>
                        <p>jerome.ching@georgebrown.ca</p>
                        <h5>Web</h5>
                        <p>koleopteros.github.io/kotodama</p>
                        
                        
                    </Cell>

                    <Cell col={7} className="resume-right-col">
                        <h2>Education</h2>
                        <Education
                            startYear={2017}
                            endYear={2019}
                            school="George Brown College"
                            program="Computer Programmer Analyst"
                            schoolDesc="Studied various languages, Application development cycle, Machine learning, Database managment, and Project management"
                            transcript="./resume/gbcTranscript.pdf"
                        />
                        <Education
                            startYear={2012}
                            endYear={2014}
                            school="Centennial College"
                            program="Biomedical Engineering Technology"
                            schoolDesc="Learned various topics from photonics, biomechanics, and telemedicine.  Practiced maintaining Dialysis, Respirator, Defibrillator units, and various other medical devices.  Planned and made layouts for conduits and devices for a computer-integrated AV system."
                        />
                        <hr style={{borderTop:'3px solid lightgrey', width:'50%'}}/>
                        <h2>Experience</h2>
                        <Experience 
                            startYear={2018}
                            endYear={2019}
                            company="George Brown College"
                            position="Student Employee"
                            description="Assisted in managing Lab equipment and sessions, and provided troubleshooting, tech-support, and one-on-one tutoring services."
                        />
                        <Experience 
                            startYear={2003}
                            endYear={2016}
                            company="Kumon Learning Centre"
                            position="Assistant"
                            description="Provided tailored learning strategies for each student, organised and managed inventory, and coordinated within a small team."
                        />
                        <hr style={{borderTop:'3px solid lightgrey', width:'50%'}}/>
                        <h2 >Awards</h2>
                        <Award
                            award="Dean's Honor List"
                            source="George Brown College"
                            year="2018,2019"
                        />
                        <hr style={{borderTop:'3px solid lightgrey', width:'50%'}}/>
                        <h2 >Skills</h2>
                        <Skill 
                            skill='JavaScript' 
                            progress={65}
                        />
                        <Skill 
                            skill='Java' 
                            progress={55}
                        />
                        <Skill 
                            skill='Python' 
                            progress={50}
                        />
                        <Skill 
                            skill='PHP' 
                            progress={40}
                        />
                        <Skill 
                            skill='Swift' 
                            progress={35}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume
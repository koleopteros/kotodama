import React, {Component} from 'react';
import me from './img/me.jpg'

import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render(){
        return (
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={4}>
                        <h2>Jerome Ching</h2>
                        <img src={me} alt="Jerome"
                             style={{height:'250px'}}/>
                             <p style={{width:'75%', margin:'auto',paddingTop:'1em'}}>
                             </p>
                    </Cell>
                    <Cell col={8}>
                        <h2>About Me</h2>
                        <hr/>
                        <div>
                            <p>
                                Currently a 6th semester full-time student at George Brown College studying Computer Programmer Analyst
                            </p>
                            <p>
                                As a soon-to-be graduate of the Computer Programmer Analyst at George Brown College, I am eager to work within a team whose goal is to improve the ease of access to technology through applications, collaboration and customer service.  I've practiced sorts of applications using various languages from extremely low level languages such as Assembly, onward to C, C++, then Java, and High Level languages such as C-Sharp, Python, and JavaScript.  Though my education does not emphasize on mathematics, I've found that it is crucial to a programmer and occassionally attempt to further my mathematic skills.
                            </p>
                            <p>
                                Most of my work experience stems from the education field, for good reason.  I enjoy collaborating with others as I find that the best proof of understanding anything is to be able to explain it to another in a way they can comprehend.  Much like for Data Analysis, sharing knowledge with others heavily relies on the ability to view problems and solutions for various angles; Seeing only one side of the problem ends up 'overfitting' the understanding of the problem.   
                            </p>
                            <p>
                                As an individual, I have a variety of interests that range from photography, drones, film, construction, architecture, electronics, PCB design, biomechanics, photonics… and the list goes on with almost anything.  I suppose I'm always interested in learning something new, regardless of how irrelevant it may seem.
                            </p>
                            <p>
                                For leisure, I partake in indoor and outdoor Home Gardening, cycling (its great to cycle from the far end of Scarborough to downtown Toronto in the summer!), Trading Card Games (like Magic The Gathering), Table Top games, and Digital Games... lots of games.  Can't forget, I've added daily coding challenges as part of my leisure activities.
                            </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default About
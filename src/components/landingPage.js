import React, {Component} from 'react';
import me from './me.jpg'
/* MDL COmponents */
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render(){
        return (
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img src={me} alt="Jerome!" className="avatar-img"/> 
                    </Cell>
                    <div className="banner-text">
                        <h1>Application Developer</h1>
                        <hr/>
                        <p>
                            HTML/CSS | JavaScript | React | Angular | PHP | Python | Java | Swift
                        </p>
                        <div className="social-links">
                            {/* Codepen */}
                            <a href="https://codepen.io/JackTheWizardCop/">
                                <i className="fa fa-codepen" rel="noopener noreferrer" aria-hidden="true"></i>
                            </a>
                            {/* Github */}
                            <a href="https://github.com/koleopteros">
                                <i className="fa fa-github" rel="noopener noreferrer" aria-hidden="true"></i>
                            </a>
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/jerome-ching-bb1bb258/">
                                <i className="fa fa-linkedin" rel="noopener noreferrer" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}
export default Landing
import React, {Component} from 'react';
import me from './img/me.jpg';

/* Importing MDL Components */
import { Grid, Cell, 
         List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render(){
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Jerome Ching</h2>
                        <img src={me} alt="Jerome"
                             style={{height:'250px'}}/>
                             <p style={{width:'75%', margin:'auto',paddingTop:'1em'}}>
                             </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/> 647-708-3955
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/> jerome.ching@georgebrown.ca
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px'}}>
                                        <i className="fa fa-github" aria-hidden="true"/> <a href="github.com/koleopteros" target="_blank" rel="noopener noreferrer">GitHub</a>
                                        <i className="fa fa-codepen" aria-hidden="true"/> <a href="https://codepen.io/JackTheWizardCop/" target="_blank" rel="noopener noreferrer">CodePen</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px'}}>
                                        <i><img src="./img/kaggle-brands.svg" alt=" "/></i> <a href="kaggle.com/ritzbitz00" target="_blank" rel="noopener noreferrer">Kaggle</a>
                                        <i className="fa fa-linkedin" aria-hidden="true"/> <a href="https://www.linkedin.com/in/jerome-ching-bb1bb258/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact
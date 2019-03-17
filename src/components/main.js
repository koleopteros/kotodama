import React from 'react';

/* Components */
import {Switch, Route} from 'react-router-dom';

/* Pages */
import Landing from './landingPage';
import Projects from './projects';
import Contact from './contact';
import About from './aboutMe';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path ="/kotodama" component={Landing} />
        <Route path="/kotodama" component={Landing}/>
        <Route path="/kotodama/about" component={About}/>
        <Route path="/kotodama/resume" component={Resume}/>
        <Route path="/kotodama/projects" component={Projects}/>
        <Route path="/kotodama/contact" component={Contact}/>
        
    </Switch>
)

export default Main;
import React, {Component} from 'react';

/* Importing Components */
import { Tabs, Tab, Grid, Cell,
         Card, CardTitle, CardActions, CardMenu,
         Button, IconButton } from 'react-mdl'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 }
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return (
                <div>
                    <h1>Angular Work</h1>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'176px',background:'url() center / cover'}}>
                        </CardTitle>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return (
                <div><h1>React Work</h1></div>
            )
        } else if(this.state.activeTab === 2){
            return (
                <div><h1>Vanilla JS Work</h1></div>
            )
        } else if(this.state.activeTab === 3){
            return (
                <div><h1>Python Work</h1></div>
            )
        } else if(this.state.activeTab === 4){
            return (
                <div><h1>Java Work</h1></div>
            )
        } else if(this.state.activeTab === 5){
            return (
                <div><h1>Swift Work</h1></div>
            )
        }
    }

    render(){
        return (
            <div className="category-tabs">
                <Tabs actoveTab={this.state.activeTab} onChange={ (tabId) => this.setState({activeTab: tabId}) } ripple>
                    <Tab>Angular</Tab>
                    <Tab>React</Tab>
                    <Tab>Vanilla JS</Tab>
                    <Tab>Python</Tab>
                    <Tab>Java</Tab>
                    <Tab>Swift</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}
export default Projects
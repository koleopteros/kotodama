import React, {Component} from 'react';

/* Importing Components */
import { Tabs, Tab, Grid, Cell,
         Card, CardTitle, CardText, CardActions, CardMenu,
         Button, IconButton } from 'react-mdl'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 }
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'black', height:'176px',background:'url(https://via.placeholder.com/150) center / cover'}}> Angular Video Store
                        </CardTitle>
                        <CardText>
                            Academic solo project to create a video store website that allows users to rent videos and administrators to add new videos.  Designed and implemented full stack.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="http://github.com/koleopteros/video-store-app" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
                        </CardActions>
                        <CardMenu style={{color:'blue'}}>
                            <IconButton name='share'></IconButton>
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return (
                    <div className="projects-grid">
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle style={{color:'black', height:'176px',background:'url(https://via.placeholder.com/150) center / cover'}}> MERN - Live Chat Relay
                            </CardTitle>
                            <CardText>
                                Academic MERN 2-person project.  Produce a Live chat relay using Socket.io.  Implemented Backend and Client-side socket communication.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="http://github.com/morgan-gill/Chat_Archive_Application" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name='share'></IconButton>
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle style={{color:'black', height:'176px',background:'url(https://via.placeholder.com/150) center / cover'}}> Kotodama
                            </CardTitle>
                            <CardText>
                                My prototype for my own general use website.  Currently hosting my portfolio, resume and etc.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="http://github.com/koleopteros/kotodama" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name='share'></IconButton>
                            </CardMenu>
                        </Card>
                    </div>
            )
        } else if(this.state.activeTab === 2){
            return (
                <div className="projects-grid">
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle style={{color:'black', height:'176px',background:'url(https://via.placeholder.com/150) center / cover'}}> Daily coding challenges
                            </CardTitle>
                            <CardText>
                                My personal github Repo where I practice coding problems from websites ranging from leetcode, algoexpert and Daily Coding Problems.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="http://github.com/koleopteros/DailyCodingChallenges" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name='share'></IconButton>
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle style={{color:'black', height:'176px',background:'url(https://via.placeholder.com/150) center / cover'}}> Mobihelp Challenge Questions
                            </CardTitle>
                            <CardText>
                                My various Pens on CodePen where I create solutions to my HTML and JS Mobihelp Challenge Questions
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="http://gbcmobihelp.github.io" target="_blank" rel="noopener noreferrer">CodePen Collection</a></Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name='share'></IconButton>
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle style={{color:'black', height:'176px',background:'url(https://via.placeholder.com/150) center / cover'}}> Mobihelp Kiosk Page
                            </CardTitle>
                            <CardText>
                                A page for the kiosks at George Brown's Kiosks.  A simple site that displays the current day and time.  Designed and currently maintaining.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="http://github.com/gbcmobihelp" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
                                <Button colored><a href="http://gbcmobihelp.github.io" target="_blank" rel="noopener noreferrer">Website</a></Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name='share'></IconButton>
                            </CardMenu>
                        </Card>
                    </div>
            )
        } else if(this.state.activeTab === 3){
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'black', height:'176px',background:'url(https://via.placeholder.com/150) center / cover'}}>Satellite TLE data parser
                        </CardTitle>
                        <CardText>
                            Personal project to create an API to provide crunched data to another application in the works.
                        </CardText>
                        <CardActions border>
                            <Button disabled>Currently in development</Button>
                        </CardActions>
                        <CardMenu style={{color:'blue'}}>
                            <IconButton name='share'></IconButton>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'black', height:'176px',background:'url(https://via.placeholder.com/150) center / cover'}}>RaspberryPi Camera Project
                        </CardTitle>
                        <CardText>
                            Personal Project to make a simple image processing device using the RaspberryPi and a camera.  Designed and Implemented.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/koleopteros/CameraProject" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
                        </CardActions>
                        <CardMenu style={{color:'blue'}}>
                            <IconButton name='share'></IconButton>
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 4){
            return (
                <div className="projects-grid">
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle style={{color:'black', height:'176px',background:'url(https://via.placeholder.com/150) center / cover'}}> Role Player's Guide
                            </CardTitle>
                            <CardText>
                                Academic Android Application 2-person project.  Designed and implemented Interfaces, Views, Backend Room, Models, Fragments and Adapters.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/koleopteros/RPGuide" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name='share'></IconButton>
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle style={{color:'black', height:'176px',background:'url(https://via.placeholder.com/150) center / cover'}}> Kotodama
                            </CardTitle>
                            <CardText>
                                My prototype for my own general use website.  Currently hosting my portfolio, resume and etc.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/koleopteros/kotodama" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
                                <Button colored><a href="https://koleopteros.github.io/kotodama" target="_blank" rel="noopener noreferrer">Website</a></Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name='share'></IconButton>
                            </CardMenu>
                        </Card>
                    </div>
            )
        } else if(this.state.activeTab === 5){
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'black', height:'176px',background:'url(https://via.placeholder.com/150) center / cover'}}> Drunk Toddler's RP Vendor Tracker
                        </CardTitle>
                        <CardText>
                            Academic iOS application tool for Role-players to manage NPC vendors and their inventories.  Current in progress.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="http://github.com/koleopteros/RPVendorTracker" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
                        </CardActions>
                        <CardMenu style={{color:'blue'}}>
                            <IconButton name='share'></IconButton>
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 6){
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'black', height:'176px',background:'url(https://via.placeholder.com/150) center / cover'}}> ITHD Web Application
                        </CardTitle>
                        <CardText>
                            Academic Capstone Project (5-person group) using Laravel (PHP).  Primarily responsible for building custom authentication and live-chat functionality.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/morgan-gill/CScourse1" target="_blank" rel="noopener noreferrer">Docs Pt1</a></Button>
                            <Button colored><a href="https://github.com/morgan-gill/CScourse2" target="_blank" rel="noopener noreferrer">Docs Pt2</a></Button>
                        </CardActions>
                        <CardMenu style={{color:'blue'}}>
                            <IconButton name='share'></IconButton>
                        </CardMenu>
                    </Card>
                </div>
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
                    <Tab>Capstone</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}
export default Projects
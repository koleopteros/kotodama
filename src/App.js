import React, { Component } from 'react';
import './App.css'

/* Material Design for React */
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

/* Importing COmponents */
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'

import Main from './components/main'

class App extends Component {
    render() {
      return (
        <div>
            <Layout className="mdl-layout--fixed-header">
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/kotodama">Kotodama - Yan Ling - 言霊 </Link>} scroll>
                    <Navigation>
                        <Link to="/kotodama/projects">Projects</Link>
                        <Link to="/kotodama/resume">Resume</Link>
                        <Link to="/kotodama/about">About Me</Link>
                        <Link to="/kotodama/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/kotodama">言霊</Link>}>
                    <Navigation>
                        <Link to="/kotodama/projects">Projects</Link>
                        <Link to="/kotodama/resume">Resume</Link>
                        <Link to="/kotodama/about">About Me</Link>
                        <Link to="/kotodama/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
  
      );
    }
  }

export default App;

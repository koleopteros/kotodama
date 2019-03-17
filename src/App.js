import React, { Component } from 'react';
import logo from './logo.svg';

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
        <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/kotodama">MyPortfolio</Link>} scroll>
              <Navigation>
                  <Link to="/kotodama/resume">Resume</Link>
                  <Link to="/kotodama/about">About Me</Link>
                  <Link to="/kotodama/projects">Projects</Link>
                  <Link to="/kotodama/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/kotodama">MyPortfolio</Link>}>
              <Navigation>
                <Link to="/kotodama/resume">Resume</Link>
                <Link to="/kotodama/about">About Me</Link>
                <Link to="/kotodama/projects">Projects</Link>
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

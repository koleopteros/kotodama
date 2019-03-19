import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return(
                <Grid>
                    <Cell col={3}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>
                    <Cell col={9}>
                        <h4 style={{marginTop:'0px'}}>{this.props.company}</h4>
                        <h6><i>{this.props.position}</i></h6>
                        <p>{this.props.description}</p>
                    </Cell>
                </Grid>
        )
    }
}

export default Experience
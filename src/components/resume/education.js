import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return(
                <Grid>
                    <Cell col={3}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>
                    <Cell col={9}>
                        <h4 style={{marginTop:'0px'}}>{this.props.school}</h4>
                        <h6><i>{this.props.program}</i></h6>
                        <p>{this.props.schoolDesc}</p>
                    </Cell>
                </Grid>
        )
    }
}

export default Education
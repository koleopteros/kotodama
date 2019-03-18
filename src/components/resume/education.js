import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    let transcript = props.transcript
    render() {
        return(
                <Grid>
                    <Cell col={3}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>
                    <Cell col={9}>
                        <h4 style={{marginTop:'0px'}}>{this.props.school}</h4>
                        <h6><i>{this.props.program}</i>{
                        transcript!=undefined &&
                        <span> - <a href="https://www.github.com/koleopteros/kotodama/src/components/resume/" target="_blank" rel="noopener noreferrer">Transcript</a></span>
                        }</h6>
                        <p>{this.props.schoolDesc}</p>
                    </Cell>
                </Grid>
        )
    }
}

export default Education
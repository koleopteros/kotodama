import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        let transcript = this.props.transcript
        return(
                <Grid>
                    <Cell col={3}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>
                    <Cell col={9}>
                        <h4 style={{marginTop:'0px'}}>{this.props.school}</h4>
                        <h6><i>{this.props.program}</i>{
                        transcript!==undefined &&
                        <span> - <a href="https://github.com/koleopteros/kotodama/blob/master/src/components/resume/gbcTranscript.pdf" target="_blank" rel="noopener noreferrer">Transcript</a></span>
                        }</h6>
                        <p>{this.props.schoolDesc}</p>
                    </Cell>
                </Grid>
        )
    }
}

export default Education
import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Award extends Component {
    render() {
        return(
                <Grid>
                    <Cell col={12}>
                        <div style={{display:'flex'}}>
                            {this.props.award}, <i> {this.props.source}</i>, {this.props.year}
                        </div>
                    </Cell>
                </Grid>
        )
    }
}

export default Award
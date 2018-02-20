import React from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment,
} from 'semantic-ui-react';
import Sat from '../../Images/sat.png';


const Curriculum = (props) => {
    return (
        <div>
            <Segment style={{ padding: '8em 0em' }} vertical>

                <h1>Provide Overview of curriculum with button with pop-up or modal with more details.</h1>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column>
                            <Image src={Sat} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}

export default Curriculum;
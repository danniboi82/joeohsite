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


const Intro = (props) => {
    return (
        <div>
            <Segment style={{ padding: '8em 0em' }} vertical>

                <h1>Intro/Experience </h1>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            Joe's Picture
                        <div>
                                <img src="http://via.placeholder.com/300x300" alt="" />
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <h1>학력</h1>
                            <h1>이력</h1>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}

export default Intro;
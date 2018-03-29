import React, { Component } from 'react';
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
import Map from './GMap/GMap';
import Kaist from '../../../Images/kaist.jpg';
import Ucsc from '../../../Images/Ucsc.png';

//Google Maps api key : AIzaSyB4Gae_gW6rhT4AKAxkr13R-4uolR1kZD8


class Intro extends Component {
    render() {
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
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Image src={Kaist} />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Image src={Ucsc} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Container>
                        <Map />
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default Intro;
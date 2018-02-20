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
import './Home.css';
import Sat from '../../Images/sat.png';



export default class HomepageLayout extends Component {
    state = {}

    render() {

        return (
            <div>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <h1>STUDYVILLE 장점 왜 엄마들이 선택을 해야하는지</h1>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row className='Intro'>
                            <Grid.Column width={6}>
                                <Image src={Sat} />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <p> 미국 대학입학 희망하는 학생들에게 필수 시험임 (한국의 수능과 비슷)</p>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row className='Intro'>
                            <Grid.Column width={10}>
                                <h1>Why StudyVille?</h1>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Image src={Sat} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>


            </div>
        )
    }
}
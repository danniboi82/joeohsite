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
import Reason1 from './HomeModals/Reason1';
import Reason2 from './HomeModals/Reason2';
import Reason3 from './HomeModals/Reason3';
import Reason4 from './HomeModals/Reason4';
import './Home.css';


export default class HomepageLayout extends Component {
    state = {}

    render() {

        return (
            <div className='HomeDiv'>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <h1>STUDYVILLE 장점 왜 엄마들이 선택을 해야하는지</h1>
                    <Grid container>
                        <Grid.Row className='Intro'>
                            <Grid.Column width={4} className='ImageGrid Pic1'>
                                <div className="ImgDiv">                                  
                                </div>
                            </Grid.Column>
                            <Grid.Column width={4} className='TextGrid'>
                                <div className='TextDiv'>
                                    <p> 미국 대학입학 희망하는 학생들에게 필수 시험임 (한국의 수능과 비슷)</p>
                                </div>
                                <Reason1 />
                            </Grid.Column>
                            <Grid.Column width={4} className='ImageGrid  Pic2'>
                                <div className="ImgDiv">
                                </div>
                            </Grid.Column>
                            <Grid.Column width={4} className='TextGrid'>
                                <div className='TextDiv'>
                                    <p> 미국 대학입학 희망하는 학생들에게 필수 시험임 (한국의 수능과 비슷)</p>
                                </div>
                                <Reason2 />
                            </Grid.Column>
                            <Grid.Column width={4} className='ImageGrid1'>
                                <div className="ImgDiv">
                                    <p> 미국 대학입학 희망하는 학생들에게 필수 시험임 (한국의 수능과 비슷)</p>
                                </div>
                                <Reason3 />
                            </Grid.Column>
                            <Grid.Column width={4} className='TextGrid1  Pic3'>
                                <div className='TextDiv'>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={4} className='ImageGrid1'>
                                <div className="ImgDiv">
                                    <p> 미국 대학입학 희망하는 학생들에게 필수 시험임 (한국의 수능과 비슷)</p>
                                </div>
                                <Reason4 />
                            </Grid.Column>
                            <Grid.Column width={4} className='TextGrid1  Pic4'>
                                <div className='TextDiv'>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}
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
import EngMod from './CurricModals/EnglishModal';
import ConsultMod from './CurricModals/ConsultingModal';
import IntlSchool from './CurricModals/IntlSchoolModal';
import ColPrep from './CurricModals/CollegePrepModal';
import Sat from '../../../Images/sat.png';
import Tutor from '../../../Images/one-on-one.jpg';
import './Curriculum.css';



class Curriculum extends Component {
    render() {
        return (
            <div className='CurriculumDiv'>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <h1>StudyVille Curriculum</h1>
                    <Grid container >
                        <Grid.Row className='Curriculum'>
                            <Grid.Column computer={4} mobile={8} tablet={4} className='CurricImageGrid CurricOne'>
                                <div className="CurricImgDiv ">
                                </div>
                            </Grid.Column>
                            <Grid.Column computer={4} mobile={8} tablet={4} className='CurricTextGrid'>
                                <div className='CurricTextDiv'>
                                    <p> 미국 대학입학 희망하는 학생들에게 필수 시험임 (한국의 수능과 비슷)</p>
                                    <ColPrep />
                                </div>
                            </Grid.Column>
                            <Grid.Column computer={4} mobile={8} tablet={4} className='CurricImageGrid CurricTwo'>
                                <div className="CurricImgDiv ">
                                </div>
                            </Grid.Column>
                            <Grid.Column computer={4} mobile={8} tablet={4} className='CurricTextGrid'>
                                <div className='CurricTextDiv'>
                                    <p> 미국 대학입학 희망하는 학생들에게 필수 시험임 (한국의 수능과 비슷)</p>
                                    <IntlSchool />
                                </div>
                            </Grid.Column>
                            <Grid.Column computer={4} mobile={8} tablet={4} className='CurricImageGrid1 '>
                                <div className="CurricImgDiv">
                                    <p> 미국 대학입학 희망하는 학생들에게 필수 시험임 (한국의 수능과 비슷)</p>
                                    <EngMod />
                                </div>
                            </Grid.Column>
                            <Grid.Column computer={4} mobile={8} tablet={4} className='CurricTextGrid1 CurricThree'>
                                <div className='CurricTextDiv'>
                                </div>
                            </Grid.Column>
                            <Grid.Column computer={4} mobile={8} tablet={4} className='CurricImageGrid1'>
                                <div className="CurricImgDiv">
                                    <p> 미국 대학입학 희망하는 학생들에게 필수 시험임 (한국의 수능과 비슷)</p>
                                    <ConsultMod />
                                </div>
                            </Grid.Column>
                            <Grid.Column computer={4} mobile={8} tablet={4} className='CurricTextGrid1 CurricFour'>
                                <div className='CurricTextDiv'>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

export default Curriculum;
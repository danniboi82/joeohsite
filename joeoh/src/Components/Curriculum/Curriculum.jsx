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
import Tutor from '../../Images/one-on-one.jpg';
import './Curriculum.css';



const Curriculum = (props) => {
    return (
        <div className='HomeDiv'>
            <Segment style={{ padding: '8em 0em' }} vertical>
                <h1>STUDYVILLE 장점 왜 엄마들이 선택을 해야하는지</h1>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row className='Curriculum'>
                        <Grid.Column width={4} className='CurricImageGrid CurricOne'>
                            <div className="CurricImgDiv ">
                            </div>
                        </Grid.Column>
                        <Grid.Column width={4} className='CurricTextGrid'>
                            <div className='CurricTextDiv'>
                                <p> 미국 대학입학 희망하는 학생들에게 필수 시험임 (한국의 수능과 비슷)</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={4} className='CurricImageGrid CurricTwo'>
                            <div className="CurricImgDiv ">
                            </div>
                        </Grid.Column>
                        <Grid.Column width={4} className='CurricTextGrid'>
                            <div className='CurricTextDiv'>
                                <p> 미국 대학입학 희망하는 학생들에게 필수 시험임 (한국의 수능과 비슷)</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={4} className='CurricImageGrid1 '>
                            <div className="CurricImgDiv">
                                <p> 미국 대학입학 희망하는 학생들에게 필수 시험임 (한국의 수능과 비슷)</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={4} className='CurricTextGrid1 CurricThree'>
                            <div className='CurricTextDiv'>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={4} className='CurricImageGrid1'>
                            <div className="CurricImgDiv">
                                <p> 미국 대학입학 희망하는 학생들에게 필수 시험임 (한국의 수능과 비슷)</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={4} className='CurricTextGrid1 CurricFour'>
                            <div className='CurricTextDiv'>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}

export default Curriculum;
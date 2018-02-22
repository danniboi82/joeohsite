import React, { Component } from 'react';
import {
    Button,
    Container,
    Header,
    Icon,
    Menu,
    Segment,
    Visibility,
    Grid,
} from 'semantic-ui-react';

const FixedNavBar = (props) => (
    <Menu fixed='top' size='large' borderless={true}>
        <Container>
            <Menu.Item>
                <h1>STUDYVILLE</h1>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item active>
                    <Icon name='home' style={{ position: 'relative', bottom: '2px' }} />
                    <a href='#Top'>홈</a>
                </Menu.Item>
                <Menu.Item >
                    <Icon name='tasks' size='small' />
                    <a href='#About'>StudyVille?</a>
                </Menu.Item>
                <Menu.Item >
                    <Icon name='user outline' size='small' />
                    <a href='#Curriculum'>커리큘럼</a>
                </Menu.Item>
                <Menu.Item >
                    <Icon name='mail outline' size='small' />
                    <a href='#Contact'>소계/이력/연락</a>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)

export default FixedNavBar;
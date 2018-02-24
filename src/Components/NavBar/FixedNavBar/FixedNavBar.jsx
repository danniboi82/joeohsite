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
                <Menu.Item 
                    name='top'
                    active={props.activeItem === 'home'}
                    onClick={props.clicked}
                    >
                    <Icon name='home' style={{ position: 'relative', bottom: '2px' }} />
                    <a href='#Top'  style={{color: 'black'}}>홈</a>
                </Menu.Item>
                <Menu.Item 
                    name='about'
                    active={props.activeItem === 'about'}
                    onClick={props.clicked}
                    >
                    <Icon name='tasks' size='small' />
                    <a href='#About'  style={{color: 'black'}}>StudyVille?</a>
                </Menu.Item>
                <Menu.Item 
                    name='curriculum'
                    active={props.activeItem === 'curriculum'}
                    onClick={props.clicked}
                >
                    <Icon name='user outline' size='small' />
                    <a href='#Curriculum' style={{color: 'black'}}>커리큘럼</a>
                </Menu.Item>
                <Menu.Item 
                    name='contact'
                    active={props.activeItem === 'contact'}
                    onClick={props.clicked}>
                    <Icon name='mail outline' size='small' />
                    <a href='#Contact' style={{color: 'black'}}>소계/이력/연락</a>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)

export default FixedNavBar;
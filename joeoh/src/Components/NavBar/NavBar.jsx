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
import FontAwesome from 'react-fontawesome';
import './NavBar.css';
import BG1 from '../../Images/background3.jpg';
import { Link } from 'react-router-dom';

const FixedMenu = () => (
    <Menu fixed='top' size='large' borderless={true}>
        <Container>
            <Menu.Item>
                <h1>STUDYVILLE</h1>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item active>
                    <Icon name='home' style={{ position: 'relative', bottom: '2px' }} />
                    <a href='#Home'>홈</a>
                </Menu.Item>
                <Menu.Item >
                    <Icon name='tasks' size='small' />
                    <a href='#About'>커리큘럼</a>
                </Menu.Item>
                <Menu.Item >
                    <Icon name='user outline' size='small' />
                    <a href='#Portfolio'>소계/이력</a>
                </Menu.Item>
                <Menu.Item >
                    <Icon name='mail outline' size='small' />
                    <a href='#Contact'>연락/문의</a>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)

export default class Navbar extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ visible: false })
    showFixedMenu = () => this.setState({ visible: true })

    render() {
        const { visible } = this.state

        return (
            <div>
                {visible ? <FixedMenu /> : null}

                <Visibility
                    onBottomPassed={this.showFixedMenu}
                    onBottomVisible={this.hideFixedMenu}
                    once={false}
                >

                    <Segment
                        inverted
                        textAlign='center'
                        vertical={true}
                        className='NavbarSeg'
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BG1})`, backgroundSize: '100% 100%', maxWidth: '100%', backgroundAttachment: 'fixed' }}
                    >
                        <Container >
                            <Menu inverted pointing borderless secondary size='large'>
                                <Menu.Item>
                                    <h1>STUDYVILLE</h1>
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Menu.Item active>
                                        <Icon name='home' style={{ position: 'relative', bottom: '2px' }} />
                                        <a href='#Home'>홈</a>
                                    </Menu.Item>
                                    <Menu.Item >
                                        <Icon name='tasks' size='small' />
                                        <a href='#About'>커리큘럼</a>
                                    </Menu.Item>
                                    <Menu.Item >
                                        <Icon name='user outline' size='small' />
                                        <a href='#Portfolio'>소계/이력</a>
                                    </Menu.Item>
                                    <Menu.Item >
                                        <Icon name='mail outline' size='small' />
                                        <a href='#Contact'>연락/문의</a>
                                    </Menu.Item>
                                </Menu.Item>
                            </Menu>
                        </Container>

                        <Container text>
                            <Header
                                as='h3'
                                content="StudyVille와 같이 자녀의 미래를 개척하세요"
                                inverted
                                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                            />
                            <Header
                                as='h2'
                                inverted
                                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                            />

                        </Container>
                    </Segment>
                </Visibility>
            </div>

        )
    }
}
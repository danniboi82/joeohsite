import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Heading from '../Heading/Heading';
import './MobileContainer.css'
import BG1 from '../../../../Images/background3.jpg';

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { activeItem } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item>
              <h1>STUDYVILLE</h1>
            </Menu.Item>
            <Menu.Item
              name='top'
              active={activeItem === 'top'}
              onClick={this.handleItemClick}>
              <Icon name='home' />
              <a href='#Top'>홈</a>
            </Menu.Item>
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick} >
              <Icon name='info circle' size='small' />
              <a href='#About'>StudyVille?</a>
            </Menu.Item>
            <Menu.Item
              name='curriculum'
              active={activeItem === 'curriculum'}
              onClick={this.handleItemClick}>
              <Icon name='book' size='small' />
              <a href='#Curriculum'>커리큘럼</a>
            </Menu.Item>
            <Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick} >
              <Icon name='user outline' size='small' />
              <a href='#Contact'>소계/이력/연락</a>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
            <Segment
              inverted textAlign='center'
              className='SidebarSeg'
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BG1})`, backgroundSize: '100% 100%', maxWidth: '100%', backgroundAttachment: 'fixed' }}
              vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <h1>STUDYVILLE</h1>
                  </Menu.Item>
                </Menu>
              </Container>
              <Heading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}



export default MobileContainer;

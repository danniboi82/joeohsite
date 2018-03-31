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
import MobileHeading from '../Heading/MobileHeading';
import './TabletContainer.css'
import BG1 from '../../../../Images/background3.jpg';

class TabletContainer extends Component {
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
      <Responsive {...Responsive.onlyTablet}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item>
              <h1>STUDYVILLE</h1>
            </Menu.Item>
            <Menu.Item
              href='#Top'
              name='top'
              active={activeItem === 'top'}
              onClick={this.handleItemClick}>
              <Icon name='home' />
              홈
            </Menu.Item>
            <Menu.Item
              href='#About'
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick} >
              <Icon name='info circle' size='small' />
              StudyVille?
            </Menu.Item>
            <Menu.Item
              href='#Curriculum'
              name='curriculum'
              active={activeItem === 'curriculum'}
              onClick={this.handleItemClick}>
              <Icon name='book' size='small' />
              커리큘럼
            </Menu.Item>
            <Menu.Item
              href='#Contact'
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick} >
              <Icon name='user outline' size='small' />
              소계/이력/연락
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
            <Segment
              inverted textAlign='center'
              className='SidebarSeg'
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BG1})`, backgroundSize: '100% 100%', maxWidth: '100%', backgroundRepeat: 'none', backgroundAttachment: 'fixed', height: '425px' }}
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
              <MobileHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}



export default TabletContainer;

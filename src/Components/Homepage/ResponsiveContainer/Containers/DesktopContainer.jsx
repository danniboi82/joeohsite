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
import BG1 from '../../../../Images/background3.jpg';
import './DesktopContainer.css';

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { activeItem } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            vertical={true}
            className='NavbarSeg'
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BG1})`, backgroundSize: '100% 100%', maxWidth: '100%', backgroundAttachment: 'fixed' }}
          >
            <Container >
              <Menu
                className='NavbarDiv'
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                borderless
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item>
                    <h1>STUDYVILLE</h1>
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Menu.Item
                      name='top'
                      href='#Top'
                      active={activeItem === 'top'}
                      onClick={this.handleItemClick}>
                      <Icon name='home' style={{ position: 'relative', bottom: '2px' }} />
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
                  </Menu.Item>
                </Container>
              </Menu>
            </Container>
            <Heading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

export default DesktopContainer;
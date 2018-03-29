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


const Heading = ({ mobile }) => (
  <Container text>
    <Header
      as='h3'
      content="StudyVille와 같이 자녀의 미래를 개척하세요"
      inverted
      style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
    />
  </Container>
)

export default Heading;
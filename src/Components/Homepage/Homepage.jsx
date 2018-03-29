import PropTypes from 'prop-types'
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
import ResponsiveContainer from './ResponsiveContainer/ResponsiveContainer';
import Home from './Home/Home';
import Curriculumn from './Curriculum/Curriculum';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */


/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */




const Homepage = () => (
  <ResponsiveContainer>
    <Home/>
    <Curriculumn/>
    <Contact/>
    <Footer/>
  </ResponsiveContainer>
)

export default Homepage;
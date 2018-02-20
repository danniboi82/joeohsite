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
import './Footer.css';
import Sat from '../../Images/sat.png';

const Footer = (props) => {
    return (
        <div className='FooterDiv'>
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container>
                    <Grid.Row>
                        <Grid.Column width={5}>
                        Site Map
                        </Grid.Column>
                        <Grid.Column width={6}>
                        Social NEtworking Links : facebook, instagram
                        </Grid.Column>
                        <Grid.Column width={5}>
                        Contact information address
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}

export default Footer;
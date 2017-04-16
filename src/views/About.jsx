import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
} from 'material-ui';

const About = () => (
  <Card>
    <CardTitle
      title="About"
    />
    <CardText>
      Made with ❤️ by Couch Potatoes
      <ul>
        <li>Maria Citrowski</li>
        <li>Jeff Held</li>
        <li>Hein Htet Zaw</li>
        <li>Kevin Proemsay</li>
        <li>Lindsay Vossmeyer</li>
      </ul>
    </CardText>
  </Card>
);

export default About;

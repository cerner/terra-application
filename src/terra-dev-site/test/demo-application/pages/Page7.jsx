import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';

import Page from '../../../../page';
import CardLayout from '../../../../page/layouts/CardLayout';
import Card from '../../../../page/layouts/Card';

const propTypes = {
  onRequestClose: PropTypes.func,
};

const Page7 = ({ onRequestClose }) => {
  const [incrementer, setIncrementer] = React.useState(1);

  return (
    <Page
      pageKey="page-7"
      label="Page 7"
      onRequestClose={onRequestClose}
    >
      <CardLayout>
        <Card label="Page 7 Details">
          <p>Page 7 demonstrates the following features:</p>
          <ul>
            <li>CardLayout with container fill and dynamic overflow</li>
          </ul>
          <Button text="Increase Content Size" onClick={() => { setIncrementer(state => state + 1); }} />
          {(Array(incrementer).fill(incrementer)).map((val, index) => (
            <React.Fragment key={`key-${index}`}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna arcu. Suspendisse eget massa vitae lectus viverra consequat. Pellentesque sit amet rhoncus mi, vehicula interdum purus. Fusce tempus sagittis tortor, eu aliquet tortor viverra quis. Nullam tincidunt arcu nec quam dictum, quis congue dui ullamcorper. Mauris pulvinar venenatis ligula ac posuere. In hac habitasse platea dictumst. Praesent tellus nisi, fermentum vel justo sit amet, vestibulum eleifend nulla. Nunc sollicitudin libero eros, nec blandit nisl eleifend ac. Maecenas iaculis urna eu turpis hendrerit laoreet. Suspendisse sed consequat felis. Praesent odio urna, facilisis in iaculis elementum, blandit ut quam. Fusce bibendum sem eget metus consequat aliquet.</p>
              <p>Nullam ex quam, tempor ac fringilla sit amet, malesuada dictum erat. Etiam feugiat nulla justo, dapibus interdum purus venenatis ac. Aenean eget volutpat ex. In et ultrices velit. Vestibulum blandit elit vel lorem semper pretium. Nullam bibendum ex nec mi convallis consectetur. Quisque pretium ipsum vitae arcu convallis tempus. Proin in fermentum arcu. Fusce sit amet elementum lorem, non tincidunt felis.</p>
            </React.Fragment>
          ))}
        </Card>
      </CardLayout>
    </Page>
  );
};

Page7.propTypes = propTypes;

export default Page7;

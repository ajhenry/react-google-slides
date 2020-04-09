import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ReactGoogleSlides from '.';

describe('ReactGoogleSlides', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ReactGoogleSlides slidesLink="https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM" />,
      div
    );
  });

  it('throws an error on invalid presentation key', async () => {
    expect(() =>
      shallow(<ReactGoogleSlides slidesLink="throw" />)
    ).toThrowError();
  });
});

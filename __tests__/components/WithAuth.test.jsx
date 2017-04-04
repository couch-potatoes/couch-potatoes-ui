import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { WithAuth } from '../../src/components/WithAuth';

describe('<WithAuth />', () => {
  const muiTheme = getMuiTheme();
  const shallowWithContext = (node) => shallow(node, { context: { muiTheme } });

  it('matches snapshot when user is logged in', () => {
    const wrapper = shallowWithContext(
      <WithAuth
        children={<h1>foo</h1>}
        isLoggedIn={true}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('matches snapshot when user is not logged in', () => {
    const wrapper = shallowWithContext(
      <WithAuth
        children={<h1>bar</h1>}
        isLoggedIn={false}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  describe('prop: isLoggedIn', () => {
    it('should render the children if false', () => {
      const children = <h1>bar</h1>;
      const wrapper = shallowWithContext(
        <WithAuth
          children={children}
          isLoggedIn={true}
        />
      );
      const childElement = wrapper.find('h1');
      expect(childElement.length).toBe(1);
    });
  });
});

/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import NavBar from 'components/NavBar';
import styled from 'styled-components';
import { initAuth } from 'actions/AuthActions';
import { connect } from 'react-redux';

const AppDiv = styled.div`
  height: 100%;
`;


class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initAuth());
  }

  render() {
    return (
      <AppDiv>
        <NavBar />
        {React.Children.toArray(this.props.children)}
      </AppDiv>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};


export default connect()(App);

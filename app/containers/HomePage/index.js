/**
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectReducer from 'utils/injectReducer';

import GridCell from 'components/GridCell';

import makeSelectHomePage from './selectors';
import reducer from './reducer';

const Wrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    const cells = [];

    // Enclose all of each line into a container
    for (let row = 5; row >= 0; row -= 1) {
      const currentLine = [];
      for (let col = 0; col < 7; col += 1) {
        currentLine.push(
          <GridCell key={`${col}-${row}`} col={col} row={row} />,
        );
      }

      cells.push(
        <div key={row} className="row">
          {currentLine}
        </div>,
      );
    }

    return <Wrapper>{cells}</Wrapper>;
  }
}

HomePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);

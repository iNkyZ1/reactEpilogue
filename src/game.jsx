import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GameLayout } from './game-layout';
import { RESTART_GAME } from './actions';

export class GameCotnainer extends Component {
  render() {
    return <GameLayout handleRestart={this.props.handleRestart} />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleRestart: () => dispatch(RESTART_GAME),
});

export const Game = connect(null, mapDispatchToProps)(GameCotnainer);

GameCotnainer.propTypes = {
  handleRestart: PropTypes.func.isRequired,
};

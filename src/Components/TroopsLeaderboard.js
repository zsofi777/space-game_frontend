// eslint-disable-next-line class-methods-use-this
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { getTroopLeaderboardAction } from '../actions/actions';
import '../stylesheets/buildingLeaderBoard.scss';

class GetTroopsLeaderboard extends React.Component {
  state = {
    howManyToShow: 5,
  }

  constructor(props) {
    super(props);
    this.showLess = this.showLess.bind(this);
    this.showMore = this.showMore.bind(this);
  }

  componentWillMount() {
    const { getTroopLeaderboardAction } = this.props;
    return getTroopLeaderboardAction();
  }

  getkingdomScoreFromProps() {
    const { leaderboard } = this.props;
    const { howManyToShow } = this.state;
    return (
      <div className="buildingLeaderboardContainer">
        <button id="showLess" type="button" onClick={this.showLess}></button>
        <div className="troopLeaderboard">
          {leaderboard.slice(0, howManyToShow).map(leaderboard => (
            <div className="leaderboardElement">
              <p className="p3">{leaderboard.kingdomName}</p>
              <p className="p4">
Number of troops:
                {leaderboard.troops}
              </p>
            </div>
          ))}
        </div>
        <button id="showMore" type="button" onClick={this.showMore}></button>
        <div className="troopsLeaderboardEnd"></div>
      </div>
    );
  }

  showLess() {
    const { howManyToShow } = this.state;
    this.setState({ howManyToShow: howManyToShow - 5 });
  }

  showMore() {
    const { howManyToShow } = this.state;
    const { howManyToShow2 } = this.props;
    console.log(howManyToShow2);
    this.setState({ howManyToShow: howManyToShow + 5 });
  }


  render() {
    const { leaderboard } = this.props;
    if (leaderboard.length === 0) {
      return <h1 className="troops">There are no kingdomz to show.</h1>;
    }
    return (
      this.getkingdomScoreFromProps()
    );
  }
}

const mapStateToProps = state => ({
  leaderboard: state.getTroopLeaderboardReducer.leaderboard,
  status: state.getTroopLeaderboardReducer.status,
});

const mapDispatchToProps = {
  getTroopLeaderboardAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetTroopsLeaderboard);

import React, { Component } from 'react';
import HitButton from './components/HitButton';
import TotalHitCountDisplay from './components/TotalHitCountDisplay'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalCount: 100
    };
    console.log('App-component instantiated.');
  }

  incrementTotalCount(e) {
    console.log("Event Type- " + e.type);
    this.setState({
      totalCount: this.state.totalCount + 1
    });
  }

  render() {
    console.log('App-component rendered.');
    // let title = this.props.title;
    let { title } = this.props;  // destructuring
    let { totalCount } = this.state;
    return (
      <div className="container">
        <div className="page-header">{title}</div>
        <div className="panel panel-default">
          <div className="panel-heading"> App Component - {totalCount}</div>
          <div className="panel-body">
            <HitButton label="+1" onHit={(e) => { this.incrementTotalCount(e) }} />
            <HitButton label="+10" onHit={(e) => { this.incrementTotalCount(e) }} />
            <HitButton label="+100" onHit={(e) => { this.incrementTotalCount(e) }} />
            <HitButton label="-1" onHit={(e) => { this.incrementTotalCount(e) }} />
            <HitButton label="-10" onHit={(e) => { this.incrementTotalCount(e) }} />
            <HitButton label="-100" onHit={(e) => { this.incrementTotalCount(e) }} />
            <hr />
            <TotalHitCountDisplay value={totalCount} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

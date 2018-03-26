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

  incrementTotalCount(e,value) {
    this.setState({
      totalCount: this.state.totalCount + Number.parseInt(value)
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
            <div>
              <HitButton value="1" onHit={(e,value) => { this.incrementTotalCount(e,value) }} />
              <HitButton value="-100" onHit={(e,value) => { this.incrementTotalCount(e,value) }} />
              <HitButton value="100" onHit={(e,value) => { this.incrementTotalCount(e,value) }} />
            </div>
            <div style={{ clear: 'both' }}>
              <hr />
              <TotalHitCountDisplay value={totalCount} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

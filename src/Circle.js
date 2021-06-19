import React, { Component } from 'react';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // colorRandom: '',
      currentNumber: 0,
      isStart: false
    }
    this.tongleCountDown = this.tongleCountDown.bind(this);
    // this.circle = React.createRef();
    // console.log(this.circle);
    this.interval = null;
  }

  countDownNumber() {
    var { currentNumber } = this.state;
    console.log(currentNumber);
    if (currentNumber > 0) {
      this.setState({
        currentNumber: --currentNumber
      });
    }
  }
  tongleCountDown() {
    var { isStart } = this.state;
    this.setState({
      isStart: !isStart
    });
    if (!isStart) {
      this.startCountDown();
    } else {
      this.stopCountDown();
    }
  }
  startCountDown() {
    this.interval = setInterval(() => {
      this.countDownNumber();
    }, 1000);
  }
  stopCountDown() {
    clearInterval(this.interval);
  }
  componentDidMount() {
    this.setState({
      currentNumber: this.props.number
    });
    this.tongleCountDown();
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
    this.stopCountDown();
  }

  render() {
    const { size, number } = this.props;
    const { currentNumber, isStart } = this.state;
    const styles = {
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: 'yellow',
      margin: 0
    };
    return (
      <div className='circle-group'>
        <button className='tongle-btn' onClick={this.tongleCountDown}>{!isStart ? 'Start' : 'Stop'}</button>
        <div style={styles}>
          <p className='number'>{currentNumber}</p>
        </div>
      </div>
    );
  }
}

export default Circle;

var StarsFrame = React.createClass({
  render: function() {
    var stars = [];
    for (var i = 0; i < this.props.numberOfStars; i++) {
      stars.push(
        <span className="glyphicon glyphicon-star"></span>
      );
    }

    return (
      <div id="stars-frame">
        <div className="well">
          {stars}
        </div>
      </div>
    );
  }
});

var ButtonFrame = React.createClass({
  render: function() {
    var disabled, button, correct = this.props.correct;

    switch(correct) {
      case true:
      button = (
        <button className="btn btn-success btn-lg">
          onClick={this.props.acceptAnswer}>
          <span className="glyphicon glyphicon-ok"></span>
        </button>
      );
        break;
      case false:
      button = (
        <button className="btn btn-danger btn-lg">
          <span className="glyphicon glyphicon-remove"></span>
        </button>
      );
        break;
      default:
      disabled = (this.props.selectedNumbers.length === 0);
      button = (
        <button className="btn btn-primary btn-lg" disabled={disabled}
                onClick={this.props.checkAnswer}>
          =
        </button>
      );
    }




    return (
      <div id="button-frame">
        {button}
        <button>
          <span></span>

        </button>
      </div>
    );
  }
});

var AnswerFrame = React.createClass({
  render: function() {
    var props = this.props;
    var selectedNumbers = props.selectedNumbers.map(function(i) {
      return (
        <span onClick={props.unselectNumber.bind(null, i)}>
          {i}
        </span>
      );
    });

    return (
      <div id="answer-frame">
        <div className="well">
          {selectedNumbers}
        </div>
      </div>
    );
  }
});

var NumbersFrame = React.createClass({
  render: function() {
    var numbers = [], className,
    selectedNumber = this.props.selectedNumber,
    usedNumbers = this.props.usedNumbers,
    selectedNumbers = this.props.selectedNumbers;

    for (var i = 0; i <= 9; i++) {
      className = "numbers selected " + (selectedNumbers.indexOf(i)>=0);
      className += " used-" + (selectedNumbers.indexOf(i)>=0);
      numbers.push(
        <div className="{className}" onClick={selectedNumber.bind(null, i)}>
          {i}
        </div>
      );
    }
    return (
      <div id="numbers-frame">
        <div className="well">
          {numbers}
        </div>
      </div>
    );
  }
});

var Game = React.createClass({
  getInitialState: function() {
    return {  numberOfStars: Math.floor(Math.random() * 9) + 1,
              selectedNumbers: [],
              usedNumbers: [],
              correct: null  };
  },
  selectNumber: function(clickedNumber) {
    if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
    this.setState(
      { selectedNumbers: this.state.selectedNumbers.concat(clickedNumber),
        correct: null }
    );
  }
},
unselectNumber: function(clickedNumber) {
  var selectedNumbers = this.state.selectedNumbers,
  indexOfNumber = selectededNumbers.indexOf(clickedNumber);

  selectededNumbers.splice(indexOfNumber, 1);

  this.setState({ selectededNumbers: selectededNumbers, correct: null });
},
sumOfSelectedNUmbers: function() {
  return this.state.selectededNumbers.reduce(function(p, n) {
    return p + n;
  }, 0);
},
checkAnswer: function() {
  var correct = (this.state.numberOfStars === this.sumOfSelectedNUmbers());
  this.setState({ correct: correct });
},
acceptAnswer: function() {
  var usedNumbers = this.state.usedNumbers.concat(this.state.selectededNumbers);
  this.setState({
    selectededNumbers: [],
    usedNumbers: usedNumbers,
    correct: null,
    numberOfStars: Math.floor(Math.random() * 9) + 1
  });
},
  render: function(selectededNumber) {
    var selectededNumbers = this.state.selectedNumbers,
        usedNumbers = this.state.usedNumbers,
        numberOfStars = this.state.numberOfStars,
        correct = this.state.correct;
    return (
      <div id="game">
        <h2>Play Nine</h2>
        <hr/>
        <div className="clearfix">
          <StarsFrame numberOfStars={numberOfStars}/>
          <ButtonFrame selectedNumbers={selectedNumbers}
                        correct={correct}
                        checkAnswer={this.checkAnswer}
                        acceptAnswer={this.acceptAnswer} />

          <AnswerFrame selectedNumbers={selectedNumbers}
                        unselectNumber={this.unselectNumber}/>
        </div>

        <NumbersFrame selectedNumbers={this.state.selectedNumbers}
                      selectedNumber={this.selectedNumber} />

      </div>
    );
  }
});

React.render(<Game/>, document.getElementById('container'));

var StarsFrame = React.createClass({
  render: function() {
    var numberOfStars = Math.floor(Math.random() * 9) + 1;

    var stars = [];
    for (var i = 0; i < numberOfStars; i++) {
      stars.push(<span className="glyphicon glyphicon-star"></span>);
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
    return (
      <div id="button-frame">
        <button className="btn btn-primary btn-lg">=</button>
      </div>
    );
  }
});

var AnswerFrame = React.createClass({
  render: function() {
    return (
      <div id="answer-frame">
        <div className="well">
          {this.props.selectedNumbers}
        </div>
      </div>
    );
  }
});

var NumbersFrame = React.createClass({
  render: function() {

    var numbers = [], className,
    clickNumber.this.props.clickNumber,
    electedNumbers = this.props.selectedNumbers;
    for (var i = 0; i <= 9; i++) {
      className = "numbers selected " + (selectedNumbers.indexOf(i)>=0);
      numbers.push(
        <div className="{className}" onClick={clickNumber}>
          {i}</div>
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
    return {selectedNumbers: []};
  },
  clickNumber: function() {
    this.setState(
      {selectedNumbers: this.this.state.selectedNumbers.concat(clickedNumber) }
    );
  },
  render: function(clickedNumber) {
    return (
      <div id="game">
        <h2>Play Nine</h2>
        <hr/>
        <div className="clearfix">
          <StarsFrame/>
          <ButtonFrame/>
          <AnswerFrame selectedNumbers={this.state.selectedNumbers}/>
        </div>

        <NumbersFrame selectedNumbers={this.state.selectedNumbers}
          clickNumber={this.clickNumber} />

      </div>
    );
  }
});

React.render(<Game/>, document.getElementById('container'));

var StarsFrame = React.createClass({
render: function() {
  return (
    <div id="stars-frame">
      <div class="well">
        
      </div>
    </div>
  );
}
});

var ButtonFrame = React.createClass({
render: function() {
  return (
    <div id="">
      ...
    </div>
  );
}
});

var AnswerFrame = React.createClass({
render: function() {
  return (
    <div id="">
      ...
    </div>
  );
}
});

var Game = React.createClass({
render: function() {
  return (
    <div id="game">
      <h2>Play Nine</h2>
      <StarsFrame />

    </div>
  );
}
});


React.render(
    <Game />,
    document.getElementById('container')
  );

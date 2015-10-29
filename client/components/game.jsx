GameStarter = React.createClass({
  render: function(){
    return (<div className="start-game">
     <button onClick={startGame}>Start Game</button>
    </div>);
  }
});

function startGame(){
  console.log("Start a game");
}

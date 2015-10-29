Meteor.methods({
  startGame: startGame
});

function startGame(){
  return Games.insert({
      isInProgress: true
  });
}

Meteor.publish('game', (id) => {
  return Games.find();
});

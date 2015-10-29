Meteor.methods({
  startGame: startGame
});

function startGame(){
  return Games.insert({
      isInProgress: true
  });
}

});

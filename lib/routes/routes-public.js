Router.configure({
    layoutTemplate: "Master",
    loadingTemplate: "Loading",
    notFoundTemplate: "NotFound"
});

Router.route('index',{
    path: '/',
    template: 'Home',
    onBeforeAction: function() {
        Session.set('currentRoute', 'home');
        this.next();
    }
});

Router.route('game',{
    path: '/game/:_id',
    template: 'Game',
    waitOn: function() {
      return Meteor.subscribe('game', this.params._id);
    },
    data: function() {
      return { game: Games.findOne( { _id: this.params._id }) }
    },
    action: function() {
      let existingGame = this.data().game;
      if(!existingGame) { Router.go('/');}
      if(this.ready()) this.render();
    }
});

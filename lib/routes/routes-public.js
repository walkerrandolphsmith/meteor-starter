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

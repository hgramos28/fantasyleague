Router.configure({
    layoutTemplate: 'layout',
});


Router.route('/login', function () {
    this.render('login');
});

Router.route('/', function () {
  this.render('createTeams');
});

Router.route('/rank-players', function () {
    this.render('rankPlayers');
});

Router.configure({
    layoutTemplate: 'layout',
});


//Router.onBeforeAction(function() {
Router.route('/', function () {
//    if (! Meteor.userId()) {
	Meteor.subscribe('inspect-flashscore-stats');
	this.render('statsinspectorindex');
  //} else {
    //  this.next();
  //}
});



Router.route('/login', function () {
    this.render('login');
});



/*Router.route('/rank-players', function () {
    this.render('rankPlayers');
});

Router.route('/new-game', function() {
    this.render('newGame');
});*/

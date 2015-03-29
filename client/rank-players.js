Template.rankPlayers.helpers({
    RankPlayers: function() {
	Meteor.subscribe('listaUtilizadores');
	return Meteor.users.find();
    }
})

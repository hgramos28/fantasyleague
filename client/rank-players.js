Template.rankPlayers.helpers({
    RankPlayers: function() {
	Meteor.subscribe('listaUtilizadores');
	return Meteor.users.find();
    },
    primeiro_email: function(array_emails){
	return array_emails[0].address
    }
})

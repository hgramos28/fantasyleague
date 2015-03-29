/*Meteor.methods({
    'listaUtilizadores': function () {
	/*return Meteor.users.find({}, {
	    _id: 1,
	    emails: 1
	});
	return Meteor.users.find();
	
    }
});
*/

Meteor.publish('listaUtilizadores', function(){
    return Meteor.users.find()
})

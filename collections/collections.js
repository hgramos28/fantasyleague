Player = new Mongo.Collection("player");

Player.attachSchema(new SimpleSchema({
    Name: {
	type: String,
	label: "Name",
	max: 50
    },
    username: {
	type: String,
	label: "Username",
	max: 50
    },
}));


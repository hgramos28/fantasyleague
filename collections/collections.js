Odds_comparison_result = new Mongo.Collection("Odds_comparison_result");

Odds_comparison_result.attachSchema(new SimpleSchema({
    GameHeader: {
	type: String,
	label: "GameHeader",
    },
    Result: {
	type: String,
	label: "Result",
    },
    Time: {
	type: String,
	label: "Time",
    },
    InitialOdds: {
	type: String,
	label:"InitialOdds",
    },
    CurrentOddsAH: {
	type: String,
	label: "CurrentOdds-AH",
    },
    
}));

Odds_comparison_result.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; } 
});

Names = new Meteor.Collection("names");

Names.allow({
	insert: function(){
		return true;
	},
	update: function(){
		return true;
	}
});
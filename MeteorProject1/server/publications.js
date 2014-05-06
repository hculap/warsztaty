Meteor.publish("names",function(){
	return Names.find();
})
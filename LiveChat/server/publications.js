Meteor.publish("chat", function() {
    if (this.userId)
        return Chat.find();
    return false;
});
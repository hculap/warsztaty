Chat = new Meteor.Collection("chat");

Chat.allow({
    insert: function(userId, doc) {
        if (userId)
            return true;
        return false;
    },
    update: function(userId, doc, fields, modifier) {
        if (userId)
            return true;
        return false;
    }
});
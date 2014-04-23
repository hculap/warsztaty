Template.chat.helpers({
    chatText: function() {
        var chat = Chat.findOne({
            chatTitle: Session.get("chatTitle")
        });
        if (chat)
            $("#chat-area").val(chat.text);
        return Session.get("chatTitle");
    },
    chats: function() {
        return Chat.find();
    },
    roomSelected: function() {
        return !!Session.get("chatTitle");
    },
    updatedAt: function() {
        var chat = Chat.findOne({
            chatTitle: Session.get("chatTitle")
        });
        if (chat)
            return chat.updatedAt.toLocaleString();
    },
    updatedBy: function() {
        var chat = Chat.findOne({
            chatTitle: Session.get("chatTitle")
        });
        if (chat) {
            if (chat.updatedBy) {
                if (chat.updatedBy.emails) {
                    return chat.updatedBy.emails[0].address;
                } else {
                    return chat.updatedBy.profile.name;
                }
            }
        }
    },
});

Template.chat.events({
    'keyup #chat-area': function() {
        var chat = Chat.findOne({
            chatTitle: Session.get("chatTitle")
        });
        if (chat)
            Chat.update(chat._id, {
                $set: {
                    chatTitle: Session.get("chatTitle"),
                    text: $("#chat-area").val(),
                    updatedAt: new Date(),
                    updatedBy: Meteor.user()
                }
            });
    },
    'click #room-select': function(e) {
        if ($(e.target).val())
            Session.set("chatTitle", $(e.target).val());
        else
            Session.set("chatTitle", undefined);
    },
    'click #add-room': function(e) {
        e.preventDefault();
        var chatTitle = prompt("Chat room name:");
        var textObject = {
            chatTitle: chatTitle,
            text: "",
            updatedAt: new Date()
        };
        Chat.insert(textObject);
        Session.set("chatTitle", chatTitle);
    }
});
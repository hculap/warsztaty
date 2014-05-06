Template.list.helpers({
    namesList: function() {
        return Names.find({}, {
            sort: {
                points: -1
            }
        });
    }
});
Template.list.events({
    'click li': function(e) {
        var id = $(e.target).attr("id");
        Names.update(id, {
            $inc: {
                points: 1
            }
        });
    }
});
Template.newName.events({
    'click #name-add': function() {
        Names.insert({
            name: $('#name-input').val(),
            points: 0
        });
    }
});
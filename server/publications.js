Meteor.publish('merchants', function() {
    return Merchants.find();
});
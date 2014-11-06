Template.merchantList.helpers({
  merchants: function() {
    return Merchants.find();
  }
});
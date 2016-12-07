var mongoose = require('mongoose');

var ingredientSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    created_at: Date,
    updated_at: Date
});

ingredientSchema.pre('save', function(next){
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
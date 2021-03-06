var Ingredient = require('../models/ingredient');

module.exports = function(router) {
  /*  "/ingredient"
   *    GET: finds all the ingredients
   *    POST: creates a new ingredient
   */
  router.route('/ingredient')
    .get(function(req, res){
      Ingredient.find(function(err, ingredients){
        if (err)
          res.send(err);
        res.json(ingredients);
      });
    })
    .post(function(req, res) {
      var ingredient = new Ingredient();
      ingredient.name = req.body.name;
      ingredient.quantity = req.body.quantity;
      ingredient.save((err) => {
        if (err)
          res.send(err);
        res.json(ingredient);
      });
  });

  /*  "/ingredient/:id"
   *    GET: find ingredient
   *    PUT: update ingredient
   *    DELETE: delete ingredient
   */
  router.route("/ingredient/:id")
    .get(function(req, res){
      Ingredient.findById(req.params.id, function(err, ingredient){
        if (err)
          res.send(err);
        res.json(ingredient);
      });
    })
    .put(function(req, res) {
      Ingredient.findById(req.params.id, function(err, ingredient) {
        if (err)
          res.send(err);

        ingredient.name = req.body.name;
        ingredient.quantity = req.body.quantity;
        ingredient.save(function(err) {
          if (err)
            res.send(err);
          res.json(ingredient);
        });
      });
    })
    .delete(function(req, res) {
      Ingredient.remove({
        _id: req.params.id
      }, function(err, ingredient) {
        if (err)
          res.send(err);
        res.json({ message: 'Successfully deleted' });
      });
    });

}
var helper = require ("panas").helper;
var Router = helper.Router;

module.exports = Routes;

function Routes (name, mid, handle) {

  var router = new Router(name, mid);

  // users
  router.GET ("/users/:domain/active", handle.findActive);
  router.GET ("/users/:domain/inactive", handle.findInactive);
  router.GET ("/users/:domain/pending", handle.findPending);
  router.GET ("/users/:domain/waiting", handle.findPendingTransaction);
  router.GET ("/users/:domain/:id", handle.findOne);
  router.GET ("/users/:id", handle.findOne);
  router.POST ("/users", handle.create);
  router.POST ("/users/suggest", handle.suggest);
  router.PUT ("/users/:id", handle.update);
  router.DEL ("/users/:id", handle.remove);
  router.DEL ("/users", handle.remove);

  router.GET ("/account", handle.account);
  router.POST ("/account/login", handle.authenticate);
  router.GET ("/account/activate/:secret", handle.activate);

  // return the router;
  return router;
}

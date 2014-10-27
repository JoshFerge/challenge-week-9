var rest        = require("restler"),
    MongoClient = require("mongodb").MongoClient,
    GitHubApi   = require("github"),
    async       = require("async"),
    _           = require("underscore");

var github = new GitHubApi({
  version: "3.0.0",
});

function getClassEventsForPage(i, callback){
  github.events.getFromOrg({
      org: "CSCI-4830-002-2014",
      page: i
    }, callback);
};

function flattenFast(input){
  return input.reduce(function(a, b) {
      return a.concat(b);
    }, []);
};

MongoClient.connect("mongodb://127.0.0.1:27017/test", function(err, db) {
  if(err)
    throw err;

  console.log("Dropping collection...");

  db.dropCollection("course_events", function(err, result) {
    console.log("dropped: ");
    console.dir(result);
  });

  async.map(_.range(1,11), getClassEventsForPage, function(err, results) {
    data = flattenFast(results);

    var collection = db.collection("course_events");
    collection.insert(data, function(err, docs) {

      collection.find().toArray(function(err, results) {
        results.forEach(function(x) {
           console.log("type:" + x.type + ", actor:" + x.actor.login) + ", repo:" + x.repo.name;
        });

        db.close();
      });
    });
  });
})
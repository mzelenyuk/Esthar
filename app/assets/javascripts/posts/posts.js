Esthar.factory('posts', ['$http', function ($http) {
  var object = {
    posts: []
  };

  object.getAll = function () {
    return $http.get('/posts.json').success(function (data) {
      angular.copy(data, object.posts);
    });
  };

  object.create = function (post) {
    return $http.post('/posts.json', post).success(function (data) {
      object.posts.push(data);
    });
  };

  object.upvote = function (post) {
    return $http.put('/posts/' + post.id + '/upvote.json', post).success(function () {
      post.upvotes += 1;
    });
  };

  return object;
}]);

var Product = Backbone.Model.extend({});

var Products = Backbone.Collection.extend({

  model: Product,

  url: function() {
    var proxy    = "https://jsonp.nodejitsu.com/"
    var endpoint = "https://api.etsy.com/v2/listings/active"
    var params   = $.param({
      "api_key" : "h9oq2yf3twf4ziejn10b717i",
      "keywords": "whiskey",
      "includes": "Images,Shop"
    });
    return proxy + "?url=" + encodeURIComponent(endpoint + "?" + params);
  },

  parse: function(data) {
    return data.results;
  }


});

var App = Backbone.Router.extend({

  initialize: function() {

    this.products     = new Products();
    this.productsView = new ProductsView({collection: this.products});
    this.nav          = new NavView();
    this.homeView     = new HomeView();
    this.termsView    = new TermsView();

    // initial structure

    $("body").html( JST.app() );
    $("header").html( this.nav.render().el );
    this.$main = $(".main");

    // listeners

    this.listenTo(this.products, "request", function(){
      this.nav.showSpinner();
    });

    this.listenTo(this.products, "sync", function(){
      this.nav.hideSpinner();
    });

    this.listenTo(this.nav, "link:click", function(name){

      this.navigate(name);
      
      switch(name) {
        case "products":
          this.showProducts();
        break;
        case "terms":
          this.showTerms();
        break;
        default:
          this.showHome();
        break;
      }
    });

    // default to showing home

    this.showHome();
  },


  routes: {
    "" : "showHome",
    "products" : "showProducts",
    "terms" : "showTerms"
  },

  showProducts: function() {
    this.$main.html( this.productsView.render().el );
    if( !this.products.length ) {
      this.products.fetch();
    }
  },

  showHome: function() {
    this.$main.html( this.homeView.render().el );
  },

  showTerms: function() {
    this.$main.html( this.termsView.render().el );
  }


});





// var App = (function(){

//   function App() {
//     _.extend(this, Backbone.Events);

//     // views

//     this.products     = new Products();
//     this.productsView = new ProductsView({collection: this.products});
//     this.nav          = new NavView();
//     this.homeView     = new HomeView();
//     this.termsView    = new TermsView();

//     // initial structure

//     $("body").html( JST.app() );
//     $("header").html( this.nav.render().el );
//     this.$main = $(".main");

//     // listeners

//     this.listenTo(this.products, "request", function(){
//       this.nav.showSpinner();
//     });

//     this.listenTo(this.products, "sync", function(){
//       this.nav.hideSpinner();
//     });

//     this.listenTo(this.nav, "link:click", function(name){
//       switch(name) {
//         case "products":
//           this.showProducts();
//         break;
//         case "terms":
//           this.showTerms();
//         break;
//         default:
//           this.showHome();
//         break;
//       }
//     });

//     // default to showing home

//     this.showHome();
//   }

//   App.prototype = {



//   };

//   return App;

// })();

Posts = new Meteor.Collection('posts');

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to cloud2.";
  };

  Template.postList.posts = function() {
    return Posts.find({});
  };



  var doPost  = function(){

    console.log('i am clicked');
    var title = $("#newPostTitle").val();
    var content = $("#newPostContent").val();

    if( title && content)
      Posts.insert({'title': title, 'content' : content});

    $("#newPostTitle").val('');
    $("#newPostContent").val('');
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

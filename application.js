$(document).ready(function() {

  var collection = new Collection();

  $(".question").on('click', 'a', function(e) {
    e.preventDefault();
    collection[$(this).attr("class")] = $(this).attr("id");
    if (collection.allFull()) {
      var type = collection.generateType();
      $(".question").hide();
      $(".data").show();
      $("#" + type).addClass("currentType");
  });
});

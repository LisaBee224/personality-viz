$(document).ready(function() {

  var collection = new Collection();

  $(".question").on('click', 'a', function(e) {
    e.preventDefault();
    collection[$(this).attr("class")] = $(this).attr("id");
    console.log(collection);
    if (collection.allFull()) {
      var type = collection.generateType();
      $(".question").hide();
      $(".data").show();
      $("#" + type).css("background-color", "#ff1ac6");
    }
  });

  $("#E").mouseover(function(){
    $("#PE").fadeIn(500);
  })
  $("#E").mouseout(function(){
    $("#PE").fadeOut(500);
  });
  $("#I").mouseover(function(){
    $("#PI").fadeIn(500);
  })
  $("#I").mouseout(function(){
    $("#PI").fadeOut(500);
  });
  $("#S").mouseover(function(){
    $("#PS").fadeIn(500);
  })
  $("#S").mouseout(function(){
    $("#PS").fadeOut(500);
  });
  $("#N").mouseover(function(){
    $("#PN").fadeIn(500);
  })
  $("#N").mouseout(function(){
    $("#PN").fadeOut(500);
  });
  $("#T").mouseover(function(){
    $("#PT").fadeIn(500);
  })
  $("#T").mouseout(function(){
    $("#PT").fadeOut(500);
  });
  $("#P").mouseover(function(){
    $("#PP").fadeIn(500);
  })
  $("#P").mouseout(function(){
    $("#PP").fadeOut(500);
  });
  $("#J").mouseover(function(){
    $("#PJ").fadeIn(500);
  })
  $("#J").mouseout(function(){
    $("#PJ").fadeOut(500);
  });
});

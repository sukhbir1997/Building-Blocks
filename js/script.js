
// ============================================= FUNCTIONS
function dragload(){
  $( function() {
          $( ".drag" ).draggable({ containment: "#container", scroll: false });
        } );
}

//=============================================PYRAMID
$("#pyramid").on("click", function(){
  $("h3").fadeOut(600, function(){
      var sizeDisplay = $("span").text();
      var x = "<img src='img/pyramid.png' class='drag ui-draggable ui-draggable-handle' style='position: relative;'>"
      $(x).appendTo('#container').css("width", sizeDisplay);
        dragload();
  });
  $("a").removeClass("active");
    $(this).addClass("active");
});


//=============================================CIRCLE
$("#circle").on("click", function(){
  $("h3").fadeOut(600, function(){
      var sizeDisplay = $("span").text();
      var x = "<img src='img/circle.png' class='drag ui-draggable ui-draggable-handle' style='position: relative;'>"
      $(x).appendTo('#container').css("width", sizeDisplay);
        dragload();
    });
  $("a").removeClass("active");
    $(this).addClass("active");
});


//=============================================RECTANGLE
$("#rectangle").on("click", function(){
  $("h3").fadeOut(600, function(){
      var sizeDisplay = $("span").text();
      var x = "<img src='img/rectangle.png' class='drag ui-draggable ui-draggable-handle' style='position: relative;'>"
      $(x).appendTo('#container').css("width", sizeDisplay);
        dragload();
  });
  $("a").removeClass("active");
    $(this).addClass("active");
});


//=============================================TRIANGLE
$("#triangle").on("click", function(){
  $("h3").fadeOut(600, function(){
    var sizeDisplay = $("span").text();
      var x = "<img src='img/triangle.png' class='drag ui-draggable ui-draggable-handle' style='position: relative;'>"
       $(x).appendTo('#container').css("width", sizeDisplay);
      dragload();
  });
  $("a").removeClass("active");
    $(this).addClass("active");
});


//=============================================OPPOSITE TRIANGLE
$("#oppositetriangle").on("click", function(){
  $("h3").fadeOut(600, function(){
    var sizeDisplay = $("span").text();
      var x = "<img src='img/oppositetriangle.png' class='drag ui-draggable ui-draggable-handle' style='position: relative;'>"
       $(x).appendTo('#container').css("width", sizeDisplay);
      dragload();
  });
  $("a").removeClass("active");
    $(this).addClass("active");
});


//=============================================SQUARE
$("#square").on("click", function(){
  $("h3").fadeOut(600, function(){
    var sizeDisplay = $("span").text();
      var x = "<img src='img/square.png' class='drag ui-draggable ui-draggable-handle' style='position: relative;'>"
       $(x).appendTo('#container').css("width", sizeDisplay);
      dragload();
  });
  $("a").removeClass("active");
    $(this).addClass("active");
});


//=============================================CUBE
$("#cube").on("click", function(){
  $("h3").fadeOut(600, function(){
    var sizeDisplay = $("span").text();
      var x = "<img src='img/cube.png' class='drag ui-draggable ui-draggable-handle' style='position: relative;'>"
       $(x).appendTo('#container').css("width", sizeDisplay);
      dragload(); 
  });
  $("a").removeClass("active");
    $(this).addClass("active");
});

//=============================================HEART
$("#heart").on("click", function(){
  $("h3").fadeOut(600, function(){
    var sizeDisplay = $("span").text();
      var x = "<img src='img/heart.png' class='drag ui-draggable ui-draggable-handle' style='position: relative;'>"
       $(x).appendTo('#container').css("width", sizeDisplay);
      dragload();
  });
  $("a").removeClass("active");
    $(this).addClass("active");
  });


//=============================================STAR
$("#star").on("click", function(){
  $("h3").fadeOut(600, function(){
    var sizeDisplay = $("span").text();
      var x = "<img src='img/star.png' class='drag ui-draggable ui-draggable-handle' style='position: relative;'>"
       $(x).appendTo('#container').css("width", sizeDisplay);
      dragload();
  });
  $("a").removeClass("active");
    $(this).addClass("active");
});

//=============================================
$("#startbtn").click(function(){
  $("html,body").animate({ scrollTop: $(".app").offset().top} ,1300)
});

//=============================================CHANGE SIZE

$("input").keypress(function(event){
  if(event.which ===13){
   var x = $(this).val();
   var size = x +"em" ;
   $("span").text(size);
  }
});

//===========================================CLEARING PAD

$("#clear").on("click", function(){
  $("img").remove()
});

//========================================UNDO LAST

$("#undo").on("click", function(){
  $("img:last-of-type").remove();
});
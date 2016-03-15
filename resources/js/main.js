for (var i = 0; i < 18; i++) {
  $('<span class="glyphicon glyphicon-star" aria-hidden="true"></span>').appendTo(".stars");
}

function initMap() {
  var mapDiv = document.getElementById('map');
  var myLatLng = {lat:50.015093,lng:36.220277};
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    zoom: 18
  });
    var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Mobius Labs'
  });
}


$( ".accept-offer" ).click(function() {
  $( this ).css("display","none");
  $(".offer").animate({
    top:"+=300"
  },500,function(){
  });
});

var dirSelect = function(){
  var d = Math.ceil(Math.random()*4);
  var directions=["top","bottom","left","right"];
  return directions[d-1];
};

var dirSelect2 = function(elem){
  var h = elem.height();
  var w = elem.width();
  var x = -(event.pageX - elem.offset().left - elem.width()/2)/(elem.width()/2)*200;
  var y = event.pageY - elem.offset().top;
  var directions=[{"top":"+=200"},{"top":"-=200"}];
  directions[0].left=x+"";
  directions[1].left=x+"";
  console.log(directions[y<(h/2)?0:1]);
  return directions[y<(h/2)?0:1];
};



$( ".bonus" ).hover( function(){
  var direction = dirSelect2($(this));
  var x = (event.pageX - $(this).offset().left - $(this).width()/2)/($(this).width()/2);
  var y = event.pageY - $(this).offset().top;
  console.log(x,y,$(this).width());
  $(this).css({"position":"relative","z-index":"30","color":"blue","display":"hidden"});
  var anim={opacity:"0.5"};
  // anim[direction] = "+=300";
  anim=direction;
  $(this).animate(anim,500,"easeOutBounce");
},function(){

  $(this).css({"display":"block"});

});

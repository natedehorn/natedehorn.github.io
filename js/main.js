function showMore() {

}
jQuery.fn.clickToggle = function(a,b) {
  var ab = [b,a];
  return this.on("click", function(){ ab[this._tog^=1].call(this); });
};
$(".blogpost").clickToggle(function(){
    $(this).children(".post-content").show();
}, function(){
    $(this).children(".post-content").hide();
});

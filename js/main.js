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

$(document).ready(function(){
    $("#eth code").click(function () {
        copyToClipboard($("#eth code"));
    });
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  addAlert("copied!")
  $temp.remove();
}

function addAlert(summary) {
    $('html').prepend('<div class="alert alert-info alert-fixed text_center" role="alert"><strong>' + summary + '</strong></div>');
    setTimeout(function() { $('.alert').slideUp(); }, 1000);
}

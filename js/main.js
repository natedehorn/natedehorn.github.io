/* global $:false */
$('.post').click(function () {
  $(this).children('.post-content').toggle()
})

$(document).ready(function () {
  $('#eth code').click(function () {
    copyToClipboard($('#eth code'))
  })
  $('#fish_sort').val('sort by...')
  $('#fish_sort').change(function () {
    sort($('#fish_sort'))
  })
})

function sort (element) {
  switch (element.val()) {
    case 'length':
      console.log('length')
      $('.post').sort(function (a, b) {
        var aLength = $(a).find('.post-subtitle').text().split(' ')[0]
        var bLength = $(b).find('.post-subtitle').text().split(' ')[0]
        return aLength < bLength ? 1 : (aLength > bLength ? -1 : 0)
      }).each(function () {
        var elem = $(this)
        elem.remove()
        $(elem).appendTo('#fish_container')
      })
      break
    case 'date':
      $('.post').sort(function (a, b) {
        var aDate = new Date($(a).find('h4:contains("date")').text().split(':')[1].trim())
        var bDate = new Date($(b).find('h4:contains("date")').text().split(':')[1].trim())
        return aDate < bDate ? 1 : (aDate > bDate ? -1 : 0)
      }).each(function () {
        var elem = $(this)
        elem.remove()
        $(elem).appendTo('#fish_container')
      })
      break
  }
  $('.post').click(function () {
    $(this).children('.post-content').toggle()
  })
}

function copyToClipboard (element) {
  var $temp = $('<input>')
  $('body').append($temp)
  $temp.val($(element).text()).select()
  document.execCommand('copy')
  addAlert('copied!')
  $temp.remove()
}

function addAlert (summary) {
  $('html').prepend('<div class="alert alert-info alert-fixed text_center" role="alert"><strong>' + summary + '</strong></div>')
  setTimeout(function () { $('.alert').slideUp() }, 1000)
}

/* eslint-disable */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-123302297-1', 'auto');
ga('send', 'pageview');
/* eslint-enable */

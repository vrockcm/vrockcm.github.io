jQuery_1('.txt').html(function(i, html) {
  var chars = jQuery_1.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});
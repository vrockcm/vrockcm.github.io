jQuery_1('.txt').html(function(i, html) {
  var chars = jQuery_1.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});

jQuery_1('.skill').html(function(i, html) {
  var chars = ["S","K","I","L","L","S"," & ","I","N","T","E","R","E","S","T","S"];

  return '<span>' + chars.join('</span><span>') + '</span>';
});
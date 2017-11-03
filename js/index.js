$(document).ready(function(){  // do not delete
// ----------------------------------------------------------------------------
// Learn to use jQuery:
//    .mouseenter
//    .mouseleave
//    .css('opacity', '0.25')
//    .fadeTo()
// ----------------------------------------------------------------------------


// first line sets the item to a faded state immediately
$('.seasons img').css('opacity', '0.25');

$('.seasons img').mouseenter(function() {
	$(this).fadeTo('fast', 1)
});

$('.seasons img').mouseleave(function() {
	$(this).fadeTo('fast', 0.25);
});


// ----------------------------------------------------------------------------
}); // do not delete

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Park Springs Communities Javascript Functions
// This file includes a collection of functions for use on the Park Springs Communities site
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(function()
{
	// text resizer
	$('.text_plus').click(text_increase);
	$('.text_minus').click(text_decrease);

	// leadership team profile effects
	if($('#leadership_team').length > 0) {
		$('#leadership_team .summary').click(show_profile);
		$('#leadership_team .full .close').click(hide_profile);
	}

	// expander
	if($('.expander').length > 0) {
		$('.expander .expand').click(expand);
		$('.expander .collapse').click(collapse);
	}

	// clear email updates input
	$('.email_update').click(clear_field);

});

function text_increase()
{
	$('#content p,#content ul').css('font-size','20px');
	$('.sidebar_box').css('font-size','17px');
}

function text_decrease()
{
	$('#content p').css('font-size','17px');
	$('.sidebar_box').css('font-size','14px');
}

function show_profile()
{
	$('#leadership_team .summary').fadeOut();
	$(this).siblings('.full').fadeIn();
}

function hide_profile()
{
	$('#leadership_team .full').fadeOut();
	$('#leadership_team .summary').fadeIn();
}

function expand()
{
	$(this).siblings().children('.collapse').parent().slideDown();
}

function collapse()
{
	$(this).parent().slideUp();
}

function clear_field()
{
	$(this).attr('value','');
}


$(document).ready(function() {

	/*
	 * tape
	 */

	var prevewnum = $('div.preview').size();

	$('#tape').width(prevewnum * 1000);

	var preview = 0;
	var dclick = false;
	var previewlink = 0;
	var tape = $('#tape');

	$($('#allanons a').get(preview)).addClass('active');

	var changeanons = function(preview, previewlink) {
		dclick = true;
		var firstpreview = $($('div.preview').slice(0, preview));
		var lastpreview = $($('div.preview').slice(preview));
		var left = -preview * 1000;
		var previewabs = Math.abs(preview);
		$('#allanons a').removeClass('active');
		$('#allanons a').eq(previewlink).addClass('active');
		if (preview > 0) {
			if (previewabs > prevewnum / 2) {
				left = (prevewnum - preview) * 1000;
				tape.css({
							left : -left + 'px'
						});
				lastpreview.clone().prependTo('#tape');
				lastpreview.remove();
				tape.animate({
							left : '0px'
						}, 600, function() {
							dclick = false;
						});
			} else {
				tape.animate({
							left : left + 'px'
						}, 600, function() {
							firstpreview.clone().appendTo('#tape');
							firstpreview.remove();
							tape.css({
										left : '0px'
									});
							dclick = false;
						});
			}

		}
		if (preview < 0) {
			if (previewabs > prevewnum / 2) {
				left = -(prevewnum + preview) * 1000;
				tape.animate({
							left : left + 'px'
						}, 600, function() {
							firstpreview.clone().appendTo('#tape');
							firstpreview.remove();
							tape.css({
										left : '0px'
									});
							dclick = false;
						});
			} else {
				tape.css({
							left : -left + 'px'
						});
				firstpreview.clone().appendTo('#tape');
				firstpreview.remove();
				tape.animate({
							left : '0px'
						}, 600, function() {
							dclick = false;
						});
			}
		}

	};

	$('#nexta').click(function() {
				if (!dclick) {
					preview = 1;
					if (previewlink != (prevewnum - 1)) {
						previewlink++;
					} else {
						previewlink = 0;
					};
					changeanons(preview, previewlink);
				} else {
					return false;
				}
			});

	$('#allanons a').live('click', function() {
		if ($(this).hasClass('active')) {
			return false;
		}

		if (!dclick) {
			previewlink = $('#allanons a').index($(this));
			preview = previewlink
					- $('#allanons a').index($('#allanons a.active'));
			changeanons(preview, previewlink);

			return false;
		} else {
			return false;
		}
	});

	/*
	 * allanons
	 */

	$('#tape h1').each(function() {
				var heading = $(this).text();
				$('#allanons').append('<a href="#">' + heading + '</a>');
			});

	$('#allanons a:eq(0)').addClass('active');
	/*
	 * filters blocks
	 */
	$('ul li').click(function() {
				$(this).addClass('active').siblings('li').removeClass('active');
			});

	var filterthis = 0;
	var filters = $('.filters');
	var filterli = $('ul.tabs li', filters);
	var changefilter = function(filter, Tp) {
		$('div.whiteblock', Tp.parent()).hide();
		$('div.whiteblock:eq(' + filter + ')', Tp.parent()).show();
	};

	filters.each(function() {
				changefilter(0, $("ul.tabs", $(this)));
			});

	filterli.click(function() {
				var Tp = $(this).parent();
				filterthis = $("li", Tp).index($(this));
				changefilter(filterthis, Tp);
				return false;
			});

	/*
	 * news/blogs/comments
	 */

	var visiblenow = '#newsblock';
	$('#blogblock, #commentsblock').hide();

	$('ul.menu1 li').live('click', function(event) {
				event.preventDefault();
				$(visiblenow).hide();
				visiblenow = '#' + $(this).find('a').attr('rel');
				$(visiblenow).show();
				return false;
			});
	/*
	 * rainbow
	 */

	$("#rainbowslider").slider({

	});

	/*
	 * filter steps
	 */
	var stepthis = 0;
	var stepli = $('.filters ul.steps li');
	var changestep = function(step) {
		$('.filters div.params').hide();
		$('#step' + step).show();
		stepli.eq(step).addClass("active").siblings("li").removeClass("active");
	};
	changestep(0);
	stepli.live('click', function() {
				stepthis = stepli.index($(this));
				changestep(stepthis);
				return false;
			});

	$('.filters div.nextstep').live('click', function() {
				$('div.calendar:visible').hide();
				if (stepthis == (stepli.size() - 1)) {
					stepthis = 0;
					changestep(stepthis);
				} else {
					stepthis++;
					changestep(stepthis);
				}
			});

	/*
	 * inputs
	 */

	$('input[type=checkbox]').addClass('checkbox');

	$('input[type=text]').addClass('text');

});

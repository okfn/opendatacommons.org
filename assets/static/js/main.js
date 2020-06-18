$(document).ready(function() {
	var $menu = $('#contents'),
		$html = $('html, body');

	$menu.mmenu({
    // options
		offCanvas	: {
			position 	: "right"
		},
		navbar 		: {
			title 		: "Contents"
		},
    extensions: ["pageshadow"]
	}, {
    // configuration
    classNames: {
      fixedElements: {
        fixed: "contents-toggle"
      }
    }
  });

	var API = $menu.data( "mmenu" );
	API.setSelected( $menu.find( "li" ).first() );

	var closer = null;

	$menu.find( 'a' ).on( 'click', function() {
		closer = $(this).attr( "href" );
	});

	API.bind( "closed", function() {
		if ( closer ) {
			setTimeout( function() {
				$html.animate({
					scrollTop: $(closer).offset().top
				});
				closer = null;
			}, 25 );
		}
	});
});

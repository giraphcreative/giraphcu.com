
$(function(){

	// set up some variables.
	var win = $(window),
		menu = $("nav ul"),
		header = $(".header"),

		// set the header height
		set_header_height = function(){

			if ( matchMedia('only screen and (min-width: 768px)').matches  ) {

				header.height(
					win.height() - menu.height() - 
					header.css("padding-top").replace("px","") - 
					header.css("padding-bottom").replace("px","") 
				);

			} else {

				header.height( 
					win.height() - 
					header.css("padding-top").replace("px","") - 
					header.css("padding-bottom").replace("px","") 
				);

			}

		},

		// set project heights
		set_project_heights = function() {
			project = $(".project"),
			project_caption = $(".project .caption"),
			project_width = project.width(),
			project_end_height = project_width - 
				project_caption.css("padding-top").replace("px","") - 
				project_caption.css("padding-bottom").replace("px","");

			// set some project heights
			project.height( project_width );
			project_caption.height( project_end_height );
		};


	// set heights on load
	set_header_height();
	set_project_heights();

	// header height on resize
	win.resize(function(){

		// set header heights
		set_header_height();

		// set project heights
		set_project_heights();

	});

});

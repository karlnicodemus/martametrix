function toggle_visibility(id) {
    	var test = document.getElementById("map");
    	if( $(test).hasClass("col-md-9")) { defmode = true }
		else { defmode = false; }

		var mdB = "col-md-9";
		var mdS = "col-md-3";
		var xsB = "col-xs-10";
		var xsS = "col-xs-2";

		var datashow = document.getElementsByClassName("data-complete")[0];
		var datahide = document.getElementsByClassName("data-hidden")[0];
       	var eS = document.getElementById(id);
       	if (id == "map") { 
       		var eD = document.getElementById("data");
       		if (defmode) {
       			// On this mode - Do nothing!
       			/*$(eD).removeClass(mdS);   $(eD).removeClass(xsS);
       			$(eS).removeClass(mdB);   $(eS).removeClass(xsB);
       			$(eD).addClass(mdB); 	 $(eD).addClass(xsB);
       			$(eS).addClass(mdS); 	 $(eS).addClass(xsS); 
       			defmode = false;

       			datahide.style.display = 'none';
       			datashow.style.display = 'inline';
        	} else {
       			$(eD).removeClass(mdB);   $(eD).removeClass(xsB);
       			$(eS).removeClass(mdS);   $(eS).removeClass(xsS);
       			$(eD).addClass(mdS); 	 $(eD).addClass(xsS); 
       			$(eS).addClass(mdB); 	 $(eS).addClass(xsB);
       			defmode = true;
       			datahide.style.display = 'inline';
       			datashow.style.display = 'none';*/
        	}
        }

        if (id == "data") { 
       		var eD = document.getElementById("map");
       		if (defmode) {
       			$(eD).removeClass(mdB);   $(eD).removeClass(xsB);
       			$(eS).removeClass(mdS);   $(eS).removeClass(xsS);
       			$(eD).addClass(mdS); 	 $(eD).addClass(xsS); 
       			$(eS).addClass(mdB); 	 $(eS).addClass(xsB);

       			defmode = false;
       			datahide.style.display = 'none';
       			datashow.style.display = 'inline';
        	} else {
        		// On this mode - Do nothing!
       			$(eD).removeClass(mdS);   $(eD).removeClass(xsS);
            $(eS).removeClass(mdB);   $(eS).removeClass(xsB);
            $(eD).addClass(mdB);   $(eD).addClass(xsB);
            $(eS).addClass(mdS);   $(eS).addClass(xsS); 
            defmode = true;

            datahide.style.display = 'inline';
            datashow.style.display = 'none';
        	}
        }
    }
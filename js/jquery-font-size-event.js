/****************************************************************************
	jquery-font-size-event.js,

	(c) 2017, FCOO

	https://github.com/FCOO/jquery-font-size-event
	https://github.com/FCOO

****************************************************************************/

(function ($, window/*, document, undefined*/) {
	"use strict";


    $.DEFAULT_BROWSER_FONT_SIZE = '16px';

    var eventId = 'fontSizeChanged',
        refHeightFactor = 2,
        $fontSizeDetectElement =
            $('<span/>')
                .html('S&nbsp;<br>&nbsp;')
                .css({
                    'position' : 'absolute',
                    'top'      : '-1000px',
                    'font-size': '1rem',
                    'width'    : refHeightFactor+'rem',
                    'height'   : refHeightFactor+'rem'
                })
                .appendTo( $('body') );


    window.addResizeListener( $fontSizeDetectElement.get(0), function(){
        var refHeightPx = parseFloat( $fontSizeDetectElement.height() ),
            fontSize = {
                fontSizeRem    : 1,
                fontSizePx     : refHeightPx/refHeightFactor,
                fontSizePercent: Math.round(100*refHeightPx/refHeightFactor/parseFloat( $.DEFAULT_BROWSER_FONT_SIZE ))
            };

        $fontSizeDetectElement.trigger( eventId, fontSize );
    });


    $.onFontSizeChanged = function( handler, context ){
        $fontSizeDetectElement.on( eventId, $.proxy( handler, context ) );
    };

}(jQuery, this, document));
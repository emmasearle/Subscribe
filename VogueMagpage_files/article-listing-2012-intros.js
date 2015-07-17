var ARTICLELISTING2012INTROS = function () {
    //Hide full bio
    $(function () {
        var $intro = $('.articleListing2012-Topics .intro,.articleListing2012-CopyLed .intro');

        var childElements = $intro.children();
        var hiddenHtml = "";
        if (childElements.length > 2) {
            var count = 0;
            childElements.each(function () {
                if (count == 2) {
                    hiddenHtml += "<div class='hiddenContent closed'>";
                    hiddenHtml += $(this)[0].outerHTML;
                    $(this).remove();
                }
                else if (count == childElements.length - 1) {
                    hiddenHtml += "</div>";
                    hiddenHtml += $(this)[0].outerHTML;
                    $(this).remove();
                }
                else if (count != 0) {
                    hiddenHtml += $(this)[0].outerHTML;
                    $(this).remove();
                }
                count++;
            });
        }

        $intro.append(hiddenHtml);

        $intro.find('.readMore').click(function () {
            var hiddenContent = $intro.find('.hiddenContent');
            var btn = $intro('.readMore');
            if (hiddenContent.hasClass('closed')) {
                hiddenContent.removeClass('closed');
                hiddenContent.addClass('open');
                btn.removeClass('closed');
                btn.addClass('open');
                hiddenContent.slideDown('slow');
                btn.html("Close Biography<span class='arrowContainer'><span class='arrow'></span></span>");
            }
            else {
                hiddenContent.removeClass('open');
                hiddenContent.addClass('closed');
                btn.removeClass('open');
                btn.addClass('closed');
                $('html').animate({
                    scrollTop: (0)
                }, 600, function () {
                    hiddenContent.css('display', 'none');
                });
                btn.html("Read Biography<span class='arrowContainer'><span class='arrow'></span></span>");
            }
        });

    });

} ();
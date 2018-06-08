(function (Drupal, $, window) {
    Drupal.behaviors.basic = {
        attach: function (context, settings) {

            $(".nav li.expanded").hover(
                function(){
                    $(this).addClass("open");
                },function(){
                    $(this).removeClass("open");
                }
            );

        }
    };

} (Drupal, jQuery, this));



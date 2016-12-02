$(document).ready(function() {

    $("#primary-nav li").on("click", function(event) {
        // stop link from trying to navigate away
        event.preventDefault();

        // this represents the # in the href, i.e. pulls the ID of content section we want to see
        var contentSectionDesired = $(this).find("a").attr("href");

        if ($(this).hasClass("active")) {
            // Slide out of view
            // Remove class of "active"
            $(this).removeClass("active");
            $("#slide-down").slideUp();

        } else {
            $(contentSectionDesired).show().siblings().hide();
            // Hide/show appropriate content

            // Slide down content
            $("#slide-down").slideDown();

            $("#primary-nav li").removeClass("active");

            // Add class of "active" - order matters for above removeClass
            $(this).addClass("active");
        }
    });

});

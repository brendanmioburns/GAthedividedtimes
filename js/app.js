$(document).ready(function() {

    $(".international").on("click", function(event) {
        // stop link from trying to navigate away
        event.preventDefault();

        // add the class of active and perform the slide animation
        if ($(this).hasClass("active")) {
            // Slide out of view
            // Remove class of "active"
            $(this).removeClass("active");
            $("#slide-down").slideUp();

        } else {
            // Hide/show appropriate content
            // show only the international section
            // same thing as $("#international-drop").css("display", "block");
            $("#international-drop").show();
            $("#politics-drop").hide();
            $("#business-drop").hide();
            $("#technology-drop").hide();
            $("#culture-drop").hide();
            $("#blogs-drop").hide();

            // Slide down content
            $("#slide-down").slideDown();

            $("#primary-nav li").removeClass("active");

            // Add class of "active" - order matters for above removeClass
            $(this).addClass("active");
        }
    });

    $(".politics").on("click", function(event) {
        // stop link from trying to navigate away
        event.preventDefault();

        // add the class of active and perform the slide animation
        if ($(this).hasClass("active")) {
            // Slide out of view
            // Remove class of "active"
            $(this).removeClass("active");
            $("#slide-down").slideUp();

        } else {
            // Hide/show appropriate content
            // show only the politics section
            // same thing as $("#politics-drop").css("display", "block");
            $("#international-drop").hide();
            $("#politics-drop").show();
            $("#business-drop").hide();
            $("#technology-drop").hide();
            $("#culture-drop").hide();
            $("#blogs-drop").hide();

            // Slide down content
            $("#slide-down").slideDown();

            $("#primary-nav li").removeClass("active");

            // Add class of "active" - order matters for above removeClass
            $(this).addClass("active");
        }
    });

    $(".business").on("click", function(event) {
        // stop link from trying to navigate away
        event.preventDefault();

        // add the class of active and perform the slide animation
        if ($(this).hasClass("active")) {
            // Slide out of view
            // Remove class of "active"
            $(this).removeClass("active");
            $("#slide-down").slideUp();

        } else {
            // Hide/show appropriate content
            // show only the business section
            // same thing as $("#business-drop").css("display", "block");
            $("#international-drop").hide();
            $("#politics-drop").hide();
            $("#business-drop").show();
            $("#technology-drop").hide();
            $("#culture-drop").hide();
            $("#blogs-drop").hide();

            // Slide down content
            $("#slide-down").slideDown();

            $("#primary-nav li").removeClass("active");

            // Add class of "active" - order matters for above removeClass
            $(this).addClass("active");
        }
    });

    $(".technology").on("click", function(event) {
        // stop link from trying to navigate away
        event.preventDefault();

        // add the class of active and perform the slide animation
        if ($(this).hasClass("active")) {
            // Slide out of view
            // Remove class of "active"
            $(this).removeClass("active");
            $("#slide-down").slideUp();

        } else {
            // Hide/show appropriate content
            // show only the technology section
            // same thing as $("#technology-drop").css("display", "block");
            $("#international-drop").hide();
            $("#politics-drop").hide();
            $("#business-drop").hide();
            $("#technology-drop").show();
            $("#culture-drop").hide();
            $("#blogs-drop").hide();

            // Slide down content
            $("#slide-down").slideDown();

            $("#primary-nav li").removeClass("active");

            // Add class of "active" - order matters for above removeClass
            $(this).addClass("active");
        }
    });

    $(".culture").on("click", function(event) {
        // stop link from trying to navigate away
        event.preventDefault();

        // add the class of active and perform the slide animation
        if ($(this).hasClass("active")) {
            // Slide out of view
            // Remove class of "active"
            $(this).removeClass("active");
            $("#slide-down").slideUp();

        } else {
            // Hide/show appropriate content
            // show only the culture section
            // same thing as $("#culture-drop").css("display", "block");
            $("#international-drop").hide();
            $("#politics-drop").hide();
            $("#business-drop").hide();
            $("#technology-drop").hide();
            $("#culture-drop").show();
            $("#blogs-drop").hide();

            // Slide down content
            $("#slide-down").slideDown();

            $("#primary-nav li").removeClass("active");

            // Add class of "active" - order matters for above removeClass
            $(this).addClass("active");
        }
    });

    $(".blogs").on("click", function(event) {
        // stop link from trying to navigate away
        event.preventDefault();

        // add the class of active and perform the slide animation
        if ($(this).hasClass("active")) {
            // Slide out of view
            // Remove class of "active"
            $(this).removeClass("active");
            $("#slide-down").slideUp();

        } else {
            // Hide/show appropriate content
            // show only the blogs section
            // same thing as $("#blogs-drop").css("display", "block");
            $("#international-drop").hide();
            $("#politics-drop").hide();
            $("#business-drop").hide();
            $("#technology-drop").hide();
            $("#culture-drop").hide();
            $("#blogs-drop").show();

            // Slide down content
            $("#slide-down").slideDown();

            $("#primary-nav li").removeClass("active");

            // Add class of "active" - order matters for above removeClass
            $(this).addClass("active");
        }
    });
});

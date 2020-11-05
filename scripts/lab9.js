$(document).ready(function( ) {
 
    // 2. change text of h1 tag
    $("h1").text("Lab 9");

    // 3. add header
    $("#header").html("<h3>Working with Jquery</h3>");

    // 4. select button attributes and add class
    $(":input[type=button]").each(function() {
        $(this).addClass("btn-background");
    });

    // 5. select buttons id and add red color border 
    $("#buttons").addClass("red-border");

    // 6. select p tag and change font color
    $("p").each(function() {
        $(this).addClass('blue');
    });

    // 7. select first id and add class of border to first paragraph
    $("#first").on("click", function() {
        $("p:first").addClass("green-border");
    });

    // 8. select last id and add class of border to last paragraph
    $("#last").on("click", function() {
        $("p:last").addClass("orange-border");
    });

    // 9. select prev id and add class of border to para3 paragraph
    $("#prev").on("click", function() {
        $("#para3").prev().addClass("purple-border");
    });

    // 10. select next id and add class of border to para2 paragraph
    $("#next").on("click", function() {
        $("#para2").next().addClass("yellow-border");
    });

    // 11. select remove id and remove footer
    $("#remove").on("click", function() {
        $("#footer").remove();
    })
});
/*
 jQuery for making code run as soon as the document is ready to be manipulated
 Normally, javascript can only run code as soon as the browser finished loading, but that includes things
 like images and banner ads.
 This is called the ready event
 */
$( document ).ready(function() {

    $( "a" ).click(function( event ) {

        alert( "As you can see, the link no longer took you to jquery.com" );

        event.preventDefault();

    });

});
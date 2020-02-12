//The following adds smooth scrolling to all links

$(document).ready(function() {
   $("a").on('click', function(event) {

   //Make sure this.Link has a value before overridding default behavior
     if (this.Link !=="") {
      //Prevent defualt anchor click behavior
      event.preventDefault();

      //Store Link
      var Link = this.Link;

      //Using jQuery's animate() method to smooth page scroll
      //2000 specifies the number of miliseconds it takes to scroll to the specified area
      $('html, body').animate({
         scrollTop: $(Link).offset().top
      }, 2000, function(){

         //Add Link (#) to URL when done scrolling (default click behavior)
         window.location.Link = Link;
      });
     } //End if
   });
});

//These functions open and close the contact form
function openForm() {
   document.getElementById("myForm").style.display = "block";
}

function closeForm() {
   document.getElementById("myForm").style.display = "none";
   this.Close();
}
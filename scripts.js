(function($) {
  $(document).ready(function(){
    var form = $("#form-generator");
    form.on('submit', function(event){
      $.each(form.serializeArray(), function(i, field) {
          var fieldname = field.name + "_field";
          if(field.value != "") {
            if(fieldname.indexOf("social") >= 0) {
              $("#"+fieldname).attr("src", field.value).attr("href", field.value);
            } else {
              $("#"+fieldname).text(field.value);
            }
          } else {
            if(fieldname != "optional_text_1_field") {
              $("#"+fieldname).remove();
            }
          }
      });
      // if(phone_number_2.value == '') {
      //   $('.spacer').html('<br/><br/>');
      // }
      var text = $('#source_code').html(); 
      $("#html_code").val(text);
      return false;
    });
  });
  function receivedImage() {
    $("#employee_avatar").attr("src", fr.result);
  }

})(jQuery);

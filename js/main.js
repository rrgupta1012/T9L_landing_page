$(document).ready(function(){
    $(function() {
        $("form[name='enquiry']").validate({
            rules: {
            	name:"required",
                email:{
                          required:true,
                          email:true,
                        },
                subject:"required",
                message:"required"
            },
            messages: {
                subject: "Please enter a valid subject",
                message: "Please write any message",
                name: "Please enter your name ",
                email: "Please enter a valid number"
            },
            submitHandler: function(form) {
                form.submit();
            }
        });
    });
});
function validateForm(){
	var email = document.forms["ctFrm"]["email"].value;
	var subject = document.forms["ctFrm"]["subject"].value;
	var message = document.forms["ctFrm"]["message"].value;


	if (email.length<1) {
        document.getElementById('emailerror').innerHTML = " Please Enter Valid Email *"
    }
    if (subject.length<1) {
        document.getElementById('subjecterror').innerHTML = " Please Select Subject*";
    }
    if (message.length<1) {
        document.getElementById('messageerror').innerHTML = " Please Enter Your Message *";      
    }
    if(email.length<1 || subject.length<1 || message.length<1){
       	return false;
    }
}


function basicPopup(url) {
    popupWindow = window.open(url,'popUpWindow','height=500,width=900,left=110,top=110,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
}


function validateForm(){
    var name = document.forms["ctFrm"]["name"].value;
    var email = document.forms["ctFrm"]["email"].value;
    var phonenumber = document.forms["ctFrm"]["phonenumber"].value;
    var guest = document.forms["ctFrm"]["guest"].value;
    
    
    if (email.length<1) {
        document.getElementById('nameerror').innerHTML = " Please Enter Valid name *"
    }
    if (subject.length<1) {
        document.getElementById('emailerror').innerHTML = " Please Enter Valid email *";
    }
    if (message.length<1) {
        document.getElementById('phoneerror').innerHTML = " Please Enter Your Phone number *";      
    }
    if (message.length<1) {
        document.getElementById('numbererror').innerHTML = " Please Enter number of guest  *";
    }
    if(email.length<1 || subject.length<1 || message.length<1 || guest.length<1){
        return false;
    }
}


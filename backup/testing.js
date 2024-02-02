function sendOTP() {
 const email = document.getElementById('email');
 const otpverify = document.getElementsByClassName('otpverify')[0];

 let otp_val = Math.floor(Math.random() * 10000) 

 let emailbody = `<h2>Your OTP is </h2>${otp_val}`; 
 Email.send({
    SecureToken : "ac5a543c-32bf-4511-89aa-ade29b12dae5",
    To : email.value,
    From : "aniket19841@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body",
	Attachments : [
	{
		name : "smtpjs.png",
		path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
	}]
}).then(
  message => alert(message)
);s

}
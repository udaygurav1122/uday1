// ============ typing animation ============
var typed = new Typed(".typing", {
    strings: ["", "Web Developer,","Fullstack developer,", "Web Designer,", "Freelancer,"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

// var Username = document.getElementById('name').value;
// var Email = document.getElementById('email').value;
// var Message = document.getElementById('message').value;

// document.getElementById('sendBtn').addEventListener('click', function(e) {
//     e.preventDefault();
//     emailSend();
// });

// function emailSend(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "udayagurav@gmail.com",
//         Password : "B938396791FB2A5AD73A21ECAC22DDB00058",
//         To : 'udaygurav009@gmail.com',
//         From : "udayagurav@gmail.com",
//         Subject : "This is the subject",
//         Body : "messageBody"
//     }).then(
//       message =>{
//         if(massage=='ok'){
//             swal("Secussful", "You clicked the button!", "success"); 
//         }
//         else{
//             swal("Error", "You clicked the button!", "error");
//         }
//       }
        
//     ); 
// }


const From=document.getElementById('form');
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "udayagurav@gmail.com",
        Password : "B938396791FB2A5AD73A21ECAC22DDB00058",
        To : 'udayagurav@gmail.com',
        From : "udayagurav@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)

    );
}

Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendEmail();
    From.reset();
});
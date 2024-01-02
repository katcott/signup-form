function passConfirm(){
    if(document.getElementById('password').value !== document.getElementById('confPassword').value) {
        document.getElementById('passwordMessage').style.color = "Red";
        document.getElementById('passwordMessage').innerHTML = "Passwords do not match";
    };
}

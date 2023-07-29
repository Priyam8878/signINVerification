const fName = document.getElementById('fName');
const password = document.getElementById('password');
const emailId = document.getElementById('emailID');
const go = document.getElementById('goSignUp')
const token = document.getElementById('tokenId')
let currentUser = JSON.parse(sessionStorage.getItem('loginUser'));
// console.log(currentUser)
fName.innerText = currentUser.fullName;
 password.innerText = currentUser.password;
emailId.innerText = currentUser.email;
token.innerText = currentUser.randomId;

go.addEventListener('click',()=>{
    
    location.href = './profile'
})
const  signUpButton = document.getElementById('signUp');

const  fullName = document.getElementById('fullName');

const  email = document.getElementById('email');

const  password = document.getElementById('password');

const  confirmPassword = document.getElementById('confermPassword');

const  signInButton = document.getElementById('signIn');

const requires = document.getElementById('requires');
 let randomId = Math.floor( Math.random() * 100);
// check if user exist
function checkIfUserExist(email){
    let users = JSON.parse(localStorage.getItem('users'));
    // users will be array of object
    const obj = users.find((userObj) =>{
        return  userObj.email === email;
        // if obj email is exist
    })
    if(obj){
        return true;  
    } 
    else return false;
}

// save user
function saveUser(Name,emailInput,passwordInput,randomid){
    let userObj = {
        fullName: Name, // firstName.value
        email: emailInput,
        password: passwordInput,
        randomId:randomid,
    }
    let users = JSON.parse(localStorage.getItem('users'));
    if(users === null){
        users = [];
    }

     users.push(userObj); //pushed user in users array
     localStorage.setItem('users',JSON.stringify(users));
    //  update in local storage
    
    // logic for user is signed in after sign up
    // session storage will delete data after tab is closed

    sessionStorage.setItem('loginUser',JSON.stringify(userObj));
    fullName.value='';
    email.value='';
    password.value='';
    confirmPassword.value='';
    requires.innerText = `sign up successful`

    window.location.href = './profile'
}

signUpButton.addEventListener('click',(event) => {
    event.preventDefault();
    // if any of my field is empty
    if( fullName.value.trim() === '' ||
    email.value.trim() === '' ||
    password.value.trim() === '' ||
    confirmPassword.value.trim() === ''){
        requires.innerText = `Error! All fielid are mandatory`
        // alert('all fields are mandatory');
    }else{
        if(password.value.trim() !== confirmPassword.value.trim()){
            requires.innerText = `Password dosen't match !`
            password.value = '';
            confirmPassword.value = '';
        }else{
            // if my user exist
           if(localStorage.getItem('users')){
            if(checkIfUserExist(email.value)){
                requires.innerText = `email is linked with other account`

            }else{
                saveUser(fullName.value, email.value, password.value,randomId);
            }
           }else{
            saveUser(fullName.value, email.value, password.value,randomId);
           }
        }
    }
})

signInButton.addEventListener('click',()=>{
    location.href = './login'
})
const loginForm = document.querySelector("#nameInputForm");
const loginInput = document.querySelector("#nameInputForm input");
const loginH1 = document.querySelector("#inputText");
const logoutButton = document.querySelector("button#logout");
const userInfoDiv = document.querySelector("div#userInfo");

const HIDDEN_CLASS_NAME = "hidden";
const USER_NAME_KEY = "username";

const savedUserName = localStorage.getItem(USER_NAME_KEY);

confirmLogin(savedUserName);

//주석 테스트
function confirmLogin(userName){
    if(userName === null){
        modifyLogoutState();
    }
    else{
        loginH1.innerText = `Hello ${userName}!`;
        modifyLoginState();
    }
}

function modifyLoginState(){
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    userInfoDiv.classList.remove(HIDDEN_CLASS_NAME);
}

function modifyLogoutState(){
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    userInfoDiv.classList.add(HIDDEN_CLASS_NAME);
}

function onSubmitForm (event){
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USER_NAME_KEY, userName);
    confirmLogin(userName);
};

function onClickLogoutBtn () {
    localStorage.removeItem(USER_NAME_KEY);
    modifyLogoutState();
}

loginForm.addEventListener("submit", onSubmitForm);
logoutButton.addEventListener("click",onClickLogoutBtn);
//linkNaver.addEventListener("click", onClickLink);




/* function loginBtnClick(){
    const value = loginInput.value;
    if(value === ""){
        loginH1.innerText = "Input name please";
    }
    else if(value.length > 15){
        loginH1.innerText = "Name is too long";
    }
    else{
        const textName = "name : " + value;
        loginH1.innerText = textName;
    }
}*/

//console.dir(loginButton);
//loginButton.addEventListener("click", loginBtnClick);
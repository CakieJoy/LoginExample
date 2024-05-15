const getElementVal = (id) => {
    return document.getElementById(id).value;
}

const firebaseConfig = {
    apiKey: "firebaseApi",
    authDomain: "yourProject.firebaseapp.com",
    databaseURL: "https://yourProject.firebaseio.com",
    projectId: "YourProject",
    storageBucket: "YourProject.appspot.com",
    messagingSenderId: "YourProject",
    appId: "YourAppID"
};

firebase.initializeApp(firebaseConfig);

var registerRef = firebase.database().ref("register");
var loginRef = firebase.database().ref("login");

document.getElementById('register').addEventListener('submit', register);
document.getElementById('login').addEventListener('submit', login);

function login(e) {
    e.preventDefault();

    var lmail = getElementVal('l-mail');
    var lpassw = getElementVal('l-pass');

    console.log(lmail, lpassw);

    savelogin(lmail, lpassw);
}

function savelogin(lmail, lpassw) {
    var newLogin = loginRef.push();

    newLogin.set({
        lmail: lmail,
        lpassw: lpassw
    });
}

function register(e) {
    e.preventDefault();

    var uname = getElementVal('uname');
    var rmail = getElementVal('mail');
    var rpassw = getElementVal('pass');

    console.log(uname, rmail, rpassw);

    saveregister(uname, rmail, rpassw);
}

function saveregister(uname, rmail, rpassw) {
    var newRegister = registerRef.push();

    newRegister.set({
        uname: uname,
        rmail: rmail,
        rpassw: rpassw
    });
}

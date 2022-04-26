function login(mail, pwd, usr) {
    let result = "";
    
    if(mail === usr.email && pwd === usr.password){
        result = "Email et mot de passe OK";
        
    } else if(mail != usr.email){
        result = "Email incorrect";
        
    } else if(usr.password != pwd){
        result = "Mot de passe incorrect";
    }

    return result;
}


const email = "john.doe@gmail.com"
const password = "admin12345"
 
const user = {email: "john.doe@gmail.com", password: 'azerty12345'}
console.log(login(email, password, user));
// Expected result: Mot de passe incorrect
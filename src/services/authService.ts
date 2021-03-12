import OIDC, {User, UserManagerSettings} from "oidc-client"

const OIDCSettings: UserManagerSettings = {
    authority: "https://localhost:1001",
    client_id: "socialNetworkReactClient",
    redirect_uri: "http://localhost:3000/callback-oidc",
    response_type: "id_token token",
    scope: "openid profile",
    post_logout_redirect_uri: "http://localhost:3000/signout-oidc",
};

const userManager = new OIDC.UserManager(OIDCSettings);

export function getUser() {
    return userManager.getUser();
}

export function checkUser() {
    userManager.getUser().then(user => {
        if(user){
            alert('authenticate')
        }else{
            alert('unauthorized');
        }
    })
}

export function signinRedirect() {
    return userManager.signinRedirect()
}

export function signinRedirectCallback() {
    return userManager.signinRedirectCallback()
}

export function signoutRedirect() {
    userManager.clearStaleState()
    userManager.removeUser()
    return userManager.signoutRedirect()
}

export function signoutRedirectCallback() {
    userManager.clearStaleState()
    userManager.removeUser()
    return userManager.signoutRedirectCallback()
}

export function getUserProfile(){

}

export function getAccessToken() {
    getUser().then(user => {
        if (user){
            return user.access_token
        }else {
            return "";
        }
    })
}

export default userManager
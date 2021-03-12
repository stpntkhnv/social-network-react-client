import {User} from "oidc-client";

export interface applicationState {
    auth: authState
}

export interface IdentityUserProfile{
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
}


//TODO change identityUser type
export interface authState {
    IsAuthenticated: boolean;
    IdentityOidcUser: User | undefined;
    IdentityUserProfile: IdentityUserProfile | undefined;
    IdentityUserName: string | undefined;
}
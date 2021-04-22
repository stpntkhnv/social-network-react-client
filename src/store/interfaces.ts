import {Profile, User} from "oidc-client";

export interface IUser{
    userName: string,
    email: string,
    id: string
}

export interface IUserProfile{
    id: string,
    firstName: string,
    lastName: string,
    userName:string,
    email: string,
    avatarUrl: string,
    status: string,
    userId: string,
    job: string
}

export let initialUserProfile : IUserProfile = {
    avatarUrl: "", email: "", firstName: "", id: "", job: "", lastName: "", status: "", userId: "", userName: ""

}

export let initialOidcProfile: Profile;
initialOidcProfile = {aud: "", exp: 0, iat: 0, iss: "", sub: "", name: ''};


export let initialUser: User = {
    access_token: "",
    expired: false,
    expires_at: 0,
    expires_in: 0,
    id_token: "",
    profile: initialOidcProfile,
    scope: "",
    scopes: [],
    state: undefined,
    token_type: "",
    toStorageString(): string {
        return "";
    }
};

export let initialDialog : IDialog = {
    firstUser: initialUserProfile, messages: [], secondUser: initialUserProfile

}

export interface IMessage{
    sender: User,
    recipient: User,
    date: string,
    text: string,
    isRead: boolean
}

export interface IDialog{
    messages: IMessage[],
    firstUser: IUserProfile,
    secondUser: IUserProfile
}

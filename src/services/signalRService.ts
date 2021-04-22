import {HubConnection} from "@microsoft/signalr";

export let sendMessage = (connection: HubConnection, message: string, senderUserName: string, receiverUserName: string) => {
    connection.invoke('SendMessage',senderUserName, receiverUserName, message);
}

export async function getDialog(firstUser: string, secondUser: string){
    return fetch(`https://localhost:5001/api/Users/getDialog?firstUserName=${firstUser}&secondUserName=${secondUser}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data;
        })
}

export const getAllDialogsByName = (userName: string) => {
    return fetch(`https://localhost:5001/api/Users/getAllUserDialogs?userName=${userName}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data;
        })
}
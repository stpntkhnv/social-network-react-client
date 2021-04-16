export async function getProfileByUserName(userName: string | undefined){
    return fetch(`https://localhost:5001/api/users/getProfileByName?userName=${userName}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
        return data;
    })
}

export function getAllUsers(){
    return fetch("https://localhost:5001/api/users/getallusers")
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data
        })
}

export function getAllUsersProfiles(){
    return fetch("https://localhost:5001/api/users/getAllUsersProfiles")
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data
        })
}
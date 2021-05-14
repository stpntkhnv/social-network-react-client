export async function getProfileByUserName(userName: string | undefined){
    return fetch(`https://localhost:5001/api/users/GetProfileByName?userName=${userName}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
        return data;
    })
}

export function getAllUsers(){
    return fetch("https://localhost:5001/api/users/GetAll")
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data
        })
}

export function getAllUsersProfiles(){
    return fetch("https://localhost:5001/api/users/GetAllProfiles")
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data
        })
}
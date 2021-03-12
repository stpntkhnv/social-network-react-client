export function getProfileByUserName(userName: string | undefined){
    let result;
    fetch(`https://localhost:5001/api/users/getProfileByName?userName=${userName}`)
        .then(response => {
            return response.json();
        }).then(data => {
        result = data;
        console.log(result)
        console.log('result')

        return result;
    })
}
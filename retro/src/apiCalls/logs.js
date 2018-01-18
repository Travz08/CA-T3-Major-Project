
const retrospectLogsAPI =`https://namenotesapi.herokuapp.com/logs`


export function all() {
    return fetch(retrospectLogsAPI)
        .then(res => res.json())
        // .then((data) => {
        //     console.log(data.logs)
        // })
        .catch(error => { console.log(error) })

}
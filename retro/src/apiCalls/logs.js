
const retrospectLogsAPI =`https://namenotesapi.herokuapp.com/logs`
const saveLogsAPI =`https://namenotesapi.herokuapp.com/logs/new`


export function all() {
    return fetch(retrospectLogsAPI)
        .then(res => res.json())
        // .then((data) => {
        //     console.log(data.logs)
        // })
        .catch(error => { console.log(error) })

}

export function store(log) {
  return fetch(saveLogsAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(log)
  })
  .then(res => res.json())
  .catch(error => {console.log(error)})
}

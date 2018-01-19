
const retrospectClassAPI =`https://namenotesapi.herokuapp.com/class`
const saveClass =`https://namenotesapi.herokuapp.com/class/new`

export function all() {
    return fetch(retrospectClassAPI)
        .then(res => res.json())
        // .then((data) => {
        //     console.log(data.logs)
        // })
        .catch(error => { console.log(error) })

}

export function save(classroom) {
  return fetch(saveClass, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(classroom)
  })
  .then(res => res.json())
  .catch(error => {console.log(error)})
}

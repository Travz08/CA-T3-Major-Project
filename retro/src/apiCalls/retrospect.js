export function all() {
  return fetch('/class', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.json())
  .catch(error => {console.log(error)})
}

export function save(classroom) {
  return fetch('/class/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(classroom)
  })
  .then(res => res.json())
  .catch(error => {console.log(error)})
}

export function store(post) {
  return fetch('https://namenotesapi.herokuapp.com/post/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .catch(error => {console.log(error)})
}



// export function remove(movie) {
//   return fetch('/delete', {
//     method: 'POS',
//     headers: {
//       'Content-Type': 'application/json',
//       'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRyYXYuYnJvd25AZXhhbXBsZS5jb20iLCJpYXQiOjE1MTMxMjg3MDksImV4cCI6MTUxMzczMzUwOSwic3ViIjoiNWEzMDgyYTA1ODAyZjJiNGE4MGFjOGYzIn0.1eq7_cdWp4YzVwjNeG1dqmKteLh-Srx8f8KuFakifak'
//     },
//   })
//   .then(res => res.json())
//   .catch(error => {console.log(error)})
// }
//
//


//return the promise from fetch and add more thens ie RENDER in setState


 // terry is such a cool dude.

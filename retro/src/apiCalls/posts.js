
const retrospectPostsAPI =`https://namenotesapi.herokuapp.com/posts`


export function all() {
    return fetch(retrospectPostsAPI)
        .then(res => res.json())
        // .then((data) => {
        //     console.log(data.logs)
        // })
        .catch(error => { console.log(error) })

}
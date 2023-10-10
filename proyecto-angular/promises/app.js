getUsers = () =>{
    return fetch('https://jsonplaceholder.typicode.com/users')

}


const getTodos = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/${userId}/todos`)
}

const promise = getUsers()

promise
.then((resp) =>{
    console.log({resp})
    return resp.json()
    return promiseData
})
.then((data) => {
    console.log({ data })
    console.log('USUARIOS: ',data)
})

console.log('FIN')

const customPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hola Isaac')
    }, 3000)
  })
  
  customPromise
    .then(msg => alert(msg))
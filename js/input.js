const filterInput = document.querySelector('#filter')
const posts = document.querySelector(".container")

filterInput.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase()
    const posts = document.querySelectorAll('#textosinput')

    posts.forEach(post => {
        const postTitle = document.querySelector('.reveal').textContent.toLowerCase()
        const postBody = document.querySelector('.textos').textContent.toLowerCase() //da pra pegar só o title

        if (postTitle.includes(inputValue) || postBody.includes(inputValue)) {
            post.style.display = 'block'
            // post.style.background = 'none'
            return
            // post.style.background = 'rgb(220 17 58 / 38%)'
        }

        post.style.display = 'none'
        // post.style.background = 'rgb(220 17 58 / 38%)'
    })
})
// console.log(posts);

// filterInput.addEventListener('input', event => {
//     const inputValue = event.target.value.toLowerCase()
//     const posts = document.querySelectorAll('.post')

//     posts.forEach(post => {
//         const postTitle = post.querySelector('.post-title').textContent.toLowerCase()
//         const postBody = post.querySelector('.post-body').textContent.toLowerCase() //da pra pegar só o title

//         if (postTitle.includes(inputValue) || postBody.includes(inputValue)) {
//             post.style.display = 'flex'
//             return
//         }

//         post.style.display = 'none'
//     })
// })
//using selectors inside the element
// traversing the dom

// const questionBtn = document.querySelectorAll('.question-btn')

// questionBtn.forEach(element => {
//     element.addEventListener('click', ()=>{
//         element.parentNode.parentElement.classList.toggle('show-text')
//         console.log(element.parentNode.parentElement)
//     })
// });

const questions = document.querySelectorAll('.question')

questions.forEach(element => {
    const btn = element.querySelector('.question-btn')
    btn.addEventListener('click', ()=>{
        questions.forEach(e => {
            if(e !== element){
                e.classList.remove('show-text')
            }
        });
        element.classList.toggle('show-text')
    })

    
});
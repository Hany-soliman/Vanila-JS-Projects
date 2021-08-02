const btns = document.querySelectorAll('.tab-btn')
const content = document.querySelectorAll('.content')
const about = document.querySelector('.about')

 // by selecting a specific button
// btns.forEach(btn => {
//     btn.addEventListener('click', ()=>{
//        const id = btn.dataset.id
//        removeActive(btns)
//        removeActive(content)
//        btn.classList.add('active')
//        document.getElementById(id).classList.add('active')
//     })
// });

function removeActive(array) {
    array.forEach(element => {
         element.classList.remove('active')
    });
}


/// another soultion by targeting the whole about article

about.addEventListener('click', (e)=>{
const id = e.target.dataset.id
if(id){
    removeActive(btns)
    e.target.classList.add('active')
    removeActive(content)
    document.getElementById(id).classList.add('active')
}
})
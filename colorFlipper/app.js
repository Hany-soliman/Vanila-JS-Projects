const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const btn = document.getElementById('btn')

const color = document.querySelector('.color');

btn.addEventListener('click',()=>{
    number = randomNum()
    function randomNum(){
        return Math.floor(Math.random() * colors.length);
        
    }
    document.body.style.backgroundColor = colors[number]
    color.textContent = colors[number]
    
 
})


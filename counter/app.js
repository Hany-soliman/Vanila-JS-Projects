const number = document.getElementById('value')

const btns = document.querySelectorAll('.btn')
let currentValue = parseInt(number.innerHTML)


btns.forEach(element => {
    element.addEventListener('click',()=>{
        if(element.classList.contains('increase')){
            currentValue ++
            numColor()
        } else if(element.classList.contains('decrease')){
            currentValue --
            numColor()
        } else if(element.classList.contains('reset')){
            currentValue = 0
            numColor()
             
        }
        number.textContent = currentValue
    })
    
});




function numColor(){
    if(currentValue > 0){
        return number.style.color = 'green'
        } else if(currentValue < 0){
            return number.style.color = 'red'
        
        }else{
            return number.style.color = 'black'
        
        }
}

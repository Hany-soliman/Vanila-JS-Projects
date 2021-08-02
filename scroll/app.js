// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date')
date.textContent = new Date().getFullYear()
// ********** close links ************
const linksContainer = document.querySelector('.links-container')
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', ()=>{
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    
containerHeight === 0 ? linksContainer.style.height = `${linksHeight}px` : linksContainer.style.height = 0

})

// ********** fixed navbar ************
const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', ()=>{
    const navbarHeight = navbar.getBoundingClientRect().height
    const scrollHeight = window.pageYOffset
     scrollHeight >= navbarHeight? navbar.classList.add('fixed-nav') : navbar.classList.remove('fixed-nav')
scrollHeight > 500 ? topLink.classList.add('show-link') : topLink.classList.remove('show-link')
    })
// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(link => {
    link.addEventListener('click', (e)=>{
        e.preventDefault()
      const  id = link.getAttribute('href')
      const element = document.querySelector(id)
      //calc the heights
      const navbarHeight = navbar.getBoundingClientRect().height
      const containerHeight = linksContainer.getBoundingClientRect().height
      const fixedNav = navbar.classList.contains('fixed-nav')
      let position = element.offsetTop - navbarHeight
//if statments to navigate through the page
      !fixedNav ? position = position - navbarHeight : position = element.offsetTop - navbarHeight
      navbarHeight > 82 ? position = position + containerHeight : position = position
      
      window.scrollTo({
          left:0,
          top:position
      })
        linksContainer.style.height = 0
        
    })
});
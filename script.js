const imageOne = document.querySelector('.image img')
const main = document.getElementById('main')
const img_pop = document.querySelector('.img-pop')

imageOne.addEventListener('click',(e)=>{
    if(e.target.tagName === 'IMG'){
        main.style.display = 'block'
        img_pop.style.display = 'block'
    }
})

main.addEventListener('click',(e)=>{
    if(e.target.tagName!='IMG'){
        main.style.display = 'none'
        img_pop.style.display = 'none'
    }
})
img_pop.addEventListener('click',(e)=>{
    if(e.target.tagName!='IMG'){
        e.stopPropagation()
    }
})
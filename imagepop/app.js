const modal = document.querySelector('.modal');
const pre = document.querySelectorAll('.gallery img');
const ori = document.getElementById('full');
const modalp = document.getElementById('modalp')


console.log(pre);

pre.forEach(pres => {
    pres.addEventListener('click', () =>{
        modal.classList.add('open');
        console.log(modal.classList);

        const orisrc = pres.getAttribute('data-original');
        console.log(orisrc);
        ori.src = `${orisrc}`;
        modalp.innerText = pres.getAttribute('alt');
        console.log(pres.getAttribute('alt'))
    })
})

modal.addEventListener('click',(e)=>{
    console.log(e);
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open')
    }
})



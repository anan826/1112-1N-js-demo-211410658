'use strict';

const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log('modal', modal);
console.log('show-modal', btnsOpenModal);

const CloseModal = () =>{
    modal.forEach((item) => {
        item.classList.add('hidden');
    })
    overlay.classList.add('hidden');    
}

for (let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click', ()=> {
        modal[i].classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

for (let i=0;i<btnCloseModal.length;i++){
    btnCloseModal[i].addEventListener('click', ()=> {
        modal[i].classList.add('hidden');
        overlay.classList.add('hidden');
    });
}


document.addEventListener('keydown', (e) =>{
    if(e.key === 'Escape' && !overlay.classList.contains('hidden')){
        CloseModal();
    };
});
overlay.addEventListener('click', CloseModal);


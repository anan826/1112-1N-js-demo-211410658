'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log('modal', modal);
console.log('show-modal', btnsOpenModal);

const OpenModal = (index) =>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click', OpenModal);
}

const CloseModal = () =>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

document.addEventListener('keydown', (e) =>{
    if(e.key === 'ESCAPE' && modal.classList.contains('hidden')){
        CloseModal();};
    
});


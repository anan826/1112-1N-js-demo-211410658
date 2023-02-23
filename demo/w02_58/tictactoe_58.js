const resetBtn = document.querySelector('#reset');

const allLi = document.querySelectorAll('#board li');
console.log('allLi', allLi);

const checkWin = (player) => {

    let p = [];
    allLi.forEach( (item) => {
        p.push(item.classList.contains(player));
    } );
    console.log('p', p);

    const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p;

    if(
        (p1 && p2 && p3) ||
        (p4 && p5 && p6) ||
        (p7 && p8 && p9) ||
        (p1 && p4 && p7) ||
        (p2 && p5 && p8) ||
        (p3 && p6 && p9) ||
        (p1 && p5 && p9) ||
        (p3 && p5 && p7)
    )
       return true;
    else
        return false;
    
}


const reset = () => {

    allLi.forEach((item) => {
        item.textContent = '+';
        item.classList = ''
    });
}


console.log('checkWin(o)', checkWin('o'));
console.log('checkWin(x)', checkWin('x'));

resetBtn.addEventListener('click', reset);

const o = 'o';
const x = 'x';
//回合
let turn = 0;
//遊戲是否結束
let done = false;

// # = class
const resetBtn = document.querySelector('#reset');
const allLi = document.querySelectorAll('#board li');
const container =document.querySelector('#container')
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
        item.classList = '';
        container.style.backgroundColor ='#666';
        turn = 0;
        done = false;
    });
}

const winMessage = (player) => {
    if(player === 'o'){
        container.style.backgroundColor = 'rgba(144, 238, 144, 0.5)'
    } else {
        container.style.backgroundColor = 'rgba(240, 118, 128, 0.7)'

    }alert(`player ${player} wins`)
    }
    

allLi.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('disabled')) {
            alert('Already filled');
            turn--;
        } else if(!done && turn % 2 === 0){
            item.textContent = 'O';
            item.classList.add('o', 'disabled');
            if(checkWin(o)){
                winMessage(o);
                done = true;
            }
        } else if (!done && turn % 2 == 1) {
            item.textContent = 'X';
            item.classList.add('x', 'disabled');
            if(checkWin(x)){
                winMessage(x);
                done = true;
            }
        }

        if (!done && turn < 8) {
            turn++;
        }else if(!done && turn >=8){
            alert('tie');
        }
    })
})


//console.log('checkWin(o)', checkWin('o'));
//console.log('checkWin(x)', checkWin('x'));

resetBtn.addEventListener('click', reset);
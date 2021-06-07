const out = document.querySelector('#out')
const board = document.createElement('div');
board.id = 'board';
out.appendChild(board);

board.style.display = 'flex';
board.style.justifyContent = 'spaceBetween';
board.style.width = '400px'
board.style.flexWrap = 'wrap'


for (let i = 0; i < 8; i++) {
    let str = document.createElement('div');
    str.id = 'str' + i;
    board.appendChild(str);
    str.style.display = 'flex';
    str.style.justifyContent = 'spaceBetween';
    for (let j = 0; j < 8; j++) {
        let cell = document.createElement('div');
        cell.id = 'str' + i + 'cell' + j;
        str.appendChild(cell);
        cell.style.width = '50px'
        cell.style.height = '50px'
        if (j % 2 == i % 2) {
            cell.style.backgroundColor = '#fff';
        }
        else {
            cell.style.backgroundColor = '#000'
        }
    }
}
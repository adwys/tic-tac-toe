


const ticTacToe = () => {

    let board = [
        ['','',''],
        ['','',''],
        ['','',''],
    ]   
    console.log(board);
    const square = document.querySelectorAll(".square");

    const add_x = (div,x) => {
        div.textContent = x;
    }

    const check_end = (x) => {
        
        for(let j =0 ;j<3;j++){
            let win = true;
            for(let i =0;i<3;i++){
                if(board[i][j] == x)continue;
                win = false;
            }
            if(win == true){
                return win;
            }
        }
    
        for(let j =0 ;j<3;j++){
            let win = true;
            for(let i =0;i<3;i++){
                if(board[j][i] == x)continue;
                win = false;
            }
            if(win == true){
                return win;
            }
        }
        win = true;
        for(let i =0, j=0;i<3;i++,j++){
            if(board[j][i] == x)continue;
            win = false;
        }
        if(win == true){
            return win;
        }
        win = true;
        for(let i =0, j=2;j>=0;i++,j--){
            if(board[j][i] == x)continue;
            win = false;
        }
        if(win == true){
            return win;
        }

    }

    const is_full = () => {
        for(let j =0 ;j<3;j++){
            for(let i =0;i<3;i++){
                if(board[i][j] == '')return false;
            }
        }
        return true;
    }

    const computer_move = (x) => {
        
        while(true){
            if(is_full())return;
            let d = Math.floor(Math.random() * (8 - 0)) + 0;
            let choosed_div = document.getElementById(d);
            if(choosed_div.textContent == ""){
                board[parseInt(choosed_div.id/3)][choosed_div.id%3] = "o";
                add_x(choosed_div,"o");
                return;
            }
        }
        
    }

    square.forEach(div => {
        div.addEventListener('click', () => {
            if(board[parseInt(div.id/3)][div.id%3] != "")return;
            board[parseInt(div.id/3)][div.id%3] = "x";
            add_x(div,"x");
            computer_move("o");
        })
    })
};


const fa = ticTacToe();


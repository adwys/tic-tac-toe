


const ticTacToe = () => {

    let game_ended = false;

    let board = [
        ['','',''],
        ['','',''],
        ['','',''],
    ]   
    console.log(board);
    const square = document.querySelectorAll(".square");
    const grid = document.querySelector(".grid");
    const container = document.querySelector(".container");
    const add_x = (div,x) => {
        let sp = document.createElement('span');
        sp.textContent = x;
        div.prepend(sp);
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

    const end_game = (x) => {
        
        if(game_ended)return;   
        
        let reset_btn = document.createElement('button');
        reset_btn.textContent = "Reset";
        reset_btn.addEventListener('click', () => {
            reset();
        })
        container.prepend(reset_btn);
        let text = document.createElement('div');
        if(x == 'full' && !game_ended)text.textContent = 'Tie';
        else if(x =='x' || x == 'o') text.textContent = "Player " + x.toUpperCase() + " wins";
        text.setAttribute('id','game_end');
        container.prepend(text);
        game_ended=true;

        
    }

    const reset = () => {
        game_ended = false;

        board = [
        ['','',''],
        ['','',''],
        ['','',''],
        ]
        square.forEach(div => {
            console.log(div.children[0]);
            if(div.children[0])
                div.children[0].remove();
        })
        container.children[0].remove();
        container.children[0].remove();
    }

    square.forEach(div => {
        div.addEventListener('click', () => {
            if(board[parseInt(div.id/3)][div.id%3] != "" || game_ended)return;
            board[parseInt(div.id/3)][div.id%3] = "x";
            add_x(div,"x");
            if(check_end("x")) end_game("x");
            else{
                computer_move("o");
                if(check_end("o")) end_game("o");
            }
            if(is_full())end_game("full");
        })
    })
};


const fa = ticTacToe();


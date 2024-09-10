class Grid {

    constructor(nw, nh){

        // grid init
        this.grid = [];
        for(let i = 0; i < nw; i++){
            this.grid.push([])

            for(let j = 0; j < nh; j++){
                if(Math.random() < 0.2){
                    this.grid[this.grid.length -1].push(1);
                    continue;
                }
                this.grid[this.grid.length -1].push(0)
            }
        }

        // this.grid[2][7] = 1
        // this.grid[3][7] = 1
        // this.grid[4][7] = 1

        // variable creation
        this.nw = nw;
        this.nh = nh;
        
        this.wideX = Math.ceil(width / nw)
        this.wideY = Math.ceil(height / nh)
    }

    update_position(i, j, new_grid){
        var alive = 0
        var slider = [-1, 0, 1];
        for(let w = 0; w < slider.length; w++){
            for(let h = 0; h < slider.length; h++){

                if(slider[w] == 0 && slider[h] == 0){
                    continue;
                }

                var i_ = i + slider[w];
                var j_ = j + slider[h];

                if(i_ < 0){
                    i_ = this.nw -1
                }
                if(i_ >= this.nw){
                    i_ = 0
                }
                if(j_ < 0){
                    j_ = this.nh -1
                }
                if(j_ >= this.nh){
                    j_ = 0
                }

                console.log({
                    i:i_,
                    j:j_
                });
                
                if(this.grid[i_][j_] == 1){
                    alive += 1;
                }
            }
        }

        if(alive < 2){
            new_grid[i][j] = 0;
        }
        else if(alive == 2){
            new_grid[i][j] = this.grid[i][j];
        }
        else if(alive == 3){
            new_grid[i][j] = 1;
        }
        else if(alive > 3){
            new_grid[i][j] = 0;
        }

        
    }


    update(){

        // new grid creation
        var new_grid = [];
        for(let i = 0; i < this.nw; i++){
            new_grid.push([])

            for(let j = 0; j < this.nh; j++){
                new_grid[new_grid.length -1].push(0)
            }
        }

        // updating each cell
        for(let i = 0; i < this.nw; i++){
            for(let j = 0; j < this.nh; j++){
                this.update_position(i, j, new_grid)
            }
        }

        // changing the actual grid
        this.grid = new_grid
    }


    show(){
        noStroke()
        for(let i = 0; i < this.nw; i++){
            for(let j = 0; j < this.nh; j++){
                if(this.grid[i][j] == 1){
                    fill(63, 50, 209);
                }
                else{
                    fill(255);
                }
                rect(i * this.wideX, j * this.wideY, this.wideX, this.wideY);
                noFill();
            }
        }
    }
}
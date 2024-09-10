class Planet{

    constructor(displacement, center, theta, img, link){

        // center of rotation
        this.center = center;

        // img to be displayed
        this.img = img;
        this.img.width = 70;
        this.img.height = 70;

        // angular position and angular speed
        this.theta = theta;
        this.r_speed = 1

        // initial distance from the center
        this.r = displacement

        // rotated vector added to the position (the planet rotate around the center)
        this.dis = createVector(displacement * Math.cos(theta), displacement * Math.sin(theta))
        this.pos = createVector(center.x + this.dis.x, center.y + this.dis.y)

        // link to be open when clicked on
        this.link = link 
    }

    update(){

        this.theta += 0.01;
        this.r += this.r_speed;

        if(Math.abs(this.r) > 200){
            this.r_speed *= -1;
        }

        if(Math.abs(this.r) < 50){
            this.r_speed *= -1;
        }

        this.dis = createVector(this.r * Math.cos(this.theta), this.r * Math.sin(this.theta));
        this.pos = createVector(center.x + this.dis.x, center.y + this.dis.y);
    }


    show(){
        // fill(255, 0, 0);
        // circle(this.pos.x, this.pos.y, 50);
        image(this.img, this.pos.x - this.img.width / 2, this.pos.y - this.img.height / 2);
        // noFill()
        // stroke(255,0,0)
        // rect(this.pos.x - this.img.width / 2, this.pos.y - this.img.height / 2, this.img.width, this.img.height)
        // noStroke()
        // noFill();
    }
}
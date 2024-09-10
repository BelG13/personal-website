// var socials
// var debug
var center;
var socials;

var imgs;

function preload(){
    imgs = [
        loadImage('../../../media/imgs/socialmedia/github-mark.svg'),
        loadImage('../../../media/imgs/socialmedia/linkedin.png'),
        loadImage('../../../media/imgs/socialmedia/X.png'),
        loadImage('../../../media/imgs/socialmedia/outlook.png'),
        loadImage('../../../media/imgs/socialmedia/mail.png'),
    ]

    links = [
        "https://github.com/BelG13",
        "https://www.linkedin.com/in/giovanni-belval-71551a169/",
        "https://x.com/b_gioo",
        "Giovanni.belval@umontreal.ca",
        "Giovanni.belval@gmail.com",
    ]
}

function setup(){
    var canvas_container_args = document.getElementById("canvas-container-1").getBoundingClientRect();
    var canvas = createCanvas(canvas_container_args.width, 600);
    canvas.parent("canvas-container-1");

    center = createVector(width / 2, height / 2);

    socials = [];
    for(let i = 0; i < imgs.length; i++){
        socials.push(
            new Planet(75, center, i * 250 , imgs[i], links[i])
        )
    }

}

function mouseClicked(){
    var posX = mouseX
    var posY = mouseY

    socials.forEach((social) => {
        var cond1 = mouseX > social.pos.x - social.img.width / 2
        var cond2 = mouseY > social.pos.y - social.img.height / 2
        var cond3 = mouseX < social.pos.x + social.img.width
        var cond4 = mouseY < social.pos.y + social.img.height

        if(cond1 & cond2 & cond3 & cond4){
            if(social.link.startsWith("https")){
                window.open(social.link)
            }
            else{
                navigator.clipboard.writeText(social.link)
                alert(social.link + " copied to clipboard")
            }
        }
        return
    })
}

function draw() {
    background(255);

    socials.forEach(social => {
        social.show();
        social.update();
    });
}
var canvas=new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
    canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
    canvas.add(black_image_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80')
    {
        console.log("p and shift key pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true && keypressed=='77')
    {
        console.log("m and shift key pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keypressed=='38')
    {
        up();
        console.log("up arrow key is pressed");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down arrow key is pressed");
    }
    if(keypressed=='37')
    {
        left();
        console.log("left arrow key is pressed");
    }
    if(keypressed=='39')
    {
        right();
        console.log("right arrow key is pressed");
    }
    if(keypressed=='87')
    {
        new_image('wall.jpg')
        console.log("w key is pressed");
    }
    if(keypressed=='71')
    {
        new_image('ground.png')
        console.log("g key is pressed");
    }
    if(keypressed=='76')
    {
        new_image('light_green.png')
        console.log("l key is pressed");
    }
    if(keypressed=='84')
    {
        new_image('trunk.jpg')
        console.log("t key is pressed");
    }
    if(keypressed=='82')
    {
        new_image('roof.jpg')
        console.log("r key is pressed");
    }
    if(keypressed=='89')
    {
        new_image('yellow_wall.jpg')
        console.log("y key is pressed");
    }
    if(keypressed=='68')
    {
        new_image('dark_green.png')
        console.log("d key is pressed");
    }
    if(keypressed=='85')
    {
        new_image('unique.png')
        console.log("u key is pressed");
    }
    if(keypressed=='67')
    {
        new_image('cloud.jpg')
        console.log("c key is pressed");
    }
}
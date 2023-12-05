// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick()
// {
//     alert("I got clicked!!");
// }

// document.querySelector(".set").addEventListener("click", function()
// {
//     var audio = new Audio('sounds/snare.mp3');
//     audio.play();
// });


// for(var i = 0; i<num; i++)
// {
    //     document.querySelectorAll(".drum")[i].addEventListener("click", function()
    //     {
        //         console.log(this.style.color = "red");
        //     });
        // }
        
        // for(var i = 0; i<num; i++)
        // {
            //     document.querySelectorAll(".drum")[i].addEventListener("click", function()
            //     {
                //         console.log(this.style.color = "yellow");
                //     });
                // }
var num = document.querySelectorAll(".drum").length;
                
for(var i = 0; i<num; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        var butt = this.innerHTML;

        makeSound(butt);
        animate(butt);
    });
}

document.addEventListener("keydown", function(event)
{
    makeSound(event.key);
    animate(event.key);
});

function makeSound(key)
{
    switch(key)
        {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom12 = new Audio("sounds/tom-2.mp3");
                tom12.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
        }
};

function animate(currentKey)
{
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed");

    setTimeout(function()
    {
        active.classList.remove("pressed");
    }, 100);
}
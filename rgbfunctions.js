$(function()
{
    window.setcolourname = function()
    {
        $("#color").html("<h2>" + correctcolour + "</h2>");
    }

    window.randomizecolours = function(num)
    {
        let arr = [];
        for(let i = 0;i < num;i++)
        {
            let red,green,blue;
            red = Math.floor(Math.random() * 256);
            green = Math.floor(Math.random() * 256);
            blue = Math.floor(Math.random() * 256);
            arr.push("rgb(" + red +", " + green + ", " + blue + ")");
        }
        return arr;
    }

    window.setcolours = function()
    {
        for (let i = 0; i < num; i++) 
        {
            let asquare = $(`.square:nth-of-type(${i + 1})`);
            asquare.css("background-color", colours[i]);
            asquare.click(()=>
            {
                let pickedcolour = colours[i];
                let message = $("#message");
                let thissquare = $(`.square:nth-of-type(${i + 1})`);
                if(pickedcolour === correctcolour)
                {
                    colourall();
                    message.text("Correct!");
                    alreadywon = true;
                    $("h1").css("background-color",correctcolour);
                    $("#reset").text("PLAY AGAIN ?")
                }
                else
                {
                    if(alreadywon === false)
                    {
                        thissquare.css("background-color","#232323");
                        message.text("Try Again");
                    }
                }
            });
        }
    }

    window.colourall = function()
    {
        $(".square").css("background-color",correctcolour);
    }

    window.resetall = function()
    {
        $("#reset").text("NEW COLOURS");
        alreadywon = false;
        colours = randomizecolours(num);
        correctcolour = colours[Math.floor(Math.random() * num)];
        setcolourname();
        setcolours();
        $("h1").css("background-color","steelblue");
        $("#message").text("");
    }

    window.makeeasy = ()=>
    {
        num = 3;
        $("button:nth-of-type(2)").addClass("selected");
        $("button:nth-of-type(3)").removeClass();
        for(let i = 3; i < 6; i++)
        {
            $(`.square:nth-of-type(${i + 1})`).css("display","none");
        }
        resetall();
    }

    window.makehard = ()=>
    {
        num = 6;
        $("button:nth-of-type(3)").addClass("selected");
        $("button:nth-of-type(2)").removeClass();
        for(let i = 3; i < 6; i++)
        {
            $(`.square:nth-of-type(${i + 1})`).css("display","block");
        }
        resetall();
    }
})
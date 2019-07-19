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
        let n = $(".square").length;
        for (let i = 0; i < n; i++) 
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
})
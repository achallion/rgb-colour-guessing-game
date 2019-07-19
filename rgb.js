$(function() {
    let colours = 
    [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
    ];

    let correctcolour = "";
    let alreadywon = false;

    const setcolours = function()
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

    const setcolourname = function()
    {
        correctcolour = colours[3];
        $("#color").html("<h2>" + correctcolour + "</h2>");
    }

    const colourall = function()
    {
        $(".square").css("background-color",correctcolour);
    }

    setcolourname();
    setcolours();
});
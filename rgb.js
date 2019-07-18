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

    const setcolours = function()
    {
        let n = $(".square").length;
        for (let i = 0; i < n; i++) 
        {
            $(`.square:nth-of-type(${i + 1})`).css("background-color", colours[i]);
        }
    }

    const setcolourname = function()
    {
        let givencolour = colours[3];
        $("#color").html("<h2>" + givencolour + "</h2>");
    }

    setcolours();
    setcolourname();
});
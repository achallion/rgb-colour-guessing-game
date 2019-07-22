$(function() 
{
    const main = function()
    {
        colours = randomizecolours(num);
        correctcolour = colours[Math.floor(Math.random() * num)];
        setcolourname();
        setcolours();
        $("#reset").click(resetall);
        $("button:nth-of-type(2)").click(makeeasy);
        $("button:nth-of-type(3)").click(makehard);
    }

    main();
});
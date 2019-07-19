$(function() 
{
    const main = function()
    {
        colours = randomizecolours(num);
        correctcolour = colours[Math.floor(Math.random() * num)];
        setcolourname();
        setcolours();
        $("#reset").click(resetall);
    }

    main();
});
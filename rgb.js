$(function() 
{
    const main = function()
    {
        colours = randomizecolours(6);
        correctcolour = colours[Math.floor(Math.random() * num)];
        setcolourname();
        setcolours();
    }

    main();
});
function next()
{
    var image = document.getElementById("slide");
    if(image.alt == "Slide1")
    {
        image.src = "../img/Slide2.jpg";
        image.alt = "Slide2";
    }
    else if(image.alt == "Slide2")
    {
        image.src = "../img/Slide3.jpg";
        image.alt = "Slide3";
    }
    else if(image.alt == "Slide3")
    {
        image.src = "../img/Slide4.jpg";
        image.alt = "Slide4";
    }
    else if(image.alt == "Slide4")
    {
        image.src = "../img/Slide5.jpg";
        image.alt = "Slide5";
    }
    else if(image.alt == "Slide5")
    {
        image.src = "../img/Slide1.jpg";
        image.alt = "Slide1";
    }
}

function previous()
{
    var image = document.getElementById("slide");
    if(image.alt == "Slide1")
    {
        image.src = "../img/Slide5.jpg";
        image.alt = "Slide5";
    }
    else if(image.alt == "Slide2")
    {
        image.src = "../img/Slide1.jpg";
        image.alt = "Slide1";
    }
    else if(image.alt == "Slide3")
    {
        image.src = "../img/Slide2.jpg";
        image.alt = "Slide2";
    }
    else if(image.alt == "Slide4")
    {
        image.src = "../img/Slide3.jpg";
        image.alt = "Slide3";
    }
    else if(image.alt == "Slide5")
    {
        image.src = "../img/Slide4.jpg";
        image.alt = "Slide4";
    }
}

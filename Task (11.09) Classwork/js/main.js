let el = document.getElementById("testButt");


const buttonHoverOnFun = (event) =>
{
    event.target.style.color = "rgba(0, 0, 0, 0)";
};

const buttonHoverOffFun = (event) =>
{
    event.target.style.color = "red";
};


el.addEventListener("mouseover", buttonHoverOnFun);
el.addEventListener("mouseout", buttonHoverOffFun);

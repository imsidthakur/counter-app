
const count = document.getElementById("count");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const error = document.getElementById("error");
const clear = document.getElementById("clear");


increment.addEventListener("click",incrementCount);
decrement.addEventListener("click",decrementCount);
clear.addEventListener("click",clearCount);


function incrementCount()
{
    error.style.display = "none";
    let currCount = Number(count.textContent);
    currCount++;
    count.textContent = currCount;
}

function decrementCount()
{
    let currCount = Number(count.textContent);
    if(currCount == 0)
    {
       error.style.display = "block";
    }
    else{
        currCount--;
        count.textContent = currCount;
    }
}

function clearCount()
{
    count.textContent = 0;
}
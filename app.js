const btn = document.querySelector("#button");
document.getElementById("button").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "block";
});
document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "none";
});

document.getElementById("submit").addEventListener("click", function () {
  const name = document.querySelector("#name");
  const password = document.querySelector("#password");
  const email = document.querySelector("#email");
  const greet = document.querySelector(".greet");
  let nameInput = name.value;
  greet.textContent = "Hello!" + " " + nameInput;
  btn.innerHTML = "Log Out";
});

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slides = document.querySelectorAll(".carousel");
let TotalSlides = slides.length;
let position = 0;
nextBtn.addEventListener("click", () => {
  hideAll();
  if (position === TotalSlides - 1) {
    position = 0;
  } else {
    position++;
  }
  slides[position].classList.add("visible");
});
prevBtn.addEventListener("click", () => {
  hideAll();
  if (position === 0) {
    position = TotalSlides - 1;
  } else {
    position--;
  }
  slides[position].classList.add("visible");
});
function hideAll() {
  for (let slide of slides) {
    slide.classList.remove("visible");
  }
}
const showMore = document.querySelector( ".showmore" );
const showmoreBtn = document.querySelector( ".showmore_btn" );
function showmore ()
{
    if ( showMore.style.display === 'none' )
    {
        showMore.style.display = 'block';
        showmoreBtn.innerHTML = 'close';
    } else
    {
        showMore.style.display = 'none';
    showmoreBtn.innerHTML = 'more';
    }
    // if ( showMore.style.display === 'none' )
    // {
       
    // } else
    // {
        
    // }
}
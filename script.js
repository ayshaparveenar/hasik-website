/* BACKGROUND MUSIC */
let music = document.getElementById("bgMusic");
music.play().catch(()=>{
document.addEventListener("click", () => {music.play();}, { once: true });});

/* TYPING EFFECT */
const text = "Hey Hasik 👋";
let i = 0;
function typeText() {
  if(i < text.length){
    document.getElementById("typingText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 100);
  }
}
typeText();

/* IMAGE SLIDER */
let currentSlide = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 3000);

/* CHAT MESSAGES */
let chats = [

  "Some people don’t try to impress, they just stay real. I think that’s your best quality.",
  "Thanks for being someone easy to talk to, easy to trust, and easy to laugh with.",
  "You have a way of making conversations feel easy. I really appreciate that about you.",
  "Not everyone is easy to talk to. You are. And that matters more than you think.",
 
];

let chatIndex = 0;

function nextChat() {
  if(chatIndex < chats.length){
    let div = document.createElement("div");
    div.className = "chat-message";
    div.innerText = chats[chatIndex];
    document.getElementById("chatBox").appendChild(div);
    chatIndex++;
  } else {
    document.getElementById("chatBox").innerHTML = "";
    chatIndex = 0;
  }
}

/* BUBBLES */
const bubbleContainer = document.getElementById("bubble-container");
function createBubble(){
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.width = 10 + Math.random() * 20 + "px";
  bubble.style.height = bubble.style.width;
  bubble.style.animationDuration = 4 + Math.random() * 4 + "s";
  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 8000);
}
setInterval(createBubble, 400);
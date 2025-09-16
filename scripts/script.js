// Global variable (accessible anywhere)
const ball = document.getElementById('ball');

// Example 1: Function with parameters and return value
function calculateArea(width, height){
    // Local variables (only visible inside this function)
    let area = width * height;
    return area; // Returning a value
}

// Example 2: Function showing local vs global scope
let globalMessage = "Hello from the global scope!";

function scopeExample(){
    let localMessage = "Hello from the local scope!";
    console.log(globalMessage); // ✅ Accessible
    console.log(localMessage);  // ✅ Accessible here
}

// Example 3: Reusable function to toggle animations
function toggleAnimation(elementId, action){
    let el = document.getElementById(elementId);
    if(action === "play"){
        el.style.animationPlayState = "running";
        return "Animation started";
    } else if(action === "pause"){
        el.style.animationPlayState = "paused";
        return "Animation paused";
    } else {
        return "Invalid action!";
    }
}

// ------------------------------
// Demo calls (you can check results in browser console)
// ------------------------------
console.log("Area of 5x10 is:", calculateArea(5, 10)); // → 50
scopeExample();
console.log(toggleAnimation("ball", "play"));  // Starts animation + logs message

// This code calculate Area the Transition Box
const box = document.querySelector(".transition-box");

box.addEventListener("click", () => {
    let width = box.offsetWidth;
    let height = box.offsetHeight;
    let area = calculateArea(width, height);
    alert("The area of this box is: " + area + "px²");
});

// Run when page loads
window.onload = () => {
    scopeExample(); // Console will show both global + local messages
};

// Remove old play() and pause()
// And instead, use toggleAnimation like this:

document.querySelector("button[onclick='play()']").onclick = () => {
    toggleAnimation("ball", "play");
};

document.querySelector("button[onclick='pause()']").onclick = () => {
    toggleAnimation("ball", "pause");
};

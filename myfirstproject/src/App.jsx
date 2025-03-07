import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let percentages = ["50%", "30%", "20%"];
  let colors = ["#b0b0ff", "#e8e8e8", "#000"];
  let texts = [
      "Case Study: Real-World Challenges & Solutions", 
      "Case Study: Real-World", 
      "Case Study: Real-World"
  ];
  let descriptions = [
      "A detailed exploration of problems, strategies, and outcomes, highlighting innovative approaches and practical implementations.",
      "A detailed exploration of problems, strategies, and outcomes, highlighting innovative approaches and practical implementations.",
      "A detailed exploration of problems, strategies, and outcomes, highlighting innovative approaches and practical implementations."
  ];

  function rotateData() {
      percentages.unshift(percentages.pop());
      colors.unshift(colors.pop());
      texts.unshift(texts.pop());
      descriptions.unshift(descriptions.pop());

      let circles = document.querySelectorAll(".circle");
      let contents = document.querySelectorAll(".content-block");
      let percentageElements = document.querySelectorAll(".percentage");

      circles.forEach((circle, index) => {
          circle.style.backgroundColor = colors[index];
          percentageElements[index].textContent = percentages[index];
      });

      contents.forEach((content, index) => {
          content.querySelector(".case-study-title").textContent = texts[index];
          content.querySelector(".description").textContent = descriptions[index];
      });
  }

  setInterval(rotateData, 3000);

  return (
   <>
    <div class="container">
        <div class="title">Case  Study</div>
        
        <div class="circle">
            <div class="percentage">50%</div>
        </div>
        <div class="content-block ">
            <div class="case-study-title">Case Study: Real-World Challenges & Solutions</div>
            <div class="description">A detailed exploration of problems, strategies, and outcomes, highlighting innovative approaches and practical implementations.</div>
        </div>
        
        <div class="circle">
            <div class="percentage">30%</div>
        </div>
        <div class="content-block  ">
            <div class="case-study-title">Case Study: Real-World</div>
            <div class="description">A detailed exploration of problems, strategies, and outcomes, highlighting innovative approaches and practical implementations.</div>
        </div>
        
        <div class="circle">
            <div class="percentage">20%</div>
        </div>
        <div class="content-block ">
            <div class="case-study-title">Case Study: Real-World</div>
            <div class="description">A detailed exploration of problems, strategies, and outcomes, highlighting innovative approaches and practical implementations.</div>
        </div>
    </div>
   </>
  )
}

export default App

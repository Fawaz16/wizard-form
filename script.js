// const next = document.querySelectorAll(".btn-text-white")
// const prev = document.querySelectorAll(".btn")
// const progress = document.getElementById("progress")
// const container = document.querySelectorAll(".container")

// let formStepsNum = 0;

// next.forEach(btn => {
//     btn.addEventListener ("click", () =>{
//         formStepsNum++;
//         updateFormSteps();
//     }
//     );
// });

// function updateFormSteps(){
//         container.forEach(container => {
//             container.classList.contains("container-active")
//                 // container.classList.remove("container-active");
//         });

//     container[formStepsNum].classList.add("container-active")
// }

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");
const sixth = document.getElementById("sixth");
const seventh = document.getElementById("seventh");
const progress =document.getElementById('progress');
const step1 =document.getElementById('step1');
const step2 =document.getElementById('step2');
const step3 =document.getElementById('step3');
const step4 =document.getElementById('step4');
const step5 =document.getElementById('step5');
const step6 =document.getElementById('step6');
const step7 =document.getElementById('step7');


function next(current) {
  if (current==='first') {
      first.style.display='none';
      second.style.display='block';
      progress.style.width='18%';
      step2.classList.add('progress-step-active');
      
      
  }
    else if (current==='second') {
    second.style.display='none';
    third.style.display='block';
    progress.style.width='36%';
    step3.classList.add('progress-step-active');

  
    
    
  }
  
    else if(current==='third'){
    third.style.display='none';
    fourth.style.display='block';
    progress.style.width='52%';
    step4.classList.add('progress-step-active');
    

  }
  else if(current==='fourth'){
    fourth.style.display='none';
    fifth.style.display='block';
    progress.style.width='68%';
    step5.classList.add('progress-step-active');
  }

  else if(current==='fifth'){
    fifth.style.display='none';
    sixth.style.display='block';
    progress.style.width='82%';
    step6.classList.add('progress-step-active');
  }
  
  else if(current==='sixth'){
    sixth.style.display='none';
    seventh.style.display='block';
    progress.style.width='100%';
    step7.classList.add('progress-step-active');
  }



 
}




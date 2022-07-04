let buttonAdd = document.getElementById("Add");
let register = document.getElementById("register");
buttonAdd.addEventListener("click", () => {
    
  if(register.classList.contains("close")){
      buttonAdd.classList.add("close")
      register.classList.remove("close")
      timer();   
    }
  });

let writingTime = 30;
const timer = () => {
  let pTimer = document.createElement('p');
  pTimer.setAttribute('id','Timer');
  document.getElementById('head').appendChild(pTimer);
  
  let time = setInterval(()=>{
    (function tempo(){
      document.getElementById('Timer').textContent = writingTime;
      writingTime--;

      if(writingTime < 0){
          buttonAdd.classList.remove("close")
          register.classList.add("close")
          document.getElementById('head').removeChild(pTimer);
          return clearInterval(time);
      }

    }())
    },1000)

}
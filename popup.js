let buttonAdd = document.getElementById("Add");
let register = document.getElementById("register");
let filename;

buttonAdd.addEventListener("click", () => {
  filename = document.getElementById("filename").value;

  if(filename){    
    if(register.classList.contains("close")){
        buttonAdd.classList.add("close")
        register.classList.remove("close")
        timer();   
      }
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
          const content = document.getElementById("text").value;
          buttonAdd.classList.remove("close")
          register.classList.add("close")
          document.getElementById('head').removeChild(pTimer);
          downloadText(filename, content)
          return clearInterval(time);
      }

    }())
    },1000)

}


function downloadText(filename, content){
   const element = document.createElement('a');

   const blob = new Blob([content], {
    type:'plain/text' 
   })
   const fileUrl = URL.createObjectURL(blob);
   element.setAttribute('href', fileUrl);
   element.setAttribute('download', filename+'.txt');
   element.style.display = 'none';

   document.body.appendChild(element);
   element.click();

   document.body.removeChild(element);

}

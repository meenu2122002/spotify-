console.log('spotify');
let masterplaycontent=document.getElementById("masterplaycontent");
let index=0;
let audioelement=new Audio('0.mp3');

let masterplay=document.getElementById('masterplay');
let gif=document.getElementById("gif");
let myprogressbar=document.getElementById('myprogressbar');
let songitems=document.getElementsByClassName("songitem");
let songs=[
    {songname:"o meri jaan",filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"Alvida",filepath:"song/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"Saiyaan",filepath:"song/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"Raat lambiya",filepath:"song/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"Qatra",filepath:"song/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"tom and jerry",filepath:"song/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"Tujhe kitna chahne lge ham",filepath:"song/7.mp3",coverpath:"covers/7.jpg"},
    {songname:"Dil ko karrar aaya",filepath:"song/8.mp3",coverpath:"covers/8.jpg"},
    {songname:"Channa mereya",filepath:"song/9.mp3",coverpath:"covers/9.jpg"},
    {songname:"Lehnga",filepath:"song/10.mp3",coverpath:"covers/10.jpg"},
    {songname:"bheege bheege se ham",filepath:"song/11.mp3",coverpath:"covers/11.jpg"},
    {songname:"Galliyan",filepath:"song/12.mp3",coverpath:"covers/12.jpg"},
    {songname:"itni si baat h",filepath:"song/13.mp3",coverpath:"covers/13.jpg"},
    {songname:"kaise hua",filepath:"song/14.mp3",coverpath:"covers/14.jpg"},
    {songname:"tere naal chali h hasi koi na",filepath:"song/15.mp3",coverpath:"covers/15.jpg"},
    {songname:"shayad",filepath:"song/16.mp3",coverpath:"covers/16.jpg"},
    {songname:"nakhra tera ni",filepath:"song/17.mp3",coverpath:"covers/17.jpg"},
    {songname:"Rockstar",filepath:"song/18.mp3",coverpath:"covers/18.jpg"},
    {songname:" I love you",filepath:"song/19.mp3",coverpath:"covers/19.jpg"},
];
    
masterplay.addEventListener("click",()=>{
  if(audioelement.paused || audioelement.currentTime<=0){
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
  }
   else{
    audioelement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
     gif.style.opacity=0;
   } 
})

audioelement.addEventListener("timeupdate",()=>{
  progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
  console.log(progress);
  myprogressbar.value=progress;
})

myprogressbar.addEventListener("change",()=>{
  audioelement.currentTime=parseInt((myprogressbar.value*audioelement.duration)/100);
})
 
function makeAllPlay(){
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
      element.classList.remove("fa-circle-paused");
        element.classList.add("fa-play");
      
   })

 }

  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
      //console.log(index);  
      element.addEventListener("click",(e)=>{
       let ind=parseInt(e.target.id);
       
      if( audioelement.src.split("/").pop()!=`${ind}.mp3`){
        //console.log(`${ind}.mp3`);
        makeAllPlay();
        index=parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-circle-pause");
        audioelement.currentTime=0;
      
        audioelement.src=`${index}.mp3`;
        //console.log(`${index}.mp3`);
        masterplaycontent.innerHTML=songs[index]["songname"];
        audioelement.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
      }
      else if(audioelement.paused && audioelement.src.split("/").pop()==`${ind}.mp3`){
        //console.log("he");
        audioelement.play(); 
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-circle-pause");
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
      }
      else if(audioelement.src.split("/").pop()==`${ind}.mp3`){
        //console.log("hello");
        audioelement.pause();
        e.target.classList.add("fa-play");
        e.target.classList.remove("fa-circle-pause");
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
      }
    })
  })
 
  document.getElementById("previous").addEventListener("click",()=>{
     if(index>0){
      index-=1;
     }

      audioelement.currentTime=0;
      audioelement.src=`${index}.mp3`;
        audioelement.play();
        masterplaycontent.innerHTML=songs[index]["songname"];
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
     
})

     
  document.getElementById("next").addEventListener("click",()=>{
       if(index>18)
       index=0;
       else
    index+=1;
     audioelement.currentTime=0;
      audioelement.src=`${index}.mp3`;
        audioelement.play();
        masterplaycontent.innerHTML=songs[index]["songname"];
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
     
})

     
     
  



















































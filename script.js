 console.log('welcome to spotify');

 let songIndex=0;
 let audioElement=new Audio('./songs/1.mp3');
 let masterplay=document.getElementById("masterPlay");
 
 let progressBar=document.getElementById("myProgressBar");
 let gif =document.getElementById("gif");
 let songtext=document.getElementById("songtext");
let songitmes=Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {songName:"oon hoon oon hoon", filePath:"./songs/1.mp3", fileCover:"./covers/1.jpg"},
    {songName:"Salam-e-ishaq", filePath:"./songs/2.mp3", fileCover:"./covers/2.jpg"},
    {songName:"let me love you", filePath:"./songs/3.mp3", fileCover:"./covers/3.jpg"},
    {songName:"bewafa", filePath:"./songs/4.mp3", fileCover:"./covers/4.jpg"},
    {songName:"chal waha jatay", filePath:"./songs/5.mp3", fileCover:"./covers/5.jpg"},
    {songName:"tumhari qasam", filePath:"./songs/6.mp3", fileCover:"./covers/6.jpg"},
    {songName:"sanam ", filePath:"./songs/7.mp3", fileCover:"./covers/7.jpg"},
    {songName:"dilabar", filePath:"./songs/8.mp3", fileCover:"./covers/8.jpg"},
    {songName:"bhula dena", filePath:"./songs/9.mp3", fileCover:"./covers/9.jpg"},
    {songName:"let me love you", filePath:"./songs/10.mp3", fileCover:"./covers/10.jpg"}

]
songitmes.forEach((element, i)=>{
    element.getElementsByClassName("img")[0].src = songs[i].fileCover;
    element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
})

  
masterplay.addEventListener('click', (e)=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause'); 
        gif.style.opacity=1; 
       
        
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;  
         
    }
})

audioElement.addEventListener('timeupdate', ()=>{
     console.log('timeupdate');

     progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    //  progress=parseInt(audioElement.currentTime);
     progressBar.value=progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime=progressBar.value * audioElement.duration/100;
})

function makeplayAll() {
    Array.from(document.getElementsByClassName('songplayAll')).forEach((element)=>{
        
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play'); 
       
    })
}

Array.from(document.getElementsByClassName('songplayAll')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        if(audioElement.paused || audioElement.currentTime==0){
        console.log(e);
        makeplayAll();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause'); 
        audioElement.src= `songs/${songIndex+1}.mp3`;
        songtext.innerHTML=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1; 
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause'); 
        }
        else{
           
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play'); 
        audioElement.src= `songs/${songIndex+1}.mp3`;
        songtext.innerHTML=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.pause();
        gif.style.opacity=0; 
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');  
     
        }
    })
})

document.getElementById('next').addEventListener('click', ()=>{
     if (songIndex>9) {
        songIndex=0;
     } else {
        songIndex +=1;
     }
     audioElement.src= `songs/${songIndex+1}.mp3`;
     songtext.innerHTML=songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity=1; 
     masterplay.classList.remove('fa-circle-play');
     masterplay.classList.add('fa-circle-pause'); 
})
document.getElementById('previous').addEventListener('click', ()=>{
     if (songIndex<0) {
        songIndex=0;
     } else {
        songIndex -=1;
     }
     audioElement.src= `songs/${songIndex+1}.mp3`;
     songtext.innerHTML=songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity=1; 
     masterplay.classList.remove('fa-circle-play');
     masterplay.classList.add('fa-circle-pause'); 
})
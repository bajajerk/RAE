var indexp=0;
function getindex(index)
{
    indexp= index-1;
}
var plyEle = document.getElementsByClassName('bx4');
function playVideo(vid_id){
	var ifrEle ="";
	var playerSec = document.getElementById('vid_sec_play');
	var blcEle = document.getElementById('vid_blak_scrn');	
	var plEle = document.getElementById('play_vid');
	var vti = 0, check= 0;
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
	playerSec.style.visibility = "visible";    

	blcEle.style.backgroundImage = "url('https://img.youtube.com/vi/"+vid_id+"/default.jpg')";
    ifrEle = document.createElement('iframe');
	
    ifrEle.src = 'https://www.youtube.com/embed/'+vid_id+'?&autoplay=1&rel=0&modestbranding=1&autohide=1&showinfo=1&version=3?rel=0&amp;wmode=transparent';
    ifrEle.height = "540";
    ifrEle.width = "100%";
    ifrEle.align = "center";
    ifrEle.setAttribute('frameborder',"0");
    ifrEle.setAttribute('allowFullScreen', '');
    plEle.innerHTML = "";
    plEle.appendChild(ifrEle);    
  ifrEle.onload = function(){this.style.visibility = 'visible';}
/*for esc press function start */	
    vti = 1;
  window.onkeyup = function (event){
     if(event.keyCode == 27 && check !=vti){     
        check = vti;
        clsVid();                    
     }else if(event.keyCode == 27){
        check = 0;
     }
};    
playerSec.getElementsByTagName('span')[0].addEventListener("click", function(){
        check = vti;
    });
/*for esc press function end */	
}
function clsVid(){
    goontop();
	document.getElementById('vid_blak_scrn').style.backgroundImage = "";
    document.getElementById('play_vid').innerHTML = "";
	document.getElementById('vid_sec_play').style.visibility = "hidden";
    document.body.style = "";

}
function goontop()
{var playElement= plyEle[indexp];	
	$("body, html").animate({ 		
		scrollTop: $(playElement).offset().top - 110  
	}, 100);
}
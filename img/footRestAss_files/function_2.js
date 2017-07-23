function getCartCookie(Name){
    var search = Name + "=";
    if (document.cookie.length > 0){ /* if there are any cookies*/
        offset = document.cookie.indexOf(search);
        if (offset != -1){ /* if cookie exists*/
            offset += search.length;
            /* set index of beginning of value*/
            end = document.cookie.indexOf(";", offset);
            /* set index of end of cookie value*/
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(offset, end));
        }
    }
    return "";
};
function tollfree(){
var myDate = new Date();
	var gmt = -myDate.getTimezoneOffset()/60;
	if(gmt == 5.5){
		if(document.getElementById('tollfree')){  document.getElementById('tollfree').innerHTML = '0'+pns_no; }
		if(document.getElementById('tollfree1')){  document.getElementById('tollfree1').innerHTML = '0'+pns_no; }
	}else{
		if(document.getElementById('tollfree')){  document.getElementById('tollfree').innerHTML = '+91-'+pns_no; }
		if(document.getElementById('tollfree1')){  document.getElementById('tollfree1').innerHTML = '+91-'+pns_no; }
	}
};
/*scroller function start*/
var Imgs=[];
function ImgLoad(cls){
	var as=zxcByClassName(cls);
	for (var z0=0;z0 < as.length;z0++)	{
		if (as[z0].getElementsByTagName('IMG')[0].getAttribute('dataimg')&&as[z0].getElementsByTagName('IMG')[0]){
			oop=new Fade(as[z0].getElementsByTagName('IMG')[0],as[z0].getElementsByTagName('IMG')[0].getAttribute('dataimg')); Imgs.push(oop);
		}else if(as[z0].getAttribute('dataimg')&&as[z0].getElementsByTagName('IMG')[0]){
			oop=new Fade(as[z0].getElementsByTagName('IMG')[0],as[z0].getAttribute('dataimg')); Imgs.push(oop);
		}
	}
CkTop();};
function CkTop(){ for (var z0=0;z0 < Imgs.length;z0++){	if (zxcPos(Imgs[z0].img)[1]< zxcWWHS()[1]+zxcWWHS()[3]&&Imgs[z0].opc==0){Imgs[z0].fade(); Imgs.splice(z0,1); z0--;	}} };
function zxcWWHS(){ if (window.innerHeight) return [window.innerWidth-10,window.innerHeight-10,window.pageXOffset,window.pageYOffset]; else if (document.documentElement.clientHeight) return [document.documentElement.clientWidth-10,document.documentElement.clientHeight-10,document.documentElement.scrollLeft,document.documentElement.scrollTop]; return [document.body.clientWidth,document.body.clientHeight,document.body.scrollLeft,document.body.scrollTop]; };function zxcPos(obj){ var rtn=[0,0]; while(obj){ rtn[0]+=obj.offsetLeft; rtn[1]+=obj.offsetTop; obj=obj.offsetParent; } return rtn; };function zxcByClassName(nme,el,tag){ if (typeof(el)=='string') el=document.getElementById(el);el=el||document; ary=[];	if(nme != 'undefined'){ for (var tag=tag||'*',reg=new RegExp('\\b'+nme+'\\b'),els=el.getElementsByTagName(tag),z0=0; z0< els.length;z0++){if(reg.test(els[z0].className)) ary.push(els[z0]);}} return ary;};window.onscroll=CkTop;
/*---------------search-------------------*/
function searchCheck(){
	var str = '';
	if (document.frm.ss.value=='' || document.frm.ss.value=='Search Products/Services' || document.frm.ss.value.match(/^\s+$/))	{
		alert("Please enter some keyword to search.");
		document.frm.ss.focus();document.frm.ss.value='';return false;
	}
	if (document.frm.ss.value.length < 3) {
		alert("Please Enter atleast 3 character");
		document.frm.ss.focus();document.frm.ss.value='';return false;
        }
	if (!(document.frm.ss.value.match(/\w/))){
	alert("Enter at least one alphanumeric characters for search.");
	document.frm.ss.focus();
	document.frm.ss.value='';
	return false;}
        if (document.frm.ss.value) {
		var str1;
		str1 = document.frm.ss.value.replace(/^\s+/g, '').replace(/\s+$/g, '');
		str1 = str1.replace(/\+/g, ' ');
		str1 = str1.replace(/\s+/g, '+');
		str1 = str1.replace(/%/g, '%25');
		str += 'ss='+str1;
	/* ------------ GOOGLE TRACK EVENT FOR SEARCH -------------------------------------- */
		try{
		_gaq.push(['b._trackEvent','Body','Searchbutton',''+PC_CLNT_TMPL_PATH+'']);
		}catch(e){}
	/* --------------------- GOOGLE TRACK EVENT FOR SEARCH -------------------------------------- */
		window.location = PAID_SHOWROOM_URL+"search.html?"+str;
            return false;
        }
}
function searchClear(){if(document.frm.ss.value=="Search Products/Services"){document.frm.ss.value=""}}
function settext(){if(document.frm.ss.value==""){document.frm.ss.value="Search Products/Services"}}
function settextvalue(){document.frm.ss.value="Search Products/Services"}
if(typeof PC_CLNT_TMPL_PATH != "undefined" && PC_CLNT_TMPL_PATH == 'd0051'){
	  function searchCheck1(){
	    var str='';
		if(document.frm1.ss1.value=='' || document.frm1.ss1.value=='Search Products/Services' || document.frm1.ss1.value.match(/^\s+$/)){
		alert("Please enter some keyword to search.");
		document.frm1.ss1.focus();
		document.frm1.ss1.value='';
		return false;}
	    if(document.frm1.ss1.value.length < 3){
		alert("Please Enter atleast 3 character");
		document.frm1.ss1.focus();
		return false;}
	    if (!(document.frm1.ss1.value.match(/\w/))){
		alert("Enter at least one alphanumeric characters for search.");
		document.frm1.ss1.focus();
		document.frm1.ss1.value='';
		return false;}
	    if(document.frm1.ss1.value){
		var str1;
		str1=document.frm1.ss1.value.replace(/^\s+/g,'').replace(/\s+$/g,'');
		str1 = encodeURIComponent(str1);
		str1=str1.replace(/\+/g,' ');
		str1=str1.replace(/\s+/g,'+');
		str+='ss='+str1;
		/* --------------------- GOOGLE TRACK EVENT FOR SEARCH ---------------------------- */
		try{
		_gaq.push(['b._trackEvent','Body','Searchbutton',''+PC_CLNT_TMPL_PATH+'']);
		}catch(e){}
		/* -------------------- GOOGLE TRACK EVENT FOR SEARCH --------------------------- */
	    			    window.location = PAID_SHOWROOM_URL+"search.html?"+str;
	    	    return false;}};
	    function searchClear1(){ if(document.frm1.ss1.value=='Search Products/Services'){ document.frm1.ss1.value=''; }};
	    function settext1(){if(document.frm1.ss1.value==''){document.frm1.ss1.value='Search Products/Services';}};
	    function settextvalue1(){document.frm1.ss1.value='Search Products/Services';};
}

var _FG_tracker=null;function up_form_blow(c,b){var a=document.getElementById(b);a.style.display="block";var d=document.getElementById(c);d.style.display="block"}
function fg_hideform_blow(d,c,a,f){var e=document.getElementById(d);e.style.display="none";var b=document.getElementById(c);b.style.display="none";document.getElementById("bimg"+f).src=a}
function openchildts1(thisurl){
browserName = navigator.appName;
browserVer = parseInt(navigator.appVersion);
condition = !(( (browserName.indexOf("Explorer") >=0 ) && (browserVer < 4) ) ||  ((browserName.indexOf("Netscape") >=0 ) && (browserVer < 2) ) ) ;
if (condition == true  )
CanAnimate = true;
else
CanAnimate = false;
if ( CanAnimate ) {
var windowHeight; var windowWidth; var windowTop; var windowLeft;
if (browserName == 'Microsoft Internet Explorer'){
        windowWidth="550px";
}else{     windowWidth="553px";
}
windowHeight=(screen.height*(80/100))*0.85;
windowTop=(screen.height*(20/100))*0.8; windowLeft=screen.width*(40.2/100);
msgWindow=window.open( '' ,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,top='+windowTop+',left='+windowLeft+',width='+windowWidth+',height='+windowHeight);
msgWindow.focus(); msgWindow.location.href = thisurl; }else {
msgWindow=window.open( thisurl,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,width=510,height=420'); }
};
function LoadSliderImage() {
	if(jQuery(".scrollContainer2")[0]!=undefined && jQuery(".scroll2")[0]!=undefined ){
		var a = parseInt(jQuery(".scrollContainer2").position().left) + parseInt(jQuery(".scroll2").offset().left);
		var b = Math.abs(jQuery(".scrollContainer2").position().left) + parseInt(jQuery(".scroll2").offset().left) + parseInt(jQuery(".scroll2").css("width"));
			var windowTopvar = (window.pageYOffset!=undefined)?window.pageYOffset:window.document.documentElement.scrollTop;
		if (parseInt(jQuery("#slider2").offset().top) < (parseInt(windowTopvar) + parseInt(jQuery(window).height())) && (parseInt(jQuery("#slider2").offset().top) + parseInt(jQuery("#slider2").height())) > (parseInt(windowTopvar))) {
			jQuery(".inside a img").each(function () {
			if (parseInt(jQuery(this).offset().left) > a && parseInt(jQuery(this).offset().left) < b) {
				if(this.getAttribute("dataimg")!= ""){
				this.src =  this.getAttribute("dataimg");
				
			}
			}
			})
		} CkTop();
	}
}
function Windowheight() {  var myWidth = 0, myHeight = 0; if( typeof( window.innerWidth ) == 'number' ) {    myWidth = window.innerWidth;    myHeight = window.innerHeight; } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight)){ myWidth = document.documentElement.clientWidth; myHeight = document.documentElement.clientHeight; } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {myWidth = document.body.clientWidth; myHeight = document.body.clientHeight;  }  return myHeight;}
function offsettop(options) {
	core_strundefined = typeof undefined;
	var docElem, win,
		box = { top: 0, left: 0 },
		elem = options,
		doc = elem && elem.ownerDocument;
	if ( !doc ){ return; }
	docElem = doc.documentElement;
	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {box = elem.getBoundingClientRect();}
	win = getWindow( doc );
	return {
		top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
		left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
	};
};
function getWindow( elem ) {	return (elem != null && elem == elem.window)?elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow :	false;}
function LoadImageinViewPort() {
var windowTopvar = (window.pageYOffset!=undefined)?window.pageYOffset:window.document.documentElement.scrollTop;
if (typeof jQuery == 'undefined') {
	var LazyImages = document.getElementsByTagName('img');
	var imageLink = "";
	for(i=0;i<LazyImages.length;i++){
		imageLink="";
			if (parseInt(offsettop(LazyImages[i]).top) <= (parseInt(windowTopvar) + parseInt(Windowheight())+600) && (parseInt(offsettop(LazyImages[i]).top) + parseInt(Windowheight())+600) > (parseInt(windowTopvar))) {
				if(LazyImages[i].getAttribute('dataimg')!=null && LazyImages[i].getAttribute('dataimg')!=""){
					imageLink = LazyImages[i].getAttribute("dataimg");
				}else if(LazyImages[i].parentNode.getAttribute('dataimg')!=null && LazyImages[i].parentNode.getAttribute('dataimg')!=""){
					imageLink = LazyImages[i].parentNode.getAttribute("dataimg");
				}
				if(imageLink!=""){ LazyImages[i].src = imageLink; }
			}
	}
} else {
    	jQuery("img[dataimg]").each(function () { 
		if (parseInt(jQuery(this).offset().top) < (parseInt(windowTopvar) + parseInt(jQuery(window).height())+600) && (parseInt(jQuery(this).offset().top) + parseInt(jQuery(this).height())+600) > (parseInt(windowTopvar))) {
			if(this.getAttribute("dataimg")!= ""){
				this.src =  this.getAttribute("dataimg");
			}
		}
	});
	jQuery("a[dataimg] img").each(function () {
		if (parseInt(jQuery(this).offset().top) < (parseInt(windowTopvar) + parseInt(jQuery(window).height())+600) && (parseInt(jQuery(this).offset().top) + parseInt(jQuery(this).height())+600) > (parseInt(windowTopvar))) {
			jQuery(this).attr('src',jQuery(this).parent("a[dataimg]").attr("dataimg"));
		}
	});
}
if (window.addEventListener)
window.addEventListener("scroll", bindFunctionOnScroll, false);
else if (window.attachEvent)
window.attachEvent("onscroll", bindFunctionOnScroll);
else window.onscroll = bindFunctionOnScroll;
CkTop();
};
var timer;
function bindFunctionOnScroll(){clearTimeout(timer);timer = setTimeout( LoadImageinViewPort , 150 );};
var arr;var str;
function finder(arr,str){	
	var newArr = new Array();
	for(var i=0;i <arr.length;i++)	{
		var patt = new RegExp(str,"i");
		if(patt.test(arr[i]))		{
			newArr.push({"value":arr[i], "label":arr[i]});
		}
	}
	return newArr;
}
function changeImages() { if (document.images) {
		var i=0;
		document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		document[changeImages.arguments[i]].setAttribute('data-bimg',changeImages.arguments[i+2]);
		document[changeImages.arguments[i]].setAttribute('dataimg',changeImages.arguments[i+2]);
		if(typeof PC_CLNT_TMPL_PATH != "undefined" && PC_CLNT_TMPL_PATH == 'd0055'){
			document[changeImages.arguments[i]].setAttribute('dataimg',changeImages.arguments[i+1]);}
	}}
function resize_hw(Obj, h, w){	myImage = new Image();	myImage.src = Obj.src;	var height = myImage.height;	var width = myImage.width;	if(height > h || width > w){		if(height > width){		var temp = height/h; var new_width = width / temp; new_width = parseInt(new_width); height = h; width = new_width;		}else{		var temp = width/w; var new_height = height / temp; new_height = parseInt(new_height);height = new_height; width = w;		}	}	Obj.height = height;	Obj.width = width;	}
// ============================/*drop.js start*/=========================================
var ver='3.0.1D';
var m1=new Object;
m1.name='m1';
m1.fnm='so-';
if(!window.lastm||window.lastm<1)lastm=1;
m1.v17=null;
m1.v17Timeout='';
var maxZ=3000;
m1.v18;m1.targetFrame;
var docLoaded=false;
m1.bIncBorder=true;
m1.v29=null;m1.v29Str='';
m1.v55=50;
m1.scrollStep=10;
m1.fadingSteps=2;
m1.itemOverDelay=0;
m1.transTLO=0;
m1.fixSB=0;
m1.v21=".";
m1.maxlev=2;
m1.v22=0;
m1.sepH=10;
m1.bHlNL=1;m1.showA=1;
m1.bVarWidth=0;
m1.bShowDel=50;
m1.scrDel=0;
m1.v23=246;        /*width dropdown*/
if(typeof PC_CLNT_TMPL_PATH != "undefined" && PC_CLNT_TMPL_PATH == 'd0055'){
m1.v23=224;        /*width dropdown*/
}
else if(typeof PC_CLNT_TMPL_PATH != "undefined" && PC_CLNT_TMPL_PATH == 'd0050'){
  m1.v23=200;
  
}
else if(typeof PC_CLNT_TMPL_PATH != "undefined" && PC_CLNT_TMPL_PATH == 'd0005'){
  m1.v23=160;
  
}
m1.levelOffset=-1;m1.levelOffsety=2;m1.bord=1;m1.vertSpace=8;
m1.sep=1;
m1.v19=false; m1.bkv=0; m1.rev=0; m1.shs=0;m1.xOff=0; m1.yOff=0; m1.v20=false; m1.cntFrame=""; m1.menuFrame=""; m1.v24="";
m1.mout=true;
m1.iconSize=8;
m1.closeDelay=1000;
m1.tlmOrigBg="#000000"; /*first frame mouseout color*/
m1.tlmOrigCol="Black";
m1.v25=false;m1.v52=false;m1.v60=0;m1.v11=false;m1.v10=0;
m1.ppLeftPad=5;
m1.opacity=0.5;
m1.v54=0;
m1.v01=2;
m1.tlmHlBg="#F4F4F4"; /*first frame mouseover color*/
m1.tlmHlCol="White";
m1.menuHorizontal=true;
m1.scrollHeight=6;
m1mn1=drop_product;
m1mn3=drop_profile;
function openNewWindow(){
window.open(drop_pdf_url,'_blank');
/* --------------------------------------- GOOGLE TRACK EVENT FOR SEARCH -------------------------------------- */
try{ _gaq.push(['b._trackEvent','Top','download_brochure','d0056']);}catch(e){}
/* --------------------------------------- GOOGLE TRACK EVENT FOR SEARCH -------------------------------------- */
};
absPath="";
if(m1.v19 && !m1.v20){
if(window.location.href.lastIndexOf("\\")>window.location.href.lastIndexOf("/")) {sepCh = "\\" ;} else {sepCh = "/" ;}
absPath=window.location.href.substring(0,window.location.href.lastIndexOf(sepCh)+1);}
m1.v61=0;
m1.v02=m1.v23;
var drop_down_arr = {
  "2376": {"drpwid": '17px', "drpclr1": "#262626","drpfont": "Roboto Condensed,Helvetica,sans-serif","drpclr2": "#be2a11","drpbrdclr": "#6d6b6b"},
  "2381": {"drpwid": '17px', "drpclr1": "#262626","drpfont": "Roboto Condensed,Helvetica,sans-serif","drpclr2": "#2980b9","drpbrdclr": "#6d6b6b"},
  "2382": {"drpwid": '17px', "drpclr1": "#262626","drpfont": "Roboto Condensed,Helvetica,sans-serif","drpclr2": "#309e40","drpbrdclr": "#6d6b6b"},
  "2383": {"drpwid": '17px', "drpclr1": "#262626","drpfont": "Roboto Condensed,Helvetica,sans-serif","drpclr2": "#e6ae03","drpbrdclr": "#6d6b6b"},
  "2384": {"drpwid": '19px', "drpclr1": "#050505","drpfont": "Open Sans,sans-seriff","drpclr2": drop_color,"drpbrdclr": "#4b4542"},
  "2367": {"drpwid": '14px', "drpclr1": "#262626","drpfont": "Arial,Helvetica,sans-serif","drpclr2": "#0c7c5e","drpbrdclr": "#2c2c2c"},
  "1155": {"drpwid": '11px', "drpclr1": "#c1a400","drpfont": "verdana,Arial,Helvetica","drpclr2": "#FAE882","drpbrdclr": "#cfb93b"},  
  "1156": {"drpwid": '11px', "drpclr1": "#6d0000","drpfont": "verdana,Arial,Helvetica","drpclr2": "#d85901","drpbrdclr": "#a42626"}, 
  "1157": {"drpwid": '11px', "drpclr1": "#404040","drpfont": "verdana,Arial,Helvetica","drpclr2": "#F8AD00","drpbrdclr": "#595959"}, 
  "1158": {"drpwid": '11px', "drpclr1": "#859b2b","drpfont": "verdana,Arial,Helvetica","drpclr2": "#C94C00","drpbrdclr": "#6c801c"},
  "1159": {"drpwid": '11px', "drpclr1": "#EA9B03","drpfont": "verdana,Arial,Helvetica","drpclr2": "#D3D3D3","drpbrdclr": "#D88F02"}, 
  "1160": {"drpwid": '11px', "drpclr1": "#424242","drpfont": "verdana,Arial,Helvetica","drpclr2": "#F7631B","drpbrdclr": "#5F5F5F"}, 
  "1161": {"drpwid": '11px', "drpclr1": "#925A22","drpfont": "verdana,Arial,Helvetica","drpclr2": "#E36A1A","drpbrdclr": "#B47646"}, 
  "1163": {"drpwid": '11px', "drpclr1": "#2F2E2F","drpfont": "verdana,Arial,Helvetica","drpclr2": "#FE9600","drpbrdclr": "#666566"}, 
  "1164": {"drpwid": '11px', "drpclr1": "#c1a400","drpfont": "verdana,Arial,Helvetica","drpclr2": "#FAE882","drpbrdclr": "#cfb93b"}, 
  "1165": {"drpwid": '11px', "drpclr1": "#5B422A","drpfont": "verdana,Arial,Helvetica","drpclr2": "#D95C02","drpbrdclr": "#795F46"}, 
  "1166": {"drpwid": '11px', "drpclr1": "#ca4065","drpfont": "verdana,Arial,Helvetica","drpclr2": "#c1234e","drpbrdclr": "#f1618a"}, 
  "1167": {"drpwid": '11px', "drpclr1": "#A62500","drpfont": "verdana,Arial,Helvetica","drpclr2": "#D36402","drpbrdclr": "#B55136"}, 
  "1169": {"drpwid": '11px', "drpclr1": "#466500","drpfont": "verdana,Arial,Helvetica","drpclr2": "#F69200","drpbrdclr": "#6E8D27"}, 
  "1170": {"drpwid": '11px', "drpclr1": "#424242","drpfont": "verdana,Arial,Helvetica","drpclr2": "#F6DC5F","drpbrdclr": "#5F5F5F"}, 
  "1171": {"drpwid": '11px', "drpclr1": "#ea4e01","drpfont": "verdana,Arial,Helvetica","drpclr2": "#ffe23a","drpbrdclr": "#f47333"},
  "1173": {"drpwid": '11px', "drpclr1": "#2F2E2F","drpfont": "verdana,Arial,Helvetica","drpclr2": "#AA3209","drpbrdclr": "#5A595A"},  
  "1174": {"drpwid": '11px', "drpclr1": "#5B422A","drpfont": "verdana,Arial,Helvetica","drpclr2": "#D95C02","drpbrdclr": "#795F46"},
  "1192": {"drpwid": '11px', "drpclr1": "#405563","drpfont": "verdana,Arial,Helvetica","drpclr2": "#C69915","drpbrdclr": "#8A98A3"},
};
for (key in drop_down_arr){
	if(PC_CLNT_STYLE_ID == key){
		for(skey in drop_down_arr[key]){
			if(skey == 'drpwid'){ drpwid = drop_down_arr[key][skey];	}
			if(skey == 'drpclr1'){	drpclr1 = drop_down_arr[key][skey];	}
			if(skey == 'drpfont'){	drpfont = drop_down_arr[key][skey];	}
			if(skey == 'drpclr2'){	drpclr2 = drop_down_arr[key][skey];	}
			if(skey == 'drpbrdclr'){drpbrdclr = drop_down_arr[key][skey];	}
		}
	}
}
fontclr1 = fontclr2 = '#FFFFFF';
if(PC_CLNT_STYLE_ID == '1155' || PC_CLNT_STYLE_ID == '1159' || PC_CLNT_STYLE_ID == '1164'){
    fontclr1 = '#000';    
}
if(PC_CLNT_STYLE_ID == '1155' || PC_CLNT_STYLE_ID == '1157' || PC_CLNT_STYLE_ID == '1159' || PC_CLNT_STYLE_ID == '1164' || PC_CLNT_STYLE_ID == '1169' || PC_CLNT_STYLE_ID == '1170'  || PC_CLNT_STYLE_ID == '1171' || PC_CLNT_STYLE_ID == '1174' ){
    fontclr2 = '#000';    
}
if(typeof PC_CLNT_TMPL_PATH != "undefined" && (PC_CLNT_TMPL_PATH == 'd0055' || PC_CLNT_TMPL_PATH == 'd0057' || PC_CLNT_TMPL_PATH == 'd0050' || PC_CLNT_TMPL_PATH == 'd0005')){
	 m1.attr=new Array(drpwid,false,false,fontclr1,drpclr1,fontclr2,drpfont,drpclr2,"#FFFFFF","#FFFFFF" );
	 m1.borderCol=drpbrdclr;
}else{
	m1.attr=new Array("19px",false,false,"#FFFFFF","#050505","#FFFFFF","Roboto Condensed,Helvetica,sans-serif",drop_color,"#FFFFFF","#FFFFFF" );
	m1.borderCol="#4b4542";
}
NS60=(navigator.userAgent.indexOf("Netscape6/6.0")!=-1);
Opera=(navigator.userAgent.indexOf('Opera') !=-1)||(navigator.appName.indexOf('Opera')!=-1)||(window.opera);
Opera7=(Opera&&document.createElement!=null&&document.addEventListener!=null);
IE4=(document.all&&!Opera);
mac=((IE4)&&(navigator.appVersion.indexOf("Mac")!=-1));
DOM=document.documentElement&&!IE4&&!Opera;
if(IE4){av=navigator.appVersion;avi=av.indexOf("MSIE");if(avi==-1){version=parseInt(av);}else{version=parseInt(av.substr(avi+4));}}
function zz(e,i){return e?e.document.getElementById(i):document.getElementById(i);};
function f33(p){
if(p&&p.indexOf(':/')==-1&&p.indexOf(':\\')==-1&&p.indexOf('/')!=0) return unescape(absPath)+p;
else return p;};
function addLoadHandler(lh){
if(lh){if(!document.loadHandlers){
document.loadHandlers=new Array();
document.loadHandlers[0]=lh;
document.lastLoadHandler=0;}
else{
document.lastLoadHandler++;
document.loadHandlers[document.lastLoadHandler]=lh;}}};
addLoadHandler('f29');
addLoadHandler(window.onload);
/*window.onload=preloadImages();*/
function f32(){return true;};
window.onerror=f32;
function f01(op,opObj,vis,ns,ie,frc){if(op||frc){
if(ns)opObj.style.MozOpacity=(vis&&op!=100)?(op/100):'0.999';
if(ie)opObj.style.filter=vis?"alpha(opacity="+op+")":"";}};
function f02(q,objId,step){var obj=zz(q.v18,objId);if(!obj ||(q.transTLO&&obj.level>0))return;var objBg=zz(q.v18,objId+'bgWnd');var max=q.v60?q.v60:100;f01((q.fadingSteps-step)*max/q.fadingSteps,obj,1,1,1,1);if(objBg)f01(100,objBg,0,0,q.v11,1); if(step<=0) return; setTimeout("f02("+q.name+",'"+objId+"',"+(step-1)+")",q.bShowDel/q.fadingSteps);};
function f04(wnd,width,borderWidth){
wnd.style.width=(width-borderWidth)+"px";
if(wnd.offsetWidth>width-borderWidth)wnd.style.width=(width-parseInt(wnd.style.paddingLeft)-parseInt(wnd.style.paddingRight))+"px";};
function f56(txt,op){if(!txt)return "";var i=op?txt.indexOf(op+':'):-2;if(i !=-1){var i2=txt.indexOf(";",i+2); if(i2==-1)i2=txt.length;return txt.substring(i+2,i2);}return "";};
function f05(q,v12,level,v04,nsi){
var ppName=v12+"pp";
var pp=zz(q.v18,ppName);
if(pp)return pp;
if(q.v17&&q.v17.id==ppName)q.v17=null;
var v09=q.attr;
if(level>0)q.v02=q.v23;
var oldv02=q.v02;
pp=q.v18.document.createElement("DIV");
pp.style.opacity='0.9';
if(typeof PC_CLNT_TMPL_PATH != "undefined" && (PC_CLNT_TMPL_PATH == 'd0055' || PC_CLNT_TMPL_PATH == 'd0005')){pp.style.opacity='1';}
q.v18.document.body.appendChild(pp);
pp.id=ppName;
pp.v04=v04;
pp.level=level;
pp.v05=v09[5];
if(v12=='m1mn2')pp.v05='#f0f0f0';		/*to change mouseovercolour for showcase dropdown text*/
pp.v06=v09[3];
if(v12=='m1mn2')pp.v06='#000000';			/*to change bgcolour for showcase dropdown*/
var c1=v09[4];
if(v12=='m1mn2')c1='#BFD2EA';			/*to change bgcolour for showcase dropdown*/
var prop=eval("document."+v12+"prop");
if(prop){
var pw=f56(prop,"w");
if(pw)q.v02=parseInt(pw);
var bc=f56(prop,"p");
if(bc)c1=bc;}
pp.v07=v09[7];
if(v12=='m1mn2')pp.v07='#6070B1';		/*to change mouseover colour for showcase dropdown*/
pp.v08=c1;
pp.scrVis=false;
with(pp.style){
zIndex=maxZ;
position="absolute";
overflow="hidden";
width=q.v02+"px";
if(!q.v11){
borderColor=q.borderCol;
if(v12=='m1mn2'){borderColor='#ffffff';		/*to change border colour for showcase dropdown*/
q.borderCol='#ffffff';
}
backgroundColor=c1;
borderWidth="0px";
borderStyle="solid";}
else backgroundColor="";}
pp.q=q;
f30(pp,"mouseout",f15,false);
f30(pp,"mouseover",f14,false);
var v31=0;
var bgWnd=q.v18.document.createElement("DIV");
pp.appendChild(bgWnd);
bgWnd.id=pp.id+"bgWnd";
bgWnd.style.position="absolute";
bgWnd.style.top=q.v10+"px";
bgWnd.style.width=(q.v02-2*q.bord)+"px";
bgWnd.innerHTML="<font size='1'>&nbsp;</font>";
if(0){}
else{
bgWnd.style.backgroundColor=c1;}
if(q.v55)f03(q,pp,pp.id+"scrollUp","javascript:scrollUp("+q.name+",'"+pp.id+"');","(^1)",null,v09,true,v31,bgWnd);
var array=eval(v12);
var v13;
for(v13=0;v13 < array.length/5;v13++){
var fold=array[v13*5+2];
var v30=fold?(v12+"_"+parseInt(v13+1)):null;
var options=array[v13*5+4];
v31+=f03(q,pp,null,array[v13*5+1],array[v13*5],v30,v09,(v13==array.length/5-1),v31,bgWnd,array[v13*5+3],options);}
if(q.v55)f03(q,pp,pp.id+"scrollDown","javascript:scrollDown("+q.name+",'"+pp.id+"');","(^2)",null,v09,true,v31,bgWnd);
var v28=0;
pp.style.height=(v31+q.bord*2+v28)+"px";
pp.maxHeight=v31+q.bord*2;
bgWnd.style.height=(v31-q.v10-v28)+"px";
if(pp.offsetHeight>v31+q.bord*2+v28){
pp.style.height=v31+"px";
q.bIncBorder=false;
pp.maxHeight=v31;}
q.v02=oldv02;
return pp;
};
function f03(q,pp,id,v27,v26,v30,v09,bLast,v31,parent,target,opt){
if(v26=="-")return q.sepH;var itemType=0;if(v26&&v26.indexOf("(^1)")!=-1)itemType=1;
if(v26&&v26.indexOf("(^2)")!=-1)itemType=2;var itemWnd=q.v18.document.createElement("DIV");
pp.appendChild(itemWnd);if(mac){var brWnd=q.v18.document.createElement("BR");pp.appendChild(brWnd);}
f30(itemWnd,"mouseover",f22,false);
f30(itemWnd,"mouseout",f23,false);
f30(itemWnd,"click",f20,false);
f30(itemWnd,"dblclick",f20,false);
itemWnd.owner=pp;itemWnd.id=id;
with(itemWnd.style){
position="absolute";if(itemType==2)top=(v31-q.scrollHeight)+"px";
else top=v31+"px";if(v27){cursor=(!IE4||version>=7)?"pointer":"hand";}
else{cursor="default";}
if(!color)color=v09 [3];
if(!q.v11){if(!bLast){
borderBottomColor=q.borderCol;
borderBottomWidth=q.sep+"px";
borderBottomStyle="dashed";
if(typeof PC_CLNT_TMPL_PATH != "undefined" &&( PC_CLNT_TMPL_PATH == 'd0055' || PC_CLNT_TMPL_PATH == 'd0050' || PC_CLNT_TMPL_PATH == 'd0005')){
borderBottomStyle="solid";
}
}}
else
left=(q.ppLeftPad+q.vertSpace)+"px";
if(!itemType)padding=q.vertSpace+"px";
paddingLeft=(q.ppLeftPad+q.vertSpace+q.v54)+"px";
paddingRight=((q.v01< q.iconSize?q.iconSize:q.v01)+q.vertSpace)+"px";
fontSize=v09[0];
fontWeight=(v09[1])?"bold":"300";
fontStyle=(v09[2])?"italic":"normal";
fontFamily=v09[6];
textAlign=(q.v22==1?'center':(q.v22==2?'right':'left'));
f04(itemWnd,q.v11?q.v02-q.ppLeftPad-q.v01-2*q.vertSpace:q.v02,2*q.bord);}
if(v30)itemWnd.v30=v30;
if(itemType>0){
var arrow=q.v18.document.createElement("IMG");
itemWnd.appendChild(arrow);
var arrowSrc=f33(q.v21);
arrow.src="http://tdw.imimg.com/template-tdw/"+q.fnm+"s"+((itemType==1)?"up":"down")+".gif";
arrow.setAttribute("HEIGHT","6","WIDTH","5");
arrow.className=((itemType==1)?"up":"down");
itemWnd.style.textAlign="center";
itemWnd.style.display="block";}
else
itemWnd.innerHTML=v26;
if(q.v56&&v27.indexOf(q.v56)==0)
itemWnd.url=q.v57+v27.substring(q.v56.length);
else
itemWnd.url=f33(v27);
itemWnd.f54=v26;
itemWnd.target=target;
if(v30&&q.showA){
var expandArrow=q.v18.document.createElement("IMG");
itemWnd.appendChild(expandArrow);
var v03=f33(q.v21);
expandArrow.src="ts/"+q.fnm+"ia.gif";
with(expandArrow.style){
width=q.iconSize+"px";
height=q.iconSize+"px";
position="absolute-bottom; padding-top:500px;";
var itemRect=f19(q,itemWnd);
top=((itemRect.bottom-itemRect.top)/2-q.iconSize/2)+"px";
left=(itemWnd.offsetWidth-q.iconSize-1)+"px";}}
if(opt){
itemWnd.customBg=f56(opt,"b");
itemWnd.customCl=f56(opt,"c");
itemWnd.status=f56(opt,"s");
var h=f56(opt,"h");
if(h)itemWnd.style.fontWeight=h;
var i=f56(opt,"i");
if(i)itemWnd.style.fontStyle=i;}
if(!itemWnd.status&&itemWnd.url.indexOf("<root>")!=-1)itemWnd.status=itemWnd.url.replace("<root>","/");
return itemWnd.offsetHeight;
};
function f35(wnd,vis){var i=1;while(true){var eln='HideItem';if(i>1)eln+=i;var hideWnd=zz(wnd,eln);if(!hideWnd)break;hideWnd.style.visibility=vis ? 'visible' : 'hidden';i++;}};
function f06(q,ppId,dl){
if(ppId.indexOf('_')==-1){f35(q.v18,1);if(q.actm&&dl)chgBg(q,q.actm,0,1);}
if(q.v29){q.v29Str=null;clearTimeout(q.v29);}
var pp=zz(q.v18,ppId);
if(pp){
if(pp.v14)f06(q,pp.v14.id);
if(pp.v04)pp.v04.v14=null;
if(IE4&&version>=6&&q.v11){pp.style.clip="rect(0,-1,-1,0)";}
else{
pp.style.visibility="hidden";pp.style.opacity=0.9;
if(typeof PC_CLNT_TMPL_PATH != "undefined" &&(  PC_CLNT_TMPL_PATH == 'd0055' || PC_CLNT_TMPL_PATH == 'd0050'|| PC_CLNT_TMPL_PATH == 'd0005')){pp.style.opacity='1';}
pp.style.display="none";}}
if(q.v17&&q.v17.id==ppId)q.v17=null;};
function f07(rect,refx,refy){var retval=new rct(rect.left-refx,rect.top-refy,rect.right-refx,rect.bottom-refy);return retval;};
function f34(q,pp,actEl){var items=pp.getElementsByTagName("DIV");var i=0;for(;i< items.length;i++)if(actEl!=items[i]&&(!items[i].id||items[i].id.indexOf("scroll")==-1)){items[i].style.backgroundColor=pp.q.v11?"transparent":(items[i].customBg?items[i].customBg:pp.v08);items[i].style.color=items[i].customCl?items[i].customCl:pp.v06;}};function f08(q,pp,x,y,bDontMove,refWnd){if(pp.id.indexOf('_')==-1){f35(q.v18,0);}if(q.v17&&q.v17.id==pp.id)return;pp.style.left=x+"px"; var myWidth = 0, myHeight = 0;  if( typeof( window.innerWidth ) == 'number' ) {    myWidth = window.innerWidth;myHeight = window.innerHeight;  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {    myWidth = document.documentElement.clientWidth; myHeight = document.documentElement.clientHeight;  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {   myWidth = document.body.clientWidth;    myHeight = document.body.clientHeight;  }var abc = pp.style.height; abcnew = abc.replace('1px','');var h = window.pageYOffset ||	document.body.scrollTop ||    document.documentElement.scrollTop;var bh = myHeight + h;var ah = parseInt(y) + parseInt(abcnew);var yp = y-abcnew;var nheight =bh-y;if (ah >= bh && y > nheight){pp.style.top=yp+"px";}else{pp.style.top=y+"px";}if(IE4&&version>=6&&q.v11){pp.style.clip="rect(auto,auto,auto,auto)";} else{pp.style.display="";pp.style.visibility="visible";}var v15=f19(q,pp);var v16=f17(q.v18);var bResize=(pp.offsetHeight<pp.maxHeight);if(v15.right>v16.right){ if(refWnd&&refWnd.id&&refWnd.id.indexOf('tlm')==-1)pp.style.left=(Math.max(0,refWnd.offsetLeft-pp.offsetWidth+q.levelOffset))+"px";else pp.style.left=(v16.right-pp.offsetWidth-5)+"px";}var wnd1=zz(q.v18,pp.id+"scrollDown");var wnd2=zz(q.v18,pp.id+"scrollUp");var cv=mac?15:(q.bIncBorder?3:20);if(((v15.bottom>v16.bottom)||bResize)&&!NS60){var newtop=v16.bottom-pp.offsetHeight-cv;if(!q.menuHorizontal)bDontMove=false;if(q.v55&&(newtop<0||bDontMove||bResize)){var minNum=Math.min(pp.maxHeight,v16.bottom-pp.offsetTop-cv-(q.bIncBorder?0:q.bord*2));if(minNum>50){pp.scrVis=(minNum!=pp.maxHeight); f09(q,pp,v16.top,minNum);}else{pp.style.top=y+"px";}}else pp.style.top=newtop+"px";}if(q.v55){ wnd1.style.display=pp.scrVis?"":"none"; wnd2.style.display=pp.scrVis?"":"none";} if(q.bShowDel&&!mac)f02(q,pp.id,q.fadingSteps);f34(q,pp,null);};function f09(q,pp,documentOffset,height){var wnd2=zz(q.v18,pp.id+"scrollDown");var wnd4=zz(q.v18,pp.id+"scrollUp");var wnd3=zz(q.v18,pp.id+"bgWnd");var wnd1Height=0;if(q.v55){wnd2.style.zIndex=maxZ+1;wnd4.style.zIndex=maxZ+1;} pp.style.height=height+"px"; wnd3.style.height=(height-q.v10-q.bord*2-wnd1Height)+"px";if(q.v55){wnd2.style.top=(height-wnd1Height-q.scrollHeight-(q.bIncBorder?q.bord*2:0)-10)+"px"; f10(q,pp.id,0);}}function f10(q,ppId,dir){var pp=zz(q.v18,ppId);var v15=f19(q,pp);var items=pp.getElementsByTagName("DIV");var i=(dir>0?0:items.length-1);var off=(dir>0?1:-1);var bFirst=true;var offset=dir*q.scrollStep;if(pp.scrVis){try{v15.top+=q.scrollHeight;v15.bottom-=q.scrollHeight;}catch(e){}}try{v15.bottom-=2*q.bord;}catch(e){}var wnd1Height=0;for(;i< items.length && i>=0;i+=off){var item=items[i];if(!item.id||(item.id.indexOf("scroll")==-1&&item.id.indexOf("bgWnd")==-1)){var itemRect=f19(q,item); if(bFirst&&dir==0){ offset=pp.maxHeight-(item.offsetTop+item.offsetHeight)+(pp.scrVis?q.scrollHeight:0)-(q.bIncBorder?q.bord*2:0)-wnd1Height;} var relRect=f07(v15,itemRect.left,itemRect.top+offset); if(dir>0&&relRect.top<-q.scrollHeight&&bFirst)return;if(dir<0&&itemRect.bottom< v15.bottom-wnd1Height&&bFirst)return; if(offset!=0)item.style.top=(item.offsetTop+offset)+"px";if(!mac)item.style.clip="rect("+relRect.top+","+relRect.right+","+relRect.bottom+","+relRect.left+")";if(relRect.bottom<0||relRect.top>item.offsetHeight) item.style.visibility="hidden";else item.style.visibility="visible"; bFirst=false;}} if(pp.scrPos)pp.scrPos+=offset;else pp.scrPos=offset;};function scrollUp(q,ppId){f10(q,ppId,1);}function scrollDown(q,ppId){f10(q,ppId,-1);}function f13(q,pp){ var wnd=q.v17;while(wnd){if(wnd.id==pp.id) return true;wnd=wnd.v14;}return false;};function f14(){var q=this.q;if(q.v17&&q.v58&&f13(q,this))clearTimeout(q.v58);}; function f15(){var q=this.q;f15Impl(q,this);};function f15Impl(q,pp,pid){if(!pp&&!pid)pp=q.v17; if(!pp)pp=zz(q.v18,pid+"pp");	if(pp&&q.mout&&q.v17&&f13(q,pp)){if(q.v58) clearTimeout(q.v58);	q.v58=setTimeout("f06("+q.name+",'"+q.v17.id+"',1);",500);}}; function rct(left,top,right,bottom){this.left=left;this.top=top;this.right=right;this.bottom=bottom;};function f17(doc){ var left=0; var top=0; var right; var bottom; if(doc.pageXOffset)left=doc.pageXOffset; else if(doc.document.documentElement.scrollLeft)left=doc.document.documentElement.scrollLeft; else if(doc.document.body.scrollLeft)left=doc.document.body.scrollLeft; if(doc.pageYOffset)top=doc.pageYOffset; else if(doc.document.documentElement.scrollTop)top=doc.document.documentElement.scrollTop; else if(doc.document.body.scrollTop)top=doc.document.body.scrollTop; if(doc.innerWidth)right=left+doc.innerWidth; else if(doc.document.documentElement.clientWidth)right=left+doc.document.documentElement.clientWidth; else if(doc.document.body.clientWidth)right=left+doc.document.body.clientWidth; if(doc.innerHeight)bottom=top+doc.innerHeight; else if(doc.document.documentElement.clientHeight)bottom=top+doc.document.documentElement.clientHeight;else if(doc.document.body.clientHeight)bottom=top+doc.document.body.clientHeight;if(bottom > 300 && doc.name) bottom = 300 ;var retval=new rct(left,top,right,bottom);return retval;};function f18(q,wnd){var doc=q ? q.v18.document : document;var left=mac?parseInt(doc.body.leftMargin):0;var top=mac?parseInt(doc.body.topMargin):0;var right=0;var bottom=0;var par=wnd;var topObj=doc.documentElement;if(!topObj)topObj=doc.body;while(par){left=left+parseInt(par.offsetLeft);top=top+parseInt(par.offsetTop);if(par.offsetParent==par || par.offsetParent==topObj)break;par=par.offsetParent;}right=left+parseInt(wnd.offsetWidth);bottom=top+parseInt(wnd.offsetHeight);var retval=new rct(left,top,right,bottom);return retval;};function f19(q,wnd){if((mac||DOM||Opera7)&&wnd.getBoundingClientRect)return wnd.getBoundingClientRect();return f18(q,wnd);};function f53(wn,fr){if(wn.frames){if(wn.frames[fr])return wn.frames[fr];for(var i=0;i< wn.frames.length;i++){ try{if(wn.frames[i].name==fr)return wn.frames[i];var ret=f53(wn.frames[i],fr);if(ret)return ret;}catch(e){}}}return null;}; function f20(){var startPos=this.f54.indexOf('<!--');if(startPos!=-1){ var endPos=this.f54.indexOf('-->',startPos); }else{	var msg="Full version of the product would now open item's URL "; if(this.owner.q.cntFrame)msg+=" in frame "+this.owner.q.cntFrame; else msg+="in current window/frame.";}window.location=this.url;};function f21(q){if(q.v29Str){eval(q.v29Str); if(q.v29) clearTimeout(q.v29); q.v29=setTimeout("f21("+q.name+")",q.v55);}} function f22(){var item=this;var q=this.owner.q; if(item.id&&item.id.indexOf("scroll")!=-1) {q.v29Str=item.url;var jsind=q.v29Str.indexOf('javascript:'); if(jsind!=-1) q.v29Str=q.v29Str.substring(jsind);f21(q);return;} f34(q,item.owner,item);if(q.bHlNL || item.url || item.v30){item.style.color=item.owner.v05; item.style.backgroundColor=(!item.owner.v07&&q.v11)?"transparent":item.owner.v07;} if(!q.itemOverDelay){f222(q,item);}else{if(q.v59)clearTimeout(q.v59);q.itemOverObj=item;q.v59=setTimeout("f222 ("+q.name+",null)",q.itemOverDelay);}};function f222(q,itemObj){var item=(itemObj ? itemObj : q.itemOverObj);if(!item)return;var bOp=0;if(item.owner.v14){if(item.v30&&item.v30+'pp'==item.owner.v14.id)bOp=1; if(!bOp)f06(q,item.owner.v14.id);}if(item.status) window.status=item.status; else if(item.url&&item.url.indexOf("javascript:")==-1) window.status=item.url;else window.status="";if(item.v30&&!bOp){var rect=f19(q,item);var x=rect.right-q.levelOffset;var y=rect.top-q.levelOffsety;var pp=f05(q,item.v30,item.owner.level+1,item.owner); item.owner.v14=pp;f08(q,pp,x,y+2,false,item.owner);}} ; function f23(){var item=this;var q=this.owner.q;if(q.v29){q.v29Str=null;clearTimeout(q.v29);}if(item.id&&item.id.indexOf("scroll")!=-1)return;window.status="";};function exM(q,ppId,refWnd,dum,ml,mt,mr,mb){if(!docLoaded)return;if(ppId=='none'){if(!q.itemOverDelay&&q.v17)f06(q,q.v17.id);else f15Impl(q);if(q.v58)clearTimeout(q.v58);return;}var bFr=q.v19&&!q.v20;var rect;if(refWnd=='coords'){rect=f18(q,zz(0,q.name+'tl')); rect.left=rect.left+ml; rect.top=rect.top+mt; rect.right=rect.left+mr;rect.bottom=rect.top+mb; }else{rect=f18(q,zz(0,refWnd));}if(q.bVarWidth&&!q.v11)q.v02=rect.right-rect.left+(IE4?q.bord*2:0);var x;var y;x=rect.left-q.bord;y=rect.bottom+q.v61; if(!q.itemOverDelay){exM2(q,ppId,refWnd,x,y);} else{ if(q.v59)clearTimeout(q.v59);q.v59=setTimeout("exM2 ("+q.name+",'"+ppId+"','"+refWnd+"',"+x+","+y+")",q.itemOverDelay);}};function exM1(q,ppId,refWnd,dum,ml,mt,mr,mb){if(!docLoaded)return;if(ppId=='none'){if(!q.itemOverDelay&&q.v17)f06(q,q.v17.id); else f15Impl(q);if(q.v58)clearTimeout(q.v58);return;}var bFr=q.v19&&!q.v20;var rect;if(refWnd=='coords'){ rect=f18(q,zz(0,q.name+'tl')); rect.left=rect.left+ml; rect.top=rect.top+mt;  rect.right=rect.left+mr; rect.bottom=rect.top+mb; }else{rect=f18(q,zz(0,refWnd));} if(q.bVarWidth&&!q.v11)q.v02=rect.right-rect.left+(IE4?q.bord*2:0);var x;var y;x=rect.right-q.bord;y=rect.top+q.v61;if(!q.itemOverDelay){exM2(q,ppId,refWnd,x,y);}else{if(q.v59)clearTimeout(q.v59); q.v59=setTimeout("exM2 ("+q.name+",'"+ppId+"','"+refWnd+"',"+x+","+y+")",q.itemOverDelay);}};function exM2(q,ppId,refWnd,x,y){if(q.v58)clearTimeout(q.v58);if(q.v17&&q.v17.id!=ppId+"pp")f06(q,q.v17.id);	var pp=f05(q,ppId,0,null,refWnd);f08(q,pp,x+q.xOff,y+q.yOff,true,null);q.v17=pp;};function coM(q,ppId){if(!docLoaded)return;clearTimeout(q.v59);f15Impl(q);};function f28(){var nmn;for(nmn=1;nmn<=lastm;nmn++){ var q=eval("window.m"+nmn);if(q&&q.v17)f06(q,q.v17.id,1);} }; function f29(){if(docLoaded)return;var nmn;for(nmn=1;nmn<=lastm;nmn++){var q=eval("window.m"+nmn); if(q){q.v18=(q.v19&&!q.v20)?f53(window.top,q.v24):window;q.targetFrame=(q.v19)?f53(window.top,q.cntFrame):window;if(!q.mout)f30(q.v18.document,"mousedown",f28,false);}}docLoaded=true;}; function f30(obj,event,fun,bubble){if(obj.addEventListener)obj.addEventListener(event,fun,bubble);else eval("obj.on"+event+"="+fun);};function chgBg(q,item,color,cl){if(!IE4&&!DOM&&!Opera7)return;if(!q.v52){var el=zz(0,item);var ela=zz(0,item+'a');var ncl=el.bgc ? el.bgc : q.tlmOrigBg;var hcl=q.tlmHlBg;var tcl=el.tc ? el.tc : q.tlmOrigCol;if(color==0){if(cl){if(!q.v25){ el.style.background=ncl;el.style.color=tcl; }if(ela)ela.style.color=tcl;} }else{var bSetC=(!el.tc || !el.bgc);if(q.actm&&q.actm!=item)chgBg(q,q.actm,0,1);if(!q.v25){if(color&1){if(bSetC)el.bgc=el.bgColor;el.style.background=hcl;}if(bSetC)el.tc=el.style.color;el.style.color=q.tlmHlCol;}if(ela&&color&2){if(bSetC)el.tc=ela.style.color;ela.style.color=q.tlmHlCol;}q.actm=item;if(bSetC){if(!el.tc)el.tc=tcl;if(!el.bgc)el.bgc=ncl;}}}};function f31(){var i;var l=document.lastLoadHandler;document.lastLoadHandler=-1;for(i=0;i<=l;i++){var h=document.loadHandlers[i];if(typeof(h)!='function'){var bPar=(h.indexOf('(')==-1);eval(h+(bPar ? '();' : ';'));}else{h();}}};
// =======================//drop.js ends===================================================
//################## geoloc cookies ############################################

//################## geoloc cookies ############################################

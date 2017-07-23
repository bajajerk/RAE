/*
Date: 10 April 2013
STEPS: How to Integrate

Step #1: Include this js script into your code
Step #2: Map your custom form field names with standard field names, call following function before printing your form.

var customElementNamesHash=new im_elementHash("S_name","S_firstname","S_lname","S_lastname","S_email","S_email","S_phone","S_phone","S_phone2","S_phone2","S_cmobile","S_cmobile","S_phone_country_code","S_phone_country_code","S_phone_area_code","S_phone_area_code","S_organization","S_organization","Website","Website","S_country","S_country","country","country","S_salute","S_salute","S_mobile","S_mobile","S_city","S_city","S_city_id","S_city_id","S_state","S_state","S_state_id","S_state_id","S_pin","S_pin","S_glusr_id","S_glusr_id","S_fullname","fullname");

Step #3: To Read "ImeshVisitor cookie" call funtion "getCookieValues('<form name>', customElementNamesHash)" it will auto set all the fields of your form
Step #4: To write "ImeshVisitor cookie" call function "setGlobalCookie('ImeshVisitor', makeCookie('<formname>',customElementNamesHash))", it will auto write the cookie
*/


function im_elementHash()
{
	this.length = 0;
	this.items = new Array();
	for (var i = 0; i < arguments.length; i += 2) {
		if (typeof(arguments[i + 1]) != 'undefined') {
			this.items[arguments[i]] = arguments[i + 1];
			this.length++;
		}
	}
	this.get = function(in_key)
	{
		return this.items[in_key];
	}
}
function im_makeCookie(form_name, elementHashObj)
{
	var newCookie='';
	if(eval("document."+form_name+"."+elementHashObj.get('S_name')))	{
		var fname=eval("document."+form_name+"."+elementHashObj.get('S_name')+".value");
		var usrfname = ((fname == 'First Name') || (fname == 'Name'))? '' : fname;
		newCookie  = "fn="+usrfname;
	}
	if(eval("document."+form_name+"."+elementHashObj.get('S_lname')))	{
		var lname=eval("document."+form_name+"."+elementHashObj.get('S_lname')+".value");
		var usrlname = ((lname == 'Last Name'))? '' : lname;
		newCookie +="|ln="+usrlname;
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_email')))	{
		var eml=eval("document."+form_name+"."+elementHashObj.get('S_email')+".value");
		var usr_eml=((eml == 'Email (optional)') || (eml == 'Email')) ? '' : eml;
		newCookie  += "|em="+usr_eml;
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_phone')))	{
		var usrphn=eval("document."+form_name+"."+elementHashObj.get('S_phone')+".value");
		var usrphone = (usrphn == 'Phone Number') ? '' :usrphn;	
		newCookie +="|ph1="+usrphone;
	}
	
	if (eval("document."+form_name+"."+elementHashObj.get('S_phone2')))	{
		newCookie  += "|ph2="+eval("document."+form_name+"."+elementHashObj.get('S_phone2')+".value");
	}

	if (eval("document."+form_name+"."+elementHashObj.get('S_phone_country_code')))	{
		newCookie  += "|phcc="+eval("document."+form_name+"."+elementHashObj.get('S_phone_country_code')+".value");
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_phone_area_code')))	{
		var ph_acode=eval("document."+form_name+"."+elementHashObj.get('S_phone_area_code')+".value");	
		var usrphacode =(ph_acode == 'Area Code')?'':ph_acode
		newCookie  += "|phac="+usrphacode;
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_organization')))	{
		var sorg=eval("document."+form_name+"."+elementHashObj.get('S_organization')+".value");
		var s_company = (sorg == 'Company')? '' : sorg;
		newCookie +="|co="+s_company;
	}
	if (eval("document."+form_name+"."+elementHashObj.get('Website')))	 {
		var swebst=eval("document."+form_name+"."+elementHashObj.get('Website')+".value");
		var s_website = (swebst == 'Website')? '' : swebst;
		newCookie +="|url="+s_website;
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_country')))	{
		newCookie  += "|cn="+eval("document."+form_name+"."+elementHashObj.get('S_country')+".value");
	}
	if (eval("document."+form_name+"."+elementHashObj.get('country')))	{
		newCookie  += "|iso="+eval("document."+form_name+"."+elementHashObj.get('country')+".value");
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_salute')))	{
		newCookie  += "|slt="+eval("document."+form_name+"."+elementHashObj.get('S_salute')+".value");
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_mobile')))	{
		var smobi=eval("document."+form_name+"."+elementHashObj.get('S_mobile')+".value");
		var usrmobile = (smobi == 'Mobile Number') ?'':smobi;
		newCookie  += "|mb1="+usrmobile;
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_mobile2')))	{
		newCookie  += "|mb2="+eval("document."+form_name+"."+elementHashObj.get('S_mobile2')+".value");
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_streetaddress')))	{
		newCookie  += "|ad="+eval("document."+form_name+"."+elementHashObj.get('S_streetaddress')+".value");
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_city')))	{
		var scty=eval("document."+form_name+"."+elementHashObj.get('S_city')+".value");
		var usercity = (scty == 'City') ? '' : scty; 
		newCookie +="|ct="+usercity;
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_city_id')))	{
		newCookie  += "|ctid="+eval("document."+form_name+"."+elementHashObj.get('S_city_id')+".value");
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_state')))	{
		var usr_state=eval("document."+form_name+"."+elementHashObj.get('S_state')+".value");
		var usrstate = (usr_state == 'State') ? '' : usr_state;
		newCookie +="|st="+usrstate;
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_state_id')))	{
		newCookie  += "|stid="+eval("document."+form_name+"."+elementHashObj.get('S_state_id')+".value");
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_pin')))	{
		newCookie  += "|zp="+eval("document."+form_name+"."+elementHashObj.get('S_pin')+".value");
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_glusr_id')))	{
		newCookie  += "|glid="+eval("document."+form_name+"."+elementHashObj.get('S_glusr_id')+".value");
	}
	if (eval("document."+form_name+"."+elementHashObj.get('S_fullname')))	{
		var fllname=eval("document."+form_name+"."+elementHashObj.get('S_fullname')+".value");
		var fullname=(fllname =='Name')? '' : fllname;	
		newCookie  += "|nm="+fullname;
		}
	newCookie  += "|int="+im_getparamVal(im_readCookie("ImeshVisitor"), "int");
	newCookie  += "|";
	return newCookie;
}

function im_setGlobalCookie(name, value)
{
	expires = new Date();
	expires.setTime (expires.getTime() + 24 * 60 * 60 * 150 * 1000);	
	if (value.length > 0) 	{
		document.cookie = name + "=" + escape(value)+ ";"+"expires=" + expires.toGMTString() + ";" + "domain=.indiamart.com;path=/;";	
	}
}

function im_setGlobalCookie_od(name, value)
{
	expires = new Date();
	expires.setTime (expires.getTime() + 24 * 60 * 60 * 150 * 1000);	
	if (value.length > 0) 	{
		document.cookie = name + "=" + escape(value)+ ";"+"expires=" + expires.toGMTString() + ";";	
	}
}

function im_getCookieValues(form_name, myElementHashObj, temp_value)
{
	if( (cookie = im_readCookie("ImeshVisitor")) > "")	
	{
		if(salute = myElementHashObj.get('S_salute'))
		{
			var sltVal = im_getparamVal(cookie, "slt").replace(/^[\s]+/,'').replace(/[\s]+$/,'').replace(/[\s]{2,}/,' ');

			for (var i = eval("document."+form_name +"."+ salute).options.length -1; i > -1; i--) 
			{
				if ( eval("document."+form_name+"." + salute).options[i].value == sltVal) 
				{
					eval("document."+form_name +"."+ salute).value = sltVal;
				}
			}
		}
		var fn='';
		var ln='';
		var nm='';
		if(sname = myElementHashObj.get('S_name'))	{
			fn = im_getparamVal(cookie, "fn");
			eval("document." +form_name +"."+ sname).value = fn;
		}
		if(lname = myElementHashObj.get('S_lname'))	{
			ln = im_getparamVal(cookie, "ln");
			eval("document." +form_name +"."+ lname).value = ln;
		}
		if(email = myElementHashObj.get('S_email'))	{
			eval("document." +form_name +"."+ email).value = im_getparamVal(cookie, "em");
		}
		if(Sorganization = myElementHashObj.get('S_organization'))	{
			eval("document." +form_name +"."+ Sorganization).value = im_getparamVal(cookie, "co");
		}
		if(!im_getparamVal(cookie, "phcc").match(/\+/))	
		{

			if(phcncode = myElementHashObj.get('S_phone_country_code'))	{
					eval("document." +form_name +"."+ phcncode).value = '+' +im_getparamVal(cookie, "phcc");
			}
			if(Scmobile = myElementHashObj.get('S_cmobile'))	{
					eval("document." +form_name +"."+ Scmobile).value ='+'+im_getparamVal(cookie, "phcc");
			}
		}
		else {
			if(phcncode = myElementHashObj.get('S_phone_country_code'))	{
					eval("document." +form_name +"."+ phcncode).value =  im_getparamVal(cookie, "phcc");
			}
			if(Scmobile = myElementHashObj.get('S_cmobile'))	{
					eval("document." +form_name +"."+ Scmobile).value = im_getparamVal(cookie, "phcc");
			}
		}
		if(phacode = myElementHashObj.get('S_phone_area_code'))		{
			eval("document." +form_name +"."+ phacode).value = im_getparamVal(cookie, "phac");
		}
		if(Sphone = myElementHashObj.get('S_phone'))	{
			eval("document." +form_name +"."+ Sphone).value = im_getparamVal(cookie, "ph1");
		}
		if(Smobile = myElementHashObj.get('S_mobile'))	{
			eval("document." +form_name +"."+ Smobile).value = im_getparamVal(cookie, "mb1");
		}
		if(Smobile2 = myElementHashObj.get('S_mobile2'))	{
			eval("document." +form_name +"."+ Smobile2).value = im_getparamVal(cookie, "mb2");
		}
		if(web = myElementHashObj.get('Website'))	{
			eval("document." +form_name +"."+ web).value = im_getparamVal(cookie, "url");
		}
		if (temp_value == 1){
			if(myElementHashObj.get('S_country'))	{
				eval("document." +form_name +"."+ myElementHashObj.get('S_country')).value = im_getparamVal(cookie, "cn");
			}
		}else{
			if(cnt = myElementHashObj.get('S_country')){
				eval("document." +form_name +"."+ cnt).value = im_getparamVal(cookie, "cn");
			}
		}
		if(cntiso = myElementHashObj.get('country'))	{
			eval("document." +form_name +"."+ cntiso).value = im_getparamVal(cookie, "iso");
		}
		if(Sstreet = myElementHashObj.get('S_streetaddress'))	{
			eval("document." +form_name +"."+ Sstreet).value = im_getparamVal(cookie, "ad");
		}
		if(Scity = myElementHashObj.get('S_city'))	{
			eval("document." +form_name +"."+ Scity).value = im_getparamVal(cookie, "ct");
		}
		if(Scity_id = myElementHashObj.get('S_city_id'))	{
			eval("document." +form_name +"."+ Scity_id).value = im_getparamVal(cookie, "ctid");
		}
		if(Sstate = myElementHashObj.get('S_state'))	{
			eval("document." +form_name +"."+ Sstate).value = im_getparamVal(cookie, "st");
		}
		if(Sstate_id = myElementHashObj.get('S_state_id'))	{
			eval("document." +form_name +"."+ Sstate_id).value = im_getparamVal(cookie, "stid");
		}
		if(Spin = myElementHashObj.get('S_pin'))	{
			eval("document." +form_name +"."+ Spin).value = im_getparamVal(cookie, "zp");
		}
		if(sname = myElementHashObj.get('S_name')){
		if(!fn){	
			nm = im_getparamVal(cookie, "nm");
			if(nm){
			var namearray=nm.split(/\s+/g);
			namearray.reverse();		
			var firstname;
			if(namearray.length == 1)
			{firstname=nm;
			lastname='';	
			}
			else {
				lastname=namearray.shift(); 
				namearray.reverse(); 
				firstname=namearray.join(" ");
				}
			lname = myElementHashObj.get('S_lname');
			if(!fn){
			eval("document." +form_name +"."+ sname).value =firstname;
			}
			if(!ln){	
			eval("document." +form_name +"."+ lname).value =lastname;
			}
			}
		}
		}
		if(Sglid = myElementHashObj.get('S_glusr_id'))	{
			eval("document." +form_name +"."+ Sglid).value = im_getparamVal(cookie, "glid");
		}
		if(Sfullname = myElementHashObj.get('S_fullname'))	{
			nm = im_getparamVal(cookie, "nm");
			if(nm){
			eval("document." +form_name +"."+ Sfullname).value=nm;
			}
			else{
			fn=im_getparamVal(cookie, "fn");
			ln=im_getparamVal(cookie, "ln");
			eval("document." +form_name +"."+ Sfullname).value=fn+' '+ln;;
			}

		}		
	}
	return true;
}


function im_readCookie(name)
{
	var search = name + "="

	if (document.cookie.length > 0)	{
		offset = document.cookie.indexOf(search)
		if (offset != -1)	{
			offset += search.length
			end = document.cookie.indexOf(";", offset)      // set index of beginning of value
			if (end == -1) end = document.cookie.length     // set index of end of cookie value

			return unescape(document.cookie.substring(offset, end))
		}
	}

	return "";
}

function im_getparamVal(cookieStr, key)
{
	if( cookieStr > "")	{
		var val = "|"+cookieStr+"|";
		var pattern = new RegExp(".*?\\|"+key+"=([^|]*).*|.*");
		return val.replace(pattern, "$1");
	}	else	{
		return "";
	}
}

function im_removeCookie(name)
{
       document.cookie = name + "=;expires=;domain=.indiamart.com;path=/;";
}
document.addEventListener('DOMContentLoaded',function()
{
	//document.body.style.overflow='hidden';
	
	document.getElementById('ques').style.display='none';
	document.getElementById('nav-bar').style.display='none';
	document.getElementById('myNav').style.display='none';
	/*document.getElementById('one').style.display='none';
	document.getElementById('two').style.display='none';
	document.getElementById('three').style.display='none';
	document.getElementById('four').style.display='none';
	document.getElementById('five').style.display='none';*/
	$('#toolset').click(function(){
		$('#base').animate({marginLeft:'30'});
	})

document.getElementById('smiley').style.visibility='hidden';
document.getElementById('scroll').style.visibility='hidden';
document.getElementById('km').addEventListener('click',function(){
	$(this).fadeOut();
$('#ques').fadeIn(4000,function(){
$('#temp-blk').fadeOut(1000,function(){
	$('#smiley').css('visibility','visible');
	$('#scroll').css('visibility','visible');
	$('#nav-bar').fadeIn();
	document.body.style.overflow='auto';
	
});

});


});


});

window.addEventListener("scroll",function(){

$('#smiley').css('visibility','hidden');
});

/*window.addEventListener("scroll",function()
                        {
  var a = $(window).scrollTop();
  var c=document.querySelector('.item:first-child').offsetHeight;
  var c_one=document.querySelector('.item:last-child').offsetHeight;
  var d=$(window).height();
  var f=document.querySelector('.item:first-child').offsetTop;
  var f_one=document.querySelector('.item:last-child').offsetTop;
  console.log("window height: "+d);
  console.log("scrolltop: "+a);
  console.log("offsettop: "+f);
  
  

  if((a+d>f+100)&&(c+f>a+50))
     {
     	
 
     $("#t-one").addClass('trans');
     $("#t-two").addClass('trans');
     $("#t-three").addClass('trans');
 

     }
     else
     {
     	if(f+c>a && f<a){}
     		else{
     	$("#t-one").removeClass('trans');
     $("#t-two").removeClass('trans');
 $("#t-three").removeClass('trans');}
      
     }

     if((a+d>f_one+100)&&(c_one+f_one>a+50))
     {
     	
 
     $("#t-four").addClass('trans');
     $("#t-five").addClass('trans');
     
 

     }
     else
     {
     	if(f_one+c_one>a && f_one<a){}
     		else{
     	$("#t-four").removeClass('trans');
     $("#t-five").removeClass('trans');
 
      
     }
 }
  
});*/


function showDesc(option)
{
	//document.getElementById('toolxp').style.display = "none";  
	var slides = document.getElementsByClassName("tool-exp");

	for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
	slides[option-1].style.display = "block";
	/*switch(option)
	{
		case '1':
		document.getElementById('git').style.display = "block";
		break;

		case '2':
		document.getElementById('mamp').style.display = "block";
		break;

		case '3':
		document.getElementById('ps').style.display = "block";
		break;


		case '4':
		document.getElementById('bs').style.display = "block";
		$('.active-div').removeClass('active-div');
		$('#sequelpro').addClass('active-div');
		break;
	}*/
}

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "menu" link is shown
	var offset = 300;

	var navigationContainer = $('#cd-nav'),
		mainNavigation = navigationContainer.find('#cd-main-nav ul');

	//hide or show the "menu" link
	checkMenu();
	$(window).scroll(function(){
		checkMenu();
	});

	//open or close the menu clicking on the bottom "menu" link
	$('.cd-nav-trigger').on('click', function(){
		$(this).toggleClass('menu-is-open');
		//we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
		mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');
		navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				mainNavigation.addClass('has-transitions');
			});
	});

	function checkMenu() {
		if( $(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
			navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				mainNavigation.addClass('has-transitions');
			});
		} 
	}


var C = 200;                    				//1||cure
var B = 200;                    				//blessed
var cancerned = 550;                    		//cancerned 
var CUAMS = 982;                    			//c u at my pace
var cc = 350;                    				//cure cancer
var cureageous = 0;                    			//cureageous
var fma = 400;                    				//f=ma
var fighters = 0;  								//fighters
var happyft = 0;                  				//happy feat
var HS = 0;                    					//heart and sole
var illum = 200;    							//illuminators
var jaron = 200;                    			//team jaron 2.0
var KforC = 0;                    				//kare for cancer
var lns = 100;                    				//laps not snaps
var freshmen = 0;                    			//lost in pace (freshman)
var lip = 0;                    				//lost in pace
var mw = 0;                    					//moonwalkers
var p53 = 0;                    				//P53-TP53
var phil = 520;                    				//philosophers
var rfl = 0;                    				//relay for lift
var rm = 0;                    					//running man
var sh = 0;                   					//sherwalk holmes
var s2s = 0;                    				//sole to soul
var sm = 0;                    					//solemates
var T = 0;                    					//tumornators
var W = 0;                    					//walk e
var ES = 0;              			 			//elementary school
                    				
 

var C1 = "0px 0px " + C/20 +"px " + C/20 +"px "+ "#c23000";
$('#C1').html(C);
$('#C').css("box-shadow",C1);

var B1 = "0px 0px " + B/20 +"px " + B/20 +"px "+ "#c23000";
$('#B1').html(B);
$('#B').css("box-shadow",B1);

var cancerned1 = "0px 0px " + cancerned/20 +"px " + cancerned/20 +"px "+ "#c23000";
$('#cancerned1').html(cancerned);
$('#cancerned').css("box-shadow",cancerned1);

var CUAMS1 = "0px 0px " + CUAMS/20 +"px " + CUAMS/20 +"px "+ "#c23000";
$('#CUAMS1').html(CUAMS);
$('#CUAMS').css("box-shadow",CUAMS1);

var cc1 = "0px 0px " + cc/20 +"px " + cc/20 +"px "+ "#c23000";
$('#cc1').html(cc);
$('#cc').css("box-shadow",cc1);

var cureageous1 = "0px 0px " + cureageous/20 +"px " + cureageous/20 +"px "+ "#c23000";
$('#cureageous1').html(cureageous);
$('#cureageous').css("box-shadow",cureageous1);

var fma1 = "0px 0px " + fma/20 +"px " + fma/20 +"px "+ "#c23000";
$('#fma1').html(fma);
$('#fma').css("box-shadow",fma1);

var fighters1 = "0px 0px " + fighters/20 +"px " + fighters/20 +"px "+ "#c23000";
$('#fighters1').html(fighters);
$('#fighters').css("box-shadow",fighters1);

var happyft1 = "0px 0px " + happyft/20 +"px " + happyft/20 +"px "+ "#c23000";
$('#happyft1').html(happyft);
$('#happyft').css("box-shadow",happyft1);

var HS1 = "0px 0px " + HS/20 +"px " + HS/20 +"px "+ "#c23000";
$('#HS1').html(HS);
$('#HS').css("box-shadow",HS1);

var illum1 = "0px 0px " + illum/20 +"px " + illum/20 +"px "+ "#c23000";
$('#illum1').html(illum);
$('#illum').css("box-shadow",illum1);

var jaron1 = "0px 0px " + jaron/20 +"px " + jaron/20 +"px "+ "#c23000";
$('#jaron1').html(jaron);
$('#jaron').css("box-shadow",jaron1);

var KforC1 = "0px 0px " + KforC/20 +"px " + KforC/20 +"px "+ "#c23000";
$('#KforC1').html(KforC);
$('#KforC').css("box-shadow",KforC1);

var lns1 = "0px 0px " + lns/20 +"px " + lns/20 +"px "+ "#c23000";
$('#lns1').html(lns);
$('#lns').css("box-shadow",lns1);

var freshmen1 = "0px 0px " + freshmen/20 +"px " + freshmen/20 +"px "+ "#c23000";
$('#freshmen1').html(freshmen);
$('#freshmen').css("box-shadow",freshmen1);

var lip1 = "0px 0px " + lip/20 +"px " + lip/20 +"px "+ "#c23000";
$('#lip1').html(lip);
$('#lip').css("box-shadow",lip1);

var mw1 = "0px 0px " + mw/20 +"px " + mw/20 +"px "+ "#c23000";
$('#mw1').html(mw);
$('#mw').css("box-shadow",mw1);

var p531 = "0px 0px " + p53/20 +"px " + p53/20 +"px "+ "#c23000";
$('#p531').html(p53);
$('#p53').css("box-shadow",p531);

var phil1 = "0px 0px " + phil/20 +"px " + phil/20 +"px "+ "#c23000";
$('#phil1').html(phil);
$('#phil').css("box-shadow",phil1);

var rfl1 = "0px 0px " + rfl/20 +"px " + rfl/20 +"px "+ "#c23000";
$('#rfl1').html(rfl);
$('#rfl').css("box-shadow",rfl1);

var rm1 = "0px 0px " + rm/20 +"px " + rm/20 +"px "+ "#c23000";
$('#rm1').html(rm);
$('#rm').css("box-shadow",rm1);

var sh1 = "0px 0px " + sh/20 +"px " + sh/20 +"px "+ "#c23000";
$('#sh1').html(sh);
$('#sh').css("box-shadow",sh1);

var s2s1 = "0px 0px " + s2s/20 +"px " + s2s/20 +"px "+ "#c23000";
$('#s2s1').html(s2s);
$('#s2s').css("box-shadow",s2s1);

var sm1 = "0px 0px " + sm/20 +"px " + sm/20 +"px "+ "#c23000";
$('#sm1').html(sm);
$('#sm').css("box-shadow",sm1);

var T1 = "0px 0px " + T/20 +"px " + T/20 +"px "+ "#c23000";
$('#T1').html(T);
$('#T').css("box-shadow",T1);

var W1 = "0px 0px " + W/20 +"px " + W/20 +"px "+ "#c23000";
$('#W1').html(W);
$('#W').css("box-shadow",W1);

var ES1 = "0px 0px " + ES/20 +"px " + ES/20 +"px "+ "#c23000";
$('#ES1').html(ES);
$('#ES').css("box-shadow",ES1);


});


	

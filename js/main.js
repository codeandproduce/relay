$(document).ready(function($){

	var teamObj = {
		beyondRunning: {
			laps: 52+29+19+27+7+1,
			name: "Beyond Running",
			id: "beyondRunning"
		},				
		walkieTalkie: {
			laps: 21+8+6,
			name: "Walkie Talkies",
			id: "walkieTalkie"
		},			
		walkamolies: {
			laps: 11,
			name: "Walkamolies",
			id: "walkamolies"
		},				
		aggressivelyMediocre: {
			laps: 11+11+6+16+12+16+18+8,
			name: "Aggressively Mediocre",
			id: "aggressivelyMediocre"
		},			
		motzko: {
			laps: 24+5,
			name: "Mr. Motzko's Walk and Talk Exploratory",
			id: "motzko"
		},					
		phast: {
			laps: 4,
			name: "Phast Walkers",
			id: "phast"
		},				
		knighters: {
			laps: 14+8,
			name: "The All Knighters",
			id: "knighters"
		},						
		pirates: {
			laps: 9+12+21,
			name: "PIrates of the Cure-i-bbean",
			id: "pirates"
		},						
		cureBears: {
			laps: 31+12+9+9+8,
			name: "The Cure Bears",
			id: "cureBears"
		},					
		ko: {
			laps: 0,
			name: "K.O.",
			id: "ko"
		},							
		soleMates: {
			laps: 13+10+4,
			name: "Sole Mates",
			id: "soleMates"
		},							
		unforgettables: {
			laps: 6+7+6+6,
			name: "The Unforgettables",
			id: "unforgettables"
		},				 		
		soleSquad: {
			laps: 15+12+19+8,
			name: "Sole Squad",
			id: "soleSquad"
		},							
		nongCun: {
			laps: 16+12,
			name: "Nong Cun",
			id: "nongCun"
		},							
		benDing: {
			laps: 16+7+9+6+22,
			name: "Ben Ding Dong",
			id: "benDing"
		},								
		cashMoney: {
			laps: 34+6+4+6,
			name: "Cash Money On the Run",
			id: "cashMoney"
		},							
		farmers: {
			laps: 15,
			name: "Farmers",
			id: "farmers"
		},					
		legsMiser: {
			laps: 4+2+1,
			name: "Legs Miserables",
			id: "legsMiser"
		},							
		cureious: {
			laps: 17+9+6+4+10+10,
			name: "Fast and Cure-ious",
			id: "cureious"
		},							
		sos: {
			laps: 13+6,
			name: " … - - - … (SOS)",
			id: "sos"
		},								
		bigWok: {
			laps: 4+4+2+5+6+2,
			name: "Big Wok",
			id: "bigWok"
		},							
		walkman: {
			laps: 35+7,
			name: "Walkman",
			id: "walkman"
		},						
		ooklah: {
			laps: 7,
			name: "Ooklah Mooklah Hooklah",
			id: "ooklah"
		},							
		lifeSupport: {
			laps: 10+12+9+6,
			name: "Life Support",
			id: "lifeSupport"
		},						
		schoolWalk: {
			laps: 13+11+5+6,
			name: "School of Walk",
			id: "schoolWalk"
		},						
		findingChemo: {
			laps: 10+8+12+7,
			name: "Finding Chemo",
			id: "findingChemo"
		},						
		cancerbgon: {
			laps: 17+7+5,
			name: "Cancerbgon",
			id: "cancerbgon"
		},							
		barn: {
			laps: 17+14+7+16+35+11+44+2+2+2,
			name: "Barn",
			id: "barn"
		},						
		
		middleschool: {
			laps: 15+7+8+18+13+4,
			name: "Middle School",
			id: "middleschool"
		},
		elementaryschool: {
			laps: 294+255+184+48+34+32+89+48+17+16+59+4+14+50+14+44+42+11+12+14+14+4+7+1+2+23+6+6+9+2+26+10+8+6+4+27+22+25+18,
			name: "Elementary School",
			id: "elementaryschool"
		},
		teacher: {
			laps: 25+6,
			name:"Teacher Team",
			id: "teacher"
		}						
	};



	for (k in teamObj) {
		var thisobj = teamObj[k];
		var newDiv = document.createElement('div');

		var idP = document.createElement('p');
		var teamP = document.createElement('p');

		idP.setAttribute("id", thisobj.id+'1');
		idP.setAttribute("class", "lapsStyle");
		teamP.setAttribute("class", "Team");

		teamP.innerHTML = thisobj.name;	

		newDiv.setAttribute("id", thisobj.id);
		newDiv.setAttribute("class", "circleStyle");

		newDiv.append(idP);
		newDiv.append(teamP);

		document.getElementById("circle").appendChild(newDiv);

		var C = thisobj.laps;
		var C1 = "0px 0px " + C/20 +"px " + C/20 +"px "+ "#c23000";
		$('#'+thisobj.id+'1').html(C);
		$('#'+thisobj.id).css("box-shadow", C1);

	}

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






// var C1 = "0px 0px " + C/20 +"px " + C/20 +"px "+ "#c23000";
// $('#C1').html(C);
// $('#C').css("box-shadow",C1);

// var B1 = "0px 0px " + B/20 +"px " + B/20 +"px "+ "#c23000";
// $('#B1').html(B);
// $('#B').css("box-shadow",B1);

// var cancerned1 = "0px 0px " + cancerned/20 +"px " + cancerned/20 +"px "+ "#c23000";
// $('#cancerned1').html(cancerned);
// $('#cancerned').css("box-shadow",cancerned1);

// var CUAMS1 = "0px 0px " + CUAMS/20 +"px " + CUAMS/20 +"px "+ "#c23000";
// $('#CUAMS1').html(CUAMS);
// $('#CUAMS').css("box-shadow",CUAMS1);

// var cc1 = "0px 0px " + cc/20 +"px " + cc/20 +"px "+ "#c23000";
// $('#cc1').html(cc);
// $('#cc').css("box-shadow",cc1);

// var cureageous1 = "0px 0px " + cureageous/20 +"px " + cureageous/20 +"px "+ "#c23000";
// $('#cureageous1').html(cureageous);
// $('#cureageous').css("box-shadow",cureageous1);

// var fma1 = "0px 0px " + fma/20 +"px " + fma/20 +"px "+ "#c23000";
// $('#fma1').html(fma);
// $('#fma').css("box-shadow",fma1);

// var fighters1 = "0px 0px " + fighters/20 +"px " + fighters/20 +"px "+ "#c23000";
// $('#fighters1').html(fighters);
// $('#fighters').css("box-shadow",fighters1);

// var happyft1 = "0px 0px " + happyft/20 +"px " + happyft/20 +"px "+ "#c23000";
// $('#happyft1').html(happyft);
// $('#happyft').css("box-shadow",happyft1);

// var HS1 = "0px 0px " + HS/20 +"px " + HS/20 +"px "+ "#c23000";
// $('#HS1').html(HS);
// $('#HS').css("box-shadow",HS1);

// var illum1 = "0px 0px " + illum/20 +"px " + illum/20 +"px "+ "#c23000";
// $('#illum1').html(illum);
// $('#illum').css("box-shadow",illum1);

// var jaron1 = "0px 0px " + jaron/20 +"px " + jaron/20 +"px "+ "#c23000";
// $('#jaron1').html(jaron);
// $('#jaron').css("box-shadow",jaron1);

// var KforC1 = "0px 0px " + KforC/20 +"px " + KforC/20 +"px "+ "#c23000";
// $('#KforC1').html(KforC);
// $('#KforC').css("box-shadow",KforC1);

// var lns1 = "0px 0px " + lns/20 +"px " + lns/20 +"px "+ "#c23000";
// $('#lns1').html(lns);
// $('#lns').css("box-shadow",lns1);

// var freshmen1 = "0px 0px " + freshmen/20 +"px " + freshmen/20 +"px "+ "#c23000";
// $('#freshmen1').html(freshmen);
// $('#freshmen').css("box-shadow",freshmen1);

// var lip1 = "0px 0px " + lip/20 +"px " + lip/20 +"px "+ "#c23000";
// $('#lip1').html(lip);
// $('#lip').css("box-shadow",lip1);

// var mw1 = "0px 0px " + mw/20 +"px " + mw/20 +"px "+ "#c23000";
// $('#mw1').html(mw);
// $('#mw').css("box-shadow",mw1);

// var p531 = "0px 0px " + p53/20 +"px " + p53/20 +"px "+ "#c23000";
// $('#p531').html(p53);
// $('#p53').css("box-shadow",p531);

// var phil1 = "0px 0px " + phil/20 +"px " + phil/20 +"px "+ "#c23000";
// $('#phil1').html(phil);
// $('#phil').css("box-shadow",phil1);

// var rfl1 = "0px 0px " + rfl/20 +"px " + rfl/20 +"px "+ "#c23000";
// $('#rfl1').html(rfl);
// $('#rfl').css("box-shadow",rfl1);

// var rm1 = "0px 0px " + rm/20 +"px " + rm/20 +"px "+ "#c23000";
// $('#rm1').html(rm);
// $('#rm').css("box-shadow",rm1);

// var sh1 = "0px 0px " + sh/20 +"px " + sh/20 +"px "+ "#c23000";
// $('#sh1').html(sh);
// $('#sh').css("box-shadow",sh1);

// var s2s1 = "0px 0px " + s2s/20 +"px " + s2s/20 +"px "+ "#c23000";
// $('#s2s1').html(s2s);
// $('#s2s').css("box-shadow",s2s1);

// var sm1 = "0px 0px " + sm/20 +"px " + sm/20 +"px "+ "#c23000";
// $('#sm1').html(sm);
// $('#sm').css("box-shadow",sm1);

// var T1 = "0px 0px " + T/20 +"px " + T/20 +"px "+ "#c23000";
// $('#T1').html(T);
// $('#T').css("box-shadow",T1);

// var W1 = "0px 0px " + W/20 +"px " + W/20 +"px "+ "#c23000";
// $('#W1').html(W);
// $('#W').css("box-shadow",W1);

// var ES1 = "0px 0px " + ES/20 +"px " + ES/20 +"px "+ "#c23000";
// $('#ES1').html(ES);
// $('#ES').css("box-shadow",ES1);


});


	

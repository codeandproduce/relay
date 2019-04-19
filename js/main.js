$(document).ready(function($){

	var teamObj = {
		beyondRunning: {
			laps: 181,
			name: "Beyond Running",
			id: "beyondRunning"
		},				
		walkieTalkie: {
			laps: 96,
			name: "Walkie Talkies",
			id: "walkieTalkie"
		},			
		walkamolies: {
			laps: 11,
			name: "Walkamolies",
			id: "walkamolies"
		},				
		aggressivelyMediocre: {
			laps: 118,
			name: "Aggressively Mediocre",
			id: "aggressivelyMediocre"
		},			
		motzko: {
			laps: 81,
			name: "Mr. Motzko's Walk and Talk Exploratory",
			id: "motzko"
		},					
		phast: {
			laps: 4,
			name: "Phast Walkers",
			id: "phast"
		},				
		knighters: {
			laps: 36,
			name: "The All Knighters",
			id: "knighters"
		},						
		pirates: {
			laps: 47,
			name: "PIrates of the Cure-i-bbean",
			id: "pirates"
		},						
		cureBears: {
			laps: 99,
			name: "The Cure Bears",
			id: "cureBears"
		},					
		ko: {
			laps: 57,
			name: "K.O.",
			id: "ko"
		},							
		soleMates: {
			laps: 28,
			name: "Sole Mates",
			id: "soleMates"
		},							
		unforgettables: {
			laps: 38,
			name: "The Unforgettables",
			id: "unforgettables"
		},				 		
		soleSquad: {
			laps: 54,
			name: "Sole Squad",
			id: "soleSquad"
		},							
		nongCun: {
			laps: 32,
			name: "Nong Cun",
			id: "nongCun"
		},							
		benDing: {
			laps: 87,
			name: "Ben Ding Dong",
			id: "benDing"
		},								
		cashMoney: {
			laps: 151,
			name: "Cash Money On the Run",
			id: "cashMoney"
		},							
		farmers: {
			laps: 15,
			name: "Farmers",
			id: "farmers"
		},					
		legsMiser: {
			laps: 24,
			name: "Legs Miserables",
			id: "legsMiser"
		},							
		cureious: {
			laps: 88,
			name: "Fast and Cure-ious",
			id: "cureious"
		},							
		sos: {
			laps: 27,
			name: " … - - - … (SOS)",
			id: "sos"
		},								
		bigWok: {
			laps: 40,
			name: "Big Wok",
			id: "bigWok"
		},							
		walkman: {
			laps: 52,
			name: "Walkman",
			id: "walkman"
		},						
		ooklah: {
			laps: 13,
			name: "Ooklah Mooklah Hooklah",
			id: "ooklah"
		},							
		lifeSupport: {
			laps: 37,
			name: "Life Support",
			id: "lifeSupport"
		},						
		schoolWalk: {
			laps: 39,
			name: "School of Walk",
			id: "schoolWalk"
		},						
		findingChemo: {
			laps: 61,
			name: "Finding Chemo",
			id: "findingChemo"
		},						
		cancerbgon: {
			laps: 36,
			name: "Cancerbgon",
			id: "cancerbgon"
		},							
		barn: {
			laps: 190,
			name: "Barn",
			id: "barn"
		},						
		
		middleschool: {
			laps: 157,
			name: "Middle School",
			id: "middleschool"
		},
		elementaryschool: {
			laps: 2817,
			name: "Elementary School",
			id: "elementaryschool"
		},
		teacher: {
			laps: 90,
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


	

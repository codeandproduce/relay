$(document).ready(function($){

	var teamObj = {
		brackets: {
			laps: 93,
			name: "[]",
			id: "brackets"
		},				
		brosChilling: {
			laps: 93,
			name: "12 Bros Chillin in a Hot Tub",
			id: "brosChilling"
		},			
		achillies: {
			laps: 42,
			name: "Achilles Heals",
			id: "achillies"
		},				
		anticancer: {
			laps: 96,
			name: "Anti Cancer Social Club",
			id: "anticancer"
		},			
		apac: {
			laps: 35,
			name: "APAC Walking",
			id: "apac"
		},					
		bigFeet: {
			laps: 29,
			name: "Big Feet",
			id: "bigFeet"
		},				
		cancervive: {
			laps: 67,
			name: "Cancervive",
			id: "cancervive"
		},						
		cancerned: {
			laps: 84,
			name: "Cancerned",
			id: "cancerned"
		},						
		dusktilldawn: {
			laps: 51,
			name: "Dusk Till Dawn",
			id: "dusktilldawn"
		},					
		fid: {
			laps: 11,
			name: "F7DELITY",
			id: "fid"
		},							
		freindslife: {
			laps: 53,
			name: "Friends4Life",
			id: "freindslife"
		},							
		happyfeet: {
			laps: 49,
			name: "Happy Feet",
			id: "happyfeet"
		},						
		hercure: {
			laps: 141,
			name: "Hercureles",
			id: "hercure"
		},							
		jump: {
			laps: 39,
			name: "Jump Start",
			id: "jump"
		},							
		leg: {
			laps: 49,
			name: "Leg Day",
			id: "leg"
		},								
		lost: {
			laps: 52,
			name: "Lost in Pace",
			id: "lost"
		},							
		needForSpeed: {
			laps: 33,
			name: "Need for Speed",
			id: "needForSpeed"
		},					
		paws: {
			laps: 44,
			name: "PAWS Cancer",
			id: "paws"
		},							
		prolet: {
			laps: 54,
			name: "Proletariat",
			id: "prolet"
		},							
		RIC: {
			laps: 47,
			name: "R.I.C. 24/7",
			id: "RIC"
		},								
		soupa: {
			laps: 32,
			name: "SoupaStars",
			id: "soupa"
		},							
		spero: {
			laps: 34,
			name: "Spero",
			id: "spero"
		},						
		leggs: {
			laps: 29,
			name: "Scrambled Leggs",
			id: "leggs"
		},							
		curesadors: {
			laps: 71,
			name: "The Curesadors",
			id: "curesadors"
		},						
		tumornators: {
			laps: 63,
			name: "Tumornators",
			id: "tumornators"
		},						
		walkanda: {
			laps: 55,
			name: "Walkanda",
			id: "walkanda"
		},						
		walking: {
			laps: 16,
			name: "Walking Cows",
			id: "walking"
		},							
		walkingtill: {
			laps: 48,
			name: "Walking Till Dawn",
			id: "walkingtill"
		},						
		worstpage: {
			laps: 78,
			name: "Worst Pace Scenario",
			id: "worstpage"
		},
		middleschool: {
			laps:180,
			name: "Middle School",
			id: "middleschool"
		},
		elementaryschool: {
			laps: 1696,
			name: "Elementary School",
			id: "elementaryschool"
		},
		teacher: {
			laps:157,
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


	

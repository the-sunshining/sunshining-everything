$(document).ready(function(){

	$("#SunHome").click(function(){
		$("#TheSunShiningHeadSite").css("display", "block");
		$("#SunBibleSite").css("display", "none");
		$("#LifeOfJesusSite").css("display", "none");
		$("#HowToGetToHeavenSite").css("display", "none");
		$("#MyChristianTeacupSite").css("display", "none");
		$("#more").css("display", "none");
		$("#TheSunShiningEverythingSidebar").toggle();
	});
// SunBible
	$("#SunBible").click(function(){
		$("#TheSunShiningHeadSite").css("display", "none");
		$("#SunBibleSite").css("display", "block");
		$("#LifeOfJesusSite").css("display", "none");
		$("#HowToGetToHeavenSite").css("display", "none");
		$("#MyChristianTeacupSite").css("display", "none");
		$("#more").css("display", "none");
		$("#TheSunShiningEverythingSidebar").toggle();
	});

	$("#JesusLife").click(function(){
		$("#TheSunShiningHeadSite").css("display", "none");
		$("#SunBibleSite").css("display", "none");
		$("#LifeOfJesusSite").css("display", "block");
		$("#HowToGetToHeavenSite").css("display", "none");
		$("#MyChristianTeacupSite").css("display", "none");
		$("#more").css("display", "none");
		$("#TheSunShiningEverythingSidebar").toggle();
	});

	$("#toHeaven").click(function(){
		$("#TheSunShiningHeadSite").css("display", "none");
		$("#SunBibleSite").css("display", "none");
		$("#LifeOfJesusSite").css("display", "none");
		$("#HowToGetToHeavenSite").css("display", "block");
		$("#MyChristianTeacupSite").css("display", "none");
		$("#more").css("display", "none");
		$("#TheSunShiningEverythingSidebar").toggle();
	});

	// Books




	//Other
	$("#TeaCup").click(function(){
		$("#TheSunShiningHeadSite").css("display", "none");
		$("#SunBibleSite").css("display", "none");
		$("#LifeOfJesusSite").css("display", "none");
		$("#HowToGetToHeavenSite").css("display", "none");
		$("#MyChristianTeacupSite").css("display", "block");
		$("#more").css("display", "none");
		$("#TheSunShiningEverythingSidebar").toggle();
	});

	$("#More").click(function(){
		$("#TheSunShiningHeadSite").css("display", "none");
		$("#SunBibleSite").css("display", "none");
		$("#LifeOfJesusSite").css("display", "none");
		$("#HowToGetToHeavenSite").css("display", "none");
		$("#MyChristianTeacupSite").css("display", "none");
		$("#more").css("display", "block");
		$("#TheSunShiningEverythingSidebar").toggle();
	});




	
	});
function linksWork(){
document.getElementById("SunHome").addEventListener("click", showHome);
document.getElementById("SunBible").addEventListener("click", showBible);
document.getElementById("JesusLife").addEventListener("click", showJesus);
document.getElementById("toHeaven").addEventListener("click", showHeaven);
document.getElementById("TeaCup").addEventListener("click", showCup);
document.getElementById("BookMarket").addEventListener("click", showBookMarket);
document.getElementById("More").addEventListener("click", showMore);
};
(function showHome() {
document.getElementById('TheSunShiningHeadSite').style.display='block';
document.getElementById('SunBibleSite').style.display='none';
document.getElementById('LifeOfJesusSite').style.display='none';
document.getElementById('HowToGetToHeavenSite').style.display='none';
document.getElementById('MyChristianTeacupSite').style.display='none';
document.getElementById('MySmallOnlineBookMarketSite').style.display='none';
document.getElementById('more').style.display='none'
};
function showBible(){
document.getElementById('TheSunShiningHeadSite').style.display='none';
document.getElementById('SunBibleSite').style.display='block';
document.getElementById('LifeOfJesusSite').style.display='none';
document.getElementById('HowToGetToHeavenSite').style.display='none';
document.getElementById('MyChristianTeacupSite').style.display='none';
document.getElementById('MySmallOnlineBookMarketSite').style.display='none';
document.getElementById('more').style.display='none'
};
function showJesus(){
document.getElementById('TheSunShiningHeadSite').style.display='none';
document.getElementById('SunBibleSite').style.display='none';
document.getElementById('LifeOfJesusSite').style.display='block';
document.getElementById('HowToGetToHeavenSite').style.display='none';
document.getElementById('MyChristianTeacupSite').style.display='none';
document.getElementById('MySmallOnlineBookMarketSite').style.display='none';
document.getElementById('more').style.display='none';
};
function showHeaven(){
	document.getElementById('TheSunShiningHeadSite').style.display='none';
document.getElementById('SunBibleSite').style.display='none';
document.getElementById('LifeOfJesusSite').style.display='none';
document.getElementById('HowToGetToHeavenSite').style.display='block';
document.getElementById('MyChristianTeacupSite').style.display='none';
document.getElementById('MySmallOnlineBookMarketSite').style.display='none';
document.getElementById('more').style.display='none';
};
function showCup(){
	document.getElementById('TheSunShiningHeadSite').style.display='none';
document.getElementById('SunBibleSite').style.display='none';
document.getElementById('LifeOfJesusSite').style.display='none';
document.getElementById('HowToGetToHeavenSite').style.display='none';
document.getElementById('MyChristianTeacupSite').style.display='block';
document.getElementById('MySmallOnlineBookMarketSite').style.display='none';
document.getElementById('more').style.display='none';
};
function showBookMarket(){
	document.getElementById('TheSunShiningHeadSite').style.display='none';
document.getElementById('SunBibleSite').style.display='none';
document.getElementById('LifeOfJesusSite').style.display='none';
document.getElementById('HowToGetToHeavenSite').style.display='none';
document.getElementById('MyChristianTeacupSite').style.display='none';
document.getElementById('MySmallOnlineBookMarketSite').style.display='block';
document.getElementById('more').style.display='none';
};
function showMore(){
	document.getElementById('TheSunShiningHeadSite').style.display='none';
document.getElementById('SunBibleSite').style.display='none';
document.getElementById('LifeOfJesusSite').style.display='none';
document.getElementById('HowToGetToHeavenSite').style.display='none';
document.getElementById('MyChristianTeacupSite').style.display='none';
document.getElementById('MySmallOnlineBookMarketSite').style.display='none';
document.getElementById('more').style.display='block';
}
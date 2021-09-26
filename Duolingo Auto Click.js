// ==UserScript==
// @name Duolingo Bot
// @namespace Script Runner Pro
// @match https://www.duolingo.com/*
// @grant none
// ==/UserScript==

window.onload = function(){
  
    setInterval(statusChecker, 1000);
    setInterval(errorPrevention,300000);

}

function statusChecker(){
  var isReload = false;
  
  if(navigator.onLine){
    if(isReload){
      location.reload();
      isReload = false;
    }
    autoComplete();
  }else{
    isReload = true;
  }
  
}

function autoComplete(){

    if(document.querySelectorAll('[data-test="global-practice"]').length>0){
        document.querySelectorAll('[data-test="global-practice"]')[0].click();
    }

    if(document.querySelectorAll('[data-test="challenge-judge-text"]').length>0){
        document.querySelectorAll('[data-test="challenge-judge-text"]')[0].click();
    }

    if(document.querySelectorAll('[data-test="player-practice-again"]').length>0){
        document.querySelectorAll('[data-test="player-practice-again"]')[0].click();
    }else if(document.querySelectorAll('[data-test="player-next"]').length>0){
        document.querySelectorAll('[data-test="player-next"]')[0].click();
    }

}

function errorPrevention(){

    location.reload()
}

function generateKey(){
   return Math.ceil(Math.random()*99999999);
}

function saveToSessionStore(key,moviveName){
  sessionStorage.setItem(key,moviveName)
}

function getToSessionStore(key){
    return sessionStorage.getItem(key);
}

function removeAllSessionStoreData(){
	sessionStorage.clear();
}
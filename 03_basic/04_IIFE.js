// Immediatily Invoked Function Expression

(function chai(){
    console.log("DB CONNECTED");
})();

(() => {
    console.log("DB DISCONNECTED");
})();
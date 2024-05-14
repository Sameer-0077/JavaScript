

function f1(){
    let username = "Sameer"
    function f2(){
        let userid = "123sam" //This is fine a local variable can access a global variable
        console.log(username);
    }

    // console.log(userid); //But the problem is here this line give an error that it can't access a local variable

    f2()
}

f1()

if(true){
    const username = "Sameer"
    if(username === "Sameer"){
        const website = " You-tube"
        console.log(username + website);// This line is fine, it gives disire output
    }

    // console.log(website);//Here error occure again because a variable can't access beyond its scope
}
// console.log(username);// This line give an error
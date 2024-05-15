const days = 5

switch (days) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("Invadid Days");
        break;
}



// --------------------------------Ternary Operator ------------------------------


let marks = 30

marks >= 40 ? console.log("Passed") : console.log("Failed")

marks = 80

marks < 40 ? console.log("Failed") : marks <= 60 ? console.log("Good") : marks <= 80 ? console.log("Very Good!") : console.log(Excellent)




// switch (marks) {
//     case (marks < 40):
//         console.log("Failed!");
//         break;
//     case (marks >= 40 && marks < 50):
//         console.log("Just Passed!");
//         break;
//     case (marks >= 50 && marks < 70):
//         console.log("Good!");
//         break;
//     case (marks >= 70 && marks < 80):
//         console.log("Very Good!");
//         break;
//     case (marks >= 80 && marks < 90):
//         console.log("Excellent!");
//         break;
//     case (marks >= 90 && marks <= 100):
//         console.log("Outstanding!");
//         break;

//     default:
//         console.log("Invalid Marks");
//         break;
// }
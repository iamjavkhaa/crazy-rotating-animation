
//  ----------------     V.1  ----------------

// var neg = 0;

// const five = setInterval(()=> {

//     console.log(neg = neg + 1)

//     if(neg === 5) {
//         clearInterval(five);
//         neg = 0; 

//         const seven = setInterval(()=> {
//             console.log(neg = neg + 1);
        
//             if(neg === 7) {
//                 clearInterval(seven);
//                 neg = 0;
//             }
//         }, 1000)
//     } 

// }, 1000)



// const seven = setInterval(()=> {
//     console.log(neg = neg + 1);

//     if(neg === 7) {
//         clearInterval(seven);
//     }
// }, 1000)

// ----------------  V.1  END ----------------








// ----------------  V.2  start ----------------


var neg = 0;

function five() { 
    const fiveInt = setInterval( tav, 1000);
}




function tav(){
    console.log(neg = neg + 1)

    if(neg === 5) {
        neg = 0; 
        // clearInterval(fiveInt);
        // setInterval(seven, 1000)
    } 
}

five()

// function seven() {
//     console.log(neg = neg + 1);

//     if(neg === 7) {
//         clearInterval(seven);
//         neg = 0;
//     }
// }





// ----------------  V.2  end ----------------

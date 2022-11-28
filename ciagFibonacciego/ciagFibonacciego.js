console.log("zaczynamy!");

//const a = 0;
//console.log(a);
// const b = 1;
//console.log(b);
const podajLiczbe = prompt("podaj liczbę");
 
 
 
function ciagFibonacciego() {
    const a = 0;
    console.log(a);
    let enty = 0;
    let b = 1;
    console.log(b);

    for(let i=0; i<=podajLiczbe; i++){
        if(i<=0) {
             enty = a + b;
             console.log(enty);
            } else {
                enty = b + enty;
                console.log(enty);
                b = enty - b;
                //console.log(b);
            }
    }
}
ciagFibonacciego();
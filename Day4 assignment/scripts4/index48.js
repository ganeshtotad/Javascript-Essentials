// function ask( question, yes, no){
//     if (confirm(question)) {
//         yes()
//         }
//     else{ 
//         no()
//     }
// }
// ask (
//     " Do you agree ?",
// function(){alert(" you agreed");},
// function(){alert("You canceled the execution");}
// );
let ask = ( question, yes, no)=> {
        if (confirm(question)) yes()
        else no()
            }

ask (
    " Do you agree ?",
Yes=>{alert(" you agreed");},
No=>{alert("You canceled the execution");}
);


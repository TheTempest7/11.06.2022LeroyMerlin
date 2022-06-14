
/*---------------------------------------(1)----------------------------------*/

/* 

let a=[
[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10,11, 12],
[13, 14, 15, 16],
];
let a2=[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25],
];
let handMatrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
let double=[
    [1,2],
    [3,4],
]
*/


function logi(a){
    let b=[];
    let x=0;
    if(a.length<4){
        for(let z=0;z<a.length-1;z++){
            for(let i=0+z;i<a.length-x;i++){
                b.push(a[0+z][i-z+x]);
            }
            for(let i=1+x;i<a.length-x;i++){
                b.push(a[i][a.length-1-x]);
            }
            for(let i=a.length-2-x;i>=0+x;i--){
                b.push(a[a.length-1-x][i]);
    
            }
            for(let i=a.length-2;i>=x+1+x;i--){
                b.push(a[i-x][x]);
                
            }
            x++;
        }
    }
    else{
        for(let z=0;z<a.length-2;z++){
            for(let i=0+z;i<a.length-x;i++){
                b.push(a[0+z][i-z+x]);
            }
            for(let i=1+x;i<a.length-x;i++){
                b.push(a[i][a.length-1-x]);
            }
            for(let i=a.length-2-x;i>=0+x;i--){
                b.push(a[a.length-1-x][i]);
    
            }
            for(let i=a.length-2;i>=x+1+x;i--){
                b.push(a[i-x][x]);
                
            }
            x++;
        }
    }
   
    console.log(b);
    return b;
}

/*
logi(a2);
*/



/* i left it hear to provide  a current of my thoughts
let handMatrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];


function matrixRevrse(){
    let srt='';
    let s=[];
    for(let i=0;i<3;i++){
        s.push(handMatrix[0][i]);
    }
    for(let i=1;i<3;i++){
        s.push(handMatrix[i][2]);
    }
    for(let i=1;i>-1;i--){
        s.push(handMatrix[2][i]);
    }
    for(let i=0;i<1;i++){
        s.push(handMatrix[1][i]);
    }
    for(let i=1;i<2;i++){
        s.push(handMatrix[1][i]);
    }
    return s;
    console.log(s);
}
console.log(matrixRevrse());

*/






/*---------------------------------------(1)----------------------------------*/
/*---------------------------------------(2)----------------------------------*/
console.log(Boolean('0'));


/*---------------------------------------(2)----------------------------------*/
/*---------------------------------------(3)----------------------------------*/

let burger=document.body.querySelector('.burger');

burger.addEventListener('click',(e)=>{
e.target.closest('.burger').classList.toggle('active');
})
/*---------------------------------------(3)----------------------------------*/
/*---------------------------------------(4)----------------------------------*/

let numbers=[2,3,4,5,5,67,787,6,4];
/*numbers=[3,6,9,36,51,54,15];*/

let sum=numbers.reduce((a,b)=>a+b);

let product=numbers.reduce((a,b)=>a*b);

function equlize(){
 let numbersCanDivide=numbers.filter(item=> item%3==0);
 
 if((numbers.length==numbersCanDivide.length)&&(sum%3==0))/* !$! (условие что сумма делиться на 3) !$!*/{
    console.log('sum can be divided');
    console.log(sum/3);
    if(numbersCanDivide.length>0){
        console.log('product of numbers can be divided');/**этот if будет срабатывать всегда когда !$! сумма делиться на 3 \
        и выполняется  условие деления произведения на 3 ,а именно в массиве numbersCanDivide присутсвует хотя бы одно 
        число делящееся на 3 */
        console.log(product/3);
    }
    else{
        console.log('i am never be log');
    }
 }
 else{
    console.log('sum can`t be divided');
    console.log(sum/3);
    console.log(product/3);
 }

}
equlize();


/*---------------------------------------(4)----------------------------------*/

/*---------------------------------------(1)----------------------------------*/
function setMatrix(x){
let arr=[];
for(let i=0; i<x;i++){
    arr[i]=[];
    for(let j=0;j<x;j++){
        arr[i][j]=i+j+1;
    }
}
return arr;
}
console.log(setMatrix(5));
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
]
let b=[];


function logi(a){
    let x=0;
    for(let z=0;z<2;z++){
        for(let i=0+z;i<a.length-x;i++){
            console.log(a[0+z][i-z+x]); 
        }
        for(let i=1+x;i<a.length-x;i++){
            console.log(a[i][a.length-1-x]); 
        }
        for(let i=a.length-2-x;i>=0+x;i--){
            console.log(a[a.length-1-x][i]); 
        }
        for(let i=a.length-2;i>=x+1+x;i--){
            console.log(a[i-x][x]);
            
        }
        x++;
    }
}
logi(a);




/*
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
e.target.closest('.burger').classList.toggle('active');;
})
/*---------------------------------------(3)----------------------------------*/
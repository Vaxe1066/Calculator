function add(num1, num2){
    return Number(num1)+Number(num2);
}

function minus(num1, num2){
    return Number(num1)-Number(num2);
}

function multiply(num1, num2){
    return Number(num1)*Number(num2);
}

function divide(num1, num2){
    return Number(num1)/Number(num2);
}


let numStore = {
    num1: '',
    num2: '',
    operator: ''
    
};





function hasNumbers(t)
{
let regex = /\d/g;
return regex.test(t);
}




function oper(input){
    if(input.value=='+'){
        test = numStore.add
    }
    else if(input.value=='-'){
        test=numStore.minus;
    }
    else if(input.value=='*'){
        test=numStore.multiply;
    }
    else if(input.value=='/'){
        test=numStore.divide;
    }

    return test;
}

let arr=[];

function doOperation(arr){
    if(arr[1]=="+"){
        return add(arr[0], arr[2]);
    }
    else if(arr[1]=="-"){
        return minus(arr[0], arr[2]);
    }
    else if(arr[1]=="/"){
        return divide(arr[0], arr[2]);
    }
    else if(arr[1]=="*"){
        return multiply(arr[0], arr[2]);
    }

      
}


const inputs = document.querySelectorAll('input');
let cnt=1;
inputs.forEach( (input) => {
    input.addEventListener("click", () => {
        let disText = document.querySelector('.displayBut');
        let textHold;
        if(hasNumbers(input.value) || input.value=="." || input.value=="%" || input.value=="+/-"){

            if(arr.length==2 && cnt==1){
                disText.textContent='';
                cnt=0;
            }

            if(hasNumbers(input.value) || input.value=="."){
                disText.textContent = disText.textContent + input.value;
            }
            else if ( disText.textContent!='') {
                if(input.value=="%"){
                    disText.textContent = disText.textContent/100;
                }
                else if(input.value=="+/-"){
                    disText.textContent = disText.textContent*-1;
                }
            }
        
        }

        else if(input.value=="+" || input.value=="-" || input.value=="/" || input.value=="*"){
            arr.push(disText.textContent);
            if(arr.length==0){
                arr[0] = disText.textContent;
                arr[1]=(input.value);
                console.log(arr);
                disText.textContent='';

            }
            else if(arr.length==1 || arr.length==2){
                arr[1]=(input.value);
                console.log(arr);
                disText.textContent='';
            }
            else {
                //arr[1]=(input.value);
                console.log(arr);
                
                disText.textContent = doOperation(arr);
                arr=[];
                arr[0]=disText.textContent;
                console.log(arr);


            }  

            arr[1] = input.value;
            console.log(arr);
            cnt=1;

            
           
        }
        
        else if(input.value=="AC"){
            arr=[];
            disText.textContent='';
            console.log(arr);
        }
        else if (input.value=="="){
            if(arr.length==2){
                arr.push(disText.textContent);
                disText.textContent = doOperation(arr);
                arr=[];
                arr[0]=disText.textContent;
            }


        }

/*
        if(arr.length==3 && (arr[1]=="+" || arr[1]=="-" || arr[1]=="/" || arr[1]=="*")){
            disText.textContent = doOperation(arr);
            arr=[];
            arr[0]=disText.textContent;
        }

            */




    });
    




});








/*

const inputs = document.querySelectorAll('input');

inputs.forEach( (input) => {
    if(hasNumbers(input.value)){
        input.addEventListener("click", () => {

            let disText = document.querySelector('.displayBut');
            //disText.textContent = disText.textContent + input.value;
            disText.textContent = test(numStore['num2'], input.value);
            numStore['num2']=disText.textContent
            
        });
    }




});


inputs.forEach( (input) => {
    if(input.value == "="){
        input.addEventListener("click", () => {

            let disText = document.querySelector('.displayBut');
            disText.textContent = disText.textContent + input.value;
            disText.textContent = test(numStore['num1'], numStore['num2']);
            numStore['num1']=disText.textContent
            
        });
    }




});


inputs.forEach( (input) => {
    if(!hasNumbers(input.value)){
        input.addEventListener("click", () => {

            let disText = document.querySelector('.displayBut')
            numStore['num1'] = disText.textContent;

     
            if(input.value=='+'){
                test = numStore.add
            }
            else if(input.value=='-'){
                test=numStore.minus;
            }
            else if(input.value=='*'){
                test=numStore.multiply;
            }
            else if(input.value=='/'){
                test=numStore.divide;
            }
            
        });
    }


});

*/
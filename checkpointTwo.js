// checkpoint 1
/*function bitwiseAND(n1, n2) {
	var binstr1,binstr2
     var check1,check2
    var max
	var result=""
	var binstr1=n1.toString(2)
	var binstr2=n2.toString(2)
    if(binstr1.length>binstr2.length)
    {max=binstr1.length
    check2=binstr2.padStart(max,'0')
    check1=binstr1
    }
    else{max=binstr2.length
        check1=binstr1.padStart(max,'0')
        check2=binstr2
    
    }
	for(var i=0;i<max;i++){
        if (check1[i]==='1'&& check2[i]==='1'){result=result+"1"}
        else{result=result+"0"}
    }return parseInt(result,2)
	
	
} 

function bitwiseOR(n1, n2) {
	var binstr1,binstr2
     var check1,check2
    var max
	var result=""
	var binstr1=n1.toString(2)
	var binstr2=n2.toString(2)
    if(binstr1.length>binstr2.length)
    {max=binstr1.length
    check2=binstr2.padStart(max,'1')
    check1=binstr1
    }
    else{max=binstr2.length
        check1=binstr1.padStart(max,'1')
        check2=binstr2
    
    }
	for(var i=0;i<max;i++){
        if (check1[i]==='0'&& check2[i]==='0'){result=result+"0"}
        else{result=result+"0"}
    }return parseInt(result,2)
	
	
} 

function bitwiseXOR(n1, n2) {
	var binstr1,binstr2
     var check1,check2
    var max
	var result=""
	var binstr1=n1.toString(2)
	var binstr2=n2.toString(2)
    if(binstr1.length>binstr2.length)
    {max=binstr1.length
    check2=binstr2.padStart(max,'0')
    check1=binstr1
    }
    else{max=binstr2.length
        check1=binstr1.padStart(max,'0')
        check2=binstr2
    
    }
	for(var i=0;i<max;i++){
        if ((check1[i]==='0'&& check2[i]==='0')||(check1[i]==='1'&& check2[i]==='1')){result=result+"0"}
        else{result=result+"1"}
    }return parseInt(result,2)
	
	
} 
// look for 7 in an array 
function sevenBoom(arr){
    var k=0
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++)
        if (arr[i][j]=='7'){k=k+1}    
    }
    if(k>0){ return"Boom!"}
    else {return"there is no 7 in the array"}
}  
// 
function addUp(num) {
    var s=0 
    for(var i=0;i<=num;i++){
       s=s+i
    } return s
	
} */
// checkpoint 2 
// String Manipulation functions
function reverseString(str){
    var reversed=''
    for(var i=0;i<str.length;i++){
        reversed+=str[str.length-1-i]

    }return reversed

} 
function calculstr(str){
    return str.length
} 

function capital(str){
    var items 
    var cc
    var virginTab=[]
    var NewStr=''
    items=str.split(" ")
    for(var i=0;i<items.length;i++){
       cc=items[i][0].toUpperCase()+items[i].slice(1)
       virginTab.push(cc)
    }NewStr=virginTab.join(" ")
return NewStr

} 
// Array Functions 
function tri(arr){
    do {
    var k=0
    for (var i=0;i<arr.length-1;i++){
        if (arr[i+1]<arr[i]) {
            var j=arr[i]
            arr[i]=arr[i+1] 
            arr[i+1]=j
            k=1
        }
    }} while(k==1)
    return arr 

}

function minMax(arr){
    var NEWtab=[]
    NEWtab=tri(arr)
    return[NEWtab[0],NEWtab[NEWtab.length-1]]
} 

function SumArray(arr){
    var s=0
    for(var i=0;i<arr.length;i++){
        s+=arr[i]
    }
    return s 
} 
function Daagi(str){
    var tab=['a','e','y','i','u' ,'o']
    var newSTR=''
    var dummyk=0
    for (var i=0;i<str.length;i++){
        
            if (tab.includes(str[i])){
              dummyk=dummyk+1}
           
            else{
                newSTR+=str[i]
            }
           
        }
    return newSTR 
} 
function Factorial(n){
    var value=1
    for(var i=1;i<=n;i++){
        value=value*i
    }return value
} 
function Prime(n){
    var tab=[]
    for(var i=1;i<=n;i++){
        if(n%i==0){
            tab.push(i)
            
        }
    }if(tab.length==2){
        console.log("prime nbr ")
    }
    else{
        console.log('not a prime nbr')
    }
    
    return 'done'
    } 
    function Fibonacci(n) {
        var tab = [0, 1]
        for (var i = 2; i < n; i++) {
            tab[i] = tab[i - 1] + tab[i - 2]
        }
    
        return tab
    }
   

// Add your functions here
function map(arr, func){
    let newarr=[];
    for(let i=0; i<arr.length; i++){
        newarr[i]=func(arr[i]);
    }
    return newarr;
}

function reduce(arr, func, start){
    if (!start){
        start=arr[0];
    }
    else{
        start+=arr[0];
    }
    for(let i=1; i<arr.length; i++){
        start=func(arr[i], start);
    }
    return start;
}
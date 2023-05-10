const arr = [50 ,100 ,20 ,40 ,200]


const getTwoSum = (arr , target) => {
    for(let a of arr)
    {
        if(arr.includes(target - a))
        {
          const x = arr.indexOf(target - a) ; 
          return {a , b: arr[x]}
        }

    }
     return "Two Sum is Not Possible" ;
}


const sum = getTwoSum(arr , 250);
console.log(sum);


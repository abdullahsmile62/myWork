function findOdd(arr) {
    
    let x =[];
    arr.sort();
    for (let i = 0 ; i<arr.length ; i++){
        
        if (arr[i]==arr[i-1]){ 

            continue 
        }

     c = arr.filter(y => y==arr[i]);
     
     x.push(c);
    }
    
    for (let j= 0 ; j<x.length ; j++){
        
       if (x[j].length%2 != 0){
         
            r = x[j][0]
        }   
    }
                
  return r
    
 }


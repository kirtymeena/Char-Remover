const specialCharsSet = new Set("!@#$%^&+-*()_");

document.addEventListener("change",e=>{
    {
        let num=e.target.value
        let str = num.replaceAll(/\s/g,'')
        console.log(str)
        let arr=[]
        for(let n in str){
            // console.log(num[n])
            // if(num[n]==" "){
            //     continue
            // }
            arr.push(str[n])
           
            
        }
        for(let i=0;i<=arr.length;i++){
            if(specialCharsSet.has(arr[i])){
                arr.splice(i,1)
            }

        }
        console.log(arr)
    
        // console.log(arr.join(""))
         const val = arr.join("")
      

        if(isNaN(arr.join(''))==false){
            const tagName = document.getElementsByTagName("input")
            
                // console.log("yes")
                
                
                for(var i in tagName){
                    // console.log(tagName[i].value)
                    if(tagName[i].value==e.target.value){
                        tagName[i].value = val
                    }
                
                
            }
            
        }
        
      
    
}
})


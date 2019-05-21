buildings = [
    [2,9,10], // b#1
    [3,7,15], // b#2
    [5,12,12], // b#3
    [15,20,10], // b#4
    [19,24,8] // b#5
]

var getSkyline = function(buildings) {

    var height=[];
    
    for(var i=0; i<buildings.length; i++) {
        var building = buildings[i];
        height.push([building[0], -building[2]]);
        height.push([building[1], building[2]]);
    }
    
    height.sort(function(a, b){
        if(a[0]!=b[0]){
            return a[0]-b[0];
        }
        return a[1]-b[1];
    });
    
    var currentHeight={0:true};
    var previous=0, result=[];
    
    for(var i=0; i<height.length; i++) {
        
        var h= height[i];
        
        if(h[1]<0) {
            currentHeight[-h[1]]= currentHeight[-h[1]]?currentHeight[-h[1]]+1:1;
        } else {
            currentHeight[h[1]]--;
            if(currentHeight[h[1]]==0) {
                delete currentHeight[h[1]];
            }
        }
        
        var current=0;
        
        for(var key in currentHeight) {
            if(key-0>current) {
                current=key-0;
            }
        }
        
        if(previous!=current) {
            result.push([h[0], current]);
            previous=current;
        }
    }
    return result;
};

const maxArea = (height) => {

    let l = 0;
    let r = height.length - 1;

    let maxArea = 0;

    while( l < r ) {
        let h = Math.min(height[l], height[r]);
        let w = r - l;

        maxArea = Math.max(h * w, maxArea)

        if(height[l] <= height[r]){
            l++;
        } else {
            r--;
        }
    }

    return maxArea;

}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
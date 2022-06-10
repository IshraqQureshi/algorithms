const maxPairs = (skillLevel, minDiff) => {

    const pairs = [];

    for(let i = 0; i < skillLevel.length; i++){
        for(let j = i + 1; j < skillLevel.length; j++){
            if( Math.abs(skillLevel[i] - skillLevel[j]) == minDiff ) {
                pairs.push([skillLevel[i], skillLevel[j]]);
                break;
            }
        }
    }

    return pairs.length;

}

console.log(maxPairs([3, 4, 5, 2, 1, 1], 3))
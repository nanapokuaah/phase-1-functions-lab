// Code your solution in this file!
function distanceFromHqInBlocks(dropoffBlock){
    //return Math.abs(44-dropoffBlock)
    if (dropoffBlock<=42){
        return 42-dropoffBlock
        }else{
            return dropoffBlock - 42
        }
}

function distanceFromHqInFeet(dropoffBlock){
    return distanceFromHqInBlocks(dropoffBlock) * 264
}

function distanceTravelledInFeet(start,destination){
//return Math.abs(start-destination)*264
if (start > destination){
    return (start-destination) * 264
}else {
    return (destination-start) * 264
}
}

function calculatesFarePrice(start, destination){
const distance = distanceTravelledInFeet(start, destination)
if  (distance < 400){
return 0
}else if (distance > 400 && distance <=2000){
    return .02 * (distance - 400)
}else if (distance > 2000 && distance < 2500){
    return 25 
}else{
    return 'cannot travel that far' 
}
}
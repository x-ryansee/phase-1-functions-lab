// Code your solution in this file!
const headquarters = 42;
const feet = 264;

function distanceFromHqInBlocks (num){

    if (num > 42){
    return num - headquarters;
    }else if (num < 42){
        return headquarters - num;
    }

}

function distanceFromHqInFeet (num){
    return distanceFromHqInBlocks(num) * feet;
    
}

function distanceTravelledInFeet (num){
    return distanceFromHqInBlocks(num) ;
}

function distanceTravelledInFeet (headquarters, num2){
    if (num2 > headquarters){
        return (num2 - headquarters)*feet;

    }else{
    return (headquarters - num2)*feet;
    }
}

function calculatesFarePrice(num, headquarters){
    const distance = Math.abs(num, head) * 264;
    if (distance <= 400) {
        return 0;
    }  else if (distance <= 2000) {
        return (distance - 400) *.02;
    } else if (distance <= 2500) {
        return 25;
    } else if (distance > 2501) {
        return 'cannot travel that far';
    }
}

function calculatesFarePrice(start, destination) {
    if (start-destination <= 400) {
    return 0;
    }  else if (start-destination <= 2000) {
    return (start-destination - 400) *.02;
    } else if (start-destination <= 2500) {
    return 25;
    } else if (start-destination > 2501) {
    return 'cannot travel that far';
    }
}
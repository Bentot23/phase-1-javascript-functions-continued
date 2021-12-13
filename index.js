// code your solution here}!`;
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun('bathe my dog');

function mondayWork(toDo = 'go to the office') {
    return `This Monday, I will ${toDo}.`;
}
mondayWork('work from home');

function wrapAdjective(string = '*') {
    return function(parameter = 'special') {
        return `You are ${string}${parameter}${string}!`
    }
}
wrapAdjective("*")("a hard worker")("*");
wrapAdjective('||')('a dedicated programmer')('||');
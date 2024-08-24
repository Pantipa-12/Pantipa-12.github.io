let list = [];
list = readInput();

function readInput() {
    let number = prompt("Enter an integer (a negative integer to quit):");
    while (isNaN(number)) {
        number = prompt("Enter an integer (a negative integer to quit):");
    }
    
    if (number > 0) {
        list.push(number);
        while (true) {
            number = prompt("Enter an integer (a negative integer to quit):");
            if (number > 0) {
                list.push(number);
            } else {
                break;
            }
        }
    }
    displayStats(list);
};   

function displayStats(li) {
    let beforeListLength = li.length; 
    li = li.map((x) => parseInt(x));

    let sum = beforeListLength > 0 ? li.reduce((accumulator, current) => accumulator + current, 0) : 0;
    let average = beforeListLength > 0 ? (Math.round((sum / li.length) * 100) / 100).toFixed(2) : 0;

    let min = beforeListLength > 0 ? Infinity : 0;
    for(let i = 0; i < li.length; i++) {
        if(li[i] < min) {
            min = li[i];
        }
    }

    let max = beforeListLength > 0 ? -Infinity : 0;
    for(let i = 0; i < li.length; i++) {
        if(li[i] > max) {
            max = li[i];
        }
    }
    
    let check = (beforeListLength > 0) 
        ? `For the list that is ${li.join(", ")}, the average is ${average}, the minimum is ${min}, and the maximum is ${max}.`:
        "For the list that is empty, the average is 0, the minimum is 0, and the maximum is 0.";
    
    alert(check);
}

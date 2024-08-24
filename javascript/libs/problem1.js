let number = prompt("Enter a positive integer");
while (number < 0 || isNaN(number) == true){
    number = prompt("Enter a positive integer")
}

isPrime(number);
showPrime(number);

function isPrime(n) {
    for (let i = 2; i < n; i++){
        if ( n % i == 0) return false;
    }
    return true ;            
}
    
function showPrime(n) {
    var result = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            result.push(i);
        }
    };
    
    for (let i = 2; i < n; i++){
        if (!isPrime(i)) continue;
    };
    alert("for n = " + n + " prime numbers are " + result.toString());
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {

    let totals = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    for (let i = 0; i < arr.length; i++) {
        let filtered = arr.filter(function(value, index, arr) {
            return i !== index;
        });
        totals.push(filtered.reduce(reducer));
    }
    
    console.log(Math.min(...totals) + " " + Math.max(...totals));
}
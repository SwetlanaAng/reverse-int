module.exports = function reverse (n) {
    let ans = '';
    const str = Math.abs(n) + '';
    for (let i = str.length-1; i>=0; i--) {
        ans+=str[i];
    }
    return +ans;
}

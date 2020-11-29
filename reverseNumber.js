var x = -120 // -120 => -21, 4567232 => 0, 32 => 23
var reverse = (x) => {
    if (x < 0) return -1 * reverse(-x);
    const r = parseInt(`${x}`.split('').reverse().join(''), 10);
    if (r > Math.pow(2, 31)-1) return 0;
    return r;
};
console.log(reverse(x));
var S = module.exports = {}

S.sumUpStamps = function (stamps, ia) {
    let [...p] = stamps;
    let sum = 0;
    ia.forEach(function (element) {
        sum += p[element];
    });
    return sum;
}

S.initIA = function (stamps, desired) {
    if (stamps.length == 0) return undefined;
    let [...p] = stamps;
    let b = p[p.length - 1];
    let a = [];
    for (let n = 0; desired > b * n; n++) {
        a.push(p.length - 1);
    }
    return a;
}

S.nextIAstepDown = function (stamps, ia, desired) {
    let [...price] = stamps;
    let [...index] = ia;
    let target = desired;
    let temp = 0;
    temp = index.pop();
    while (S.sumUpStamps(price, index) < target) {
        temp = temp - 1;
        if (temp < 0) break;
        index.push(temp);
    }
    return index;
}

S.findStamp = function (stamps, desired) {
    let [...price] = stamps;
    price.sort();
    let [...index] = S.initIA(price, desired);
    let target = desired;
    let result = [];
    let temp = [];
    while (S.sumUpStamps(price, index) != target) {
        [...temp] = S.nextIAstepDown(price, index, target);
        if (index[index.length - 1] == temp[temp.length - 1]) break;
        [...index] = temp;
    }
    for (let i = 0; i < index.length; i++) {
        result.push(price[index[i]]);
    }
    return result
}

var S = module.exports = {}

S.sumUpStamps = function(stamps, ia) {
    let p = stamps;
    let sum = 0;
    ia.forEach(function(element) {
        sum += p[element];
    }, p);
    return sum;
}

S.initIA = function(stamps, desired) {
    if (stamps.length == 0) return undefined;
    let p = stamps;
    let b = p[p.length - 1];
    let a = []; 
    for(let n = 0; desired > b * n; n++)
    {
            a.push(p.length - 1);
    }
    return a;
}

S.nextIAstepDown = function(stamps, ia, desired) {
    //TODO
}

S.findStamp = function(stamps, desired) {
    stamps.sort()
    var ia = S.initIA(stamps, desired)

    while (S.sumUpStamps(stamps, ia) > desired) {
        ia = S.nextIAstepDown(stamp, ia, desired)
    }

    if(S.sumUpStamps(stamps, ia) !== desired) {
        return
    }

    var ret = []
    for (var i = 0; i < ia.length; i++) {
        ret.push(stamps[ia[i]])
    }
    return ret
}

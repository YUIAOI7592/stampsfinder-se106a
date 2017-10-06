var S = module.exports = {}

S.sumUpStamps = function(stamps, ia) {
    //TODO
}

S.initIA = function(stamps, desired) {
    //TODO
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

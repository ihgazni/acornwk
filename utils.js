const elel = require("elist")

function rfile(fileName){
    s = fs.readFileSync(fileName)
    s = s.toString()
    return(s)
}

Function.prototype.funcName = function() {
    return(this.toString()
               .substr(0, this.toString().indexOf( "(" ))
               .replace("function ", ""))
}

function matFlatLength(mat) {
    let lngth = 0
    for(let i in mat){
        let layer = mat[i]
	lngth = lngth + layer.length
    }
    return(lngth)
}

function matMapV(mat,map_func) {
    let nmat
    for(let i in mat){
        let layer = mat[i]
        layer = elel.mapv(mat,map_func)
	nmat.push(layer)
    }
    return(nmat)
}

module.exports = {
    rfile:rfile,
    matFlatLength:matFlatLength,
    matMapV:matMapV
}

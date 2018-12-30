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


module.exports = {
    rfile:rfile
}

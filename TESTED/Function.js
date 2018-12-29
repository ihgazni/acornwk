var sp = require("shproperty")
var elel = require("elist")
var ac = require("ac")
var wk  = require("acorn-walk")



spec = `interface Function <: Node {
    id: Identifier | null;
    params: [ Pattern ];
    body: FunctionBody;
}`

function _Function(node) {
    return(Array.prototype.concat([node.id],node.params,[node.body]))
}

test = `r = ac.parse("function fn(){}")
node = r.body[0]
_Function(node)`

module.exports = {
    spec:spec,
    test:test,
    _Function:_Function
}





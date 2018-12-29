spec = `interface Program <: Node {
    type: "Program";
    body: [ Directive | Statement ];
}`


function _Program(node) {
    return(node.body)
}

test =`r = ac.parse("var b")
_Program(r)`


module.exports = {
    spec:spec,
    test:test,
    _Program:_Program
}


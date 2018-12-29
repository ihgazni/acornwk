var sp = require("shproperty")
var elel = require("elist")
var acorn = require("acorn")
var walk = require("acorn-walk")
var node = acorn.parse("(r)=>(r+1)")
//tnode
//pbreadth



function isLeaf(node) {
    node.body
    
    node.expression
    node.left
    node.right
    
    node.declarations
    node.id
    
    node.object
}


function getChildren(node) {
}





function creatTreeNode(node,pbreadth) {
    d = {}
    d.node = node
    d.parentBreadth = pbreadth
    return(d)
}



function getDescMat(root) {
    let troot = creatTreeNode(root)
    let unhandled = [troot]
    let mat = []
    while(unhandled.length>0){
        let layer = []
        let nextUnhanlded = []
        for(let i=0;i<unhandled.length;i++) {
            let cond = isLeaf(unhandled[i])
            if(cond){
                
            } else {
                let children = getChildren(node)
                nextUnhanlded = nextUnhanlded.concat(children)
            }
        }
        unhandled = next_unhanlded
    }
    //return(plmat)
}









////

1.SequenceExpression  (a,b)   comma-operator


Node {
  type: 'SequenceExpression',
  start: 1,
  end: 4,
  expressions:
   [ Node { type: 'Identifier', start: 1, end: 2, name: 'a' },
     Node { type: 'Identifier', start: 3, end: 4, name: 'b' } ] }





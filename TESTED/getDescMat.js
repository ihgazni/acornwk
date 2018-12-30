const elel = require("elist")
const gc = require('./children')
const cmmn = require("./common")


function creatTreeNode(node,depth,breadth,pbreadth) {
    d = {}
    d.node = node
    d.depth = depth
    d.breadth = breadth
    d.parentBreadth = pbreadth
    return(d)
}


function isTroot(tnode) {
    return(d.parentBreadth===undefined)
}

function isTleaf(tnode) {
    node = tnode.node
    return(gc.isLeaf(node))
}


function getDescMat(root) {
    let troot = creatTreeNode(root,0,0)
    let unhandled = [troot]
    let mat = []
    while(unhandled.length>0){
        mat.push(unhandled)
        let nextUnhanlded = []
        for(let i=0;i<unhandled.length;i++) {
            let node = unhandled[i].node
            let children = gc.getChildren(node)
            let cond = (children.length === 0)
            if(cond){

            } else {
                let pbreadth = i
		let depth = unhandled[i].depth + 1
		let breadth = nextUnhanlded.length
                children = elel.mapv(children,creatTreeNode,[depth,breadth,pbreadth])
                nextUnhanlded = nextUnhanlded.concat(children)
            }
        }
        unhandled = nextUnhanlded
    }
    return(mat)
}



module.exports = {
    getDescMat:getDescMat,
    isTroot:isTroot,
    isTleaf:isTleaf
}

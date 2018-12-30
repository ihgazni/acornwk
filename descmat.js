const elel = require("elist")
const gc = require('./children')
const cmmn = require("./common")

function isTroot(tnode) {
    return(tnode.parentBreadth===undefined)
}

function isTleaf(tnode) {
    node = tnode.node
    return(gc.isLeaf(node))
}

function getDescMat(root) {
    let troot = cmmn.creatTreeNodeV(root,[],undefined,0,0)
    let unhandled = [troot]
    let mat = []
    while(unhandled.length>0){
        mat.push(unhandled)
        let nextUnhanlded = []
        for(let i=0;i<unhandled.length;i++) {
            let children = gc.getChildren(unhandled[i])
            let cond = (children.length === 0)
            if(cond){

            } else {
                let pbreadth = i
		let depth = unhandled[i].depth + 1
		let breadth = nextUnhanlded.length
                children = elel.mapv(
			       children,
			       (child)=>{
			           child.depth=depth
			           child.breadth=breadth
			           child.pbreadth=pbreadth
				   return(child)
			       })
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
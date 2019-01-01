const elel = require("elist")
const gc = require('./children')
const cmmn = require("./common")
const utils = require("./utils")

function isTroot(tnode) {
    return(tnode.pbreadth===undefined)
}

function isTleaf(tnode) {
    node = tnode.node
    return(gc.isLeaf(node))
}

function getAttribNames(tnode) {
    let names = Object.getOwnPropertyNames(tnode.node)
    let k = cmmn.type2fn(tnode.node.type)
    let arr = gc.KEYS[k]
    arr = Array.prototype.concat(arr,["start","end"])
    names = names.filter((ele)=>!(arr.includes(ele)))
    return(names)
}

function getAttribs(tnode) {
    let d = {}
    let names = getAttribNames(tnode)
    for(var name of names){
        d[name] = tnode.node[name]
    }
    return(d)
}

function rmLayerNodes(mat,which) {
    let layer = mat[which]
    layer.forEach((tnode)=>{delete tnode.node})
    return(mat)
}

function rmPrevLayerNodes(mat) {
    if(mat.length>1){
        mat = rmLayerNodes(mat,mat.length-2)
    } else {
    }
    return(mat)
}

function rmCurrLayerNodes(mat) {
    return(rmLayerNodes(mat,mat.length-1))
}

function getDescMat(root) {
    let troot = cmmn.creatTreeNodeV(root,[],undefined,0,0)
    let unhandled = [troot]
    let mat = []
    while(unhandled.length>0){
        mat.push(unhandled)
	mat = rmPrevLayerNodes(mat)
        let nextUnhanlded = []
        for(let i=0;i<unhandled.length;i++) {
            let children = gc.getChildren(unhandled[i])
            let cond = (children.length === 0)
            if(cond){
                unhandled[i].childlocs = []
            } else {
                let pbreadth = i
		let depth = unhandled[i].depth + 1
		let breadth = nextUnhanlded.length
                children = elel.mapiv(
			       children,
			       (index,child)=>{
			           child.depth=depth
			           child.breadth=breadth + index
			           child.pbreadth=pbreadth
				   return(child)
			       })
		let childlocs = elel.mapv(
			            children,
			            (child) => {
				        return([child.depth,child.breadth])
			            }
		                )
		unhandled[i].childlocs = childlocs
                nextUnhanlded = nextUnhanlded.concat(children)
            }
	    unhandled[i].attribs = getAttribs(unhandled[i])
            unhandled[i].srcloc = [unhandled[i].node.start,unhandled[i].node.end]
        }
        unhandled = nextUnhanlded
    }
    mat = rmCurrLayerNodes(mat)
    return(mat)
}


//
function getAncestors(mat,tnode) {
    let pbreadth = tnode.pbreadth
    let ancestors = []
    let depth = tnode.depth
    if(pbreadth === undefined) {
    } else {
        while(pbreadth !== undefined){
            depth = depth - 1
            tnode = mat[depth][pbreadth]
            ancestors.unshift(tnode)
            pbreadth = tnode.pbreadth
        }
    }
    return(ancestors)
}


//
function getTnodesList(mat,tnode) {
    let ances = getAncestors(mat,tnode)
    ances.push(tnode)
    return(ances)
}

//
//loc [depth,breadth]
//lpl  location-path-list
function getLocPathList(mat,tnode) {
    let ances = getAncestors(mat,tnode)
    lpl = elel.mapv(ances,(ele)=>([ele.depth,ele.breadth]))
    lpl.push([tnode.depth,tnode.breadth])
    return(lpl)
}

//rpl  real-path-list

function getNodeViaRpl(root,rpl) {
    let next = root
    for(let i in rpl) {
        next = next[rpl[i]]
    }
    return(next)
}

//loc location [depth,breadth]

function getTnodeViaLoc(mat,loc) {
    return(mat[loc[0]][loc[1]])
}

//
function getRplLocMapping(mat) {
    let map = new Map()
    for(let i in mat) {
        let layer = mat[i]
        for(let j in layer) {
            let tnode = layer[j]
            let rpl = tnode.rpl
            let loc = [i,j]
            map.set(rpl,loc)
        }
    }
    return(map)
}

//
function getLocRplMapping(mat) {
    let map = new Map()
    for(let i in mat) {
        let layer = mat[i]
        for(let j in layer) {
            let tnode = layer[j]
            let rpl = tnode.rpl
            let loc = [i,j]
            map.set(loc,rpl)
        }
    }
    return(map)
}

//
function getRplWFS(mat) {
    let wfs = []
    for(let i in mat) {
        let layer = mat[i]
        for(let j in layer) {
            let tnode = layer[j]
            let rpl = tnode.rpl
            wfs.push(rpl)
        }
    }
    return(wfs)
}

//
function getLocWFS(mat) {
    let wfs = []
    for(let i in mat) {
        let layer = mat[i]
        for(let j in layer) {
            let loc = [i,j]
            wfs.push(loc)
        }
    }
    return(wfs)
}

//
function isSiblingViaLocs(mat,loc1,loc2) {
    if(loc1 === loc2) {
        return(false)
    } else {
        let pbreadth1 = getTnodeViaLoc(mat,loc1).pbreadth
        let pbreadth2 = getTnodeViaLoc(mat,loc2).pbreadth
        return(pbreadth1===pbreadth2)
    }
}


function getRsibLoc(mat,loc) {
    let [depth,breadth] = loc
    let rsibBreadth = breadth + 1
    let layerLength = mat[depth].length
    if(rsibBreadth>(layerLength-1)) {
        return(undefined)
    } else {
        if(isSiblingViaLocs(mat,loc,[depth,rsibBreadth])) {
            return([depth,rsibBreadth])
        } else {
            return(undefined)
        }
    }
}


function getParentLoc(mat,loc) {
    let tnode = getTnodeViaLoc(mat,loc)
    let pbreadth = tnode.pbreadth
    if(pbreadth === undefined) {
        return(undefined)
    } else {
        return([loc[0]-1,pbreadth])
    }
}

function findFirstAncestorRsibLoc(mat,currLoc) {
    let rsibLoc = getRsibLoc(mat,currLoc)
    while(rsibLoc === undefined) {
        if(currLoc === [0,0]) {
            return(undefined)
        } else {
            let ploc = getParentLoc(mat,currLoc)
            rsibLoc = getRsibLoc(mat,ploc)
            currLoc = ploc
        }
    } 
    return(rsibLoc)
}

function getLocDFS(mat) {
    let dfs = []
    let currLoc = [0,0]
    let count = utils.matFlatLength(mat)
    let visited = 0
    while(visited < count-1){
        dfs.push(currLoc)
        let tnode =  getTnodeViaLoc(mat,currLoc)
        let childlocs = tnode.childlocs
        if(childlocs.length === 0) {
            currLoc = findFirstAncestorRsibLoc(mat,currLoc)
        } else {
            currLoc = childlocs[0]
        }
        visited = visited + 1
    }
    return(dfs)
}


function getSthDFS(mat,k) {
    function mapFunc(loc,mat){
        return(getTnodeViaLoc(mat,loc)[k])
    }
    let dfs = getLocDFS(mat)
    dfs = elel.mapv(dfs,mapFunc,[mat])
    return(dfs)
}

function getRplDFS(mat) {
    return(getSthDFS(mat,'rpl'))
}

function getAttribDFS(mat) {
    return(getSthDFS(mat,'attribs'))
}


//
function getSrcCode(s,tnode){
    return(s.slice(tnode.srcloc[0],tnode.srcloc[1]))
}

function getSrcDFS(mat,s){
    function mapFunc(loc,mat){
	let tnode = getTnodeViaLoc(mat,loc)
        return(getSrcCode(s,tnode))
    }
    let dfs = getLocDFS(mat)
    dfs = elel.mapv(dfs,mapFunc,[mat])
    return(dfs)
}


//



module.exports = {
    getDescMat:getDescMat,
    getAncestors:getAncestors,
    getTnodesList:getTnodesList,
    getLocPathList:getLocPathList,
    getNodeViaRpl:getNodeViaRpl,
    getTnodeViaLoc:getTnodeViaLoc,
    getRplLocMapping:getRplLocMapping,
    getLocRplMapping:getLocRplMapping,
    getRplWFS:getRplWFS,
    getLocWFS:getLocWFS,
    isSiblingViaLocs:isSiblingViaLocs,
    getRsibLoc:getRsibLoc,
    getParentLoc:getParentLoc,
    findFirstAncestorRsibLoc:findFirstAncestorRsibLoc,
    getLocDFS:getLocDFS,
    getSthDFS:getSthDFS,
    getRplDFS:getRplDFS,
    getAttribDFS:getAttribDFS,
    getSrcCode:getSrcCode,
    getSrcDFS:getSrcDFS,
    isTroot:isTroot,
    isTleaf:isTleaf
}

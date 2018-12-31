
function type2fn(t) {
    return("_"+t)
}

function fn2type(fn) {
    return(fn.slice(1))
}

function creatEngineArgs(tnode,...names){
    let node = tnode.node
    let args = []
    for(let i in names){
        args.push({"name":names[i],"value":node[names[i]]})
    }
    return(args)
}

//
//rpl real-path-list
//
function creatTreeNodeV(node,rpl,name,depth,breadth,pbreadth) {
    d = {}
    d.node = node
    d.depth = depth
    d.breadth = breadth
    d.pbreadth = pbreadth
    if(rpl === undefined){
        rpl = []
    } else {
    }
    d.rpl = Array.from(rpl)
    if(name === undefined){

    } else {
        d.rpl.push(name)
    }
    return(d)
}

function creatTreeNodeIV(index,node,rpl,name,depth,breadth,pbreadth) {
    let d = creatTreeNodeV(node,rpl,name,depth,breadth,pbreadth)
    d.rpl.push(index)
    return(d)
}


module.exports = {
    type2fn:type2fn,
    fn2type:fn2type,
    creatEngineArgs:creatEngineArgs,
    creatTreeNodeV:creatTreeNodeV,
    creatTreeNodeIV:creatTreeNodeIV 
}

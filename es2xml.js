const gm = require('./descmat')
const cmmn = require('./common')


function creatAttribStr(attribs) {
    if(attribs===undefined) {
        return("")
    } else {
        let s = ""
        for(let k in attribs) {
            let attrib = k + '=' +'"' + escape(attribs[k]) + '"'
            s = s + attrib +"\x20"
        }
        s = s.slice(0,-1)
        return(s)
    }
}

function creatOpenTagStr(tag,attribs) {
    let as = creatAttribStr(attribs)
    let s = "<"+tag+"\x20" + as
    s = s.trim()
    s = s +">"
    return(s)
}

function creatCloseTagStr(tag) {
    let s = "</"+tag+">"
    return(s)
}

function creatRootStartLine(attribs) {
    return(creatOpenTagStr("root",attribs)+"\n")
}


function handleClose(prev,curr,lines,indentNum,rangeEnd,indentWidth,indentChar) {
    let toclose = elel.diffv(prev,curr,true).reverse()
    for(let tag of toclose) {
        let indent = indentChar.repeat(indentWidth * indentNum)
        let line = indent + creatCloseTagStr(tag) +"\n"
        lines.push(line)
        rangeEnd = rangeEnd + 1
        indentNum = indentNum - 1
    }
    return([prev,curr,lines,indentNum,rangeEnd])
}


function handleOpenOne(tag,lines,indentNum,rangeEnd,indentWidth,indentChar,currAttrib) {
    indentNum = indentNum + 1
    let indent = indentChar.repeat(indentWidth * indentNum)
    let line = indent + creatOpenTagStr(tag,currAttrib) +"\n"
    lines.push(line)
    rangeEnd = rangeEnd + 1
    return([lines,indentNum,rangeEnd])
}

function handleOpen(prev,curr,currAttrib,lines,indentNum,rangeEnd,indentWidth,indentChar){
    let toopen = elel.diffv(curr,prev,true)
    let tag
    for(let i=0;i<toopen.length-1;i++) {
        tag = toopen[i]
        tmp = handleOpenOne(tag,lines,indentNum,rangeEnd,indentWidth,indentChar)
        lines = tmp[0]
        indentNum = tmp[1]
        rangeEnd = tmp[2]
    }

    tag = toopen[toopen.length-1]
    tmp = handleOpenOne(tag,lines,indentNum,rangeEnd,indentWidth,indentChar,currAttrib)
    lines = tmp[0]
    indentNum = tmp[1]
    rangeEnd = tmp[2]
    return([prev,curr,lines,indentNum,rangeEnd])
}


function creatXMLstr(mat,returnRanges) {
    let indentChar = "\x20"
    let indentWidth = 2
    let rdfs = gm.getRplDFS(mat)
    let adfs = gm.getAttribDFS(mat)
    let ranges = []
    let lines = []
    lines.push(creatRootStartLine())
    ranges.push([0,1])
    let prev = rdfs[0]
    let indentNum = 0
    for(let i=1;i<rdfs.length;i++){
        let curr = rdfs[i]
        let currAttrib = adfs[i]
        let rangeStart = lines.length
        let rangeEnd = rangeStart
        let tmp = handleClose(prev,curr,lines,indentNum,rangeEnd,indentWidth,indentChar)
        prev = tmp[0]
        curr = tmp[1]
        lines = tmp[2]
        indentNum = tmp[3]
        rangeEnd = tmp[4]
        tmp = handleOpen(prev,curr,currAttrib,lines,indentNum,rangeEnd,indentWidth,indentChar)
        prev = tmp[0]
        curr = tmp[1]
        lines = tmp[2]
        indentNum = tmp[3]
        rangeEnd = tmp[4]
        ranges.push([rangeStart,rangeEnd])
        prev = curr
    }
    curr = []
    tmp = handleClose(prev,curr,lines,indentNum,rangeEnd,indentWidth,indentChar)
    lines = tmp[2]
    rangeEnd = tmp[4]
    lines.push(creatCloseTagStr("root"))
    ranges[ranges.length-1][1]=rangeEnd+1
    let xmlStr = lines.join("")
    if(returnRanges === undefined){
        return(xmlStr)
    } else {
        return([xmlStr,ranges])
    }
}

function ast2xml(ast) {
    let mat = gm.getDescMat(ast)
    return(creatXMLstr(mat))
}

module.exports = {
    xml:ast2xml
}



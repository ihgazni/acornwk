var sp = require("shproperty")
var elel = require("elist")
var acorn = require("acorn")
var walk = require("acorn-walk")
var ac = require("ac")
var escope = require('escope');

//

var gm = require('./descmat')
var utils = require('./utils')
var cmmn = require('./common')
var gc = require('./children')


s = utils.rfile("../ac/whitespace.js")
r = ac.parse(s)
tr = cmmn.creatTreeNodeV(r.body[0],[ 'body', 0])


mat = gm.getDescMat(r)


tnode = mat[8][0]
ances = gm.getAncestors(mat,tnode)
tnodes = gm.getTNodesList(mat,tnode)

> mat[8][0].rpl
[ 'body',
  5,
  'body',
  'body',
  0,
  'argument',
  'right',
  'right',
  'left',
  'left' ]
> getNodeViaRpl(r,mat[8][0].rpl)
Node { type: 'Identifier', start: 452, end: 456, name: 'code' }


wfs = gm.getRplWFS(mat)


//



d.srcloc = [node.start,node.end]


//

start,end
type 













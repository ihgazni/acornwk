var sp = require("shproperty")
var elel = require("elist")
var ac = require("ac")
var wk  = require("acorn-walk")


spec = `interface Program <: Node {
    type: "Program";
    body: [ Directive | Statement ];
}`


function _Program(node) {
    return(node.body)
}


r = ac.parse("var b")
_Program(r)



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

r = ac.parse("function fn(){}")
node = r.body[0]
_Function(node)



r = ac.parse("var x = function fn(){}")
node = r.body[0].declarations[0].init
_Function(node)


//



r = ac.parse("5===1")
node = r.body[0]

r = ac.parse("if(1){}else if(1){}else{}")
node = r.body[0]
 _IfStatement(node)
 
 
 
 //
 
s = `switch(n)
{
case 1:
  {}
  break;
case 2:
  {}
  break;
default:
  {}
}`

r = ac.parse(s)
node = r.body[0]
_SwitchStatement(node)

s = `switch(n)
{
case 1:
  break;
case 2:
  break;
default:
}`
r = ac.parse(s)
node = r.body[0]
_SwitchStatement(node)

node = node.cases[0]
_SwitchCase(node)


//

s = `var str = "";

loop1:
for (var i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}`

r = ac.parse(s)
node = r.body[1]
_LabeledStatement(node)



node = r.body[1].body.body.body[0].consequent.body[0]
_ContinueStatement(node)




//

s =`var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}`
r = ac.parse(s)
node = r.body[2]
_WithStatement(node)

//
r = ac.parse("function test(){return(6)}")
node = r.body[0].body.body[0]
_ReturnStatement(node)

//
r =ac.parse("let a,b=2")
node = r.body[0]





//

s = `try {
        JSON.parse(text);
    } catch(e) {
        a=0
    } finally {
    }`

r = ac.parse(s)
node = r.body[0].handler
_CatchClause(node)
node = r.body[0]


//

r= ac.parse("x={1:'a',2:'b'}")
node = r.body[0].expression.right.properties[0]
_Property(node)


r = ac.parse("new Array()")
node = r.body[0].expression
_NewExpression(node)


//

r = ac.parse("[head, ...iter, tail]")
node = r.body[0].expression.elements[1]
_SpreadElement(node)


//


s = `function* countAppleSales () {
  var saleList = [3, 7, 5];
  for (var i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}`

r = ac.parse(s)
node = r.body[0].body.body[1].body.body[0].expression
_YieldExpression(node)

//

s = "`Hola ${ a + b } mundo ${ a * b}`"
r = ac.parse(s)
node = r.body[0].expression


//

s = `Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
})`


//
r = ac.parse("a.b=5")
node = r2.body[0].expression.left
_MemberExpression(node)

r3 = ac.parse("a[b]=5")


//

s =`peopleProto.prototype.printPerson = function () {
  console.log(this.name + ',' + this.age)
}`

//


r = ac.parse("function sum(...theArgs) {}")
node = r.body[0].params[0].argument
_RestElement(node)

//

s = '\
let cls = class Poligono {\
  constructor(alto, ancho) {\
    this.alto = alto;\
    this.ancho = ancho;\
  }\
}'

r = ac.parse(s)
node = r.body[0].declarations[0].init.body.body[0]
_MethodDefinition(node)

//
r = ac.parse("obj = {a, ...rest}")
node = r.body[0].expression.right.properties[1]
_SpreadElement(node)

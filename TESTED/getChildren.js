const elel = require("elist")
//
Function.prototype.funcName = function() {
    return(this.toString()
               .substr(0, this.toString().indexOf( "(" ))
               .replace("function ", ""))
}


//rpl real-path-list
//
function creatTreeNodeV(node,rpl,name,depth,breadth,pbreadth) {
    d = {}
    d.node = node
    d.depth = depth
    d.breadth = breadth
    d.parentBreadth = pbreadth
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

function creatEngineArgs(tnode,...names){
    let node = tnode.node
    let args = []
    for(let i in names){
        args.push({"name":names[i],"value":node[names[i]]})
    }
    return(args)
}

function engine(tnode,...names) {
    let rpl = tnode.rpl
    let args = creatEngineArgs(tnode,...names)
    let narr = []
    for(let i in args){
        let v = args[i].value
        let name = args[i].name
        let cond = Array.isArray(v)
        if(cond){
            v = elel.mapiv(v,creatTreeNodeIV,[rpl,name])
            narr = Array.prototype.concat(narr,v)
        } else {
            v = creatTreeNodeV(v,rpl,name)
            narr.push(v)
        }
    }
    return(narr)
}


function type2fn(t) {
    return("_"+t)
}

function fn2type(fn) {
    return(fn.slice(1))
}

const KEYS = {
    _Program:["body"],
    _Function:["id","params","body"],
}

//

function _Program(tnode) {
    return(engine(tnode,...KEYS._Program))
}


_Programs = _Program

//

function _Function(tnode) {
    return(engine(tnode,...KEYS._Function))
}

_FunctionDeclaration = _Function
_FunctionExpression = _Function


//

function _ExpressionStatement(tnode) {
    return([tnode.expression])
}

_ParenthesizedExpression = _ExpressionStatement

function _IfStatement(tnode) {
    return([tnode.test,tnode.consequent,tnode.alternate])
}

function _SwitchStatement(tnode) {
    return(Array.prototype.concat([tnode.discriminant],tnode.cases))
}

function _LabeledStatement(tnode) {
    return([tnode.body,tnode.label])
}

function _ContinueStatement(tnode) {
    return([tnode.label])
}

function _BreakStatement(tnode) {
    return([tnode.label])
}

function _WithStatement(tnode) {
    return([tnode.object,tnode.body])
}

function _BlockStatement(tnode) {
    return(tnode.body)
}

function _EmptyStatement(tnode) {
    return([])
}

function _DebuggerStatement(tnode) {
    return([])
}

function _ReturnStatement(tnode) {
    return([tnode.argument])
}

function _ThrowStatement(tnode) {
    return([tnode.argument])
}

function _TryStatement(tnode) {
    return([tnode.block,tnode.handler,tnode.finalizer])
}

function _DoWhileStatement(tnode) {
    return([tnode.body,tnode.test])
}

function _WhileStatement(tnode) {
    return([tnode.test,tnode.body])
}

function _ForStatement(tnode) {
    return([tnode.init,tnode.test,tnode.update,tnode.body])
}

function _ForOfStatement(tnode) {
    return([tnode.left,tnode.right,tnode.body])
}

function _ForInStatement(tnode) {
    return([tnode.left,tnode.right,tnode.body])
}

function _Statements(tnode) {
    if(tnode.type === "ExpressionStatement") {
        return(_ExpressionStatement(tnode))
    } else if(tnode.type === "IfStatement") {
        return(_IfStatement(tnode))
    } else if(tnode.type === "SwitchStatement") {
        return(_SwitchStatement(tnode))
    } else if(tnode.type === "LabeledStatement") {
        return(_LabeledStatement(tnode))
    } else if(tnode.type === "ContinueStatement(tnode)") {
        return(_ContinueStatement(tnode))
    } else if(tnode.type === "BreakStatement") {
        return(_BreakStatement(tnode))
    } else if(tnode.type === "WithStatement") {
        return(_WithStatement(tnode))
    } else if(tnode.type === "BlockStatement") {
        return(_BlockStatement(tnode))
    } else if(tnode.type === "EmptyStatement") {
        return(_EmptyStatement(tnode))
    } else if(tnode.type === "DebuggerStatement") {
        return(_DebuggerStatement(tnode))
    } else if(tnode.type === "ReturnStatement") {
        return(_ReturnStatement(tnode))
    } else if(tnode.type === "ThrowStatement") {
        return(_ThrowStatement(tnode))
    } else if(tnode.type === "TryStatement") {
        return(_TryStatement(tnode))
    } else if(tnode.type === "DoWhileStatement") {
        return(_DoWhileStatement(tnode))
    } else if(tnode.type === "WhileStatement") {
        return(_WhileStatement(tnode))
    } else if(tnode.type === "ForStatement") {
        return(_ForStatement(tnode))
    } else if(tnode.type === "ForOfStatement") {
        return(_ForOfStatement(tnode))
    } else if(tnode.type === "ForInStatement") {
        return(_ForInStatement(tnode))
    } else if(tnode.type === "") {
    }  else {
    }
}

//

function _ThisExpression(tnode) {
    return([])
}

function _ArrayExpression(tnode) {
    return(tnode.elements)
}

function _ObjectExpression(tnode) {
    return(tnode.properties)
}

function _Property(tnode) {
    return([tnode.key,tnode.value])
}

function _UnaryExpression(tnode) {
    return([tnode.argument])
}

function _UnaryOperator(tnode) {
    return([])
}

function _UpdateExpression(tnode) {
    return([tnode.argument])
}

function _UpdateOperator(tnode) {
    return([])
}

function _BinaryExpression(tnode) {
    return([tnode.left,tnode.right])
}

function _BinaryOperator(tnode) {
    return([])
}

function _AssignmentExpression(tnode) {
    return([tnode.left,tnode.right])
}

function _AssignmentOperator(tnode) {
    return([])
}

function _LogicalExpression(tnode) {
    return([tnode.left,tnode.right])
}

function _LogicalOperator(tnode) {
    return([])
}

function _MemberExpression(tnode) {
    return([tnode.object,tnode.property])
}

function _ConditionalExpression(tnode) {
    return([tnode.test,tnode.alternate,tnode.consequent])
}

function _CallExpression(tnode) {
    return(Array.prototype.concat([tnode.callee],tnode.arguments))
}

function _NewExpression(tnode) {
    return(Array.prototype.concat([tnode.callee],tnode.arguments))
}

function _SequenceExpression(tnode) {
    return(tnode.expressions)
}

function _ArrowFunctionExpression(tnode) {
    return(Array.prototype.concat(tnode.params,[tnode.body]))
}

function _YieldExpression(tnode) {
    return([tnode.argument])
}

function _AwaitExpression(tnode) {
    return([tnode.argument])
}




function _Expressions(tnode) {
    if(tnode.type === "FunctionExpression"){
        return(_FunctionExpression(tnode))
    } else if(tnode.type === "ThisExpression") {
        return(_ThisExpression(tnode))
    } else if(tnode.type === "ArrayExpression") {
        return(_ArrayExpression(tnode))
    } else if(tnode.type === "ObjectExpression") {
        return(_ObjectExpression(tnode))
    } else if(tnode.type === "UnaryExpression") {
        return(_UnaryExpression(tnode))
    } else if(tnode.type === "BinaryExpression") {
        return(_BinaryExpression(tnode))
    }  else if(tnode.type === "AssignmentExpression") {
        return(_AssignmentExpression(tnode))
    }  else if(tnode.type === "LogicalExpression") {
        return(_LogicalExpression(tnode))
    }  else if(tnode.type === "MemberExpression") {
        return(_MemberExpression(tnode))
    }  else if(tnode.type === "ConditionalExpression") {
        return(_ConditionalExpression(tnode))
    }  else if(tnode.type === "CallExpression") {
        return(_CallExpression(tnode))
    }  else if(tnode.type === "NewExpression") {
        return(_NewExpression(tnode))
    }  else if(tnode.type === "SequenceExpression") {
        return(_SequenceExpression(tnode))
    }  else if(tnode.type === "SpreadElement") {
        return(_SpreadElement(tnode))
    }  else if(tnode.type === "ArrowFunctionExpression") {
        return(_ArrowFunctionExpression(tnode))
    }  else if(tnode.type === "YieldExpression") {
        return(_YieldExpression(tnode))
    }  else if(tnode.type === "AwaitExpression") {
        return(_AwaitExpression(tnode))
    }  else if(tnode.type === "ParenthesizedExpression") {
        return(_ParenthesizedExpression(tnode))
    }  else {
    }
}


function _Declarations(tnode) {
    if(tnode.type === "VariableDeclaration") {
        return(_VariableDeclaration(tnode))
    } else if(tnode.type === "FunctionDeclaration") {
    } else {
    }
}

function _VariableDeclaration(tnode) {
    return(tnode.declarations)
}

function _VariableDeclarator(tnode) {
    return([tnode.id,tnode.init])
}


_Directive = _ExpressionStatement


function _FunctionBody(tnode) {
    return(tnode.body)
}

function _SwitchCase(tnode) {
    return(Array.prototype.concat(tnode.consequent,[tnode.test]))
}

function _CatchClause(tnode) {
    return([tnode.param,tnode.body])
}

function _Identifier(tnode) {
    return([])
}

function _Literal(tnode) {
    return([])
}

function _RegExpLiteral(tnode) {
    return([])
}


function _Super(tnode) {
    return([])
}


function _SpreadElement(tnode) {
    return([tnode.argument])
}

function _TemplateLiteral(tnode) {
    return(Array.prototype.concat(tnode.quasis,tnode.expressions))
}

function _TemplateElement(tnode) {
    return([])
}

function _TaggedTemplateExpression(tnode) {
    return([tnode.tag,tnode.quasi])
}



function _ObjectPattern(tnode) {
    return(tnode.properties)
}

function _AssignmentProperty(tnode) {
    return([tnode.value])
}

function _AssignmentPattern(tnode) {
    return([tnode.left,tnode.right])
}

function _ArrayPattern(tnode) {
    return(tnode.elements)
}

function _RestElement(tnode) {
    return([tnode.argument])
}

function _VariablePattern(tnode) {
    return([])
}

_MemberPattern = _MemberExpression



function _Patterns(tnode) {
    if(tnode.type==="ObjectPattern") {
        return(_ObjectPattern(tnode))
    } else if(tnode.type === "AssignmentPattern") {
        return(_AssignmentPattern(tnode))
    } else if(tnode.type === "ArrayPattern") {
        return(_ArrayPattern(tnode))
    } else if(tnode.type === "RestElement") {
        return(_RestElement(tnode))
    } else if(tnode.type === "VariablePattern") {
        return(_VariablePattern(tnode))
    } else if(tnode.type === "MemberPattern") {
        return(_MemberPattern(tnode))
    } else {
    }
}



function _Class(tnode) {
    return([tnode.id,tnode.superClass,tnode.body])
}

function _ClassDeclaration(tnode) {
    return([tnode.id,tnode.superClass,tnode.body])
}

function _ClassBody(tnode) {
    return(tnode.body)
}

function _MethodDefinition(tnode) {
    return([tnode.key,tnode.value])
}

function _ClassExpression(tnode) {
        return([tnode.id,tnode.superClass,tnode.body])
}

function _MetaProperty(tnode) {
    return([tnode.meta,tnode.property])
}


function _ModuleDeclaration(tnode) {
}

function _ModuleSpecifier(tnode) {
}


function _ImportDeclaration(tnode) {
    return(Array.prototype.concat(tnode.specifiers,[tnode.source]))
}


function _ImportSpecifier(tnode) {
    return([tnode.imported])
}

function _ImportDefaultSpecifier(tnode) {
    return([])
}

function _ImportNamespaceSpecifier(tnode) {
    return([])
}

function _ExportSpecifier(tnode) {
    return([tnode.exported])
}

function _ExportDefaultDeclaration(tnode) {
    return([tnode.declaration])
}

function _ExportNamedDeclaration(tnode) {
    return(Array.prototype.concat([tnode.declaration],tnode.specifiers,[tnode.source]))
}

function _ExportAllDeclaration(tnode) {
    return([tnode.source])
}


//



function getChildren(tnode) {
    let type = tnode.type
    let fn = type2fn(type)
    return(this[fn](tnode))
}

function isLeaf(tnode) {
    let children = getChildren(tnode)
    return((children.length === 0))
}

module.exports = {
    _Program:_Program,
    _Programs:_Programs,
    _Function:_Function,
    _FunctionDeclaration:_FunctionDeclaration,
    _FunctionExpression:_FunctionExpression,
    _Statements:_Statements,
    _ExpressionStatement:_ExpressionStatement,
    _ParenthesizedExpression:_ParenthesizedExpression,
    _IfStatement:_IfStatement,
    _SwitchStatement:_SwitchStatement,
    _LabeledStatement:_LabeledStatement,
    _ContinueStatement:_ContinueStatement,
    _BreakStatement:_BreakStatement,
    _WithStatement:_WithStatement,
    _BlockStatement:_BlockStatement,
    _EmptyStatement:_EmptyStatement,
    _DebuggerStatement:_DebuggerStatement,
    _ReturnStatement:_ReturnStatement,
    _ThrowStatement:_ThrowStatement,
    _TryStatement:_TryStatement,
    _DoWhileStatement:_DoWhileStatement,
    _WhileStatement:_WhileStatement,
    _ForStatement:_ForStatement,
    _ForOfStatement:_ForOfStatement,
    _ForInStatement:_ForInStatement,
    _Declarations:_Declarations,
    _VariableDeclaration:_VariableDeclaration,
    _VariableDeclarator:_VariableDeclarator,
    _Directive:_Directive,
    _FunctionBody:_FunctionBody,
    _SwitchCase:_SwitchCase,
    _CatchClause:_CatchClause,
    _Expressions:_Expressions,
    _ObjectExpression:_ObjectExpression,
    _ArrowFunctionExpression:_ArrowFunctionExpression,
    _YieldExpression:_YieldExpression,
    _AwaitExpression:_AwaitExpression,
    _ThisExpression:_ThisExpression,
    _ArrayExpression:_ArrayExpression,
    _Property:_Property,
    _UnaryExpression:_UnaryExpression,
    _UnaryOperator:_UnaryOperator,
    _UpdateExpression:_UpdateExpression,
    _UpdateOperator:_UpdateOperator,
    _BinaryExpression:_BinaryExpression,
    _AssignmentExpression:_AssignmentExpression,
    _LogicalExpression:_LogicalExpression,
    _MemberExpression:_MemberExpression,
    _ConditionalExpression:_ConditionalExpression,
    _CallExpression:_CallExpression,
    _NewExpression:_NewExpression,
    _SequenceExpression:_SequenceExpression,
    _Identifier:_Identifier,
    _Literal:_Literal,
    _RegExpLiteral:_RegExpLiteral,
    _Super:_Super,
    _SpreadElement:_SpreadElement,
    _TemplateLiteral:_TemplateLiteral,
    _TemplateElement:_TemplateElement,
    _TaggedTemplateExpression:_TaggedTemplateExpression,
    _ObjectPattern:_ObjectPattern,
    _AssignmentProperty:_AssignmentProperty,
    _AssignmentPattern:_AssignmentPattern,
    _ArrayPattern:_ArrayPattern,
    _RestElement:_RestElement,
    _Patterns:_Patterns,
    _VariablePattern:_VariablePattern,
    _MemberPattern:_MemberPattern,
    _Class:_Class,
    _ClassDeclaration:_ClassDeclaration,
    _ClassBody:_ClassBody,
    _MethodDefinition:_MethodDefinition,
    _ClassExpression:_ClassExpression,
    _MetaProperty:_MetaProperty,
    _ImportDeclaration:_ImportDeclaration,
    _ImportSpecifier:_ImportSpecifier,
    _ImportDefaultSpecifier:_ImportDefaultSpecifier,
    _ImportNamespaceSpecifier:_ImportNamespaceSpecifier,
    _ExportSpecifier:_ExportSpecifier,
    _ExportDefaultDeclaration:_ExportDefaultDeclaration,
    _ExportNamedDeclaration:_ExportNamedDeclaration,
    _ExportAllDeclaration:_ExportAllDeclaration,
    _BinaryOperator:_BinaryOperator,
    _AssignmentOperator:_AssignmentOperator,
    _LogicalOperator:_LogicalOperator,
    _ModuleDeclaration:_ModuleDeclaration,
    _ModuleSpecifier:_ModuleSpecifier,
    getChildren:getChildren,
    isLeaf:isLeaf
}



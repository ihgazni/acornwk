function _Program(node) {
    return(node.body)
}

_Programs = _Program

function _Function(node) {
    return(Array.prototype.concat([node.id],node.params,[node.body]))
}

_FunctionDeclaration = _Function
_FunctionExpression = _Function


//

function _ExpressionStatement(node) {
    return([node.expression])
}

_ParenthesizedExpression = _ExpressionStatement

function _IfStatement(node) {
    return([node.test,node.consequent,node.alternate])
}

function _SwitchStatement(node) {
    return(Array.prototype.concat([node.discriminant],node.cases))
}

function _LabeledStatement(node) {
    return([node.body,node.label])
}

function _ContinueStatement(node) {
    return([node.label])
}

function _BreakStatement(node) {
    return([node.label])
}

function _WithStatement(node) {
    return([node.object,node.body])
}

function _BlockStatement(node) {
    return(node.body)
}

function _EmptyStatement(node) {
    return([])
}

function _DebuggerStatement(node) {
    return([])
}

function _ReturnStatement(node) {
    return([node.argument])
}

function _ThrowStatement(node) {
    return([node.argument])
}

function _TryStatement(node) {
    return([node.block,node.handler,node.finalizer])
}

function _DoWhileStatement(node) {
    return([node.body,node.test])
}

function _WhileStatement(node) {
    return([node.test,node.body])
}

function _ForStatement(node) {
    return([node.init,node.test,node.update,node.body])
}

function _ForOfStatement(node) {
    return([node.left,node.right,node.body])
}

function _ForInStatement(node) {
    return([node.left,node.right,node.body])
}

function _Statements(node) {
    if(node.type === "ExpressionStatement") {
        return(_ExpressionStatement(node))
    } else if(node.type === "IfStatement") {
        return(_IfStatement(node))
    } else if(node.type === "SwitchStatement") {
        return(_SwitchStatement(node))
    } else if(node.type === "LabeledStatement") {
        return(_LabeledStatement(node))
    } else if(node.type === "ContinueStatement(node)") {
        return(_ContinueStatement(node))
    } else if(node.type === "BreakStatement") {
        return(_BreakStatement(node))
    } else if(node.type === "WithStatement") {
        return(_WithStatement(node))
    } else if(node.type === "BlockStatement") {
        return(_BlockStatement(node))
    } else if(node.type === "EmptyStatement") {
        return(_EmptyStatement(node))
    } else if(node.type === "DebuggerStatement") {
        return(_DebuggerStatement(node))
    } else if(node.type === "ReturnStatement") {
        return(_ReturnStatement(node))
    } else if(node.type === "ThrowStatement") {
        return(_ThrowStatement(node))
    } else if(node.type === "TryStatement") {
        return(_TryStatement(node))
    } else if(node.type === "DoWhileStatement") {
        return(_DoWhileStatement(node))
    } else if(node.type === "WhileStatement") {
        return(_WhileStatement(node))
    } else if(node.type === "ForStatement") {
        return(_ForStatement(node))
    } else if(node.type === "ForOfStatement") {
        return(_ForOfStatement(node))
    } else if(node.type === "ForInStatement") {
        return(_ForInStatement(node))
    } else if(node.type === "") {
    }  else {
    }
}

//

function _ThisExpression(node) {
    return([])
}

function _ArrayExpression(node) {
    return(node.elements)
}

function _ObjectExpression(node) {
    return(node.properties)
}

function _Property(node) {
    return([node.key,node.value])
}

function _UnaryExpression(node) {
    return([node.argument])
}

function _UnaryOperator(node) {
    return([])
}

function _UpdateExpression(node) {
    return([node.argument])
}

function _UpdateOperator(node) {
    return([])
}

function _BinaryExpression(node) {
    return([node.left,node.right])
}

function _BinaryOperator(node) {
    return([])
}

function _AssignmentExpression(node) {
    return([node.left,node.right])
}

function _AssignmentOperator(node) {
    return([])
}

function _LogicalExpression(node) {
    return([node.left,node.right])
}

function _LogicalOperator(node) {
    return([])
}

function _MemberExpression(node) {
    return([node.object,node.property])
}

function _ConditionalExpression(node) {
    return([node.test,node.alternate,node.consequent])
}

function _CallExpression(node) {
    return(Array.prototype.concat([node.callee],node.arguments))
}

function _NewExpression(node) {
    return(Array.prototype.concat([node.callee],node.arguments))
}

function _SequenceExpression(node) {
    return(node.expressions)
}

function _ArrowFunctionExpression(node) {
    return(Array.prototype.concat(node.params,[node.body]))
}

function _YieldExpression(node) {
    return([node.argument])
}

function _AwaitExpression(node) {
    return([node.argument])
}




function _Expressions(node) {
    if(node.type === "FunctionExpression"){
        return(_FunctionExpression(node))
    } else if(node.type === "ThisExpression") {
        return(_ThisExpression(node))
    } else if(node.type === "ArrayExpression") {
        return(_ArrayExpression(node))
    } else if(node.type === "ObjectExpression") {
        return(_ObjectExpression(node))
    } else if(node.type === "UnaryExpression") {
        return(_UnaryExpression(node))
    } else if(node.type === "BinaryExpression") {
        return(_BinaryExpression(node))
    }  else if(node.type === "AssignmentExpression") {
        return(_AssignmentExpression(node))
    }  else if(node.type === "LogicalExpression") {
        return(_LogicalExpression(node))
    }  else if(node.type === "MemberExpression") {
        return(_MemberExpression(node))
    }  else if(node.type === "ConditionalExpression") {
        return(_ConditionalExpression(node))
    }  else if(node.type === "CallExpression") {
        return(_CallExpression(node))
    }  else if(node.type === "NewExpression") {
        return(_NewExpression(node))
    }  else if(node.type === "SequenceExpression") {
        return(_SequenceExpression(node))
    }  else if(node.type === "SpreadElement") {
        return(_SpreadElement(node))
    }  else if(node.type === "ArrowFunctionExpression") {
        return(_ArrowFunctionExpression(node))
    }  else if(node.type === "YieldExpression") {
        return(_YieldExpression(node))
    }  else if(node.type === "AwaitExpression") {
        return(_AwaitExpression(node))
    }  else if(node.type === "ParenthesizedExpression") {
        return(_ParenthesizedExpression(node))
    }  else {
    }
}


function _Declarations(node) {
    if(node.type === "VariableDeclaration") {
        return(_VariableDeclaration(node))
    } else if(node.type === "FunctionDeclaration") {
    } else {
    }
}

function _VariableDeclaration(node) {
    return(node.declarations)
}

function _VariableDeclarator(node) {
    return([node.id,node.init])
}


_Directive = _ExpressionStatement


function _FunctionBody(node) {
    return(node.body)
}

function _SwitchCase(node) {
    return(Array.prototype.concat(node.consequent,[node.test]))
}

function _CatchClause(node) {
    return([node.param,node.body])
}

function _Identifier(node) {
    return([])
}

function _Literal(node) {
    return([])
}

function _RegExpLiteral(node) {
    return([])
}


function _Super(node) {
    return([])
}


function _SpreadElement(node) {
    return([node.argument])
}

function _TemplateLiteral(node) {
    return(Array.prototype.concat(node.quasis,node.expressions))
}

function _TemplateElement(node) {
    return([])
}

function _TaggedTemplateExpression(node) {
    return([node.tag,node.quasi])
}



function _ObjectPattern(node) {
    return(node.properties)
}

function _AssignmentProperty(node) {
    return([node.value])
}

function _AssignmentPattern(node) {
    return([node.left,node.right])
}

function _ArrayPattern(node) {
    return(node.elements)
}

function _RestElement(node) {
    return([node.argument])
}

function _VariablePattern(node) {
    return([])
}

_MemberPattern = _MemberExpression



function _Patterns(node) {
    if(node.type==="ObjectPattern") {
        return(_ObjectPattern(node))
    } else if(node.type === "AssignmentPattern") {
        return(_AssignmentPattern(node))
    } else if(node.type === "ArrayPattern") {
        return(_ArrayPattern(node))
    } else if(node.type === "RestElement") {
        return(_RestElement(node))
    } else if(node.type === "VariablePattern") {
        return(_VariablePattern(node))
    } else if(node.type === "MemberPattern") {
        return(_MemberPattern(node))
    } else {
    }
}



function _Class(node) {
    return([node.id,node.superClass,node.body])
}

function _ClassDeclaration(node) {
    return([node.id,node.superClass,node.body])
}

function _ClassBody(node) {
    return(node.body)
}

function _MethodDefinition(node) {
    return([node.key,node.value])
}

function _ClassExpression(node) {
        return([node.id,node.superClass,node.body])
}

function _MetaProperty(node) {
    return([node.meta,node.property])
}


function _ModuleDeclaration(node) {
}

function _ModuleSpecifier(node) {
}


function _ImportDeclaration(node) {
    return(Array.prototype.concat(node.specifiers,[node.source]))
}


function _ImportSpecifier(node) {
    return([node.imported])
}

function _ImportDefaultSpecifier(node) {
    return([])
}

function _ImportNamespaceSpecifier(node) {
    return([])
}

function _ExportSpecifier(node) {
    return([node.exported])
}

function _ExportDefaultDeclaration(node) {
    return([node.declaration])
}

function _ExportNamedDeclaration(node) {
    return(Array.prototype.concat([node.declaration],node.specifiers,[node.source]))
}

function _ExportAllDeclaration(node) {
    return([node.source])
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
    _ExportAllDeclaration:_ExportAllDeclaration
}

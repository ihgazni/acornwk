function addQuote(each){
    [s1,s2] = each.split(":")
    s2 = s2.slice(1,-1)
    arr = s2.split(",")
    arr = arr.map((ele)=>('"'+ele+'"'))
    s2 = arr.join(",")
    s2 = '['+s2+']'
    s = s1 +":"+s2
    return(s)
}


arr = [ '_ExpressionStatement:[expression]',
  '_IfStatement:[test,consequent,alternate]',
  '_SwitchStatement:[discriminant,cases]',
  '_LabeledStatement:[body,label]',
  '_ContinueStatement:[label]',
  '_BreakStatement:[label]',
  '_WithStatement:[object,body]',
  '_BlockStatement:[body]',
  '_EmptyStatement:[]',
  '_DebuggerStatement:[]',
  '_ReturnStatement:[argument]',
  '_ThrowStatement:[argument]',
  '_TryStatement:[block,handler,finalizer]',
  '_DoWhileStatement:[body,test]',
  '_WhileStatement:[test,body]',
  '_ForStatement:[init,test,update,body]',
  '_ForOfStatement:[left,right,body]',
  '_ForInStatement:[left,right,body]',
  '_ThisExpression:[]',
  '_ArrayExpression:[elements]',
  '_ObjectExpression:[properties]',
  '_Property:[key,value]',
  '_UnaryExpression:[argument]',
  '_UnaryOperator:[]',
  '_UpdateExpression:[argument]',
  '_UpdateOperator:[]',
  '_BinaryExpression:[left,right]',
  '_BinaryOperator:[]',
  '_AssignmentExpression:[left,right]',
  '_AssignmentOperator:[]',
  '_LogicalExpression:[left,right]',
  '_LogicalOperator:[]',
  '_MemberExpression:[object,property]',
  '_ConditionalExpression:[test,alternate,consequent]',
  '_CallExpression:[callee,arguments]',
  '_NewExpression:[callee,arguments]',
  '_SequenceExpression:[expressions]',
  '_ArrowFunctionExpression:[params,body]',
  '_YieldExpression:[argument]',
  '_AwaitExpression:[argument]',
  '_VariableDeclaration:[declarations]',
  '_VariableDeclarator:[id,init]',
  '_FunctionBody:[body]',
  '_SwitchCase:[consequent,test]',
  '_CatchClause:[param,body]',
  '_Identifier:[]',
  '_Literal:[]',
  '_RegExpLiteral:[]',
  '_Super:[]',
  '_SpreadElement:[argument]',
  '_TemplateLiteral:[quasis,expressions]',
  '_TemplateElement:[]',
  '_TaggedTemplateExpression:[tag,quasi]',
  '_ObjectPattern:[properties]',
  '_AssignmentProperty:[value]',
  '_AssignmentPattern:[left,right]',
  '_ArrayPattern:[elements]',
  '_RestElement:[argument]',
  '_VariablePattern:[]',
  '_Class:[id,superClass,body]',
  '_ClassDeclaration:[id,superClass,body]',
  '_ClassBody:[body]',
  '_MethodDefinition:[key,value]',
  '_ClassExpression:[id,superClass,body]',
  '_MetaProperty:[meta,property]',
  '_ModuleDeclaration:',
  '_ModuleSpecifier:',
  '_ImportDeclaration:[specifiers,source]',
  '_ImportSpecifier:[imported]',
  '_ImportDefaultSpecifier:[]',
  '_ImportNamespaceSpecifier:[]',
  '_ExportSpecifier:[exported]',
  '_ExportDefaultDeclaration:[declaration]',
  '_ExportNamedDeclaration:[declaration,specifiers,source]',
  '_ExportAllDeclaration:[source]' ]
  
  
arr2= arr.map(addQuote)
s = arr2.join(",\n    ")



















function creatChildFuncs(KEYS){
    arr = []
    for(var k in KEYS){
        s = `    ${k} : function(tnode){return(engine(tnode,...KEYS.${k}))}`
        arr.push(s)
    }
    return(arr.join(",\n"))
}



var KEYS = {
    _Program:["body"],
    _Function:["id","params","body"],
    _ExpressionStatement:["expression"],
    _IfStatement:["test","consequent","alternate"],
    _SwitchStatement:["discriminant","cases"],
    _LabeledStatement:["body","label"],
    _ContinueStatement:["label"],
    _BreakStatement:["label"],
    _WithStatement:["object","body"],
    _BlockStatement:["body"],
    _EmptyStatement:[""],
    _DebuggerStatement:[""],
    _ReturnStatement:["argument"],
    _ThrowStatement:["argument"],
    _TryStatement:["block","handler","finalizer"],
    _DoWhileStatement:["body","test"],
    _WhileStatement:["test","body"],
    _ForStatement:["init","test","update","body"],
    _ForOfStatement:["left","right","body"],
    _ForInStatement:["left","right","body"],
    _ThisExpression:[""],
    _ArrayExpression:["elements"],
    _ObjectExpression:["properties"],
    _Property:["key","value"],
    _UnaryExpression:["argument"],
    _UnaryOperator:[""],
    _UpdateExpression:["argument"],
    _UpdateOperator:[""],
    _BinaryExpression:["left","right"],
    _BinaryOperator:[""],
    _AssignmentExpression:["left","right"],
    _AssignmentOperator:[""],
    _LogicalExpression:["left","right"],
    _LogicalOperator:[""],
    _MemberExpression:["object","property"],
    _ConditionalExpression:["test","alternate","consequent"],
    _CallExpression:["callee","arguments"],
    _NewExpression:["callee","arguments"],
    _SequenceExpression:["expressions"],
    _ArrowFunctionExpression:["params","body"],
    _YieldExpression:["argument"],
    _AwaitExpression:["argument"],
    _VariableDeclaration:["declarations"],
    _VariableDeclarator:["id","init"],
    _FunctionBody:["body"],
    _SwitchCase:["consequent","test"],
    _CatchClause:["param","body"],
    _Identifier:[""],
    _Literal:[""],
    _RegExpLiteral:[""],
    _Super:[""],
    _SpreadElement:["argument"],
    _TemplateLiteral:["quasis","expressions"],
    _TemplateElement:[""],
    _TaggedTemplateExpression:["tag","quasi"],
    _ObjectPattern:["properties"],
    _AssignmentProperty:["value"],
    _AssignmentPattern:["left","right"],
    _ArrayPattern:["elements"],
    _RestElement:["argument"],
    _VariablePattern:[""],
    _Class:["id","superClass","body"],
    _ClassDeclaration:["id","superClass","body"],
    _ClassBody:["body"],
    _MethodDefinition:["key","value"],
    _ClassExpression:["id","superClass","body"],
    _MetaProperty:["meta","property"],
    _ModuleDeclaration:[""],
    _ModuleSpecifier:[""],
    _ImportDeclaration:["specifiers","source"],
    _ImportSpecifier:["imported"],
    _ImportDefaultSpecifier:[""],
    _ImportNamespaceSpecifier:[""],
    _ExportSpecifier:["exported"],
    _ExportDefaultDeclaration:["declaration"],
    _ExportNamedDeclaration:["declaration","specifiers","source"],
    _ExportAllDeclaration:["source"]
}



s = creatChildFuncs(KEYS)


FUNCS = {
    _Program : function(tnode){return(engine(tnode,...KEYS._Program))},
    _Function : function(tnode){return(engine(tnode,...KEYS._Function))},
    _ExpressionStatement : function(tnode){return(engine(tnode,...KEYS._ExpressionStatement))},
    _IfStatement : function(tnode){return(engine(tnode,...KEYS._IfStatement))},
    _SwitchStatement : function(tnode){return(engine(tnode,...KEYS._SwitchStatement))},
    _LabeledStatement : function(tnode){return(engine(tnode,...KEYS._LabeledStatement))},
    _ContinueStatement : function(tnode){return(engine(tnode,...KEYS._ContinueStatement))},
    _BreakStatement : function(tnode){return(engine(tnode,...KEYS._BreakStatement))},
    _WithStatement : function(tnode){return(engine(tnode,...KEYS._WithStatement))},
    _BlockStatement : function(tnode){return(engine(tnode,...KEYS._BlockStatement))},
    _EmptyStatement : function(tnode){return(engine(tnode,...KEYS._EmptyStatement))},
    _DebuggerStatement : function(tnode){return(engine(tnode,...KEYS._DebuggerStatement))},
    _ReturnStatement : function(tnode){return(engine(tnode,...KEYS._ReturnStatement))},
    _ThrowStatement : function(tnode){return(engine(tnode,...KEYS._ThrowStatement))},
    _TryStatement : function(tnode){return(engine(tnode,...KEYS._TryStatement))},
    _DoWhileStatement : function(tnode){return(engine(tnode,...KEYS._DoWhileStatement))},
    _WhileStatement : function(tnode){return(engine(tnode,...KEYS._WhileStatement))},
    _ForStatement : function(tnode){return(engine(tnode,...KEYS._ForStatement))},
    _ForOfStatement : function(tnode){return(engine(tnode,...KEYS._ForOfStatement))},
    _ForInStatement : function(tnode){return(engine(tnode,...KEYS._ForInStatement))},
    _ThisExpression : function(tnode){return(engine(tnode,...KEYS._ThisExpression))},
    _ArrayExpression : function(tnode){return(engine(tnode,...KEYS._ArrayExpression))},
    _ObjectExpression : function(tnode){return(engine(tnode,...KEYS._ObjectExpression))},
    _Property : function(tnode){return(engine(tnode,...KEYS._Property))},
    _UnaryExpression : function(tnode){return(engine(tnode,...KEYS._UnaryExpression))},
    _UnaryOperator : function(tnode){return(engine(tnode,...KEYS._UnaryOperator))},
    _UpdateExpression : function(tnode){return(engine(tnode,...KEYS._UpdateExpression))},
    _UpdateOperator : function(tnode){return(engine(tnode,...KEYS._UpdateOperator))},
    _BinaryExpression : function(tnode){return(engine(tnode,...KEYS._BinaryExpression))},
    _BinaryOperator : function(tnode){return(engine(tnode,...KEYS._BinaryOperator))},
    _AssignmentExpression : function(tnode){return(engine(tnode,...KEYS._AssignmentExpression))},
    _AssignmentOperator : function(tnode){return(engine(tnode,...KEYS._AssignmentOperator))},
    _LogicalExpression : function(tnode){return(engine(tnode,...KEYS._LogicalExpression))},
    _LogicalOperator : function(tnode){return(engine(tnode,...KEYS._LogicalOperator))},
    _MemberExpression : function(tnode){return(engine(tnode,...KEYS._MemberExpression))},
    _ConditionalExpression : function(tnode){return(engine(tnode,...KEYS._ConditionalExpression))},
    _CallExpression : function(tnode){return(engine(tnode,...KEYS._CallExpression))},
    _NewExpression : function(tnode){return(engine(tnode,...KEYS._NewExpression))},
    _SequenceExpression : function(tnode){return(engine(tnode,...KEYS._SequenceExpression))},
    _ArrowFunctionExpression : function(tnode){return(engine(tnode,...KEYS._ArrowFunctionExpression))},
    _YieldExpression : function(tnode){return(engine(tnode,...KEYS._YieldExpression))},
    _AwaitExpression : function(tnode){return(engine(tnode,...KEYS._AwaitExpression))},
    _VariableDeclaration : function(tnode){return(engine(tnode,...KEYS._VariableDeclaration))},
    _VariableDeclarator : function(tnode){return(engine(tnode,...KEYS._VariableDeclarator))},
    _FunctionBody : function(tnode){return(engine(tnode,...KEYS._FunctionBody))},
    _SwitchCase : function(tnode){return(engine(tnode,...KEYS._SwitchCase))},
    _CatchClause : function(tnode){return(engine(tnode,...KEYS._CatchClause))},
    _Identifier : function(tnode){return(engine(tnode,...KEYS._Identifier))},
    _Literal : function(tnode){return(engine(tnode,...KEYS._Literal))},
    _RegExpLiteral : function(tnode){return(engine(tnode,...KEYS._RegExpLiteral))},
    _Super : function(tnode){return(engine(tnode,...KEYS._Super))},
    _SpreadElement : function(tnode){return(engine(tnode,...KEYS._SpreadElement))},
    _TemplateLiteral : function(tnode){return(engine(tnode,...KEYS._TemplateLiteral))},
    _TemplateElement : function(tnode){return(engine(tnode,...KEYS._TemplateElement))},
    _TaggedTemplateExpression : function(tnode){return(engine(tnode,...KEYS._TaggedTemplateExpression))},
    _ObjectPattern : function(tnode){return(engine(tnode,...KEYS._ObjectPattern))},
    _AssignmentProperty : function(tnode){return(engine(tnode,...KEYS._AssignmentProperty))},
    _AssignmentPattern : function(tnode){return(engine(tnode,...KEYS._AssignmentPattern))},
    _ArrayPattern : function(tnode){return(engine(tnode,...KEYS._ArrayPattern))},
    _RestElement : function(tnode){return(engine(tnode,...KEYS._RestElement))},
    _VariablePattern : function(tnode){return(engine(tnode,...KEYS._VariablePattern))},
    _Class : function(tnode){return(engine(tnode,...KEYS._Class))},
    _ClassDeclaration : function(tnode){return(engine(tnode,...KEYS._ClassDeclaration))},
    _ClassBody : function(tnode){return(engine(tnode,...KEYS._ClassBody))},
    _MethodDefinition : function(tnode){return(engine(tnode,...KEYS._MethodDefinition))},
    _ClassExpression : function(tnode){return(engine(tnode,...KEYS._ClassExpression))},
    _MetaProperty : function(tnode){return(engine(tnode,...KEYS._MetaProperty))},
    _ModuleDeclaration : function(tnode){return(engine(tnode,...KEYS._ModuleDeclaration))},
    _ModuleSpecifier : function(tnode){return(engine(tnode,...KEYS._ModuleSpecifier))},
    _ImportDeclaration : function(tnode){return(engine(tnode,...KEYS._ImportDeclaration))},
    _ImportSpecifier : function(tnode){return(engine(tnode,...KEYS._ImportSpecifier))},
    _ImportDefaultSpecifier : function(tnode){return(engine(tnode,...KEYS._ImportDefaultSpecifier))},
    _ImportNamespaceSpecifier : function(tnode){return(engine(tnode,...KEYS._ImportNamespaceSpecifier))},
    _ExportSpecifier : function(tnode){return(engine(tnode,...KEYS._ExportSpecifier))},
    _ExportDefaultDeclaration : function(tnode){return(engine(tnode,...KEYS._ExportDefaultDeclaration))},
    _ExportNamedDeclaration : function(tnode){return(engine(tnode,...KEYS._ExportNamedDeclaration))},
    _ExportAllDeclaration : function(tnode){return(engine(tnode,...KEYS._ExportAllDeclaration))}
}




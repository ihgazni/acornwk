import elist.elist as elel

arr = [ 'BlockStatement',
  'Program',
  'Statement',
  'EmptyStatement',
  'ParenthesizedExpression',
  'ExpressionStatement',
  'IfStatement',
  'LabeledStatement',
  'ContinueStatement',
  'BreakStatement',
  'WithStatement',
  'SwitchStatement',
  'SwitchCase',
  'AwaitExpression',
  'YieldExpression',
  'ReturnStatement',
  'SpreadElement',
  'ThrowStatement',
  'TryStatement',
  'CatchClause',
  'DoWhileStatement',
  'WhileStatement',
  'ForStatement',
  'ForOfStatement',
  'ForInStatement',
  'ForInit',
  'DebuggerStatement',
  'FunctionDeclaration',
  'VariableDeclaration',
  'VariableDeclarator',
  'Function',
  'Pattern',
  'VariablePattern',
  'MemberPattern',
  'RestElement',
  'ArrayPattern',
  'ObjectPattern',
  'Expression',
  'MetaProperty',
  'Super',
  'ThisExpression',
  'ArrayExpression',
  'ObjectExpression',
  'ArrowFunctionExpression',
  'FunctionExpression',
  'SequenceExpression',
  'TemplateLiteral',
  'TemplateElement',
  'UpdateExpression',
  'UnaryExpression',
  'LogicalExpression',
  'BinaryExpression',
  'AssignmentPattern',
  'AssignmentExpression',
  'ConditionalExpression',
  'CallExpression',
  'NewExpression',
  'MemberExpression',
  'ExportDefaultDeclaration',
  'ExportNamedDeclaration',
  'ExportAllDeclaration',
  'ImportDeclaration',
  'Literal',
  'Identifier',
  'ImportNamespaceSpecifier',
  'ImportDefaultSpecifier',
  'ImportSpecifier',
  'TaggedTemplateExpression',
  'ClassExpression',
  'ClassDeclaration',
  'Class',
  'ClassBody',
  'Property',
  'MethodDefinition' ]

  
def map_func(ele):
    ele = ele[0].lower() + ele[1:]
    tem = '''function @(node) {
        return(node.)
    }
    '''
    return(tem.replace('@',ele))


arr2 = elel.mapv(arr,map_func)

s = elel.join(arr2,"\n")



s ='''var str = "";
loop1:
for (var i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}'''


s ='var str = "";\
loop1:\
for (var i = 0; i < 5; i++) {\
  if (i === 1) {\
    continue loop1;\
  }\
  str = str + i;\
}'


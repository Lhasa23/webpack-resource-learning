import { parse } from '@babel/parser'
import * as babel from '@babel/core'

const code = `let a = 'let'; let b = 2, d = 3; const c = 'c'`
const ast = parse(code, { sourceType: 'module' })
const result = babel.transformFromAstSync(ast, code, {
	presets: ['@babel/preset-env']
})
console.log(result.code)
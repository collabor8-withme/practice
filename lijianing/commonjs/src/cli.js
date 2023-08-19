#!/usr/bin/env node

const printVersion = require('./printVersion')
const printDesc = require('./printDesc')
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

if (args._[0] === 'create') {
  const Name = args._[1]
  console.log(`创建了${Name}项目`)

  if (args.version) {
    printVersion(args.version)
  }

  if (args.desc) {
    printDesc(args.desc)
  }
} else {
  console.log('参数错误！')
}

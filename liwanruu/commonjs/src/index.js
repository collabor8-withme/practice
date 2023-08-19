#!/usr/bin/env node
const printDesc = require('./printDesc.js');
const printVersion = require('./printVersion.js');

var args = require('minimist')(process.argv.slice(2));

if(args._[0] === "create") {
    console.log(`创建了${args._[1]}项目`)
    if(args.version) {
        printVersion(args.version)
    }

    if(args.desc) {
        printDesc(args.desc)
    }

} else {
    console.log("参数错误！")
}
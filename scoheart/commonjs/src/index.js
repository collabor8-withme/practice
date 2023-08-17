#!/usr/bin/env node

const printDesc = require('./printDesc.js');
const printVersion = require('./printVersion.js');

var argv = require("minimist")(process.argv.slice(2))

console.log(argv._[1])

if(argv._[0] === "create") {
    console.log(`创建了${argv._[1]}项目`)

    if(argv.version) {
        printVersion(argv.version)
    }

    if(argv.desc) {
        printDesc(argv.desc)
    }

} else {
    console.log("❌参数错误！")
}
#!/usr/bin/env node
import printDesc from "./printDesc.js";
import printVersion from "./printVersion.js";
import minimist from 'minimist';

var args = minimist(process.argv.slice(2))
if(args._[0] === "create") {
    console.log(`创建了${args._[1]}项目`);
    if(args.version) {
        printVersion(args.version)
    }

    if(args.desc) {
        printDesc(args.desc)
    }

} else {
    console.log("参数错误！")
}
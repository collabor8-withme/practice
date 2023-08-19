'use strict';

var minimist = require('minimist');

function printDesc(desc) {
    console.log(desc);
}

function printVersion(version) {
    console.log(`项目的版本是${version}`);
}

var args = minimist(process.argv.slice(2));
if(args._[0] === "create") {
    console.log(`创建了${args._[1]}项目`);
    if(args.version) {
        printVersion(args.version);
    }

    if(args.desc) {
        printDesc(args.desc);
    }

} else {
    console.log("参数错误！");
}

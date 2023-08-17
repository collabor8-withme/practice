#!/usr/bin/env node

// -------------------- 导入Desc模块----------------------------
// No.1 named import 命名导入
// import {printDesc} from './printDesc.js'

// No.2 default import 默认导入
import printDesc from './printDesc.js';

// No.3 module import 整体导入
// import * as Module from './printDesc.js';
// ----------------------------------------------------



// ----------------------导入Version模块------------------------
// No.1 named import 命名导入
// import {printVersion} from './printVersion.js';

// No.2 default import 默认导入
import printVersion from './printVersion.js';

// No.3 module import 整体导入
// import * as Module from './printVersion.js';
// ----------------------------------------------------


import minimist from 'minimist';
var argv = minimist(process.argv.slice(2))

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
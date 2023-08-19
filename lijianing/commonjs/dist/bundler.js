var $9Vjlj$process = require("process");
var $9Vjlj$minimist = require("minimist");


var $5426555c70e427f1$exports = {};
$5426555c70e427f1$exports = function(version) {
    console.log(`项目的版本是${version}`);
};


var $2fc89c183f938c33$exports = {};
$2fc89c183f938c33$exports = function(desc) {
    console.log(desc);
};



const $236c0c0a02a7c423$var$args = $9Vjlj$minimist($9Vjlj$process.argv.slice(2));
if ($236c0c0a02a7c423$var$args._[0] === "create") {
    const Name = $236c0c0a02a7c423$var$args._[1];
    console.log(`创建了${Name}项目`);
    if ($236c0c0a02a7c423$var$args.version) $5426555c70e427f1$exports($236c0c0a02a7c423$var$args.version);
    if ($236c0c0a02a7c423$var$args.desc) $2fc89c183f938c33$exports($236c0c0a02a7c423$var$args.desc);
} else console.log("参数错误！");


//# sourceMappingURL=bundler.js.map

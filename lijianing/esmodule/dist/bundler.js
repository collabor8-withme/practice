import {argv as $fH8M6$argv} from "process";
import $fH8M6$minimist from "minimist";

function $f63ed19e879fbcf5$export$2e2bcd8739ae039(version) {
    console.log(`项目的版本是${version}`);
}


function $94f3d039ede0f3ef$export$2e2bcd8739ae039(desc) {
    console.log(desc);
}




const $ae32973662b955bd$var$args = (0, $fH8M6$minimist)($fH8M6$argv.slice(2));
if ($ae32973662b955bd$var$args._[0] === "create") {
    const Name = $ae32973662b955bd$var$args._[1];
    console.log(`创建了${Name}项目`);
    if ($ae32973662b955bd$var$args.version) (0, $f63ed19e879fbcf5$export$2e2bcd8739ae039)($ae32973662b955bd$var$args.version);
    if ($ae32973662b955bd$var$args.desc) (0, $94f3d039ede0f3ef$export$2e2bcd8739ae039)($ae32973662b955bd$var$args.desc);
} else console.log("参数错误！");


//# sourceMappingURL=bundler.js.map

function printVersion(version) {
    console.log(`项目的版本是${version}`)

}

// No.1
// module.exports = {
//     printVersion: printVersion
// }

// No.2
module.exports = printVersion

// No.3
// exports.printVersion = printVersion
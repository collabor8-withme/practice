function printDesc(desc) {
    console.log(desc)
}

// No.1
// module.exports = {
//     printDesc: printDesc
// }

// No.2
module.exports = printDesc

// No.3
// exports.printDesc = printDesc
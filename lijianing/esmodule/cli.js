import printVersion from "./printVersion.js";
import printDesc from "./printDesc.js";

const args = process.argv.slice(2);

if (args[0] === 'create') {
    const projectName = args[1];
    console.log(`创建了${projectName}项目`);
  
    for (let i = 2; i < args.length; i++) {
      if (args[i] === '--version') {
        printVersion(args[i + 1]);
      }
  
      if (args[i] === '--desc') {
        printDesc(args[i + 1]);
      }
    }
  }
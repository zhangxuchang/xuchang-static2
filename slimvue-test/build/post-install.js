require('./check-versions')();
const fs = require('fs-extra');
const resolveConfig = require('./resolve.conf');

let inHomeDir = !(fs.pathExistsSync(resolveConfig.resolve('../../node_modules')));
let resolves = {};

if (inHomeDir) {
    console.log("Will update self resolve dependency file ...");
    depFilePath = resolveConfig.resolve('build/resolve-deps/' + resolveConfig.projectName + '.json');
    resolves[resolveConfig.projectName] = resolveConfig.projectName;
    resolves.assets = resolveConfig.projectName + "/assets";
}
else {
    let transformToRequireFilePath = resolveConfig.resolve('config/transform-settings.json');
    if (fs.existsSync(transformToRequireFilePath)) {
        console.log("Will generate transform to require file ...");
        let targetTransformToRequireFilePath = resolveConfig.resolve('../../build/custom-transform-to-require-settings/' + resolveConfig.projectName + '.json');
        fs.copySync(transformToRequireFilePath, targetTransformToRequireFilePath);
        console.log("Custom transform to require file copied");
    }
    
    console.log("Will generate resolve dependency file ...");
    depFilePath = resolveConfig.resolve('../../build/resolve-deps/' + resolveConfig.projectName + '.json');
    resolves[resolveConfig.projectName + '$'] = "node_modules/" + resolveConfig.projectName + "/" + resolveConfig.projectName + "/publish.js";
    resolves[resolveConfig.projectName] = "node_modules/" + resolveConfig.projectName + "/" + resolveConfig.projectName;
    
    console.log("Will generate copy-file-setting file ...");
    settingFilePath = resolveConfig.resolve('../../build/copy-file-settings/' + resolveConfig.projectName + '.json');
    fs.outputJsonSync(
        settingFilePath,
        {
            module  : resolveConfig.projectName,
            from    : "dist",
            ignores : [".*"],
        },
        {spaces : 4}
    );
}

fs.outputJsonSync(
    depFilePath,
    resolves,
    {spaces : 4}
);
console.log("Resolve dependency file updated for " + resolveConfig.projectName);

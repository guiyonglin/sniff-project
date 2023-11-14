
const path = require('path');

const getExtractConfig = () => {
    const extractConfig = require('./src/i18n/locales/extractConfig.json');
    const { common, pages } = extractConfig;

    const wrapConfig = (conf) => {
        return conf.map((item) => {
            return {
                ...item,
                relativePath: item.path,
                path: path.join(__dirname, item.path)
            };
        });
    };
    return {
        pages: wrapConfig(pages),
        common: wrapConfig(common)
    };
};
module.exports = {
    extractConfig: getExtractConfig(),
    isGeneratorJSON: true,
    isHandleFile: () => {
        return true;
    },
    locales: ['ja_JP','en_GB'],
    generatorStaticDirName: `${path.join(__dirname, './src/i18n/locales')}`,
    isModifySourceCode: true
};

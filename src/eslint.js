import loader from './loader';
import util from './util';

export default function (filepath) {
    let config = util.getConfig();

    if (config.eslint) {
        const compiler = loader.load('wepy-eslint');

        if (!compiler) {
            util.warning('未安装wepy-eslint，执行npm install wepy-eslint --save-dev 或者在wekit.config.js中关闭eslint选项');
            return;
        }
        // 使用 eslint
        const esConfig = Object.assign({
            useEslintrc: true,
            extensions: ['.js', config.wpyExt || '.wpy']
        }, config.eslint === true ? {} : config.eslint);
        compiler(esConfig, filepath);
    }
};

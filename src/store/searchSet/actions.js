import types from './types';

export default {
    [types.searchInfo]({
        commit
    }, val) {
        commit(types.searchInfo, val);
    },
    [types.fieldOptions]({
        commit
    }, val) {
        commit(types.fieldOptions, val);
    },
    [types.rulesOptions]({
        commit
    }, val) {
        commit(types.rulesOptions, val);
    },
    [types.setList]({
        commit
    }, val) {
        commit(types.setList, val);
    },
    [types.addRules]({
        commit
    }, val) {
        commit(types.addRules, val);
    },
    [types.removeRules]({
        commit
    }, val) {
        commit(types.removeRules, val);
    },
    [types.chooseActive]({
        commit
    }, val) {
        commit(types.chooseActive, val);
    },
};

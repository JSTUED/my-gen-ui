import types from './types';

export default {
    [types.searchInfo](state, val) {
        state.searchInfo = val;
    },
    [types.fieldOptions](state, val) {
        state.fieldOptions = val;
    },
    [types.rulesOptions](state, val) {
        state.rulesOptions = val;
    },
    [types.setList](state, val) {
        state.setList = val;
    },
    [types.addRules](state) {
        state.searchInfo.rules.push({});
    },
    [types.chooseActive](state, val) {
        let data = JSON.parse(JSON.stringify(val));
        state.searchInfo = Object.assign(state.searchInfo, {
            name: data.name,
            rules: data.rules,
            groupOp: data.groupOp,
            rulesName: data.rulesName,
            isPrivate: data.isPrivate,
        });
    },
    [types.removeRules](state, val) {
        state.searchInfo.rules.splice(val, 1);
        state.searchInfo.groupOp = '';
        state.searchInfo.rulesName = '';
        state.searchInfo.isPrivate = false;
    }
};

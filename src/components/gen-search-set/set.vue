<template>
    <div class="main-container">
        <div class="title">
            <div class="text">搜索配置方案</div>
            <div class="option">
                <span @click="abandonEdit">放弃更改</span>
                <span @click="saveProject">保存方案</span>
            </div>
        </div>
        <div class="input-box">
            搜索方案名称
            <el-input v-model="value.rulesName" class="ipt" placeholder="请输入搜索方案名称"></el-input>
            <el-checkbox v-model="value.isPrivate">作为私有的搜索方案</el-checkbox>
        </div>
        <div class="set-box">
            <div class="text">搜索条件配置</div>
            <div>
                <el-radio v-model="value.groupOp" label="AND">全部匹配(AND)</el-radio>
                <el-radio v-model="value.groupOp" label="OR">任意匹配(OR)</el-radio>
            </div>
        </div>
        <setConfig ref="set"></setConfig>
        <div class="add">
            <span @click="add">+添加搜索条件</span>
        </div>
        <dialogBox ref="dialog" :info='info'></dialogBox>
    </div>
</template>

<script>
import setConfig from './set-config';
import types from '../../store/searchSet/types';
import dialogBox from './dialog';

export default {
    components: {
        setConfig,
        dialogBox
    },
    computed: {
        value() {
            return this.$store.state.searchSet.searchInfo
        }
    },
    data() {
        return {
            info: {
                title: '确认保存',
                content: '是否保存成新方案',
                cancelBtnText: '覆盖',
                confirmBtnText: '另存'
            }
        }
    },
    methods: {
        add() {
            this.$store.dispatch(types.addRules);
        },
        // 保存
        saveProject() {
            this.$refs.dialog.show();
        },
        // 放弃更改
        abandonEdit() {
            // this.$refs.dialog.show();
        }
    }
}
</script>

<style lang="scss" scoped>
.main-container {
    .title {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        padding:10px;    
        .text {
            font-size: 16px;
        }
        .option {
            color: #409eff;
            font-size: 14px;
            cursor: pointer;
            span {
                &:nth-of-type(1) {
                    margin-right: 15px;
                }
            }
        }
    }
    .input-box {
        padding: 15px 10px;
        border-bottom: 1px solid #ccc;
        .ipt {
            margin-right: 50px;
            width: 260px;
        }
    }
    .set-box {
        display: flex;
        justify-content: space-between;
        padding: 15px 10px;
    }
    .add {
        padding-top: 20px;
        font-size: 14px;
        text-align: center;
        color: #409eff;
        cursor: pointer;
    }
}
</style>
<template>
    <div class="main-container">
        <div class="title">
            <p>操作</p>
            <p>搜索方案</p>
        </div>
        <ul class="list">
            <li @click="tap(item)" v-for="(item, index) in test" :key="index" :class="[num === item.id ? 'active' : '']">
                <p>默认</p>
                <p>搜索方案一</p>
            </li>
            <li
                v-for="(item) in list"
                :key="item.id"
                :class="[num === item.id ? 'active' : '']"
                @click="tap(item)"
            >
                <div class="option">
                    <span @click="setDefault">设为默认</span>
                    <span @click="delt">删除</span>
                </div>
                <p>{{item.name}}</p>
            </li>
        </ul>
        <dialogBox ref="dialog" :info='info'></dialogBox>
    </div>
</template>

<script>
import types from '../../store/searchSet/types';
import dialogBox from './dialog'; 

export default {
    components: {
        dialogBox
    },
    data() {
        return {
            num: 0,
            info: {
                title: '确认删除',
                content: '是否删除此方案',
                cancelBtnText: '取消',
                confirmBtnText: '确定'
            },
            test: [
                {
                    id: 0,
                    name: "",
                    groupOp: "",
                    rulesName: "",
                    isPrivate: false,
                    rules: [
                        {
                            field: "",
                            op: "",
                            data: ""
                        }
                    ]
                }
            ]
        };
    },
    computed: {
        list() {
            return this.$store.state.searchSet.setList
        }
    },
    methods: {
        tap(value) {
            this.num = value.id;
            this.$store.dispatch(types.chooseActive, value);
        },
        setDefault() {
            this.$message({
                message: '设置成功',
                type: 'success'
            });
        },
        delt() {
            this.$refs.dialog.show();
        }
    }
};
</script>

<style lang="scss" scoped>
.main-container {
    font-size: 14px;
}
.title {
    display: flex;
    margin: 0 10px;
    padding: 5px 10px;
    justify-content: space-between;
    background: rgb(242, 242, 242);
}
.list {
    padding: 5px 10px;
    .active {
        background: #f2f2f2;
    }
    li {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        font-size: 14px;
        .option {
            color: #409eff;
            cursor: pointer;
            display: flex;
            align-items: center;
            span {
                &:nth-of-type(1) {
                    padding-right: 15px;
                }
            }
        }
    }
}
</style>
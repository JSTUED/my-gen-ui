<template>
    <div>
        <ul class="box">
            <li class="item-title">
                <p>操作</p>
                <p>字段</p>
                <p>匹配规则</p>
                <p>值</p>
            </li>
            <li v-for="(item, index) in value.rules" :key="index">
                <div class="option">
                    <span>编辑</span>
                    <span @click="remove(index)">删除</span>
                </div>
                <div>
                    <el-select v-model="item.field" placeholder="请选择" class="item-select">
                        <el-option
                            v-for="item in fieldOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="item">
                    <el-select v-model="item.op" placeholder="请选择" class="item-select">
                        <el-option
                            v-for="item in rulesOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="item">
                    <el-input v-if="item.field !== 4" v-model="item.data" class="item-ipt"></el-input>
                    <el-date-picker
                        v-else
                        v-model="item.data"
                        class="gen-search-w"
                        clearable
                        :editable="false"
                        format="yyyy/MM/dd"
                        value-format="yyyy/MM/dd"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                </el-date-picker>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import types from '../../store/searchSet/types';
export default {
    computed: {
        value() {
            return this.$store.state.searchSet.searchInfo
        },
        fieldOptions() {
            return this.$store.state.searchSet.fieldOptions
        },
        rulesOptions() {
            return this.$store.state.searchSet.rulesOptions
        }
    },
    created() {
        
    },
    data() {
        return {
        }
    },
    methods: {
        remove(index) {
            this.$store.dispatch(types.removeRules, index);
        }
    }
}
</script>

<style lang="scss" scoped>  
html, body, p, ul{
    padding: 0;
    margin: 0;
}
ul {
    list-style: none;
}
.box {
    .item-title {
        display: flex;
        padding: 10px 0;
        background: #eee;
        margin-bottom: 10px;
        color: #aaa;
        p {
            width: 25%;
            text-align: center;
        }
    }
    .option {
        color:#409eff;
        cursor: pointer;
        span {
            &:nth-of-type(1) {
                padding-right: 10px; 
            }
        }
    }
    li {
        display: flex;
        justify-content: center;
        font-size: 14px;
        margin: 10px 0;
        div {
            width: 25%;
            text-align: center;
            .item-select,.item-ipt {
                width: 80%;
            }
        }
    }
}
</style>    
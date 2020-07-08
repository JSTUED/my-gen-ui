<template>
    <el-row>
        <el-col :span="6" class="left">
            <setList></setList>
        </el-col>
        <el-col :span="18">
            <set></set>
        </el-col>
        <!-- <el-button type="primary">提交</el-button> -->
    </el-row>
</template>

<script>
import setList from './set-list';
import set from './set';
import types from '../../store/searchSet/types';

export default {
    props: {
        value: {
            type: Object,
            default(){
                return {
                };
            }
        },
        fieldOptions: {
            type: [Array],
            default(){
                return [];
            }
        },
        rulesOptions: {
            type: [Array],
            default(){
                return [];
            }
        },
        list: {
            type: [Array],
            default(){
                return [];
            }
        },
    },
    components: {
        setList,
        set
    },  
    data() {
        return {

        }
    },
    computed: {
        testInfo() {
            return this.$store.state.searchSet.testInfo
        }
    },
    created() {
        // this.$store.dispatch(types.test, 'abcdefg');
        this.$store.dispatch(types.searchInfo, this.value);
        this.$store.dispatch(types.fieldOptions, this.fieldOptions);
        this.$store.dispatch(types.rulesOptions, this.rulesOptions);
        this.$store.dispatch(types.setList, this.list);
    },
    mounted() {
        
    },
    methods: {
    }

}
</script>

<style lang='scss' scoped>
.left{
    height: 950px;
    border-right: 1px solid #ccc;
}
</style>
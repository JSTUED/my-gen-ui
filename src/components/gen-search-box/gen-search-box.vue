<template>
    <div class="gen-search-component">
        <!--默认显示的部分-->
        <slot></slot>

        <span v-show="drop">
            <slot name="drop"></slot>
        </span>

        <!--操作按钮部分 自定义 btn 插槽-->
        <span class="gen-search-component-group">
            <slot name="btn"></slot>
            <el-button type="text" class="gen-search-component-btn" @click="drop=!drop" v-if="showBtn">
                {{ drop ? "收起" : "展开"}}
                <i :class="drop ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
            </el-button>
        </span>

    </div>
</template>

<script>
    /*
    * 组件说明 建议在el-form 中使用
    * 插槽：
    *   默认插槽：显示不需要隐藏的部分
    *   drop 插槽： 存放需要影藏的部分
    *   btn 插槽：操作按钮插槽
    * 属性：
    *   showBtn 显示操作按钮 默认true
    * */

    export default {
        name: "gen-search-box",

        data(){
            return {
                drop: this.isAllExpand, // 不展开状态： false
            }
        },
        props: {
            showBtn: {
                type: Boolean,
                default: true
            },
            isAllExpand: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
    .gen-search-component{
        .gen-search-component-group{
            display: inline-block;
        }
        .gen-search-component-btn{
            cursor: pointer;
            color: #3aa1ff;
            i{
                color: #3aa1ff;
            }
        }
    }
</style>
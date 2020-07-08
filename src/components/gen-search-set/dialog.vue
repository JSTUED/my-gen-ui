<template>
    <el-dialog :title="info.title" :visible.sync="dialogVisible" width="30%" class="main">
        <span>{{info.content}}</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancel">{{info.cancelBtnText}}</el-button>
            <el-button type="primary" @click="confirm">{{info.confirmBtnText}}</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    props: {
        info: {
            type: Object,
            default(){
                return {
                };
            }
        }
    },
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
        show() {
            this.dialogVisible = true;
        },
        hide() {
            this.dialogVisible = false;
        },
        cancel() {
            this.$emit('cancel');
        },
        confirm() {
            this.$emit('confirm');
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
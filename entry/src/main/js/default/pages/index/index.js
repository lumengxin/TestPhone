export default {
    data: {
        title: "",
        desc: ""
    },
    onInit() {
        this.title = this.$t('strings.world');
        this.desc = 'js模板初始化一个手机app';
    }
}

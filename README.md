# HarmonyOS2.0使用js初始化一个手机应用

## 下载开发工具

DevEco Studio 2.1 Beta2 - [使用指南](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/installation_process-0000001071425528)

| Platform        | DevEco Studio Package                   | Size | 下载                                                         |
| --------------- | --------------------------------------- | ---- | ------------------------------------------------------------ |
| indows (64-bit) | devecostudio-windows-tool-2.1.0.201.zip | 703M | [📥](https://contentcenter-vali-drcn.dbankcdn.com/pvt_2/DeveloperAlliance_package_901_9/ee/v3/7rNnfQTnSNaDCZlqbd_3CA/devecostudio-windows-tool-2.1.0.201.zip?HW-CC-KV=V1&HW-CC-Date=20210321T030109Z&HW-CC-Expire=7200&HW-CC-Sign=B03FE25929E6C25D6F7D1B1692EB2737025B65D47A19F1ABC66EDFC740EF7F18) |
| Mac             | devecostudio-mac-tool-2.1.0.201.zip     | 765M | [📥](https://contentcenter-vali-drcn.dbankcdn.com/pvt_2/DeveloperAlliance_package_901_9/f6/v3/zN4eB5HXSVCzRZpeSREHrg/devecostudio-mac-tool-2.1.0.201.zip?HW-CC-KV=V1&HW-CC-Date=20210321T030122Z&HW-CC-Expire=7200&HW-CC-Sign=9E58820460BB85681BF28EBB99053428C7060C58B818BE4AC107E5569FA3BF8F) |



## 配置环境

### windows电脑配置

- 操作系统：Windows10 64位
- 内存：8GB及以上
- 硬盘：100GB及以上
- 分辨率：1280*800像素及以上

### 下载安装Node.js

- 登录[Node.js官方网站](https://nodejs.org/zh-cn/download/)，下载Node.js软件包。请选择LTS版本，Windows 64位对应的软件包。

- 点击下载后的软件包进行安装，全部按照默认设置点击**Next**，直至**Finish**。

### 安装DevEco Studio

解压zip包，双击.exe文件，安装到指定目录。Setup启动页三个框都勾选上，体验更好。



## 创建HelloWorld工程

- Create HarmonyOS Project：创建一个工程，选择js模板
- 安装sdk: settings/Appearance/System/HarmonyOS, SDK Platforms勾选SDK`js` `native`安装
- 安装模拟器：tools/HVD Manager, 选择手机模拟器安装，安装完毕运行
- 运行项目：点击右上角运行图标，或者shift + F10

## 一点修改

js代码目录位于`TestPhone/entry/src/main/js/`

目录风格和小程序比较像，内置国际化

一点修改后，shift + F10运行。

```
pages/index/index.js:
export default {
    data: {
        title: "",
+       desc: ""
    },
    onInit() {
        this.title = this.$t('strings.world');
+       this.desc = 'js模板初始化一个手机app';
    }
}

pages/index/index.hml
<div class="container">
    <text class="title">
        {{ $t('strings.hello') }} {{title}}
    </text>
 +  <text>
 +      {{ desc }}
 +  </text>
</div>

```



## 相关资源

- [DevEco Studio开发工具](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/environment_config-0000001052902427)
- [HarmonyOS2](https://www.harmonyos.com/cn/launch-harmonyos2/)

- [视频教学](https://harmonyos.51cto.com/study)
- [鸿蒙学堂](https://hmxt.org/)

- [华为开放平台](https://developer.huawei.com/cn/)

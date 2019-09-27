<template>
    <el-menu
            default-active="/"
            class="el-menu nav"
            mode="horizontal"
            @select="handleSelect"
            background-color="#f45a8d"
            text-color="#fff"
            active-text-color="#ffd04b"
            router="true"
            >
            <div class="left-box con-row">
                <div style="display: flex;flex-direction: row;align-items: center;">
                    <img style="width: 40px;"  src="../assets/nn1.png">
                    <span style="color: #ffffff;font-size: 24px;font-family: cursive;">小红娘</span>
                </div>

                <div style="display: flex;flex-direction: row;align-items: center;margin-right: 10px">
                    <el-input class="nav-input" type="text" v-model="inputText"  placeholder="请输入名称" suffix-icon="el-icon-search"></el-input>
                </div>
                <el-menu-item index="community">
                    <el-link href="http://www.tech4flag.com/community/index" style="color: white;" target="_blank" :underline="false">有个社区</el-link>
                </el-menu-item>

            </div>
            <el-menu-item  index="/">首页</el-menu-item>
            <el-menu-item index="/msg" >消息中心</el-menu-item>
            <el-menu-item index="/putout">发布</el-menu-item>
            <el-avatar class="nav-avatar" size="medium" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
            <el-submenu  index="/center">
                <template slot="title">个人中心</template>
                <el-menu-item index="/myText">我的帖子</el-menu-item>
                <el-menu-item index="/collection">个人收藏</el-menu-item>
                <el-menu-item >退出登录</el-menu-item>
            </el-submenu>

    </el-menu>
</template>

<script>
    export default {
        name: "navMenu",
        data(){
            return{
                inputText:'',
            }
        },
        methods:{
            handleSelect(index,path){
                console.log("当前下标是："+index+"  path："+path);
            }
        }
    }
</script>

<style scoped>
    .nav{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-right: 100px;
        align-items: center;
    }
    .nav-avatar{

    }
    .left-box{
        flex: 1;
        padding-left: 100px;
    }
    .nav-input{
        width: 250px;
        padding-left: 20px;
    }
    .con-row{
        display: flex;
        flex-direction: row;
    }
    .el-submenu__title i{
        color: white;
    }
</style>
<template>
    <el-container class="el-container-big" >
        <el-container>
            <el-header class="el-header top">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="最新" name="first">


                    </el-tab-pane>
                    <el-tab-pane label="推荐" name="second">

                    </el-tab-pane>
                    <el-tab-pane label="最热" name="third">

                    </el-tab-pane>
                    <el-tab-pane label="消灭0回复" name="fourth">

                    </el-tab-pane>
                </el-tabs>
            </el-header>
            <el-main class="el-main center">
                <el-container style="width: 70%;" class="con-col">
                    <el-card style="margin-bottom: 20px" shadow="hover">
                        <el-header class="box-top" style="height: 45px;">
                            <div>
                                <el-avatar class="nav-avatar" size="medium"
                                           src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                            </div>
                            <div style="margin-left: 10px;">
                                <div style="font-size: 14px;">你的小白象</div>
                                <div style="font-size: 12px;color: #999999;">9月26 8:24</div>
                            </div>
                        </el-header>
                        <el-main class="box-mid">
                            <div>表白我老婆</div>
                            <div style="width: 100%;height: 100%;">
                                <img src="../assets/xyjy.jpg" style=" width: 100%;height: 100%; object-fit: contain;">
                            </div>
                        </el-main>
                        <el-footer class="box-bot" style="height: 30px;">
                            <div class="bot-item">
                                <img style="cursor: pointer;" class="bot-img" @click="like(this)" data-id=""
                                     src="../assets/dz.png">
                                <span class="bot-text">{{likeNum}}</span>
                            </div>

                            <el-divider direction="vertical"></el-divider>
                            <div class="bot-item" style="margin-left: 10px;">
                                <img style="cursor: pointer;" @click="comment" class="bot-img" src="../assets/pl.png">
                                <span class="bot-text">{{commentNum}}</span>
                            </div>

                            <el-divider direction="vertical"></el-divider>
                            <div class="bot-item" style="margin-left: 10px;">
                                <img style="cursor: pointer;" @click="collection" class="bot-img"
                                     src="../assets/sc.png">
                                <span class="bot-text">{{collectionNum}}</span>
                            </div>


                        </el-footer>
                        <el-collapse-transition>
                            <div class="comment-panel" v-if="commentFlag">
                                <el-divider></el-divider>
                                <div class="con-col">
                                    <div class="con-row">
                                        <div>
                                            <el-avatar class="nav-avatar" size="medium"
                                                       src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                                        </div>
                                        <div style="margin-left: 10px;">
                                            <div style="font-size: 14px;">你的小白象</div>
                                            <div style="font-size: 12px;color: #999999;">9月26 8:24</div>
                                        </div>
                                    </div>
                                    <div class="con-col">
                                        <div class="content">
                                            我觉得很好笑
                                        </div>
                                        <!--                                    <div style="width: 100%;background: #DCDFE6;height: 1px; margin: 10px 0;"></div>-->
                                        <div class="con-row" style="margin-left: 40px;">
                                            <div class="bot-item">
                                                <img style="cursor: pointer;" class="bot-img" @click="like(this)" data-id=""
                                                     src="../assets/dz.png">
                                                <span class="bot-text">{{likeNum}}</span>
                                            </div>

                                            <el-divider direction="vertical"></el-divider>
                                            <div class="bot-item" style="margin-left: 10px;">
                                                <img style="cursor: pointer;" @click="subComment" class="bot-img"
                                                     src="../assets/pl.png">
                                                <span class="bot-text">{{commentNum}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <el-collapse-transition>
                                        <div v-if="subCommentFlag" class="sub-comment">
                                            <div class="con-row">
                                                <div>
                                                    <el-avatar class="nav-avatar" size="medium"
                                                               src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                                                </div>
                                                <div style="margin-left: 10px;">
                                                    <div style="font-size: 14px;">你的大黑象</div>
                                                    <div style="font-size: 12px;color: #999999;">9月26 8:24</div>
                                                </div>
                                            </div>
                                            <div class="con-col">
                                                <div class="content">
                                                    我不觉得好笑
                                                </div>
                                                <div style="width: 100%;background: #DCDFE6;height: 1px; margin: 10px 0;"></div>
                                                <div class="con-row">
                                                    <el-input
                                                            placeholder="请输入内容"
                                                            v-model="input"
                                                            :disabled="false">
                                                    </el-input>
                                                    <el-row>
                                                        <el-button type="success" style="margin-left: 10px;">回复</el-button>
                                                    </el-row>
                                                </div>
                                            </div>
                                        </div>

                                    </el-collapse-transition>

                                </div>
                                <el-divider></el-divider>
                                <div class="con-row">
                                    <el-input
                                            placeholder="请输入内容"
                                            v-model="input"
                                            :disabled="false">
                                    </el-input>
                                    <el-row>
                                        <el-button type="success" style="margin-left: 20px;">发送</el-button>
                                    </el-row>
                                </div>

                            </div>
                        </el-collapse-transition>


                    </el-card>

                </el-container>
            </el-main>
            <el-footer class="el-footer">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="pageSizes"
                        :page-size="10"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalCount">
                </el-pagination>
            </el-footer>

        </el-container>
        <el-aside class="el-aside">
            <el-container>
                <el-header>
                    公告
                </el-header>
                <el-main>
                    热门推荐
                </el-main>
                <el-main>
                    内容推广
                </el-main>
            </el-container>
        </el-aside>
<!--        <template>-->
<!--            <el-backtop target=".el-container-big" :visibility-height="100"></el-backtop>-->
<!--        </template>-->
    </el-container>
</template>

<script>
    import ElCollapseTransition from "element-ui/lib/transitions/collapse-transition";
    export default {
        name: "main",
        components: {ElCollapseTransition},
        data() {
            return {
                activeName: 'first',
                currentPage: 1,
                pageSizes: [10, 20, 30, 40, 50, 100, 200],//每一页的条数
                totalCount: 400,//总条数
                likeNum: 0,
                commentNum: 0,
                collectionNum: 0,
                commentFlag: false,
                subCommentFlag: false,
            };
        },
        methods: {
            handleClick(tab) {
                console.log(tab.name);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            like() {
                this.likeNum++;
                console.log("点赞");
            },
            comment() {
                console.log("评论");
                this.commentFlag = !this.commentFlag;
            },
            collection() {
                this.collectionNum++;
                console.log("收藏");
            },
            subComment() {
                this.subCommentFlag = !this.subCommentFlag;
            }
        }
    }
</script>

<style scoped>
    .con-row {
        display: flex;
        flex-direction: row;
    }

    .con-col {
        display: flex;
        flex-direction: column;
    }

    .el-container-big {
        height: 100%;
        padding: 0 100px;
        overflow-y: scroll;
    }

    .el-header, .el-footer {
        color: #000;

    }

    .bot-item {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .box-top {
        width: 100%;
        border-bottom: 1px solid #eee;
        display: flex;
        flex-direction: row;
        background: #ffffff;
    }

    .box-mid {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #ffffff;

    }

    .box-bot {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        border-top: 1px solid #eee;
        background: #ffffff;
    }

    .bot-img {
        width: 20px;
        height: 20px;

    }

    .bot-text {
        color: #999;
        margin-left: 5px;
        margin-right: 20px;
        font-size: 12px;
    }

    .comment-panel {
        display: flex;
        flex-direction: column;

    }

    .content {
        margin-left: 40px;
        font-size: 14px;
    }

    .sub-comment {
        margin-top: 5px;
        margin-left: 40px;
        border: 1px solid #eeeeee;
        padding: 5px;
        border-radius: 10px;
    }


</style>
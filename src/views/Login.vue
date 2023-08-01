<template>
    <div class="login">

        <div class="login-pannel">

            <div class="login-title">用户登录</div>

            <el-form-item>
                <el-input placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item>
                <el-input placeholder="请输入密码" />
            </el-form-item>
            <el-form-item>
                <div class="check-code-pannel">
                    <el-input placeholder="请输入验证码" />
                    <img src="" alt="">
                </div>
            </el-form-item>

            <el-form-item>
                <el-button :style="{width:'100%'}">登录</el-button>
            </el-form-item>

        </div>
    </div>
</template>

<script >

</script>

<style lang="scss">
.login {
    width: 100%;
    height: calc(100vh);
    background-size: cover;
    background-position: center;
    background-image: url(../assets/login-bg.jpg);
    display: flex;
}

.login-pannel {
    border: 1px;
    display: inline-block;
    width: 300px;
    height: 300px;
    margin: auto auto;
    // background-color: rgb(168, 153, 156);
    opacity: 85%;
}

.login-title {
    text-align: center;
    height: 30px;
    margin-top: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

.check-code-pannel {
    display: inline-block;
}
</style>
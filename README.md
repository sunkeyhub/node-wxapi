##### 依赖版本
nodejs 版本：v6.2.1
forever 全局模块，用于后台运行nodejs程序
npm install -g forever

##### 安装步骤
将 .env.js.example 重命名成 .env.js

##### 局部依赖模块安装
cd wxapi 
npm install

项目需要监听一个端口配置, 需要一个redis服务，可改以下配置文件
wxapi/server/.env.js

// 端口配置
APP_PORT: 8008  // 应用端口 (将nginx相应域名反向代理到这个端口)

// redis配置
REDIS_HOST: '127.0.0.1',  // redis服务器
REDIS_PORT: 6379, // 端口
REDIS_PASSWORD: null,  // 无密码
REDIS_DB: null, // 数据库

应用启动脚本：
service.sh

修改 forever变量为 forever 安装路径
修改 index变量为 wxapi/server/index.js 的路径

service.sh start 运行服务
service.sh stop 停止服务
service.sh restart 重启服务

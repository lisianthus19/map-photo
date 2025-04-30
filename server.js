const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// 静态文件托管当前目录（含 index.html 和 assets 文件夹）
app.use(express.static(__dirname));

// 首页路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ✅ 添加测试路由：单独返回一张图片
app.get('/test-image', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'photo1.jpg'));
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

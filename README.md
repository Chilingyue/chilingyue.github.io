<div align="center">

# Chilingyue · Portfolio

**南京邮电大学计算机技术硕士在读 · 研究方向：无人机路径规划、边缘调度**
纯静态站点 · 中英双语 · 深浅色主题 · 数据驱动渲染

[在线访问](https://chilingyue.github.io/) · [GitHub](https://github.com/Chilingyue)

![Pages](https://img.shields.io/badge/GitHub%20Pages-已部署-1568d8?style=flat-square&logo=github&logoColor=white)
![静态站点](https://img.shields.io/badge/静态站点-零构建-0d9488?style=flat-square)
![双语](https://img.shields.io/badge/中%20%2F%20EN-双语-1568d8?style=flat-square)
![主题](https://img.shields.io/badge/主题-浅色%20%2F%20深色-0d9488?style=flat-square)

</div>

---

## 关于

南京邮电大学计算机技术专业硕士在读（保研），本科就读于南京邮电大学计算机科学与技术专业（双一流）。研究方向为**无人机路径规划与边缘调度**：动态环境下的三维路径规划、多无人机协同数据采集与轨迹优化，以及深度强化学习驱动的无人机轨迹与无线服务联合规划。

工具链：Python / C++、PyTorch、ROS 2、Linux；熟悉 A\*、Dijkstra、ACO 等优化算法，以及 DQN、PPO 等方法在轨迹优化中的工程落地。

---

## 项目

### 基于多旋翼无人机的智能楼宇自动取件系统

`2023.10 – 2024.10` · 校企合作重点项目 · `Crazyflie` `ROS` `Crazyswarm` `NOKOV` `VRPN`

面向城市楼宇快递「最后一百米」，用 Crazyflie 小型多旋翼搭建自主飞行与多机协同验证平台：三维航线规划、视觉自主避障、智能窗交互投递、单机与多机取件实测，并引入 NOKOV 动作捕捉提升定位精度。

| 指标 | 结果 |
| --- | --- |
| 仿真环境避障成功率 | 95% |
| 实验场景定点准时送达率 | 85% |

站点内包含测试环境与硬件图集、三段飞行视频（漂移问题 → 单机自主 → 多机协同）、中期与结项汇报（在线预览 PDF / 下载 PPTX），以及四处典型故障的排查记录。

### 3D 扫雷

`2025.06` · 个人小游戏 · `HTML` `Tailwind CSS`

多层立体玩法的 Windows 桌面扫雷（v2.2），配套 Tailwind CSS 落地页提供 exe 下载。该卡片为外链项目，点击直接跳转 [已有页面](https://chilingyue.github.io/3D-Minesweeper/web/index.html)。

---

## 站点特性

- **数据驱动**：全站内容集中在 `data/projects.js`，加一个项目只写数据，不碰模板
- **中英双语**：所有文案为 `{ zh, en }` 结构，右上角切换，选择记入本地存储
- **深浅色主题**：默认跟随系统，可手动覆盖并记忆偏好
- **响应式**：移动端单列卡片，导航折叠为抽屉
- **媒体查看**：图片灯箱、视频就地播放、PDF 在线预览
- **零依赖**：原生 HTML / CSS / JavaScript，无框架、无构建步骤

---

## 目录结构

```
.
├── index.html                 首页：项目卡片网格
├── project.html               项目详情页（?p=项目 id）
├── assets/
│   ├── css/style.css          设计变量、组件样式、深浅色
│   ├── js/main.js             渲染 / 语言 / 主题 / 灯箱 / 滚动动效
│   └── img/favicon.svg
├── data/
│   └── projects.js            全站数据：个人信息 + 项目（中英双语）
└── projects/
    ├── uav-smart-building/    images/ · videos/ · docs/
    └── 3d-minesweeper/        images/
```

图片、视频与文档按项目分目录存放，路径由 `id` 推导，新增项目无需改动渲染代码。

---

## 本地预览

站点是纯静态的，起一个本地服务即可：

```bash
python -m http.server 8000
# 或
npx serve .
```

然后打开 <http://localhost:8000>。`data/projects.js` 以全局变量方式加载，没有 `fetch` 请求，直接双击打开 `index.html` 也能正常渲染。

---

## 新增一个项目

1. 在 `data/projects.js` 的 `projects` 数组里追加一个对象，必填 `id`、`title`、`subtitle`、`period`、`cover`、`tags`、`summary`
2. 建立 `projects/<id>/`，把素材放进 `images/`、`videos/`、`docs/`
3. 刷新页面——首页卡片与详情页自动出现

可选字段：外部项目用 `externalUrl` 直接跳转；`contributions`、`background`、`goals`、`workflow`、`innovations`、`journey`、`gallery`、`videos`、`docs`、`issues`、`reflections` 按需填写，未填的板块会自动隐藏。

---

## 联系

- GitHub：[Chilingyue](https://github.com/Chilingyue)
- 邮箱：1093474052@qq.com

---

<div align="center">

© 2026 池凌越 · Chilingyue

</div>

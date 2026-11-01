/* ============================================================
 * 站点与项目数据（中英双语）
 * 新增项目：在 projects 数组中追加一个对象，并在 projects/ 下
 * 建立对应文件夹即可，首页与详情页会自动渲染。
 * 文本字段统一使用 { zh: "中文", en: "English" } 结构。
 * ============================================================ */

const SITE_DATA = {
  /* ---- 个人信息 ---- */
  owner: {
    name: { zh: "池凌越", en: "Chilingyue" },
    role: {
      zh: "南京邮电大学 · 计算机技术专业硕士在读",
      en: "M.Sc. candidate in Computer Technology, Nanjing University of Posts and Telecommunications",
    },
    bio: {
      zh: "研究方向为无人机路径规划与边缘调度。关注动态环境下的三维路径规划、多无人机协同数据采集与轨迹优化，以及面向无人机通信的深度强化学习轨迹与无线服务联合规划；近期工作涉及海洋环境无人平台的动态风险评估与多目标路径规划。",
      en: "My research focuses on UAV path planning and edge scheduling: 3D path planning in dynamic environments, cooperative multi-UAV data collection and trajectory optimization, and deep reinforcement learning for joint UAV trajectory and wireless service planning. Recent work covers dynamic risk assessment and multi-objective path planning for unmanned platforms in ocean environments.",
    },
    contacts: [
      { type: "GitHub", url: "https://github.com/Chilingyue" },
      { type: "Email", url: "mailto:1093474052@qq.com" },
    ],
  },

  projects: [
    {
      id: "uav-smart-building",
      title: {
        zh: "基于多旋翼无人机的智能楼宇自动取件系统",
        en: "Autonomous Parcel Pickup System for Smart Buildings Based on Multirotor UAVs",
      },
      subtitle: {
        zh: "校企合作重点项目",
        en: "University-Enterprise Key Joint Project",
      },
      period: "2023.10 – 2024.10",
      cover: "projects/uav-smart-building/images/test-environment.jpg",
      tags: ["Crazyflie", "ROS", "Crazyswarm", "NOKOV", "VRPN", "Python", "UAV Swarm", "Motion Capture"],

      summary: {
        zh: "面向城市楼宇快递「最后一百米」问题，基于 Crazyflie 小型多旋翼无人机搭建自主飞行与多机协同验证平台，实现悬停飞行、路径规划、智能窗交互与单机/多机取件测试，并引入 NOKOV 动作捕捉系统提升定位精度。",
        en: "Addressing the last-mile delivery problem in urban buildings, this project builds an autonomous flight and multi-drone collaboration platform based on Crazyflie multirotors, achieving hover flight, path planning, smart-window interaction and single/multi-drone pickup tests, with a NOKOV motion capture system introduced for higher positioning accuracy.",
      },

      /* ---- 关键量化指标 ---- */
      metrics: [
        { value: "95%", label: { zh: "仿真环境避障成功率", en: "Obstacle avoidance success rate in simulation" } },
        { value: "85%", label: { zh: "实验场景定点准时送达率", en: "On-time waypoint delivery rate in experiments" } },
      ],

      /* ---- 我的工作与贡献（依据简历）---- */
      contributions: [
        {
          zh: "负责多旋翼无人机配送虚拟仿真场景搭建与三维航线规划设计，构建含多类障碍、多目标配送点位的仿真环境，打通「库调度—动态避障—智能窗交互投递—转场续航」全流程仿真闭环，支撑多机并行配送。",
          en: "Built the virtual simulation scene for multirotor delivery and designed 3D route planning, constructing an environment with diverse obstacles and multi-target delivery points; closed the full simulation loop of warehouse scheduling, dynamic avoidance, smart-window delivery and transit endurance, supporting parallel multi-drone delivery.",
        },
        {
          zh: "依托视觉感知模块设计无人机自主避障算法，完成视觉传感器数据的特征提取与障碍识别，覆盖静态障碍规避与突发动态障碍响应两类核心场景，仿真环境下避障成功率达 95%。",
          en: "Designed an autonomous avoidance algorithm based on the vision module, implementing feature extraction and obstacle recognition from visual sensor data across static-obstacle avoidance and sudden dynamic-obstacle response, achieving a 95% avoidance success rate in simulation.",
        },
        {
          zh: "参与实体测试环境部署，基于 Local 定位锚点搭建测试场地，完成小型无人机硬件联调、飞行参数校准与全流程联调；设计多场景测试用例并输出测试报告，实验场景下定点准时送达率达 85%，支撑项目验收结项。",
          en: "Deployed the physical test environment using Local positioning anchors, completed hardware integration, flight parameter calibration and full-process testing; designed multi-scenario test cases and produced test reports, achieving an 85% on-time waypoint delivery rate and supporting the project's acceptance.",
        },
      ],

      /* ---- 项目背景 ---- */
      background: {
        zh: "快递业务量高速增长，而多数用户位于环境复杂的城市楼宇，人力逐层配送成本高、效率低；疫情等特殊场景进一步暴露了传统末端配送的局限。现有无人机配送多集中于固定航线远距离运输、仓储盘点与应急投送，仍存在避障不成熟、楼宇内路径规划困难、时延明显等问题。本项目探索无人机在楼宇末端配送中的应用，以缩短配送时间、降低人力成本并提升取件体验。",
        en: "With the rapid growth of parcel volume, most recipients live in complex urban buildings where manual floor-by-floor delivery is costly and inefficient; scenarios such as the pandemic further exposed the limits of traditional last-mile logistics. Existing drone delivery mainly focuses on long-haul fixed routes, warehouse inventory and emergency delivery, and still suffers from immature obstacle avoidance, difficult in-building path planning and noticeable latency. This project explores drones for in-building last-mile delivery to shorten delivery time, reduce labor cost and improve pickup experience.",
      },

      /* ---- 项目目标 ---- */
      goals: [
        { zh: "提高配送效率，减少楼宇内配送时间", en: "Improve delivery efficiency and reduce in-building delivery time" },
        { zh: "提升用户体验，提供便捷现代的取件方式", en: "Enhance user experience with convenient, modern pickup" },
        { zh: "降低人力成本，减少逐层派送工作量", en: "Reduce labor cost and floor-by-floor delivery workload" },
        { zh: "实现自主避障与最优路径规划", en: "Achieve autonomous obstacle avoidance and optimal path planning" },
        { zh: "实现多无人机协同，缓解高峰期压力", en: "Enable multi-drone collaboration to handle peak demand" },
      ],

      /* ---- 五步工作流程 ---- */
      workflow: [
        { step: 1, title: { zh: "取件提醒", en: "Pickup Alert" }, desc: { zh: "智能窗传感器感知取件需求并发起任务", en: "Smart-window sensors detect the pickup request and start a task" } },
        { step: 2, title: { zh: "取件指令", en: "Pickup Command" }, desc: { zh: "智能窗向无人机发送取件指令与目标信息", en: "The smart window sends the command and target info to the drone" } },
        { step: 3, title: { zh: "定点巡航", en: "Waypoint Cruise" }, desc: { zh: "无人机按规划路径自主飞行至目标点", en: "The drone autonomously flies to the target along the planned path" } },
        { step: 4, title: { zh: "无线交互", en: "Wireless Interaction" }, desc: { zh: "无人机与智能窗交互，完成快递投递", en: "The drone interacts with the smart window to deliver the parcel" } },
        { step: 5, title: { zh: "返航补给", en: "Return & Recharge" }, desc: { zh: "无人机返回停机坪，充电并等待下一任务", en: "The drone returns to the landing pad to recharge and await the next task" } },
      ],

      /* ---- 创新点 ---- */
      innovations: [
        { zh: "智能窗系统：与无人机交互自动完成快递投送，用户仅需发送请求指令", en: "Smart window: interacts with the drone to deliver parcels automatically; users only send a request" },
        { zh: "飞行路线规划：以最短路径最快到达，飞行时避开窗户减少干扰", en: "Route planning: reaches the target via the shortest path while avoiding windows" },
        { zh: "自动避障系统：识别并躲避障碍物，保障货物与飞行安全", en: "Autonomous obstacle avoidance: detects and avoids obstacles for safe flight" },
        { zh: "无人机交互：快速接收并执行指令", en: "Drone interaction: receives and executes commands quickly" },
        { zh: "多机协同与定点巡航，提升高峰期运输效率", en: "Multi-drone collaboration and waypoint cruise for higher efficiency at peak times" },
      ],

      /* ---- 图片画廊（分组）---- */
      gallery: [
        {
          key: "scene",
          label: { zh: "测试环境", en: "Test Environment" },
          images: [
            { file: "test-environment.jpg", caption: { zh: "防护网测试场地", en: "Netted test flight area" } },
            { file: "scene-layout.png", caption: { zh: "地面模拟楼宇道路与智能窗", en: "Simulated building roads and smart window on the floor" } },
            { file: "loco-anchor-top.jpg", caption: { zh: "Loco 定位锚点（顶部）", en: "Loco positioning anchors (top)" } },
            { file: "loco-anchor-bottom.jpg", caption: { zh: "Loco 定位锚点（底部）", en: "Loco positioning anchors (bottom)" } },
          ],
        },
        {
          key: "hardware",
          label: { zh: "硬件平台", en: "Hardware" },
          images: [
            { file: "crazyflie-loco-board.jpg", caption: { zh: "搭载 Loco 定位板的 Crazyflie", en: "Crazyflie with the Loco positioning deck" } },
            { file: "crazyflie-flow-deck.jpg", caption: { zh: "搭载 Flow 视觉模块的 Crazyflie", en: "Crazyflie with the Flow deck" } },
            { file: "sensor-dongle.jpg", caption: { zh: "主机与无线通信适配器", en: "Host computer and wireless adapter" } },
            { file: "usb-radio-setup.jpg", caption: { zh: "Crazyradio 连接与布线", en: "Crazyradio connection and cabling" } },
            { file: "hardware-box.jpg", caption: { zh: "实验设备", en: "Experimental equipment" } },
          ],
        },
        {
          key: "software",
          label: { zh: "软件与仿真", en: "Software & Simulation" },
          images: [
            { file: "simulation-path.jpg", caption: { zh: "仿真飞行路径", en: "Simulated flight path" } },
            { file: "lighthouse-positioning.png", caption: { zh: "锚点与无人机位置监测界面", en: "Anchor and drone position monitoring" } },
            { file: "mocap-data-output.jpg", caption: { zh: "动作捕捉刚体数据输出", en: "Motion capture rigid-body data output" } },
          ],
        },
        {
          key: "code",
          label: { zh: "代码实现", en: "Code" },
          images: [
            { file: "code-1.png", caption: { zh: "自主飞行运动控制代码", en: "Autonomous motion control code" } },
            { file: "code-2.png", caption: { zh: "通信与任务逻辑代码", en: "Communication and task logic code" } },
            { file: "code-3.png", caption: { zh: "轨迹生成与测试代码", en: "Trajectory generation and test code" } },
          ],
        },
      ],

      /* ---- 演示视频 ---- */
      videos: [
        {
          file: "flight-drift.mp4",
          poster: "flight-drift.jpg",
          duration: "0:05",
          title: { zh: "前期：飞行漂移问题", en: "Early stage: flight drift" },
          desc: { zh: "定位精度不足时无人机出现明显漂移", en: "Obvious drift caused by insufficient positioning accuracy" },
        },
        {
          file: "single-drone-test.mp4",
          poster: "single-drone-test.jpg",
          duration: "1:22",
          title: { zh: "后期：单机自主飞行测试", en: "Later stage: single-drone autonomous test" },
          desc: { zh: "单台无人机按路径自主巡航并完成取件", en: "A single drone cruises autonomously and completes the pickup" },
        },
        {
          file: "multi-drone-test.mp4",
          poster: "multi-drone-test.jpg",
          duration: "0:47",
          title: { zh: "后期：多机协同测试", en: "Later stage: multi-drone collaboration test" },
          desc: { zh: "多台无人机协同执行取件任务", en: "Multiple drones collaborate on pickup tasks" },
        },
      ],

      /* ---- 过程性文档（PDF 在线预览 + PPTX 下载）---- */
      docs: [
        {
          pdf: "midterm-report.pdf", pptx: "midterm-report.pptx",
          title: { zh: "中期汇报", en: "Midterm Report" },
          note: { zh: "研究背景、项目流程、阶段进展与后续计划", en: "Background, workflow, progress and follow-up plan" },
        },
        {
          pdf: "final-report.pdf", pptx: "final-report.pptx",
          title: { zh: "结项汇报", en: "Final Report" },
          note: { zh: "目标达成、研究成果、创新点与项目体会", en: "Goals, outcomes, innovations and reflections" },
        },
        {
          pdf: "design-proposal-v1.pdf", pptx: "design-proposal-v1.pptx",
          title: { zh: "设计方案（应急救援构想）", en: "Design Proposal (Emergency Rescue Vision)" },
          note: { zh: "早期面向灾难救援的整体构想与架构", en: "Early vision and architecture for emergency rescue" },
        },
        {
          pdf: "design-proposal-v2.pdf", pptx: "design-proposal-v2.pptx",
          title: { zh: "设计方案（商业计划）", en: "Design Proposal (Business Plan)" },
          note: { zh: "项目简介、核心竞争力与市场分析", en: "Overview, core competitiveness and market analysis" },
        },
      ],

      /* ---- 问题与解决（说明文字根据截图与汇报起草，TODO 请核对）---- */
      issues: [
        {
          img: "issue-1.jpg",
          title: { zh: "crazyswarm 配置文件解析异常", en: "crazyswarm configuration parsing error" },
          symptom: {
            zh: "启动时读取 crazyfiles.yaml 抛出 RLEException，crazyswarm 无法正常拉起。",
            en: "An RLEException is thrown when reading crazyfiles.yaml at startup, so crazyswarm cannot launch.",
          },
          solution: {
            zh: "核对每台 Crazyflie 的 id、channel 与 marker type，修正 initialPosition 坐标，清理注释/冲突的配置条目，使配置与实际连接的无人机一致。",
            en: "Verify each drone's id, channel and marker type, correct initialPosition, and remove commented/conflicting entries so the config matches the connected drones.",
          },
          links: [
            "https://github.com/orgs/bitcraze/discussions/903",
            "https://github.com/orgs/bitcraze/discussions/804",
          ],
        },
        {
          img: "issue-2.jpg",
          title: { zh: "Crazyflie Client 接口连接", en: "Crazyflie Client interface connection" },
          symptom: {
            zh: "Client 中需手动选择通信接口与地址后才能建立连接。",
            en: "The communication interface and address must be selected manually in the Client before connecting.",
          },
          solution: {
            zh: "确认 Crazyradio 适配器已插好，在接口下拉列表中选择对应地址，连接成功后再执行扫描与参数配置。",
            en: "Ensure the Crazyradio adapter is plugged in, select the matching address, then connect before scanning and configuring parameters.",
          },
          links: [],
        },
        {
          img: "issue-3.jpg",
          title: { zh: "虚拟机中找不到 USB 设备", en: "USB device not found in the virtual machine" },
          symptom: {
            zh: "crazyswarm_server 报错 “No matching USB Device found” 后终止。",
            en: "crazyswarm_server terminates with “No matching USB Device found”.",
          },
          solution: {
            zh: "在 VMware 中将 Crazyradio 从 Windows 主机挂载到 Ubuntu 虚拟机，用 lsusb 确认设备可见，并检查 udev 规则与端口占用，避免设备被主机占用。",
            en: "In VMware, attach the Crazyradio from the Windows host to the Ubuntu VM, verify it with lsusb, and check udev rules and port occupation so the host does not hold the device.",
          },
          links: [],
        },
        {
          img: "issue-4.jpg",
          title: { zh: "XINGYING 动捕系统连接失败", en: "XINGYING motion capture connection failure" },
          symptom: {
            zh: "mocap_helper 启动即退出，提示无法连接地址 10.1.1.198（Code:1）。",
            en: "mocap_helper exits at startup, reporting a failure to connect to 10.1.1.198 (Code:1).",
          },
          solution: {
            zh: "将主机配置为与动捕软件同网段的静态 IP，确认网络可 ping 通；先在 Windows 上通过 VRPN 验证数据，再配置 ROS 端通信参数后重新启动。",
            en: "Set a static IP on the same subnet as the capture software and confirm ping connectivity; verify data via VRPN on Windows first, then configure ROS communication and restart.",
          },
          links: [],
        },
      ],

      /* ---- 参考技术资料 ---- */
      references: [
        {
          file: "crazyswarm-nokov-vrpn.pdf",
          title: { zh: "Crazyswarm + Crazyflie + NOKOV 动捕飞控方案（VRPN）", en: "Crazyswarm + Crazyflie + NOKOV Flight Control via VRPN" },
        },
        {
          file: "ros-nokov-communication.pdf",
          title: { zh: "ROS 与 NOKOV 动作捕捉系统的通信", en: "Communication between ROS and the NOKOV Motion Capture System" },
        },
      ],
    },

    /* ---- 外部链接项目：点击卡片直接打开已有的 GitHub Pages 页面 ---- */
    {
      id: "3d-minesweeper",
      externalUrl: "https://chilingyue.github.io/3D-Minesweeper/web/index.html",
      title: { zh: "3D 扫雷", en: "3D Minesweeper" },
      subtitle: { zh: "个人小游戏", en: "Personal Game" },
      period: "2025.06",
      cover: "projects/3d-minesweeper/images/cover.jpg",
      tags: ["HTML", "Tailwind CSS", "Game", "Desktop"],
      summary: {
        zh: "一款多层立体玩法的 Windows 桌面扫雷小游戏（v2.2），并使用 Tailwind CSS 构建了在线下载落地页，可直接下载 exe 体验。",
        en: "A Windows desktop minesweeper game (v2.2) with layered 3D-style gameplay, paired with a Tailwind CSS landing page for direct exe download.",
      },
    },
  ],
};

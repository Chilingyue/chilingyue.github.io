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
      zh: "南京邮电大学 · 计算机技术专业 · 研二在读",
      en: "Second-year M.Sc. student in Computer Technology, Nanjing University of Posts and Telecommunications",
    },
    bio: {
      zh: "研究方向为无人机路径规划与边缘调度。关注动态环境下的三维路径规划、多无人机协同数据采集与轨迹优化，以及面向无人机通信的深度强化学习轨迹与无线服务联合规划；近期工作涉及海洋环境无人平台的动态风险评估与多目标路径规划。",
      en: "My research focuses on UAV path planning and edge scheduling: 3D path planning in dynamic environments, cooperative multi-UAV data collection and trajectory optimization, and deep reinforcement learning for joint UAV trajectory and wireless service planning. Recent work covers dynamic risk assessment and multi-objective path planning for unmanned platforms in ocean environments.",
    },
    contacts: [
      { type: "GitHub", url: "https://github.com/Chilingyue" },
      { type: "Email", url: "mailto:1093474052@qq.com" },
    ],

    /* ---- 教育背景 ---- */
    education: [
      {
        school: { zh: "南京邮电大学", en: "Nanjing University of Posts and Telecommunications" },
        degree: {
          zh: "计算机技术 · 硕士在读（保研）",
          en: "M.Sc. in Computer Technology (recommended admission)",
        },
        period: "2025.09 – 至今",
        note: { zh: "专业前 10%", en: "Top 10%" },
      },
      {
        school: {
          zh: "南京邮电大学（双一流）",
          en: "Nanjing University of Posts and Telecommunications (Double First-Class)",
        },
        degree: {
          zh: "计算机科学与技术 · 学士",
          en: "B.Sc. in Computer Science and Technology",
        },
        period: "2021.09 – 2025.06",
        note: { zh: "专业前 10%", en: "Top 10%" },
      },
    ],

    /* ---- 技术栈（分组）---- */
    skills: [
      {
        label: { zh: "编程与工具", en: "Programming & Tools" },
        items: ["Python", "C/C++", "PyTorch", "SQL", "NumPy", "Pandas"],
      },
      {
        label: { zh: "算法与建模", en: "Algorithms & Modeling" },
        items: ["A*", "Dijkstra", "ACO", "DQN", "PPO"],
      },
      {
        label: { zh: "系统与工程", en: "Systems & Engineering" },
        items: ["Linux", "ROS 2", "Git", "性能测试"],
      },
    ],

    /* ---- 专利 ---- */
    patents: [
      {
        title: {
          zh: "一种基于飞行充电无人机的边缘计算服务续航方法及系统",
          en: "Method and System for Sustaining Edge Computing Services via Flying-Charging UAVs",
        },
      },
      {
        title: {
          zh: "一种基于野马群体觅食机制的多无人机数据采集方法及系统",
          en: "Method and System for Multi-UAV Data Collection Based on Wild-Horse Herd Foraging Mechanism",
        },
      },
    ],

    /* ---- 获奖与荣誉 ---- */
    awards: [
      { category: { zh: "竞赛", en: "Contest" }, title: { zh: "蓝桥杯 C++ 江苏省二等奖", en: "Blue Bridge Cup C++ — 2nd Prize, Jiangsu" } },
      { category: { zh: "竞赛", en: "Contest" }, title: { zh: "学院「挑战杯」二等奖", en: "School Challenge Cup — 2nd Prize" } },
      { category: { zh: "学业", en: "Academic" }, title: { zh: "国家励志奖学金", en: "National Encouragement Scholarship" } },
      { category: { zh: "学业", en: "Academic" }, title: { zh: "校级一等奖学金", en: "University First-Class Scholarship" } },
      { category: { zh: "学业", en: "Academic" }, title: { zh: "优秀研究生", en: "Outstanding Graduate Student" } },
      { category: { zh: "学业", en: "Academic" }, title: { zh: "校级三好学生", en: "University Merit Student" } },
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
      cover: "projects/uav-smart-building/images/scene-closeup.png",
      heroImage: "scene-closeup.png", /* 详情页「项目概览」背景图 */
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

      /* ---- 我的工作与贡献（依据简历，<strong> 为工作量关键词）---- */
      contributions: [
        {
          zh: "负责多旋翼无人机取件<strong>虚拟仿真场景搭建</strong>与<strong>三维航线规划设计</strong>，构建含多类障碍、多目标取件点位（用户家中智能窗）的仿真环境，打通「任务调度—动态避障—智能窗交互取件—转场配送」<strong>全流程仿真闭环</strong>，支撑多机并行取件。",
          en: "Built the <strong>virtual simulation scene</strong> for drone pickup and designed <strong>3D route planning</strong>, constructing an environment with diverse obstacles and multi-target pickup points (smart windows in users' homes); closed the <strong>full simulation loop</strong> of task scheduling, dynamic avoidance, smart-window pickup and transit delivery, supporting parallel multi-drone pickup.",
        },
        {
          zh: "依托视觉感知模块设计无人机<strong>自主避障算法</strong>，完成视觉传感器数据的<strong>特征提取与障碍识别</strong>，覆盖静态障碍规避与突发动态障碍响应两类核心场景，仿真环境下避障成功率达 <strong>95%</strong>。",
          en: "Designed the <strong>autonomous avoidance algorithm</strong> based on the vision module, implementing <strong>feature extraction and obstacle recognition</strong> from visual sensor data across static-obstacle avoidance and sudden dynamic-obstacle response, achieving a <strong>95%</strong> avoidance success rate in simulation.",
        },
        {
          zh: "参与实体测试环境部署，基于 <strong>Loco 定位锚点</strong>搭建测试场地，完成小型无人机<strong>硬件联调</strong>、<strong>飞行参数校准</strong>与全流程联调；设计多场景<strong>测试用例</strong>并输出<strong>测试报告</strong>，实验场景下定点准时送达率达 <strong>85%</strong>，支撑项目<strong>验收结项</strong>。",
          en: "Deployed the physical test environment using <strong>Loco positioning anchors</strong>, completed <strong>hardware integration</strong>, <strong>flight parameter calibration</strong> and full-process testing; designed multi-scenario <strong>test cases</strong> and produced <strong>test reports</strong>, achieving an <strong>85%</strong> on-time waypoint delivery rate and supporting the project's <strong>acceptance</strong>.",
        },
      ],

      /* ---- 探索历程（过程性关键信息，展示自我成长；每阶段拆为可扫读的条目）---- */
      journey: [
        {
          phase: { zh: "前中期 · 从零起步", en: "Early & Mid Stage · Starting from Scratch" },
          items: [
            {
              zh: "<strong>研究基础薄弱</strong>：Crazyflie 小型多旋翼无人机在国内自主飞行方向的研究较少，可获取的参考资料有限，对项目推进速度形成制约。",
              en: "<strong>Weak research foundation</strong>: studies on autonomous flight with the Crazyflie nano-quadcopter were scarce in China, and the limited reference material constrained the project's pace.",
            },
            {
              zh: "<strong>自主学习与探索</strong>：系统学习硬件知识，熟悉 Linux 环境与相关代码开发，并与业界研究者持续交流请教，逐步补齐能力短板。",
              en: "<strong>Self-directed learning and exploration</strong>: systematically studied the hardware, became familiar with Linux and the relevant code development, and kept consulting industry researchers to close the capability gap.",
            },
            {
              zh: "<strong>完成初步开发</strong>：完成对 Crazyflie 的研究，编写无人机与基站节点通信及自主飞行代码；基于 Flow Deck 与 Loco 定位系统实现自主飞行，完成悬停飞行与飞行误差调整。",
              en: "<strong>Initial development completed</strong>: finished the study of the Crazyflie, wrote the code for drone-to-anchor communication and autonomous flight, and achieved autonomous flight based on the Flow Deck and the Loco positioning system, performing hover flight and drift correction.",
            },
            {
              zh: "<strong>搭建模拟场景</strong>：受场地条件限制，构建 2×2×2 米仿真空间，以 8 个基站节点实现定位，并布置窗户、停机坪、路线箭头等要素模拟实际场景。",
              en: "<strong>Simulated scene built</strong>: constrained by the venue, constructed a 2×2×2 meter simulation space localized by 8 anchor nodes, with windows, a landing pad and route arrows added to mimic a real scene.",
            },
            {
              zh: "<strong>明确改进方向</strong>：飞行精度尚未达到实际应用要求，存在路线偏移；项目至此完成初步探索，并确立以提升精度为后续核心目标。",
              en: "<strong>Direction clarified</strong>: flight accuracy fell short of practical requirements with noticeable route drift; the initial exploration concluded with precision improvement set as the core goal for the next stage.",
            },
          ],
        },
        {
          phase: { zh: "中后期 · 系统升级", en: "Mid & Late Stage · System Upgrade" },
          items: [
            {
              zh: "<strong>平台升级</strong>：以提升定位与飞行精度、推动系统走向实际应用为目标，在前期 Crazyflie 研究基础上引入 ROS 与 NOKOV 动作捕捉系统。",
              en: "<strong>Platform upgrade</strong>: aiming at higher positioning and flight accuracy for practical use, introduced ROS and the NOKOV motion capture system on top of the earlier Crazyflie work.",
            },
            {
              zh: "<strong>关键技术攻关</strong>：依托前期积累的软硬件知识，快速掌握新系统操作文档，先后解决 XINGYING 1.2.2 网络配置、Windows 平台 VRPN 数据获取测试、ROS 与 XINGYING 1.2.2 通信等问题。",
              en: "<strong>Key technical problems solved</strong>: leveraging the earlier hardware and software experience, quickly mastered the new system's documentation and resolved the network configuration of XINGYING 1.2.2, VRPN data acquisition testing on Windows, and communication between ROS and XINGYING 1.2.2.",
            },
            {
              zh: "<strong>可视化调试</strong>：安装 crazyswarm 进行可视化操作，实时显示无人机坐标系与坐标原点，提升实验数据的可观测性。",
              en: "<strong>Visual debugging</strong>: installed crazyswarm for visualization, displaying the drone's coordinate frame and the origin in real time to improve the observability of experiment data.",
            },
            {
              zh: "<strong>阶段成果</strong>：与技术人员保持密切交流，持续开展优化与测试，保障系统的稳定性与可靠性；实验精度与飞行路线准确性显著提升。",
              en: "<strong>Stage outcomes</strong>: kept close contact with technical staff, iterated on optimization and testing to ensure system stability and reliability; experimental accuracy and route precision improved substantially.",
            },
          ],
        },
      ],

      /* ---- 项目背景（需求侧 / 现有不足 / 项目切入，每块以短点呈现）---- */
      background: [
        {
          label: { zh: "需求侧", en: "Demand" },
          points: [
            { zh: "快递业务量持续高速增长", en: "Parcel volume keeps growing fast" },
            { zh: "收寄双方多位于环境复杂的城市楼宇", en: "Senders and recipients are mostly in complex urban buildings" },
            { zh: "人力逐层收派成本高、效率低，上门寄件耗时费力", en: "Floor-by-floor collection is costly and slow; in-person drop-off is tedious" },
            { zh: "疫情等场景暴露传统末端揽派的局限", en: "The pandemic exposed the limits of traditional last-mile pickup" },
          ],
        },
        {
          label: { zh: "现有不足", en: "Gaps" },
          points: [
            { zh: "现有无人机配送集中于远距离固定航线", en: "Existing drone delivery sticks to long-haul fixed routes" },
            { zh: "楼宇内路径规划困难", en: "In-building path planning remains hard" },
            { zh: "避障技术不成熟", en: "Obstacle avoidance is immature" },
            { zh: "配送时延明显", en: "Delivery latency is noticeable" },
          ],
        },
        {
          label: { zh: "项目切入", en: "Our Approach" },
          points: [
            { zh: "智能窗安装于用户家中，投件即发起任务", en: "Smart windows in users' homes start a task on drop-off" },
            { zh: "无人机上门取件、转场配送", en: "Drones collect at the door and fly parcels onward" },
            { zh: "缩短取件时间，降低人力成本", en: "Shorter pickup time, lower labor cost" },
            { zh: "带来便捷现代的寄取体验", en: "A convenient, modern pickup experience" },
          ],
        },
      ],

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
        { step: 4, title: { zh: "无线交互", en: "Wireless Interaction" }, desc: { zh: "无人机与智能窗交互，完成包裹取件交接", en: "The drone interacts with the smart window to collect the parcel" } },
        { step: 5, title: { zh: "返航补给", en: "Return & Recharge" }, desc: { zh: "无人机返回停机坪，充电并等待下一任务", en: "The drone returns to the landing pad to recharge and await the next task" } },
      ],

      /* ---- 创新点 ---- */
      innovations: [
        { zh: "智能窗系统：用户投件即发起任务，无人机与窗口交互自动完成取件交接", en: "Smart window: a drop-off starts the task, and the drone interacts with the window to complete the pickup automatically" },
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
          title: { zh: "中期：单机自主飞行测试", en: "Mid stage: single-drone autonomous test" },
          desc: { zh: "单台无人机按路径自主巡航并完成取件", en: "A single drone cruises autonomously and completes the pickup" },
        },
        {
          file: "multi-drone-test.mp4",
          poster: "multi-drone-test.jpg",
          duration: "0:47",
          title: { zh: "后期：多机协同测试", en: "Late stage: multi-drone collaboration test" },
          desc: { zh: "多台无人机协同执行取件任务", en: "Multiple drones collaborate on pickup tasks" },
        },
      ],

      /* ---- 过程性文档（PDF 在线查看，顺序：设计构想 → 商业计划 → 中期 → 结项）---- */
      docs: [
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

      /* ---- 项目感想 ---- */
      reflections: [
        {
          zh: "<strong>仿真与现实存在差距</strong>：软件仿真中的环境理想且可控，而硬件落地必须直面各种实际情况——信号干扰、场地限制、设备状态的细微变化，任何一环都可能让结果偏离预期。",
          en: "<strong>Simulation differs from reality</strong>: a simulated environment is ideal and controllable, but real hardware must face practical conditions — signal interference, venue constraints and subtle changes in device state, any of which can skew the outcome.",
        },
        {
          zh: "<strong>考虑问题必须全面</strong>：前期试飞时没有加装保护网，一次意外摔坏了一架无人机。这让我意识到，任何环节的疏漏在真实世界里都会付出实际代价。",
          en: "<strong>Think comprehensively</strong>: in an early test flight without a protective net, an accident damaged one drone — a lesson that any overlooked detail carries a real cost in the physical world.",
        },
        {
          zh: "<strong>善于借助前人的成果</strong>：与其重复造轮子，不如站在成熟的方案上继续创新——引入 ROS 与 NOKOV 动作捕捉系统，让无人机的定位、规划与控制快速达到可用精度。",
          en: "<strong>Build on prior work</strong>: rather than reinventing the wheel, stand on proven solutions — adopting ROS and the NOKOV motion capture system brought the drone's positioning, planning and control to usable precision quickly.",
        },
      ],
    },

    /* ============================================================
     * 海洋环境无人平台动态三维路径规划（完整详情项目）
     * ============================================================ */
    {
      id: "ocean-path-planning",
      title: {
        zh: "基于复杂海洋环境的无人平台动态三维路径规划",
        en: "Dynamic 3D Path Planning for Unmanned Platforms in Complex Ocean Environments",
      },
      subtitle: {
        zh: "江苏省高校自然科学研究重大项目",
        en: "Jiangsu Provincial Key University Natural Science Research Project",
      },
      period: "2024.09 – 2025.11",
      cover: "projects/ocean-path-planning/images/risk-matrix.png",
      heroImage: "risk-matrix.png",
      tags: ["Python", "A*", "TSA*", "DQN", "ACO", "Risk Assessment", "NetCDF", "Path Planning"],

      summary: {
        zh: "面向水下无人平台（UUV）在复杂动态海洋环境中的自主航行问题，整合多源海洋数据并以双线性插补、栅格化完成预处理，构建多维动态风险评估模型；自主设计两阶段改进 A* 算法 TSA*，并搭建 Python 仿真平台，与蚁群、深度强化学习算法对比验证其在效率、路径与风险上的优势。",
        en: "Addressing autonomous navigation of unmanned underwater vehicles (UUVs) in complex dynamic ocean environments, this project integrates multi-source ocean data and preprocesses it with bilinear interpolation and rasterization to build a multidimensional dynamic risk model; it designs a two-stage improved A* algorithm (TSA*) and builds a Python simulation platform, validating its advantages in efficiency, path length and risk against ant-colony and deep reinforcement-learning baselines.",
      },

      metrics: [
        { value: "36.5%", label: { zh: "路径效率提升（路径长度优势）", en: "Path-efficiency improvement (path-length advantage)" } },
        { value: "33.5%", label: { zh: "风险管控指标提升", en: "Risk-control improvement" } },
        { value: "60", label: { zh: "仿真测试实例", en: "Simulation test cases" } },
        { value: "3", label: { zh: "算法对比验证", en: "Algorithms compared" } },
      ],

      contributions: [
        {
          zh: "负责<strong>多源异构环境数据预处理与特征工程</strong>，采用双线性插补、栅格化完成数据清洗、空间标准化与异常值排查，构建<strong>多维动态风险评估模型</strong>，挖掘区域潜在风险，为无人平台安全决策提供量化依据。",
          en: "Led <strong>preprocessing and feature engineering for multi-source heterogeneous data</strong>, using bilinear interpolation and rasterization for data cleaning, spatial standardization and outlier detection; built a <strong>multidimensional dynamic risk-assessment model</strong> that quantifies regional potential risk to support safe decision-making.",
        },
        {
          zh: "负责 <strong>A* 多目标路径规划算法的设计与实现</strong>，协同推进 DQN、蚁群算法落地；针对复杂风险场景优化搜索策略，完成多轮消融实验与对比验证，路径效率与风险管控指标分别提升 <strong>36.5%、33.5%</strong>。",
          en: "Owned the <strong>design and implementation of the A* multi-objective path-planning algorithm</strong> and coordinated the DQN and ant-colony baselines; optimized the search strategy for complex risk scenarios and ran ablation and comparison experiments, improving path efficiency and risk control by <strong>36.5% and 33.5%</strong>.",
        },
        {
          zh: "参与搭建 <strong>Python 端无人平台路径规划仿真平台</strong>，负责路径安全校验与参数测算模块开发；设计多场景测试用例，完成算法功能测试、性能测试与效果分析，输出规范的实验报告。",
          en: "Co-built the <strong>Python simulation platform for UUV path planning</strong>, developing the path-safety check and parameter-estimation modules; designed multi-scenario test cases, ran functional and performance tests with effect analysis, and produced standardized experiment reports.",
        },
        {
          zh: "负责项目后期的<strong>多源数据对齐校验与仿真平台运维</strong>，排查数据与模型运行问题，保障仿真平台稳定性。",
          en: "Took charge of late-stage <strong>multi-source data alignment/validation and simulation-platform maintenance</strong>, troubleshooting data and model issues to keep the platform stable.",
        },
      ],

      background: [
        {
          label: { zh: "环境挑战", en: "Environment" },
          points: [
            { zh: "洋流、地形、气象等要素动态变化，任务不确定性高", en: "Currents, terrain and weather change dynamically with high uncertainty" },
            { zh: "海洋空间强非线性，设备动力学约束复杂", en: "Strongly nonlinear ocean space with complex vehicle dynamics" },
            { zh: "内波、海洋锋、海底起伏带来航行与隐蔽风险", en: "Internal waves, ocean fronts and seabed relief create safety and stealth risks" },
          ],
        },
        {
          label: { zh: "技术瓶颈", en: "Bottlenecks" },
          points: [
            { zh: "三维 A* 搜索时间从毫秒级飙升至数小时", en: "3D A* search time jumps from milliseconds to hours" },
            { zh: "高维栅格导致维度灾难，实时性难以保障", en: "High-dimensional grids cause the curse of dimensionality" },
            { zh: "路径长度、能耗、安全多目标相互冲突", en: "Path length, energy and safety objectives conflict" },
          ],
        },
        {
          label: { zh: "项目切入", en: "Our Approach" },
          points: [
            { zh: "多源数据预处理，量化生成多维风险矩阵", en: "Preprocess multi-source data into quantified risk matrices" },
            { zh: "两阶段 TSA* 算法降维，降低计算复杂度", en: "Two-stage TSA* reduces dimensionality and complexity" },
            { zh: "自建仿真平台，多算法对比验证", en: "Build a simulation platform for multi-algorithm validation" },
          ],
        },
      ],

      /* ---- 技术路线：项目整体五层，从数据到验证 ---- */
      roadmap: {
        intro: {
          zh: "整个项目自上而下分五层推进：先把多源海洋数据整理成可计算的风险矩阵，再做机理分析与风险评估，然后进入算法设计，最后在自建仿真平台上验证。这张图是全局，后面每一节的细节都能对回这里。",
          en: "The project runs top-down in five layers: turn multi-source ocean data into a computable risk matrix, then mechanism analysis and risk assessment, then algorithm design, and finally validation on a self-built simulation platform. This chart is the whole picture that every later section maps back to.",
        },
        layers: [
          {
            title: { zh: "数据处理", en: "Data Processing" },
            desc: { zh: "多源数据统一格式、补齐缺失、栅格化，产出多维风险矩阵", en: "Unify, fill and rasterize multi-source data into a multidimensional risk matrix" },
            section: "pipeline",
          },
          {
            title: { zh: "机理分析", en: "Mechanism Analysis" },
            desc: { zh: "环境特征诊断、风险因子筛选、指标体系构建与指标耦合集成", en: "Environment diagnosis, risk-factor screening, indicator system and coupling" },
          },
          {
            title: { zh: "风险评估", en: "Risk Assessment" },
            desc: { zh: "安全性、隐蔽性、对抗性三类效能评估，融合为综合风险等级", en: "Safety, stealth and countermeasure assessments fused into an overall risk level" },
          },
          {
            title: { zh: "算法设计", en: "Algorithm Design" },
            desc: { zh: "两阶段 TSA* 降维搜索，动态风险适应加路径平滑", en: "Two-stage TSA* search with dynamic risk adaptation and path smoothing" },
            section: "algorithm",
          },
          {
            title: { zh: "试验验证", en: "Validation" },
            desc: { zh: "自建仿真平台，多场景、多算法对比测试与性能评估", en: "Self-built simulation platform for multi-scenario, multi-algorithm testing" },
            section: "comparison",
          },
        ],
        linkLabel: { zh: "详见", en: "See" },
        figure: { file: "tech-roadmap.png", caption: { zh: "总体技术路线（五层）", en: "Overall technical roadmap (five layers)" } },
      },

      /* ---- 数据处理管线：5 个步骤，每步一张图 ---- */
      pipeline: {
        intro: {
          zh: "数据处理只有 5 步，前一步的产出就是后一步的输入：原始数据 → 统一格式 → 补齐缺失 → 栅格化 → 风险矩阵。下面按顺序展开，每一步配它自己的示意图。",
          en: "Data processing has exactly five steps, each feeding the next: raw data → unified format → gap filling → rasterization → risk matrix. They are laid out in order below, each with its own figure.",
        },
        steps: [
          {
            title: { zh: "多源数据采集", en: "Multi-source Acquisition" },
            desc: { zh: "CMEMS 与航次数据，覆盖流速、流向、温盐、波浪、地形", en: "CMEMS and voyage data covering currents, direction, temperature, salinity, waves and terrain" },
            io: { zh: "输入 CMEMS 再分析产品 + 航次实测 → 输出 基础 / 特征 / 航次三类原始数据集", en: "In: CMEMS reanalysis + voyage measurements → Out: basic / feature / voyage datasets" },
            note: {
              zh: "流速、流向、温度、盐度取自 CMEMS 全球海洋再分析产品，波浪高度与周期单独取用，再与航次实测资料一起汇入，形成三类数据源。",
              en: "Current speed/direction, temperature and salinity come from CMEMS reanalysis; wave height and period are taken separately and merged with voyage measurements into three data sources.",
            },
            figures: [{ file: "data-source.png", caption: { zh: "CMEMS 多源海洋数据获取", en: "Multi-source ocean data acquisition from CMEMS" } }],
          },
          {
            title: { zh: "格式统一", en: "Format Unification" },
            desc: { zh: "NetCDF / HDF5 / MAT / TXT 统一为 NetCDF（.nc）", en: "Unify NetCDF/HDF5/MAT/TXT into NetCDF (.nc)" },
            io: { zh: "输入 三类异构原始数据 → 输出 同一格式、同一 5′ 单元的 .nc 数据集", en: "In: three heterogeneous sources → Out: one .nc dataset on a common 5′ grid" },
            note: {
              zh: "三种来源的格式、精度、坐标系都不同。先全部转成 .nc（技术格式统一），再把不同来源的精度与坐标统一到 5′ 基本单元（精度统一），缺失与异常值留给下一步。",
              en: "The three sources differ in format, resolution and coordinate system. All are converted to .nc first, then resampled onto a common 5′ base unit; gaps and outliers are left to the next step.",
            },
            figures: [{ file: "data-preprocess-flow.png", caption: { zh: "数据集预处理流程：格式统一 → 精度统一 → 缺失值补齐", en: "Preprocessing: format → resolution → gap filling" } }],
          },
          {
            title: { zh: "双线性插补", en: "Bilinear Interpolation" },
            desc: { zh: "对缺失与异常值插补，提升数据完整性与精度", en: "Fill missing and abnormal values to improve completeness and accuracy" },
            io: { zh: "输入 带空缺的 .nc 数据集 → 输出 完整可读的连续数据场", en: "In: .nc dataset with gaps → Out: a complete continuous field" },
            note: {
              zh: "缺失点 f(x, y) 取四周四个已知网格点，先沿经度方向线性插值、再沿纬度方向加权，得到该点的估计值。左图是插值原理，右图是插补后的海流场——零散空洞被补齐，卫星遥感数据的缺口不会带进风险矩阵。",
              en: "For a missing point f(x, y), the four surrounding known grid points are interpolated along longitude and then weighted along latitude. Left: the principle; right: the interpolated current field, with scattered gaps filled so satellite-data holes never reach the risk matrix.",
            },
            figures: [
              { file: "bilinear-interp.png", caption: { zh: "双线性插补原理（四点加权）", en: "Bilinear interpolation principle" } },
              { file: "current-interp.png", caption: { zh: "海流数据插补结果", en: "Interpolated current field" } },
            ],
          },
          {
            title: { zh: "栅格化与标准化", en: "Rasterization" },
            desc: { zh: "经纬度转栅格坐标，空间标准化、坐标系统一", en: "Convert coordinates to a raster with unified spatial standards" },
            io: { zh: "输入 连续数据场 → 输出 规则三维栅格（经纬度 × 深度），每格一个风险值", en: "In: continuous field → Out: regular 3D grid indexed by lon/lat/depth" },
            note: {
              zh: "把经纬度-深度空间切成规则栅格，每个单元用索引表示，后续搜索都在索引空间里做。栅格方向决定搜索空间：二维按 8 邻域扩展，落到高度维度后每点再取 26 邻域，这也是 TSA* 的搜索空间。",
              en: "The lon/lat/depth space is cut into a regular grid addressed by indices, and all later search happens in index space. Grid directions define that space: 8 neighbours in 2D, 26 per point once height is added — the search space of TSA*.",
            },
            figures: [{ file: "grid-directions.png", caption: { zh: "栅格单元与邻域方向划分（2D 八方向 / 3D 二十六方向）", en: "Grid cells and neighbourhood directions (8 in 2D, 26 in 3D)" } }],
          },
          {
            title: { zh: "多维风险矩阵", en: "Risk Matrix" },
            desc: { zh: "各变量归一化加权求和，划分风险等级", en: "Normalize and weight variables to grade risk levels" },
            io: { zh: "输入 多因子栅格 → 输出 三维风险矩阵（按阈值分档）", en: "In: multi-factor grid → Out: 3D risk matrix graded by thresholds" },
            note: {
              zh: "流速、温盐、波浪、地形等因子归一化后按权重求和，每个栅格单元得到一个风险值，再按阈值划分等级。下面就是最终的三维风险区划：底部横轴是经纬度、纵轴是深度，颜色从低风险到高风险。",
              en: "Current, temperature/salinity, wave and terrain factors are normalized and weighted into one risk value per cell, then graded by thresholds. Below: the resulting 3D risk zoning — lon/lat on the base, depth vertical, colour from low to high risk.",
            },
            figures: [
              { file: "risk-matrix.png", caption: { zh: "多维风险矩阵（三维区划）", en: "Multidimensional risk matrix (3D zoning)" } },
              { file: "risk-result.png", caption: { zh: "风险区划结果（另一海域）", en: "Risk zoning result (another area)" } },
            ],
          },
        ],
      },

      /* ---- 算法对比（纯 CSS 条形图，分数为表现得分，越大越好；数据来自论文图4.10）---- */
      comparison: {
        algorithms: [
          { key: "tsa", name: { zh: "TSA*（本项目）", en: "TSA* (ours)" }, highlight: true },
          { key: "dqn", name: { zh: "DQN", en: "DQN" }, highlight: false },
          { key: "aco", name: { zh: "蚁群 ACO", en: "ACO" }, highlight: false },
        ],
        note: {
          zh: "各维度均为相对表现得分（越高越好），以 TSA* 为基准 1.000；条形越长代表该维度表现越优。",
          en: "All dimensions are relative performance scores (higher is better) with TSA* as the 1.000 baseline; a longer bar means better performance.",
        },
        dimensions: [
          { label: { zh: "计算效率", en: "Computing Efficiency" }, scores: { tsa: 1.0, dqn: 0.364, aco: 0.34 } },
          { label: { zh: "路径长度优势", en: "Path Length Advantage" }, scores: { tsa: 1.0, dqn: 0.733, aco: 0.336 } },
          { label: { zh: "风险控制能力", en: "Risk Control" }, scores: { tsa: 1.0, dqn: 0.749, aco: 0.349 } },
          { label: { zh: "综合表现", en: "Overall Performance" }, scores: { tsa: 1.0, dqn: 0.732, aco: 0.342 } },
        ],
        figures: [
          { file: "algo-score.png", caption: { zh: "各算法得分综合对比（原始图）", en: "Comprehensive score comparison (original chart)" } },
        ],
        /* 同一海域的路径结果：行 = 算法，列 = 二维 / 三维 */
        pathsLabel: { zh: "同一海域的路径结果对比", en: "Path results in the same area" },
        pathsNote: {
          zh: "同一海域、同一组起终点，三种算法各跑一次：左列只有平面路径，右列是叠加高度后的三维路径。TSA* 绕开高风险区的同时路径更短、转向更少，DQN 与蚁群则出现明显绕行与冗余折返。",
          en: "Same area, same start and goal, one run per algorithm: the left column is the planar path, the right column the 3D path with height. TSA* avoids high-risk zones with a shorter, cleaner route, while DQN and ACO show visible detours and redundant backtracking.",
        },
        paths: [
          { name: { zh: "TSA*（本项目）", en: "TSA* (ours)" }, highlight: true, file2d: "path-2d.png", file3d: "path-3d.png" },
          { name: { zh: "DQN", en: "DQN" }, file2d: "dqn-path-2d.png", file3d: "dqn-path-3d.png" },
          { name: { zh: "蚁群 ACO", en: "ACO" }, file2d: "aco-path-2d.png", file3d: "aco-path-3d.png" },
        ],
        pathsCols: { zh: ["二维路径", "三维路径"], en: ["2D path", "3D path"] },
      },

      /* ---- TSA* 算法设计（两阶段 + 机制 + 主流程图 + 支撑图）---- */
      algorithm: {
        stages: [
          {
            title: { zh: "第一阶段 · 二维平面寻优", en: "Stage 1 · 2D Plane Optimization" },
            desc: { zh: "把三维环境投影成二维平面，只在平面内搜路：按综合风险和总代价逐节点扩展，先把 X、Y 坐标定下来，绕开三维直接搜索的计算爆炸。", en: "Project the 3D environment onto a plane and search in-plane only: expand node by node on combined risk and total cost, fixing X/Y first and avoiding the computational explosion of a full 3D search." },
            io: { zh: "输入 3D 风险矩阵 → 输出 XY 平面路径", en: "In: 3D risk matrix → Out: XY plane path" },
          },
          {
            title: { zh: "第二阶段 · 垂直高度优化", en: "Stage 2 · Vertical Height Optimization" },
            desc: { zh: "平面路径定好后，为每个路径点在 0–50 米内按步长取样，在距离约束与渐进性条件下选代价最低的高度，补上 Z 坐标，得到完整三维路径。", en: "With the planar path fixed, each waypoint samples heights within 0–50 m and takes the lowest-cost one under distance and continuity constraints, adding Z to complete the 3D path." },
            io: { zh: "输入 XY 路径 → 输出 XYZ 三维路径", en: "In: XY path → Out: XYZ 3D path" },
          },
        ],
        mechanisms: [
          {
            title: { zh: "动态风险适应", en: "Dynamic risk adaptation" },
            desc: { zh: "节点扩展时依据当前航速与环境实时更新风险，在高风险区限制航速，权衡速度与安全。", en: "Risk is updated at each node expansion from current speed and environment; speed is capped in high-risk areas to balance speed against safety." },
          },
          {
            title: { zh: "静态风险规避", en: "Static risk avoidance" },
            desc: { zh: "在搜索中避开海底地形、礁石、沉船等固定风险因素。", en: "The search steers clear of fixed risk factors such as seabed terrain, reefs and wrecks." },
          },
          {
            title: { zh: "三次 B 样条平滑", en: "Cubic B-spline smoothing" },
            desc: { zh: "对拐点做控制点平滑，保证路径连续、可操作，避免穿过限制区域。", en: "Corners are smoothed with control points so the path stays continuous and feasible without crossing restricted areas." },
          },
        ],
        lead: {
          file: "tsa-flowchart.jpg",
          caption: { zh: "TSA* 算法主流程", en: "TSA* main flowchart" },
          stepsLabel: { zh: "两步在流程图里的位置", en: "Where the two stages sit" },
          steps: [
            {
              tag: { zh: "输入", en: "Input" },
              text: { zh: "三维栅格地图、起点、终点与 UUV 运动参数，是整条流程的输入。", en: "The 3D grid map, start, goal and UUV motion parameters feed the whole flow." },
            },
            {
              tag: { zh: "初始化", en: "Setup" },
              text: { zh: "先把三维地图压成二维栅格并初始化搜索参数，为第一阶段的平面寻优做准备。", en: "The 3D map is flattened into a 2D grid and search parameters are initialized, preparing stage 1." },
            },
            {
              tag: { zh: "第一阶段", en: "Stage 1" },
              text: { zh: "进入循环：计算相邻节点的综合风险与总代价、选择跳转节点；判定未到终点时，按航速与环境更新动态风险，再回到搜索继续扩展。这条回边就是两阶段里的二维寻优主体。", en: "The loop begins: score neighbouring nodes by combined risk and total cost, pick the next hop; if the goal is not reached, risk is refreshed from speed and environment and the search continues. This back-edge is the body of stage 1." },
            },
            {
              tag: { zh: "第二阶段", en: "Stage 2" },
              text: { zh: "判定到达终点后离开循环，按距离限制与代价约束为平面路径点赋高度，生成三维路径并结束。", en: "Once the goal is reached the loop exits; heights are assigned under distance and cost constraints to produce the 3D path." },
            },
          ],
        },
        supportsLabel: { zh: "细节技术支撑", en: "Technical details" },
        supports: [
          {
            tag: { zh: "支撑路径后处理", en: "Supports post-processing" },
            file: "corner-smoothing.png",
            caption: { zh: "拐点平滑示意", en: "Corner smoothing" },
            note: { zh: "（a）单拐点、（b）双拐点：用控制点把折线拐角替换为顺滑弧段，保证路径连续可操作。", en: "(a) single corner, (b) double corner: control points replace sharp corners with smooth arcs so the path stays continuous and trackable." },
          },
        ],
      },

      /* ---- 仿真平台：技术路线第五层「试验验证」的落地载体 ---- */
      platform: {
        intro: {
          zh: "技术路线最后一层「试验验证」落在自建的 Python 仿真平台上：数据预处理、风险评估、路径规划、模拟实验四个模块串成一条链路，改权重或换海域就能重跑一组对比实验。下面按链路顺序给出的就是这四步的界面。",
          en: "The final layer of the roadmap, validation, is carried by a self-built Python simulation platform: data preprocessing, risk assessment, path planning and simulation run as one chain, so reweighting or changing the area re-runs a whole comparison. The four screens below follow that chain.",
        },
        images: [
          { file: "platform-data.png", caption: { zh: "① 数据预处理界面", en: "1. Data preprocessing" } },
          { file: "platform-risk.png", caption: { zh: "② 安全风险评估界面", en: "2. Safety risk assessment" } },
          { file: "platform-main.png", caption: { zh: "③ 路径规划主界面", en: "3. Path planning" } },
          { file: "platform-simulation.png", caption: { zh: "④ 模拟实验界面", en: "4. Simulation experiment" } },
        ],
      },

      reflections: [
        {
          zh: "<strong>数据质量决定算法上限</strong>：真实海洋数据普遍存在缺失、格式异构与精度不一，只有把预处理与风险量化做扎实，后续的路径规划才有可靠的决策基础。",
          en: "<strong>Data quality sets the algorithm ceiling</strong>: real ocean data is incomplete, heterogeneous and inconsistent in precision; solid preprocessing and risk quantification are the only reliable foundation for downstream planning.",
        },
        {
          zh: "<strong>降维是应对高复杂度的关键思路</strong>：把三维搜索拆成「二维寻优 + 高度优化」两阶段，在保证路径可行与平滑的同时大幅降低了计算开销，这是工程上对效率与质量的有效平衡。",
          en: "<strong>Dimensional reduction is key to high complexity</strong>: splitting 3D search into 2D optimization plus height optimization cuts computation greatly while keeping the path feasible and smooth — an effective engineering trade-off.",
        },
        {
          zh: "<strong>对比实验与平台运维同样重要</strong>：多算法、多场景的对比验证让结论可信，而后期的数据对齐与平台稳定性保障，才让整套系统真正可复用。",
          en: "<strong>Comparison and maintenance matter too</strong>: multi-algorithm, multi-scenario validation makes conclusions credible, while late-stage data alignment and platform stability keep the whole system reusable.",
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

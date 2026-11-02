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

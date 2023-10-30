# Concepts

This documentation is intended to guide you for the extended development of GR-1 based on the SDKs provided.

Two approaches are provided to control and develop the GR-1 robot:

* Through virtual environment Webots
* Through physical robot

For the development using virtual environment, refer to [Extended Development Through Virtual Environment Webots](#extended-development-through-virtual-environment-webots).

For the development using physical robot, refer to [Extended Development Through Physical GR-1 Robot](#extended-development-through-physical-gr-1-robot).

# Fourier GR-1

Fourier GR-1 is a general-purpose humanoid robot. It is composed of up to 40 FSA joints, which can provide 230 N.m peak joint torque. The whole body controll algorithm enables 44 full-body degrees of freedom.

Its human-like agility and motion kinematics, such as:

* Straight leg walking
* Fast walking
* Agile obstacle evasion
* Steady slope ascending and descending
* Resilient impact disturbance response
* Human-robot collaboration in task execution

makes it a potential carrier for the next-generation "Embodied AI", which would combine AI technology with physical robots to provide controllable, perceptible, interactive, and mobile entities.

The Fourier GR-1 offers scalability for validating various AI models and algorithms, with significant potential in industrial, rehabilitation, home, and research applications.

![1698383000820](image/readme/1698383000820.png)

## GR-1 Specifications

| Mechanical    |                                      |
| ------------- | ------------------------------------ |
| Standing size | 1650 x 515 x 320 mm                  |
| Arm span      | 1680 mm                              |
| Net weight    | ≈ 55 kg                              |
| Materials     | Aluminum alloy, engineering plastics |

| Electrical           |         |
| -------------------- | ------- |
| Power supply voltage | 46.2 V  |
| Max.  power          | ≈ 550 W |

| Performance              |                                      |
| ------------------------ | ------------------------------------ |
| Walk speed               | 5 km/h                               |
| Single hand payload      | ≈ 3 kg                               |
| Basic computing capacity | 7-13700h 6P+8E 20 threads 1.6/5.0GHz |

| Joint                 |                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Total joint actuators | 44                                                                                                                                                                                                                                                                                                                                                                        |
| FSA actuators         | 32                                                                                                                                                                                                                                                                                                                                                                        |
| Maximum joint torque  | 230 N.m                                                                                                                                                                                                                                                                                                                                                                   |
| Operating voltage     | 12 - 60 V                                                                                                                                                                                                                                                                                                                                                                 |
| Rated voltage         | 46 V                                                                                                                                                                                                                                                                                                                                                                      |
| Max. current          | 40 A                                                                                                                                                                                                                                                                                                                                                                      |
| Joint motions         | Head: forward, backward, left, right, roll<br />Shoulder: forward, backward, left, right, roll<br />Wrist: forward, backward, left, right, roll<br />Hip: flexion and extension, inward/outward roll, side swing<br />Anckle: flexion and extension, side swing<br />Knee: flexion and extension<br />Waist: forward, backward, left, right, roll<br />Finger: grip, hold |
| Complied standards    | GB 17625.1-2012，GB 4943.1-2011，GB/T 9254-2008                                                                                                                                                                                                                                                                                                                           |

| Sensor       |           |
| :----------- | --------- |
| Depth camera | Realsense |
| IMU          | √         |

| Battery and adapter     |                    |
| :---------------------- | ------------------ |
| Battery capacity        | 483 Wh             |
| Battery type            | Lithium battery    |
| Battery nominal voltage | 40 V               |
| Charging limit voltage  | 46 V               |
| Rated capacity          | 5.2Ah 112.3Wh      |
| Cruise duration         | ≈ 60 min           |
| Walk cruise duration    | ≈ 45 min           |
| Full charge             | 315 min            |
| Adapter input           | 100-240 V, 50/60Hz |
| Adapter output          | MAX. 46 V, 2 A     |

| Operating system and connections |                                                                       |
| :------------------------------- | --------------------------------------------------------------------- |
| OS                               | Ubuntu18.04+ROS 2                                                     |
| External interfaces              | HDMIx1，Type-C x 3(fast charge，USB，peripheral extension ports)      |
| Wireless connection              | Wi-Fi，EEE 80211a/b/g/n/ac, bluetooth 4.2                             |
| Host                             | ASUS 13th Generation - Dawn X MINI Commercial and Home Office Desktop |
| Model                            | PN64171RZ                                                             |
| CPU                              | I7 13700H                                                             |
| Memory                           | 16 G                                                                  |
| SSD                              | 512 G                                                                 |

## Operation Instruction

#### Before power-on

Do the following steps before powering on the robot:

1. Inspect robot.
   Confirm that the robot is fastened to the support stand.
   Confirm that the batteries of robot and the support stand are fully chareged.
   Confirm that the robot components moves smoothly.

   ![1698657344119](image/README/1698657344119.png)
2. Inspect environment.
   Confirm that a 4 m clearance in the vicinity of the robot and the ground is level and dry.

   ![1698656074242](image/README/1698656074242.png)
3. Connect robot to monitor.
   Power on the router.
   Connect monitor with Type-C interface through the extension dock.

   ![1698657743472](image/README/1698657743472.png)
4. Prepare arms ready for calibration.
   Align shoulder grooves.
   Keep arms straight downards and palms inwards-facing.
   Ensure a 10 cm interval between palms and hips.
   Keep the robot stand up straight.

   ![1698658681237](image/README/1698658681237.png)

### Powering on Robot

1. Press actuator power-on button.
2. Press robot host power-on button.
3. Release e-stop switch.

   ![1698659185945](image/README/1698659185945.png)
4. Initialize robot arms and legs through desktop terminal.

   ![1698659528356](image/README/1698659528356.png)

### Connecting Remote Controller

遥控器网络设置中连接机器人Wi-Fi.

### Landing Robot

1. 机器人初始状态
2. 机器人落地
3. 站立模式

### Controlling Robot

1. 步态运动/原地运动
2. 遥控模式/开发者模式
3. 图传开启/图传关闭

停止机器人

遥控器停止机器人
停止后恢复

### Powering off Robot

1. 移动并固定机器人
2. 按下急停开关，关闭电机电源
3. 连接显示器
4. 关闭程序，关闭机器人电脑

## About Robot Control System (RoCS)

In general, our softwares are divided into two parts: the upper computer and the lower computer.

* The lower computer is like the cerebellum in humans, mainly responsible for motion control related tasks such as motor driving, motion algorithms, hardware drivers, etc.
* The upper computer mainly focuses on data transmission and a small amount of logic applications. For example, receiving and playing sound, video stream transmission, sending instructions, receiving status, etc.

The **Robot Control System** is responsible for the overall monitoring and remote control functions of the robot. It is divided into three layers:
**Control App** (user graphic application), **Client SDK** (client interface), **Server API** (server interface).

* **Server API** runs on the robot and is a thin data forwarding layer. It uses `http` and `websocket` protocols to forward external commands to the lower computer and various data from the robot to the outside. Although it runs inside the robot, this layer is also part of the upper computer. It is the interface between the lower computer and the outside world. Because this time it is just a forwarding layer, and considering efficiency and other users' security, it has not been open-sourced.
* **Client SDK** can use any tool (as long as it supports `http` and `websocket` protocols) to access the **Server API**. But for developers' convenience, we provide the **Client SDK**, which encapsulates the **Server API**, providing a more friendly interface. Developers can directly use the corresponding language's **Client SDK** to develop their own applications. This layer is open-source.
* **Control App** runs on terminals outside of the robot body (computers or mobile phones) and is a user graphic application. The purpose of the **Control App** is not to provide a complete consumer-oriented application, but to make all functions into a comprehensive example for developers' reference. Developers can refer to the code of the **Control App** to develop their own applications. This layer is also open-source.

All upper computer software together is called `RoCS`, which stands for:
**Ro**bot **C**ontrol **S**ystem

# Extended Development Through Virtual Environment Webots

# Extended Development Through Physical GR-1 Robot

![](pics/logo.jpg)

---

![](rocs_com.png)

## Contents

[About GR-1](contents/about_gr_1.md)
[Quick Start](contents/quick_start.md)
[Software Architecture](contents/soft_arc.md)
[Remote Application](contents/app/readme.md)
[Autonomous Control](contents/auto_ctrl.md)
[Embody](contents/embody.md)
[Motion Library](contents/motion_lib.md)

## SDKs

[Javascript SDK](https://github.com/FFTAI/rocs_client_js/blob/main/README.md)
[Python SDK](https://github.com/FFTAI/rocs_client_py/blob/main/README.md)

## Server

[Server API](server/readme.md)

## Release Notes

[v1.1 notes](release/v1.1.md)
[v0.2 notes](release/v0.2.md)
[v0.1 notes](release/v0.1.md)

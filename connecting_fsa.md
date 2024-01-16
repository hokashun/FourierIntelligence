# Connecting FSA to Robot System

Connecting the FSA to a robot is a simple process requiring only a power cable and a network cable.

## Connecting Power Cable

In the process of connecting the power cable, it's essential to note that the cable is equipped with a specialized aviation connector, featuring both positive (+) and negative (-) terminals. Refer to the following image for a visual guide on properly attaching the aviation connector to the corresponding ports.

![1701846291953](image/about_fsa/1701846291953.png)

## Connecting FSA to Network

### Wired Connection

Connecting an actuator typically involves one or two network ports, with one of them linked to the Raspberry Pi via an Ethernet cable. If the actuator is equipped with dual network ports, these can be used for cascading multiple actuators. Once the Ethernet cable is properly connected, power up the Raspberry Pi (ensuring the system has fully started) and then power up the actuator. When the actuator's signal light initiates a rapid purple breathing blink, it indicates an ongoing wired network connection. Upon successful connection, the signal light transitions to a slow purple blink. If IP allocation fails after 10 seconds, the actuator will attempt a wireless network connection, and the blinking color will change from rapid purple to rapid blue.

!> Typically, the initial connection may fail. In such cases, it is recommended to power cycle the actuator. After a restart, the actuator should reliably establish a wired network connection.

### Wireless Connection

The wireless network's SSID and password must be configured through a Python script while connected via a wired connection. Begin by connecting the actuator to the Raspberry Pi using a wired connection. Once the actuator obtains an IP address,

1. Run command `nano network_setting.py` to set the network parameters in the python file.

```python
# Set network parameters
for i in range(len(Server_IP_list)):
    network_params = {
        'DHCP_enable': True,
        'SSID': 'wifi-name',
        'password': 'wifi-password',
        'staticIP': [192, 168, 100, i + 10],
        'gateway': [192, 168, 100, 1],
        'subnet': [255, 255, 255, 0],
        'dns_1': [114, 114, 114, 114],
        'dns_2': [8, 8, 8, 8]
    }

```

2. Save the python file and run `python3 network_setting.py`.

   Upon successful execution, it will return a confirmation message.

   ```
   Send JSON Obj: {"method": "SET", "reqTarget": "/network_setting",
   "DHCP_enable": true, "SSID": "wifi-name", "password": "wifi-password"}Server received from ('10.0.0.17',
    2334):{"status":"OK","reqTarget":"/network_setting"}
   ```

 !> At this point, the Wi-Fi configuration for the actuator is successfully set. Disconnect the Ethernet cable, power cycle the actuator, and after 10 seconds, observe the signal light transitioning from a rapid purple blink to a rapid blue blink. Once the connection is established, the signal light will shift to a slow blue blink, indicating a successful connection to the wireless network.

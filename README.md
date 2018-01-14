# zway-zimipowerstrip
Z-way Mi Home Zimi Power Strip integration

# Installation

1) First make sure you have installed the `miio` app:

```shell
sudo npm install -g miio
```

2) Allow module to call the remote host command. You need to add `miio.sh` bash script to the list of syscommands

```shell
echo "/opt/z-way-server/automation/userModules/ZimiPowerStrip/miio.sh" >> /opt/z-way-server/automation/.syscommands
```

3) Make helper `miio.sh` executable
```shell
sudo chmod +x /opt/z-way-server/automation/userModules/ZimiPowerStrip/miio.sh
```


# Configuration

## ip

IP address of the zimi power strip. You can easily find all your available mi home devices by command

```shell
miio --discover
```
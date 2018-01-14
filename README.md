# zway-zimipowerstrip
Zway Mi Home Zimi Power Strip integration


1) First make sure you have installed the `miio` app:

`npm install -g miio`

2) You need to add miio bash script to syscommands

`echo "/opt/z-way-server/automation/userModules/ZimiPowerStrip/miio.sh" >> /opt/z-way-server/automation/.syscommands`

3) Make miio.sh executable

`sudo chmod +x /opt/z-way-server/automation/userModules/ZimiPowerStrip/miio.sh`

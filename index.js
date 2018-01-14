function ZimiPowerStrip (id, controller) {
    ZimiPowerStrip.super_.call(this, id, controller);


    this.zimiPowerStrip = undefined;
    this.langFile = undefined;

}

inherits(ZimiPowerStrip, AutomationModule);

_module = ZimiPowerStrip;


ZimiPowerStrip.prototype.init = function (config) {
    ZimiPowerStrip.super_.prototype.init.call(this, config);

    var self = this;

    self.zimiPowerStrip = self.createDevice('zimiPowerStrip','on');


};



ZimiPowerStrip.prototype.createDevice = function(type,defaultLevel) {
    var self = this;

    var probeType = type.toLowerCase();
    var deviceObject  = self.controller.devices.create({
        deviceId: "zimiPowerStrip_" + this.id,
        defaults: {
            metrics: {
                title: "Power Strip",
                level: defaultLevel,
                mode: 'home'
            }
        },
        overlay: {
            probeType: probeType,
            deviceType: 'switchBinary'
        },
        handler: function(command,args) {
            if (command !== 'on' && command !== 'off') {
                return;
            }

            self.switchMode(self.config.ip, command);

        },
        moduleId: self.id
    });


    return deviceObject;
};


ZimiPowerStrip.prototype.stop = function () {
    ZimiPowerStrip.super_.prototype.stop.call(this);
};




// ----------------------------------------------------------------------------
// --- Module methods
// ----------------------------------------------------------------------------


ZimiPowerStrip.prototype.switchMode = function(ip, command) {
    var self = this;


    var args = Array.prototype.slice.call(arguments);
    var systemCommand = '/opt/z-way-server/automation/' + self.moduleBasePath() + '/miio.sh ' + args.join(' ');
    self.controller.addNotification("error", systemCommand, langFile.connection, "NetAtmo");

    system(systemCommand);

    var deviceObject = self['zimiPowerStrip'];

    deviceObject.set('metrics:level',command);

};
/**
 * 联网设置模块
 * @module dial_setting
 * @class dial_setting
 */
define([ 'jquery', 'knockout', 'config/config', 'service', 'underscore' ],

function($, ko, config, service, _) {

    /**
     * 联网设置view model
     * @class DialVM
     */
	function DialVM() {
		var mode = service.getConnectionMode();
		var self = this;
		leftMenuClick("menu_settings");
		self.selectMode = ko.observable(mode.connectionMode);
        self.enableFlag = ko.observable(true);
        self.isAllowedRoaming = ko.observable(mode.isAllowedRoaming);

        self.selectMode_roam = ko.observable(mode.isAllowedRoaming);
        var originalRoaming = mode.isAllowedRoaming;

        /**
         * 修改联网模式
         * @method save
         */
        self.save = function () {
            showLoading();
            var selectMode = self.selectMode();
            var selectMode_roam = self.selectMode_roam();
            //当选择自动时，下发原先的勾选状态
            if (selectMode == 'auto_dial') {
                originalRoaming = self.selectMode_roam();
                //设置radio对应的值到vm
                if (selectMode_roam == "on")
                	self.isAllowedRoaming("on");
                else if (selectMode_roam == "off")
                	self.isAllowedRoaming("off");
            } else {
                self.isAllowedRoaming(originalRoaming);
            }
            service.setConnectionMode({
                connectionMode: selectMode,
                isAllowedRoaming: self.isAllowedRoaming()
            }, function (result) {
                if (result.result == "success") {
                    successOverlay();
                } else {
                    errorOverlay();
                }
            });
        };

        var checkbox = $(".checkboxToggle");
        self.checkEnable = function() {
            var status = service.getStatusInfo();

            if (checkConnectedStatus(status.connectStatus) || status.connectStatus == "ppp_connecting") {
                self.enableFlag(false);
                disableCheckbox(checkbox);
            }
            else {
                self.enableFlag(true);
                enableCheckbox(checkbox);
            }
        };

	}

    /**
     * 联网设置初始化
     * @method init
     */
	function init() {
		var container = $('#container');
		ko.cleanNode(container[0]);
		var vm = new DialVM();
		ko.applyBindings(vm, container[0]);

        vm.checkEnable();
        addInterval( vm.checkEnable, 1000);
	}
	
	return {
		init: init
	};
});
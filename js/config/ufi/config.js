define(function() {
    var config = {
        PRODUCT_TYPE: 'UFI',
        LOGIN_SECURITY_SUPPORT: true,
        PASSWORD_ENCODE: true,
        HAS_MULTI_SSID: false,
        IPV6_SUPPORT: true,
        WIFI_BANDWIDTH_SUPPORT: true,
        AP_STATION_SUPPORT: false,
        WIFI_BAND_SUPPORT: true,
        MAX_STATION_NUMBER: 8,
        WEBUI_TITLE: 'Mobile WiFi',
        HAS_USSD:false,// �Ƿ�֧��USSD����,
        WIFI_HAS_5G:false,
        FAST_BOOT_SUPPORT: true, //�Ƿ�֧�ֿ��ٿ���
        TURN_OFF_SUPPORT: true, //�Ƿ�֧�ֹػ�
        WIFI_SWITCH_SUPPORT: true,//�Ƿ�֧��wifi����
		SD_CARD_SUPPORT: true,//�Ƿ�֧��SD��
        SMS_MATCH_LENGTH: 11,//������ϵ�˺���ƥ��λ����11������Ŀ��8������Ŀ
        AUTO_MODES: [ {
            name: 'Automatic',
            value: 'NETWORK_auto'
        }, {
            name: '4G Only',
            value: 'Only_LTE'
        }, {
            name: '3G Only',
            value: 'TD_W'
        }, {
            name: '2G Only',
            value: 'Only_GSM'
        }]
    };

    return config;
});

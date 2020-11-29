import {
    SET_ALTERNATIVE_DNS_SERVER,
    SET_DEFAULT_GATEWAY,
    SET_ETHERNET_AUTO_DNS,
    SET_ETHERNET_AUTO_IP,
    SET_IP_ADDRESS,
    SET_PREFERRED_DNS_SERVER,
    SET_SUBNET_MASK,
    SET_WIFI_ENABLED,
    SET_WIFI_SECURITY_ENABLED,
    SET_WIFI_SECURITY_KEY, SET_WIRELESS_ALTERNATIVE_DNS_SERVER, SET_WIRELESS_AUTO_DNS,
    SET_WIRELESS_AUTO_IP, SET_WIRELESS_DEFAULT_GATEWAY, SET_WIRELESS_IP_ADDRESS,
    SET_WIRELESS_NETWORK_NAME, SET_WIRELESS_PREFERRED_DNS_SERVER, SET_WIRELESS_SUBNET_MASK
} from "./actions";

const ipAddressGroup = {
    ipAddress: '',
    subnetMask: '',
    defaultGateway: ''
}

const dnsServerGroup = {
    preferredDnsServer: '',
    alternativeDnsServer: ''
}

const flagControlGroup = {
    isAutoIpEnabled: true,
    isAutoDnsEnabled: true
}

const wirelessSettings = {
    ...flagControlGroup,
    isWifiEnabled: false,
    wirelessNetworkName: '',
    isWirelessSecurityEnabled: false,
    securityKey: '',
    ipAddressGroup,
    dnsServerGroup,
}

const ethernetSettings = {
    ...flagControlGroup,
    ipAddressGroup,
    dnsServerGroup
}

export const initialState = {
    ethernetSettings,
    wirelessSettings
}

export const formReducer = (state, {type, payload}) => {
    switch (type) {
        case SET_ETHERNET_AUTO_IP: {
            if (payload) {
                return {
                    ...state,
                    ethernetSettings: {
                        ...state.ethernetSettings,
                        isAutoIpEnabled: payload,
                        ipAddressGroup: {
                            ipAddress: '',
                            subnetMask: '',
                            defaultGateway: ''
                        }
                    }
                }
            }
            return {
                ...state,
                ethernetSettings: {
                    ...state.ethernetSettings,
                    isAutoIpEnabled: payload,

                }
            }
        }
        case SET_IP_ADDRESS:
            return {
                ...state,
                ethernetSettings: {
                    ...state.ethernetSettings,
                    ipAddressGroup: {
                        ...state.ethernetSettings.ipAddressGroup,
                        ipAddress: payload
                    }
                }
            }
        case SET_SUBNET_MASK:
            return {
                ...state,
                ethernetSettings: {
                    ...state.ethernetSettings,
                    ipAddressGroup: {
                        ...state.ethernetSettings.ipAddressGroup,
                        subnetMask: payload
                    }
                }
            }
        case SET_DEFAULT_GATEWAY:
            return {
                ...state,
                ethernetSettings: {
                    ...state.ethernetSettings,
                    ipAddressGroup: {
                        ...state.ethernetSettings.ipAddressGroup,
                        defaultGateway: payload
                    }
                }
            }
        case SET_ETHERNET_AUTO_DNS:
            if (payload) {
                return {
                    ...state,
                    ethernetSettings: {
                        ...state.ethernetSettings,
                        isAutoDnsEnabled: payload,
                        dnsServerGroup: {
                            preferredDnsServer: '',
                            alternativeDnsServer: ''
                        }
                    }
                }
            }
            return {
                ...state,
                ethernetSettings: {
                    ...state.ethernetSettings,
                    isAutoDnsEnabled: payload,
                }
            }
        case SET_PREFERRED_DNS_SERVER:
            return {
                ...state,
                ethernetSettings: {
                    ...state.ethernetSettings,
                    dnsServerGroup: {
                        ...state.ethernetSettings.dnsServerGroup,
                        preferredDnsServer: payload
                    }
                }
            }
        case SET_ALTERNATIVE_DNS_SERVER:
            return {
                ...state,
                ethernetSettings: {
                    ...state.ethernetSettings,
                    dnsServerGroup: {
                        ...state.ethernetSettings.dnsServerGroup,
                        alternativeDnsServer: payload
                    }
                }
            }
        case SET_WIFI_ENABLED:
            if (!payload) {
                return {
                    ...state,
                    wirelessSettings: {
                        ...initialState.wirelessSettings
                    }
                }
            }
            return {
                ...state,
                wirelessSettings: {
                    ...state.wirelessSettings,
                    isWifiEnabled: payload
                }
            }
        case SET_WIFI_SECURITY_ENABLED:
            if (!payload) {
                return {
                    ...state,
                    wirelessSettings: {
                        ...state.wirelessSettings,
                        isWirelessSecurityEnabled: payload,
                        securityKey: ''
                    }
                }
            }
            return {
                ...state,
                wirelessSettings: {
                    ...state.wirelessSettings,
                    isWirelessSecurityEnabled: payload
                }
            }
        case
        SET_WIRELESS_NETWORK_NAME:
            return {
                ...state,
                wirelessSettings: {
                    ...state.wirelessSettings,
                    wirelessNetworkName: payload
                }
            }
        case
        SET_WIFI_SECURITY_KEY:
            return {
                ...state,
                wirelessSettings: {
                    ...state.wirelessSettings,
                    securityKey: payload
                }
            }
        case
        SET_WIRELESS_AUTO_IP:
            if (payload) {
                return {
                    ...state,
                    wirelessSettings: {
                        ...state.wirelessSettings,
                        isAutoIpEnabled: payload,
                        ipAddressGroup: {
                            ipAddress: '',
                            subnetMask: '',
                            defaultGateway: ''
                        }
                    }
                }
            }

            return {
                ...state,
                wirelessSettings: {
                    ...state.wirelessSettings,
                    isAutoIpEnabled: payload
                }
            }
        case
        SET_WIRELESS_IP_ADDRESS:
            return {
                ...state,
                wirelessSettings: {
                    ...state.wirelessSettings,
                    ipAddressGroup: {
                        ...state.wirelessSettings.ipAddressGroup,
                        ipAddress: payload
                    }
                }
            }
        case
        SET_WIRELESS_SUBNET_MASK:
            return {
                ...state,
                wirelessSettings: {
                    ...state.wirelessSettings,
                    ipAddressGroup: {
                        ...state.wirelessSettings.ipAddressGroup,
                        subnetMask: payload
                    }
                }
            }
        case
        SET_WIRELESS_DEFAULT_GATEWAY:
            return {
                ...state,
                wirelessSettings: {
                    ...state.wirelessSettings,
                    ipAddressGroup: {
                        ...state.wirelessSettings.ipAddressGroup,
                        defaultGateway: payload
                    }
                }
            }
        case
        SET_WIRELESS_AUTO_DNS:
            if (payload) {
                return {
                    ...state,
                    wirelessSettings: {
                        ...state.wirelessSettings,
                        isAutoDnsEnabled: payload,
                        dnsServerGroup: {
                            preferredDnsServer: '',
                            alternativeDnsServer: ''
                        }
                    }
                }
            }
            return {
                ...state,
                wirelessSettings: {
                    ...state.wirelessSettings,
                    isAutoDnsEnabled: payload
                }
            }
        case
        SET_WIRELESS_PREFERRED_DNS_SERVER:
            return {
                ...state,
                wirelessSettings: {
                    ...state.wirelessSettings,
                    dnsServerGroup: {
                        ...state.wirelessSettings.dnsServerGroup,
                        preferredDnsServer: payload
                    }
                }
            }
        case
        SET_WIRELESS_ALTERNATIVE_DNS_SERVER:
            return {
                ...state,
                wirelessSettings: {
                    ...state.wirelessSettings,
                    dnsServerGroup: {
                        ...state.wirelessSettings.dnsServerGroup,
                        alternativeDnsServer: payload
                    }
                }
            }
        default:
            return state;

    }
}

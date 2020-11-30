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
    SET_WIRELESS_NETWORK_NAME, SET_WIRELESS_PREFERRED_DNS_SERVER, SET_WIRELESS_SUBNET_MASK, VALIDATE_FORM
} from "./actions";
import {validateField} from "./validateField";

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

const formState = {
    ethernetIpAddressField: '',
    ethernetSubnetMaskField: '',
    wirelessIpAddressField: '',
    wirelessSubnetMaskField: '',
    ethernetPreferredDnsServerField: '',
    ethernetAlternativeDnsServerField: '',
    wirelessPreferredDnsServerField: '',
    wirelessAlternativeDnsServerField: ''
}

export const initialState = {
    ethernetSettings,
    wirelessSettings,
    formState
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
                formState: {
                    ...state.formState,
                    ethernetIpAddressField: validateField('ethernetIpAddressField', payload)
                },
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
                formState: {
                    ...state.formState,
                    ethernetSubnetMaskField: validateField('ethernetSubnetMaskField', payload)
                },
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
                formState: {
                    ...state.formState,
                    ethernetPreferredDnsServerField: validateField('ethernetPreferredDnsServerField', payload)
                },
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
                formState: {
                    ...state.formState,
                    ethernetAlternativeDnsServerField: validateField('ethernetAlternativeDnsServerField', payload)
                },
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
                formState: {
                    ...state.formState,
                    wirelessIpAddressField: validateField('wirelessIpAddressField', payload)
                },
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
                formState: {
                    ...state.formState,
                    wirelessSubnetMaskField: validateField('wirelessSubnetMaskField', payload)
                },
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
                formState: {
                    wirelessPreferredDnsServerField: validateField('wirelessPreferredDnsServerField', payload)
                },
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
                formState: {
                    wirelessAlternativeDnsServerField: validateField('wirelessAlternativeDnsServerField', payload)
                },
                wirelessSettings: {
                    ...state.wirelessSettings,
                    dnsServerGroup: {
                        ...state.wirelessSettings.dnsServerGroup,
                        alternativeDnsServer: payload
                    }
                }
            }
        case VALIDATE_FORM:
            return {
                ...state,
                formState: {
                    ethernetIpAddressField: !state.ethernetSettings.isAutoIpEnabled && validateField('ethernetIpAddressField', state.ethernetSettings.ipAddressGroup.ipAddress),
                    ethernetSubnetMaskField: !state.ethernetSettings.isAutoIpEnabled && validateField('ethernetSubnetMaskField', state.ethernetSettings.ipAddressGroup.subnetMask),
                    wirelessIpAddressField: !state.wirelessSettings.isAutoIpEnabled && validateField('wirelessIpAddressField', state.wirelessSettings.ipAddressGroup.ipAddress),
                    wirelessSubnetMaskField: !state.wirelessSettings.isAutoIpEnabled && validateField('wirelessSubnetMaskField', state.wirelessSettings.ipAddressGroup.subnetMask),
                    ethernetPreferredDnsServerField: !state.ethernetSettings.isAutoDnsEnabled && validateField('ethernetPreferredDnsServerField', state.ethernetSettings.dnsServerGroup.preferredDnsServer),
                    ethernetAlternativeDnsServerField: !state.ethernetSettings.isAutoDnsEnabled
                        && state.formState.ethernetAlternativeDnsServerField !== ''
                        && validateField('ethernetAlternativeDnsServerField', state.ethernetSettings.dnsServerGroup.alternativeDnsServer),
                    wirelessPreferredDnsServerField: !state.wirelessSettings.isAutoDnsEnabled && validateField('wirelessPreferredDnsServerField', state.wirelessSettings.dnsServerGroup.preferredDnsServer),
                    wirelessAlternativeDnsServerField: !state.wirelessSettings.isAutoDnsEnabled
                        && state.formState.wirelessAlternativeDnsServerField !== ''
                        && validateField('wirelessAlternativeDnsServerField', state.wirelessSettings.dnsServerGroup.alternativeDnsServer)
                }
            }
        default:
            return state;

    }
}

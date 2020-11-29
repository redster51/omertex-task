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
} from "../actions";
import {useCallback} from "react";

export const useActions = (dispatch) => {

    const handleIpAddressChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_IP_ADDRESS, payload: value});
    }, [])
    const handleSubnetMaskChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_SUBNET_MASK, payload: value});
    }, []);
    const handleDefaultGatewayChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_DEFAULT_GATEWAY, payload: value});
    }, []);
    const handleDnsServerChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_ETHERNET_AUTO_DNS, payload: value === 'true'});
    }, []);
    const handlePreferredDnsServerChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_PREFERRED_DNS_SERVER, payload: value})
    }, []);
    const handleAlternativeDnsServerChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_ALTERNATIVE_DNS_SERVER, payload: value})
    }, []);
    const handleWifiNetworkNameChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_WIRELESS_NETWORK_NAME, payload: value})
    }, []);
    const handleWifiEnabledChange = useCallback(({target: {checked}}) => {
        dispatch({type: SET_WIFI_ENABLED, payload: checked})
    }, []);
    const handleWirelessSecurityEnabledChange = useCallback(({target: {checked}}) => {
        dispatch({type: SET_WIFI_SECURITY_ENABLED, payload: checked})
    }, []);
    const handleIpChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_ETHERNET_AUTO_IP, payload: value === 'true'});
    }, []);
    const handleWirelessIpChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_WIRELESS_AUTO_IP, payload: value === 'true'});
    }, []);
    const handleWifiSecurityKeyChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_WIFI_SECURITY_KEY, payload: value});
    }, []);
    const handleWirelessIpAddressChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_WIRELESS_IP_ADDRESS, payload: value});
    }, []);
    const handleWirelessSubnetMaskChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_WIRELESS_SUBNET_MASK, payload: value});
    }, []);
    const handleWirelessDefaultGatewayChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_WIRELESS_DEFAULT_GATEWAY, payload: value});
    }, []);
    const handleWirelessDnsServerChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_WIRELESS_AUTO_DNS, payload: value === 'true'});
    }, []);
    const handleWirelessPreferredDnsServerChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_WIRELESS_PREFERRED_DNS_SERVER, payload: value});
    }, []);
    const handleWirelessAlternativeDnsServerChange = useCallback(({target: {value}}) => {
        dispatch({type: SET_WIRELESS_ALTERNATIVE_DNS_SERVER, value: value});
    }, []);

    return {
        handleAlternativeDnsServerChange,
        handleWirelessAlternativeDnsServerChange,
        handleDefaultGatewayChange,
        handleWirelessPreferredDnsServerChange,
        handleWifiSecurityKeyChange,
        handleWirelessIpAddressChange,
        handleWirelessSubnetMaskChange,
        handleWirelessDefaultGatewayChange,
        handleWirelessDnsServerChange,
        handleIpAddressChange,
        handleSubnetMaskChange,
        handleDnsServerChange,
        handlePreferredDnsServerChange,
        handleIpChange,
        handleWifiNetworkNameChange,
        handleWifiEnabledChange,
        handleWirelessSecurityEnabledChange,
        handleWirelessIpChange
    };
}

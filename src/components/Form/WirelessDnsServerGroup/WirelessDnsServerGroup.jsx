import {useFormContext} from "../FormContext";
import React from "react";
import DnsServerGroup from "../DnsServerGroup";

const WirelessDnsServerGroup = () => {
    const {
        actions: {
            handleWirelessDnsServerChange,
            handleWirelessPreferredDnsServerChange,
            handleWirelessAlternativeDnsServerChange
        },
        state: {wirelessSettings}
    } = useFormContext();

    return (
        <DnsServerGroup settings={wirelessSettings}
                        isWirelessGroup
                        handleDnsServerChange={handleWirelessDnsServerChange}
                        handlePreferredDnsServerChange={handleWirelessPreferredDnsServerChange}
                        handleAlternativeDnsServerChange={handleWirelessAlternativeDnsServerChange}/>
    )
}

export default WirelessDnsServerGroup;

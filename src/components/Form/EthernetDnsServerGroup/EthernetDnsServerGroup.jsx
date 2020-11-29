import {useFormContext} from "../FormContext";
import React from "react";
import DnsServerGroup from "../DnsServerGroup";

const EthernetDnsServerGroup = () => {
    const {
        actions: {
            handleDnsServerChange,
            handlePreferredDnsServerChange,
            handleAlternativeDnsServerChange
        },
        state: {ethernetSettings}
    } = useFormContext();

    return (
        <DnsServerGroup settings={ethernetSettings}
                        handleDnsServerChange={handleDnsServerChange}
                        handlePreferredDnsServerChange={handlePreferredDnsServerChange}
                        handleAlternativeDnsServerChange={handleAlternativeDnsServerChange}/>
    )
}

export default EthernetDnsServerGroup;

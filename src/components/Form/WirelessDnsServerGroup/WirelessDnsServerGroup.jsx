import {useFormContext} from "../FormContext";
import React, {useMemo} from "react";
import DnsServerGroup from "../DnsServerGroup";

const WirelessDnsServerGroup = () => {
    const {
        actions: {
            handleWirelessDnsServerChange,
            handleWirelessPreferredDnsServerChange,
            handleWirelessAlternativeDnsServerChange
        },
        state: {
            wirelessSettings,
            formState: {
                wirelessPreferredDnsServerField,
                wirelessAlternativeDnsServerField
            }
        }
    } = useFormContext();
    const formState = useMemo(() => ({
        preferredDnsServerField: wirelessPreferredDnsServerField,
        alternativeDnsServerField: wirelessAlternativeDnsServerField
    }), [wirelessPreferredDnsServerField, wirelessAlternativeDnsServerField]);

    return (
        <DnsServerGroup settings={wirelessSettings}
                        isWirelessGroup
                        handleDnsServerChange={handleWirelessDnsServerChange}
                        handlePreferredDnsServerChange={handleWirelessPreferredDnsServerChange}
                        handleAlternativeDnsServerChange={handleWirelessAlternativeDnsServerChange}
                        formState={formState}
        />
    )
}

export default WirelessDnsServerGroup;

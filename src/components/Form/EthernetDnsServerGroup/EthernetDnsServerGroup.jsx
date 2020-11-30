import {useFormContext} from "../FormContext";
import React, {useMemo} from "react";
import DnsServerGroup from "../DnsServerGroup";

const EthernetDnsServerGroup = () => {
    const {
        actions: {
            handleDnsServerChange,
            handlePreferredDnsServerChange,
            handleAlternativeDnsServerChange
        },
        state: {
            ethernetSettings,
            formState: {
                ethernetPreferredDnsServerField,
                ethernetAlternativeDnsServerField
            }
        }
    } = useFormContext();
    const formState = useMemo(() => ({
        preferredDnsServerField: ethernetPreferredDnsServerField,
        alternativeDnsServerField: ethernetAlternativeDnsServerField
    }), [ethernetAlternativeDnsServerField, ethernetPreferredDnsServerField])

    return (
        <DnsServerGroup settings={ethernetSettings}
                        handleDnsServerChange={handleDnsServerChange}
                        handlePreferredDnsServerChange={handlePreferredDnsServerChange}
                        handleAlternativeDnsServerChange={handleAlternativeDnsServerChange}
                        formState={formState}
        />
    )
}

export default EthernetDnsServerGroup;

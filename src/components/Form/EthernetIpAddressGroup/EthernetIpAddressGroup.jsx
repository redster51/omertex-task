import IpAddressGroup from "../IpAddressGroup";
import {useFormContext} from "../FormContext";
import React, {useMemo} from "react";

const EthernetIpAddressGroup = () => {
    const {
        actions: {
            handleDefaultGatewayChange,
            handleIpAddressChange,
            handleIpChange,
            handleSubnetMaskChange
        },
        state: {ethernetSettings, formState: {ethernetIpAddressField, ethernetSubnetMaskField}}
    } = useFormContext();
    const formState = useMemo(() => ({
            ipAddressField: ethernetIpAddressField,
            subnetMaskField: ethernetSubnetMaskField
        }),
        [ethernetIpAddressField, ethernetSubnetMaskField]);

    return (
        <IpAddressGroup settings={ethernetSettings}
                        formState={formState}
                        handleIpChange={handleIpChange}
                        handleIpAddressChange={handleIpAddressChange}
                        handleSubnetMaskChange={handleSubnetMaskChange}
                        handleDefaultGatewayChange={handleDefaultGatewayChange}
        />
    )
}

export default EthernetIpAddressGroup;

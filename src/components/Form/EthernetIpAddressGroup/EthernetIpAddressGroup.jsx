import IpAddressGroup from "../IpAddressGroup";
import {useFormContext} from "../FormContext";
import React from "react";

const EthernetIpAddressGroup = () => {
    const {
        actions: {
            handleDefaultGatewayChange,
            handleIpAddressChange,
            handleIpChange,
            handleSubnetMaskChange
        },
        state: {ethernetSettings}
    } = useFormContext();
    return (
        <IpAddressGroup settings={ethernetSettings}
                        handleIpChange={handleIpChange}
                        handleIpAddressChange={handleIpAddressChange}
                        handleSubnetMaskChange={handleSubnetMaskChange}
                        handleDefaultGatewayChange={handleDefaultGatewayChange}
        />
    )
}

export default EthernetIpAddressGroup;

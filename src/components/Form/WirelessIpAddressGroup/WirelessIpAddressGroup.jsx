import IpAddressGroup from "../IpAddressGroup";
import {useFormContext} from "../FormContext";
import React from "react";

const WirelessIpAddressGroup = () => {
    const {
        actions: {
            handleWirelessDefaultGatewayChange,
            handleWirelessIpAddressChange,
            handleWirelessIpChange,
            handleWirelessSubnetMaskChange
        },
        state: {wirelessSettings}
    } = useFormContext();
    return (
        <IpAddressGroup settings={wirelessSettings}
                        isWirelessGroup
                        handleIpChange={handleWirelessIpChange}
                        handleIpAddressChange={handleWirelessIpAddressChange}
                        handleSubnetMaskChange={handleWirelessSubnetMaskChange}
                        handleDefaultGatewayChange={handleWirelessDefaultGatewayChange}
        />
    )
}

export default WirelessIpAddressGroup;

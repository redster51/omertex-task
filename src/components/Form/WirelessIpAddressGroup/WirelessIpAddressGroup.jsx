import IpAddressGroup from "../IpAddressGroup";
import {useFormContext} from "../FormContext";
import React, {useMemo} from "react";

const WirelessIpAddressGroup = () => {
    const {
        actions: {
            handleWirelessDefaultGatewayChange,
            handleWirelessIpAddressChange,
            handleWirelessIpChange,
            handleWirelessSubnetMaskChange
        },
        state: {
            wirelessSettings,
            formState: {
                wirelessIpAddressField,
                wirelessSubnetMaskField
            }
        }
    } = useFormContext();
    const formState = useMemo(() => ({
            ipAddressField: wirelessIpAddressField,
            subnetMaskField: wirelessSubnetMaskField
        }),
        [wirelessIpAddressField, wirelessSubnetMaskField]);

    return (
        <IpAddressGroup settings={wirelessSettings}
                        formState={formState}
                        isWirelessGroup
                        handleIpChange={handleWirelessIpChange}
                        handleIpAddressChange={handleWirelessIpAddressChange}
                        handleSubnetMaskChange={handleWirelessSubnetMaskChange}
                        handleDefaultGatewayChange={handleWirelessDefaultGatewayChange}
        />
    )
}

export default WirelessIpAddressGroup;

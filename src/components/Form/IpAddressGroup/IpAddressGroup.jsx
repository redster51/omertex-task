import Grid from "@material-ui/core/Grid";
import RadioGroup from "@material-ui/core/RadioGroup";
import {FormControlLabel} from "@material-ui/core";
import StyledRadio from "../../StyledRadio";
import StyledTextField from "../../StyledTextField";
import React from "react";
import {IP_VALIDATION_REG_EXP, SUBNET_MASK_VALIDATION_REG_EXP} from "../../../constants";
import useValidation from "../hooks/useValidation";
import styles from '../../../App.module.css';

const IpAddressGroup = ({
                            isWirelessGroup,
                            settings,
                            handleIpChange,
                            handleIpAddressChange,
                            handleSubnetMaskChange,
                            handleDefaultGatewayChange
                        }) => {
    const required = !settings.isAutoIpEnabled ? styles.Required : null;
    const [hasIpAddressError, onIpAddressBlur] = useValidation(settings.ipAddressGroup.ipAddress, IP_VALIDATION_REG_EXP);
    const [hasSubnetMaskError, onSubnetMaskBlur] = useValidation(settings.ipAddressGroup.subnetMask, SUBNET_MASK_VALIDATION_REG_EXP);

    return <Grid item>
        <Grid container direction={'column'} justify={'flex-start'} alignItems={'flex-start'}>
            <RadioGroup value={settings.isAutoIpEnabled} onChange={handleIpChange}>
                <FormControlLabel control={<StyledRadio/>} value={true}
                                  label={'Obtain an IP Address automatically (DHCP/BootIP)'}
                                  disabled={isWirelessGroup && !settings.isWifiEnabled}/>
                <FormControlLabel control={<StyledRadio/>} value={false}
                                  label={'Use the following IP Address:'}
                                  disabled={isWirelessGroup && !settings.isWifiEnabled}/>
            </RadioGroup>
        </Grid>
        <Grid item container justify={'flex-start'} direction={'column'} alignItems={'flex-end'}
              spacing={2}>
            <Grid item container justify={'flex-end'} alignItems={'center'}>
                <span className={required}>IP address:</span>
                <StyledTextField variant={'outlined'}
                                 disabled={settings.isAutoIpEnabled}
                                 error={hasIpAddressError}
                                 onBlur={onIpAddressBlur}
                                 helperText={hasIpAddressError && 'Invalid IP Address'}
                                 required
                                 value={settings.ipAddressGroup.ipAddress}
                                 onChange={handleIpAddressChange}
                />
            </Grid>
            <Grid item container justify={'flex-end'} alignItems={'center'}>
                <span className={required}>Subnet Mask:</span>
                <StyledTextField variant={'outlined'}
                                 disabled={settings.isAutoIpEnabled}
                                 required
                                 error={hasSubnetMaskError}
                                 onBlur={onSubnetMaskBlur}
                                 helperText={hasSubnetMaskError && 'Invalid Subnet Mask'}
                                 value={settings.ipAddressGroup.subnetMask}
                                 onChange={handleSubnetMaskChange}/>
            </Grid>
            <Grid item container justify={'flex-end'} alignItems={'center'}>
                Default Gateway:
                <StyledTextField variant={'outlined'}
                                 disabled={settings.isAutoIpEnabled}
                                 value={settings.ipAddressGroup.defaultGateway}
                                 onChange={handleDefaultGatewayChange}/>
            </Grid>
        </Grid>
    </Grid>
}

export default React.memo(IpAddressGroup);

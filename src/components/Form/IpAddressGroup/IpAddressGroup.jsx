import Grid from "@material-ui/core/Grid";
import RadioGroup from "@material-ui/core/RadioGroup";
import {FormControlLabel} from "@material-ui/core";
import StyledRadio from "../../StyledRadio";
import StyledTextField from "../../StyledTextField";
import React from "react";
import styles from '../../../App.module.css';

const IpAddressGroup = ({
                            isWirelessGroup,
                            settings,
                            handleIpChange,
                            handleIpAddressChange,
                            handleSubnetMaskChange,
                            handleDefaultGatewayChange,
                            formState
                        }) => {
    const required = !settings.isAutoIpEnabled ? styles.Required : null;

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
                                 error={!!formState.ipAddressField}
                                 helperText={formState.ipAddressField}
                                 value={settings.ipAddressGroup.ipAddress}
                                 onChange={handleIpAddressChange}
                />
            </Grid>
            <Grid item container justify={'flex-end'} alignItems={'center'}>
                <span className={required}>Subnet Mask:</span>
                <StyledTextField variant={'outlined'}
                                 disabled={!!settings.isAutoIpEnabled}
                                 error={!!formState.subnetMaskField}
                                 helperText={formState.subnetMaskField}
                                 value={settings.ipAddressGroup.subnetMask}
                                 onChange={handleSubnetMaskChange}/>
            </Grid>
            <Grid item container justify={'flex-end'} alignItems={'center'}>
                Default Gateway:
                <StyledTextField variant={'outlined'}
                                 disabled={!!settings.isAutoIpEnabled}
                                 value={settings.ipAddressGroup.defaultGateway}
                                 onChange={handleDefaultGatewayChange}/>
            </Grid>
        </Grid>
    </Grid>
}

export default React.memo(IpAddressGroup);

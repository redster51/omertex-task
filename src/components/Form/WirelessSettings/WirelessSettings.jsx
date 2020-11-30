import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import {FormControlLabel} from "@material-ui/core";
import StyledCheckBox from "../../StyledCheckBox";
import StyledSelects from "../../StyledSelects";
import {WIFI_NETWORKS} from "../../../constants";
import StyledTextField from "../../StyledTextField";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import UpdateIcon from '@material-ui/icons/Update';
import styles from "../../../App.module.css";
import {useFormContext} from "../FormContext";

const WirelessSettings = () => {
    const {
        state: {
            wirelessSettings
        },
        actions: {
            handleWifiEnabledChange,
            handleWifiNetworkNameChange,
            handleWirelessSecurityEnabledChange,
            handleWifiSecurityKeyChange
        }
    } = useFormContext();

    return <Grid item>
        <Grid container direction={'column'} justify={'flex-start'} alignItems={'flex-start'}>
            <FormGroup>
                <FormControlLabel
                    control={<StyledCheckBox checked={wirelessSettings.isWifiEnabled}
                                             onChange={handleWifiEnabledChange}/>}
                    label="Enable wifi:"
                />
            </FormGroup>
        </Grid>
        <Grid item container justify={'flex-start'} direction={'column'} alignItems={'flex-end'}
              spacing={2}>
            <Grid item container justify={'flex-end'} alignItems={'center'}>
                <span className={wirelessSettings.isWifiEnabled ? styles.Required : null}>Wireless Network Name:</span>
                <StyledSelects options={WIFI_NETWORKS}
                               disabled={!wirelessSettings.isWifiEnabled}
                               value={wirelessSettings.wirelessNetworkName}
                               handleChange={handleWifiNetworkNameChange}/>
                <IconButton component={'span'}>
                    <UpdateIcon/>
                </IconButton>
            </Grid>
        </Grid>
        <Grid container direction={'column'} justify={'flex-start'} alignItems={'flex-start'}>
            <FormGroup>
                <FormControlLabel
                    control={<StyledCheckBox checked={wirelessSettings.isWirelessSecurityEnabled}
                                             disabled={!wirelessSettings.isWifiEnabled}
                                             onChange={handleWirelessSecurityEnabledChange}/>}
                    label="Enable Wireless Security:"
                />
            </FormGroup>
        </Grid>
        <Grid item container justify={'flex-start'} direction={'column'} alignItems={'flex-end'}
              spacing={2}>
            <Grid item container justify={'flex-end'} alignItems={'center'}>
                <span
                    className={wirelessSettings.isWirelessSecurityEnabled ? styles.Required : null}>Security Key:</span>
                <StyledTextField
                    variant={'outlined'} disabled={!wirelessSettings.isWirelessSecurityEnabled}
                    value={wirelessSettings.securityKey}
                    onChange={handleWifiSecurityKeyChange}/>
            </Grid>
        </Grid>
    </Grid>
}

export default WirelessSettings;

import Grid from "@material-ui/core/Grid";
import RadioGroup from "@material-ui/core/RadioGroup";
import {FormControlLabel} from "@material-ui/core";
import StyledRadio from "../../StyledRadio";
import StyledTextField from "../../StyledTextField";
import React from "react";
import styles from "../../../App.module.css";

const DnsServerGroup = ({
                            isWirelessGroup,
                            settings,
                            handleDnsServerChange,
                            handlePreferredDnsServerChange,
                            handleAlternativeDnsServerChange,
                            formState
                        }) => {
    const required = !settings.isAutoDnsEnabled ? styles.Required : null;

    return <Grid item>
        <Grid item container direction={'column'} justify={'flex-start'} alignItems={'flex-start'}>
            <RadioGroup value={settings.isAutoDnsEnabled} onChange={handleDnsServerChange}
            >
                <FormControlLabel control={<StyledRadio/>} value={true}
                                  label={'Obtain DNS Server address automatically'}
                                  disabled={isWirelessGroup && !settings.isWifiEnabled}/>
                <FormControlLabel control={<StyledRadio/>} value={false}
                                  label={'Use the following DS server address:'}
                                  disabled={isWirelessGroup && !settings.isWifiEnabled}/>
            </RadioGroup>
        </Grid>
        <Grid item container justify={'flex-start'} direction={'column'} alignItems={'flex-end'}
              spacing={2}>
            <Grid item container justify={'flex-end'} alignItems={'center'}>
                <span className={required}>Preferred DNS Server:</span>
                <StyledTextField variant={'outlined'}
                                 error={!!formState.preferredDnsServerField}
                                 helperText={formState.preferredDnsServerField}
                                 disabled={!!settings.isAutoDnsEnabled}
                                 value={settings.dnsServerGroup.preferredDnsServer}
                                 onChange={handlePreferredDnsServerChange}
                />
            </Grid>
            <Grid item container justify={'flex-end'} alignItems={'center'}>
                Alternative DNS Server:
                <StyledTextField variant={'outlined'}
                                 disabled={!!settings.isAutoDnsEnabled}
                                 value={settings.dnsServerGroup.alternativeDnsServer}
                                 error={!!formState.alternativeDnsServerField}
                                 helperText={formState.alternativeDnsServerField}
                                 onChange={handleAlternativeDnsServerChange}
                />
            </Grid>
        </Grid>
    </Grid>
}

export default React.memo(DnsServerGroup);

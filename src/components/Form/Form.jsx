import React, {useReducer} from "react";
import Grid from "@material-ui/core/Grid";
import {formReducer, initialState} from "./reducer";
import {useActions} from "./hooks/useAction";
import WirelessSettings from "./WirelessSettings";
import StyledButton from "../StyledButton";
import {FormContext} from "./FormContext";
import WirelessIpAddressGroup from "./WirelessIpAddressGroup";
import EthernetIpAddressGroup from "./EthernetIpAddressGroup";
import EthernetDnsServerGroup from "./EthernetDnsServerGroup";
import WirelessDnsServerGroup from "./WirelessDnsServerGroup";

const Form = ({className}) => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const actions = useActions(dispatch);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.group('Data for backend:', state);
        alert('Form successfully submitted');
    }

    return (
        <FormContext.Provider value={{actions, state}}>
            <form className={className} onSubmit={handleSubmit}>
                <Grid container>
                    <Grid container spacing={2}>
                        <Grid item container xs={12} sm={6} direction={'column'}>
                            <Grid item container alignItems={'flex-start'}>
                                <b>Ethernet Settings</b>
                            </Grid>
                            <EthernetIpAddressGroup/>
                            <EthernetDnsServerGroup/>
                        </Grid>
                        <Grid item container xs={12} sm={6} direction={'column'}>
                            <Grid item container alignItems={'flex-start'}>
                                <b>Wireless Settings</b>
                            </Grid>
                            <WirelessSettings/>
                            <WirelessIpAddressGroup/>
                            <WirelessDnsServerGroup/>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={2} alignItems={'center'} direction={'row'}
                          justify={'flex-start'}>
                        <Grid item>
                            <StyledButton type="submit" variant={'contained'} color={'primary'}>Save</StyledButton>
                        </Grid>
                        <Grid item>
                            <StyledButton variant={'outlined'} color={'primary'}>Cancel</StyledButton>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </FormContext.Provider>
    )
}

export default Form;

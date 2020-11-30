import validate from "validate.js";
import {
    ALLOW_EMPTY_DNS_SERVER_CONSTRAINTS,
    DNS_SERVER_CONSTRAINTS,
    IP_ADDRESS_CONSTRAINTS,
    SUBNET_MASK_CONSTRAINTS
} from "./constants";

const FIELD_CONSTRAINTS_MAP = {
    ethernetIpAddressField: IP_ADDRESS_CONSTRAINTS,
    ethernetSubnetMaskField: SUBNET_MASK_CONSTRAINTS,
    wirelessIpAddressField: IP_ADDRESS_CONSTRAINTS,
    wirelessSubnetMaskField: SUBNET_MASK_CONSTRAINTS,
    ethernetPreferredDnsServerField: DNS_SERVER_CONSTRAINTS,
    ethernetAlternativeDnsServerField: ALLOW_EMPTY_DNS_SERVER_CONSTRAINTS,
    wirelessPreferredDnsServerField: DNS_SERVER_CONSTRAINTS,
    wirelessAlternativeDnsServerField: ALLOW_EMPTY_DNS_SERVER_CONSTRAINTS
}
export const validateField = (fieldName, fieldValue) => {
    const fieldErrorMessages = validate({[fieldName]: fieldValue}, {[fieldName]: FIELD_CONSTRAINTS_MAP[fieldName]}, {format: 'flat'});
    return fieldErrorMessages && fieldErrorMessages[0];
}

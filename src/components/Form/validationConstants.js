import {DOMAIN_REG_EXP, IP_VALIDATION_REG_EXP, SUBNET_MASK_VALIDATION_REG_EXP} from "../../constants";

const NOT_ALLOW_EMPTY_CONSTRAINT = {
    presence: {
        message: 'is required',
        allowEmpty: false
    }
}

export const IP_ADDRESS_CONSTRAINTS = {
    ...NOT_ALLOW_EMPTY_CONSTRAINT,
    format: {
        pattern: IP_VALIDATION_REG_EXP,
        message: 'is invalid'
    }

}
export const SUBNET_MASK_CONSTRAINTS = {
    ...NOT_ALLOW_EMPTY_CONSTRAINT,
    format: {
        pattern: SUBNET_MASK_VALIDATION_REG_EXP,
        message: 'is invalid'
    }
}

export const DNS_SERVER_CONSTRAINTS = {
    ...NOT_ALLOW_EMPTY_CONSTRAINT,
    format: {
        pattern: DOMAIN_REG_EXP,
        message: 'is invalid'
    }
}

export const ALLOW_EMPTY_DNS_SERVER_CONSTRAINTS = {
    ...DNS_SERVER_CONSTRAINTS,
    presence: {
        allowEmpty: true,
    },
}

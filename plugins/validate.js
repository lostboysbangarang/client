// import { extend } from "vee-validate";

// extend("my-validation", {
//   message: "This {_field_} is invalid.",
//   validate: value => {
//     // ...
//     return true;
//   }
// });
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import * as VeeValidate from 'vee-validate';
import {
	required,
	email,
	min,
	max,
	alpha_num as alphaNum,
} from 'vee-validate/dist/rules.esm'

// No message specified.
VeeValidate.Validator.extend('email', {
	...email,
	getMessage: [
        { 
            id: 0,
            txt: `Looks like I cant't quite locate the`,
        },
        { 
            id: 1,
            txt: `mailbox for your Electronic Mailing`,
        },
        { 
            id: 2,
            txt: `Address. Are ya sure you put it in right?`,
        }
    ]
})

// Override the default message.
VeeValidate.Validator.extend('required', {
	...required,
	getMessage: [
        {
            id: 0,
            txt: `Hey there, do me a favor?`
        },
        {
            id: 1,
            txt: `That field you just skipped is kind of important.`,
        },
        {
            id: 2,
            txt: `Think we can reconsider leaving this blank?`
        }
    ]
    // { 
    //     0: `Sorry, that's too short a name`,
    //     1: `I would have no idea how to`,
    //     2: `pronounce that.`
    // }
})

VeeValidate.Validator.extend('min', {
    ...min,
    getMessage: [
        {
            id: 0,
            txt: `Sorry, that's too short a name.`
        },
        {
            id: 1,
            txt: `I would have no idea how to`,
        },
        {
            id: 2,
            txt: `pronounce that.`
        }
    ]
    // { 
    //     0: `Sorry, that's too short a name`,
    //     1: `I would have no idea how to`,
    //     2: `pronounce that.`
    // }
})
VeeValidate.Validator.extend('max', {
    ...max,
    getMessage: [
        {
            id: 0,
            txt: `Woah there Partner,`
        },
        {
            id: 1,
            txt: `Why don't ya just give me a`,
        },
        {
            id: 2,
            txt: `nickname or something.`
        }
    ]
    // { 
    //     0: `Sorry, that's too short a name`,
    //     1: `I would have no idea how to`,
    //     2: `pronounce that.`
    // }
})
VeeValidate.Validator.extend('alphaNum', {
	...alphaNum,
	getMessage: [
        {
            id: 0,
            txt: `Plese only use Alpha Numeric values.`
        },
        {
            id: 1,
            txt: ``,
        },
        {
            id: 2,
            txt: ``
        }
    ]
})
// export default {
//     components: {
//         ValidationObserver,
//         ValidationProvider,
//     },
// }
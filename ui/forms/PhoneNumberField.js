import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

/**
 * @callback StringCallback
 * @param value{String}
 */

/**
 * Form field for phone number input
 *
 * @param name{String}
 * @param id{String}
 * @param value{String}
 * @param onChange{StringCallback}
 * @constructor
 */
function PhoneNumberField({name, id, value, onChange}) {
    return (
        <PhoneInput
            name={name}
            id={id}
            value={value}
            defaultCountry='US'
            onChange={onChange}
            inputClass="form-control"
        />
    )
}

export default PhoneNumberField;
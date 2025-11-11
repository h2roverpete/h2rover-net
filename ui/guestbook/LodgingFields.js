import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {useEffect} from "react";
import {ReactSelectBootstrap} from 'react-select-bootstrap';


// number of milliseconds in one day
const ONE_DAY = 1000 * 60 * 60 * 24;

const popupStyles = {
    menu: (provided) => ({
        ...provided,
        backgroundColor: 'white', // Background color of the entire popup menu
        border: '1px solid #ccc', // Border around the menu
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        zIndex: 9999, // Ensure the menu appears above other elements
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#5288f6' : 'white', // Background on hover
        color: state.isSelected ? 'black' : 'black', // Text color for selected/unselected options
        padding: '8px 12px',
        cursor: 'pointer',
        '&:active': {
            backgroundColor: state.isSelected ? '#5288f6' : '#5288f6', // Background on click
        },
    }),
    // You can also style other parts like control, singleValue, multiValue, etc.
    // control: (provided) => ({
    //   ...provided,
    //   // Add your control styles here
    // }),
};

/**
 * @class LodgingData
 *
 * @property {Date} ArrivalDate
 * @property {Date} DepartureDate
 */

/**
 * @callback DataCallback
 * @param {name:String, value:String}
 */

/**
 * Arrival and departure date fields for guest book forms.
 *
 * @param lodgingData {LodgingData|GuestFeedbackData}
 * @param onChange {DataCallback}
 * @returns {JSX.Element}
 * @constructor
 */
function LodgingFields({lodgingData, onChange}) {

    // update departure date when arrival date changes
    useEffect(() => {
        if ((lodgingData.ArrivalDate && !lodgingData.DepartureDate) || (lodgingData.ArrivalDate && lodgingData.DepartureDate && lodgingData.DepartureDate <= lodgingData.ArrivalDate)) {
            const d = new Date(new Date(lodgingData.ArrivalDate).getTime() + ONE_DAY);
            onChange({
                name: "DepartureDate",
                value: d.toISOString()
            })
        }
    }, [lodgingData.ArrivalDate, lodgingData.DepartureDate, onChange]);

    return (
        <>
            <div className="form-group mt-4">
                <label htmlFor="arrivaldate" className="form-label required">Arrival Date</label>
                <DatePicker
                    selected={lodgingData.ArrivalDate}
                    onChange={(date) => {
                        onChange?.(
                            {
                                value: date.toISOString(),
                                name: 'ArrivalDate'
                            }
                        );
                    }}
                    showMonthYearDropdown
                    id="arrivaldate"
                    className="form-control"
                    style={{marginLeft: '10px'}}
                    selectsStart={true}
                    minDate={new Date() + ONE_DAY}
                    startDate={lodgingData.ArrivalDate}
                    endDate={lodgingData.DepartureDate}
                    placeholderText={`Select a date.`}
                    required={true}
                />
            </div>
            <div className="form-group required">
                <label htmlFor="departuredate" className="form-label required">Departure Date</label>
                <DatePicker
                    selected={lodgingData.DepartureDate}
                    onChange={(date) => {
                        onChange?.(
                            {
                                value: date.toISOString(),
                                name: 'DepartureDate'
                            }
                        );
                    }}
                    showMonthYearDropdown
                    id="departuredate"
                    className="form-control"
                    style={{marginLeft: '10px'}}
                    selectsEnd={true}
                    minDate={lodgingData.ArrivalDate + ONE_DAY}
                    startDate={lodgingData.ArrivalDate}
                    endDate={lodgingData.DepartureDate}
                    placeholderText={`Select a date.`}
                    required={true}
                />
            </div>
            <div className="form-group col-4">
                <label className="control-label required" htmlFor="NumberOfGuests">Number of Guests</label>
                <ReactSelectBootstrap
                    id="NumberOfGuests"
                    name="NumberOfGuests"
                    options={[
                        {value: "1", label: "1"},
                        {value: "2", label: "2"},
                        {value: "3", label: "3"},
                        {value: "4", label: "4"}
                    ]}
                    styles={popupStyles}
                    required={true}
                    onChange={optionValue => onChange?.({
                        name: `NumberOfGuests`,
                        value: optionValue.label
                    })}
                />
            </div>
        </>
    )
}

export default LodgingFields
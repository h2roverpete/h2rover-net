import {useEffect, useState} from "react";
import GuestFields from "./GuestFields";
import GuestFeedbackFields from "./GuestFeedbackFields";


/**
 * Guest Book component
 *
 * @param db{DB}
 * @param guestBookId{Number}
 * @param guestId{Number}
 * @param guestFeedbackId{Number}
 * @param [onChange]{DataCallback}    Receives notification that guest ID or guest feedback ID was updated
 * @returns {JSX.Element}
 * @constructor
 */
function GuestBook({db, guestBookId, guestId, guestFeedbackId, onChange}) {

    // guest book configuration
    const [guestBookConfig, setGuestBookConfig] = useState(null);

    // user selected values
    const [formData, setFormData] = useState({});

    // has form been submitted?
    const [submitted, setSubmitted] = useState(false);

    // load guest book configuration when initialized
    useEffect(() => {
        if (guestBookId) {
            db.getGuestBook(guestBookId).then(data => {
                setGuestBookConfig(data);
            }).catch(error => {
                console.error(`Error getting guest book: ${error}`);
            })
        }
    }, [guestBookId, db])

    useEffect(() => {
        if (guestId) {
            db.getGuestData(guestId).then(data => {
                setFormData(prevData => {
                    return {
                        ...prevData,
                        ...data
                    }
                });
            }).catch(error => {
                console.error(`Error getting guest data: ${error}`);
            })
        }
    }, [guestId, db])

    useEffect(() => {
        if (guestFeedbackId) {
            db.getFeedbackData(guestFeedbackId).then(data => {
                setFormData(prevData => {
                    return {
                        ...prevData,
                        ...data
                    }
                });
            }).catch(error => {
                console.error(`Error getting feedback data: ${error}`);
            })
        }
    }, [guestFeedbackId, db])


    /**
     * Handle changes in response to data entry.
     *
     * @param name String
     * @param value String
     */
    function handleChange({name, value}) {
        setFormData((prevValue) => {
            const newValue = {
                ...prevValue,
                [name]: value
            }
            console.log(`Guestbook data updated: ${JSON.stringify(newValue)}`);
            return newValue;
        });
    }

    /**
     * Handle form submit.
     * @param e
     */
    function handleSubmit(e) {
        e.preventDefault();
        console.debug(`Posting guest feedback. data=${JSON.stringify(formData)}`);
        db.postGuestBookFeedback(guestBookId, formData).then(data => {
            console.debug(`GuestBook POST result: ${JSON.stringify(data)}`);
            setFormData(prevValue => {
                return {
                    ...prevValue,
                    ...data
                }
            })
            setSubmitted(true)
            onChange?.({name: 'guestId', value: data.GuestID});
            onChange?.({name: 'guestFeedbackId', value: data.GuestFeedbackID});
        })
    }

    return (
        <> {guestBookConfig && (
            <div className="guestbook">
                {submitted ? (
                    <>
                        <p>{guestBookConfig.DoneMessage}</p>
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                setSubmitted(false);
                                onChange?.({guestFeedbackId: 0});
                            }}>
                            {guestBookConfig.AgainMessage}
                        </button>
                    </>
                ) : (
                    <>
                        <p>{guestBookConfig.GuestBookMessage}</p>
                        <form
                            encType="multipart/form-data"
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                            className="needs-validation"
                            id="GuestBookForm"
                        >
                            <GuestFields
                                guestBookConfig={guestBookConfig}
                                guestData={formData}
                                onChange={handleChange}
                            />
                            <GuestFeedbackFields
                                guestBookConfig={guestBookConfig}
                                guestFeedbackData={formData}
                                onChange={handleChange}
                            />
                            <div className="form-errors" id="FormErrors"></div>
                            <div className="form-group mt-4">
                                <input type="submit" value={guestBookConfig.SubmitButtonName}
                                       className="btn btn-primary"/>
                            </div>
                        </form>
                    </>
                )}
            </div>
        )} </>
    )
}

export default GuestBook;

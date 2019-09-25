import React from 'react'

class Registration extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h1>Registration Form</h1>
                <div>
                    <form>
                        <div>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    // value
                                    // onChange
                                    />
                            </label>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Registration
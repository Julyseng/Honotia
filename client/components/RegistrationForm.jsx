import React from 'react'

class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            languages: '',
            location: '',
            occupation: '',
            support: '',
            email:''
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
        console.log(name, value)
    }

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
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                Age:
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                Languages:
                                <input
                                    type="text"
                                    id="languages"
                                    name="languages"
                                    value={this.state.languages}
                                    onChange={this.handleChange}
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                Current location:
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={this.state.location}
                                    onChange={this.handleChange}
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                Occupation:
                                <input
                                    type="text"
                                    id="occupation"
                                    name="occupation"
                                    value={this.state.occupation}
                                    onChange={this.handleChange}
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                Interests and talents:
                                <input
                                    type="text"
                                    id="interests"
                                    name="interests"
                                    value={this.state.interests}
                                    onChange={this.handleChange}
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                How I can support others:
                                <input
                                    type="text"
                                    id="support"
                                    name="support"
                                    value={this.state.support}
                                    onChange={this.handleChange}
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
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
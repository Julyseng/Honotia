import React, { Component, Fragment } from 'react'

class RefugeeRegForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            originCountry: '',
            leaveReason: '',
            need: {},
            support: {}
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        // console.log(name, value)
        if (e.target.type == 'checkbox') {
            let need = { ...this.state.need, [value]: e.target.checked }
            if (!e.target.checked) {
                delete need[value]
            }
            value = need
        }

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <h3>Former refugees and newly arrived</h3>
                    <div className="row">

                        <form onSubmit={this.handleSubmit}>

                            <div className="row">
                                <div className="input-field col s6">
                                    <input
                                        type='text'
                                        id='originCountry'
                                        name='originCountry'
                                        value={this.state.originCountry}
                                        onChange={this.handleChange}
                                    />
                                    <label>Country of origin</label>
                                </div>
                                <div className="input-field col s6">
                                    <label>Reason for leaving country of origin
                                    <select
                                        name="leaveReason"
                                        value={this.state.leaveReason}
                                        onChange={this.handleChange}>
                                        <option value="" disabled defaultValue>Choose your reason</option>
                                        <option value="conflict">War or conflict</option>
                                        <option value="religious">Religious persecution</option>
                                        <option value="political">Political persecution</option>
                                        <option value="humanRights">Human rights violations</option>
                                        <option value="economic">Economic reasons</option>
                                        <option value="climateChange">Climate change</option>
                                    </select>
                                    </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <label>
                                        How others can support me
                                        <div className="row">
                                            <div className="col s6">
                                                <label>
                                                    <input
                                                        type='checkbox'
                                                        className='filled-in'
                                                        id='needHealthcare'
                                                        name='need'
                                                        value='healthcare'
                                                        onChange={this.handleChange}
                                                    />
                                                    <span>Healthcare</span>
                                                </label>
                                            </div>
                                            <div className="col s6">
                                                <label>
                                                    <input
                                                        type='checkbox'
                                                        className='filled-in'
                                                        id='needEducation'
                                                        name='need'
                                                        value='education'
                                                        onChange={this.handleChange}
                                                    />
                                                    <span>Education</span>
                                                </label>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <label>
                                        How I can support others
                                        <div className="row">
                                            <div className="col s6">
                                                <label>
                                                    <input
                                                        type='checkbox'
                                                        className='filled-in'
                                                        id='supportHealthcare'
                                                        name='support'
                                                        value='healthcare'
                                                        onChange={this.handleChange}
                                                    />
                                                    <span>Healthcare</span>
                                                </label>
                                            </div>
                                            <div className="col s6">
                                                <label>
                                                    <input
                                                        type='checkbox'
                                                        className='filled-in'
                                                        id='supportEducation'
                                                        name='support'
                                                        value='education'
                                                        onChange={this.handleChange}
                                                    />
                                                    <span>Education</span>
                                                </label>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <br></br>
                            <br></br>
                            <input type='submit' value='Submit' />

                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default RefugeeRegForm
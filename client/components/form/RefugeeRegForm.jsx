import React, { Component, Fragment } from 'react'

class RefugeeRegForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            originCountry: '',
            leavingReason: '',
            need: {}
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        console.log(name, value)
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

                        <form className="col s12" onSubmit={this.handleSubmit}>

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
                                    <input
                                        type='text'
                                        id='leavingReason'
                                        name='leavingReason'
                                        value={this.state.leavingReason}
                                        onChange={this.handleChange}
                                    />
                                    <label>Reason for leaving</label>
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
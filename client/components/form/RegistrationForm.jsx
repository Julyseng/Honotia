import React, { Component, Fragment } from 'react'
import { register, isAuthenticated, getDecodedToken } from 'authenticare/client'
import { connect } from 'react-redux'
import M from '../../materialize-js/bin/materialize'

import { storeFormData } from '../../actions'

import RegoRefugeeForm from './RegoRefugeeForm'
// import RegoStatusForm from './RegoStatusForm'
import RegoProfileForm from './RegoProfileForm'
import RegoBioForm from './RegoBioForm'
import FormNavControllers from './FormNavControllers'

// import { postUserInfo } from '../../apiClient'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   password: '',
    //   DOB: '',
    //   location: '',
    //   languages: '',
    //   occupation: '',
    //   support: {},
    //   bio: ''
    // }
    this.state = {
      userAccount: {
        status: '',
        firstName: '',
        lastName: '',
        email: '',
        DOB: '',
        profileURL: ''
      }
    }
  }

  componentDidMount() {
    M.AutoInit()

    let datepicker = document.querySelectorAll('.datepicker')
    M.Datepicker.init(datepicker, { yearRange: [1910, 2019] })

    let textNeedCount = document.querySelectorAll('.materialize-textarea')
    M.CharacterCounter.init(textNeedCount)

    // let select = document.querySelectorAll('select')
    // M.FormSelect.init(select)
  }

  handleChange = e => {
    let { name, value } = e.target
    if (e.target.type == 'checkbox') {
      let support = { ...this.state.support, [value]: e.target.checked }
      if (!e.target.checked) {
        delete support[value]
      }
      value = support
    }

    this.setState({
      userAccount: {
        [name]: value
      }
    })
  }

  handleSelectChange = e => {
    let locationSelect = document.querySelector('.locationSelect')
    let instance = M.FormSelect.getInstance(locationSelect)
    let selected = instance.getSelectedValues()
  }

  handleSubmit = e => {
    e.preventDefault()
    // postUserInfo(this.state)
    // register(
    //   {
    //     username: this.state.userAccount.email,
    //     password: this.state.userAccount.password
    //   },
    //   { baseUrl: '/api/v1' }
    // ).then(() => {
    //   if (isAuthenticated()) {
    //     this.props.history.push('/')
    //   }
    //   //then push form data here
    // })
    // .then(() => {
    this.props.dispatch(storeFormData(this.state.userAccount))
    // })
  }

  render() {
    return (
      <Fragment>
        {/* <div className='container'> */}
        {/* <RegoStatusForm /> */}
        <div className='form-container'>
          <form onSubmit={this.handleSubmit}>
            {/* <RegoProfileForm
              handleChange={this.handleChange}
              state={this.state}
              handleSelectChange={this.handleSelectChange}
            /> */}
            {/* <RegoBioForm handleChange={this.handleChange} state={this.state} /> */}
            <RegoRefugeeForm />
            <FormNavControllers />
          </form>
        </div>
      </Fragment>
    )
  }
}

export default connect()(RegistrationForm)

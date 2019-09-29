import React, { Component, Fragment } from 'react'
import { register, isAuthenticated, getDecodedToken } from 'authenticare/client'
import { connect } from 'react-redux'
import M from '../../materialize-js/bin/materialize'

import { storeFormData } from '../../actions'

// import RefugeeRegForm from './RefugeeRegForm'
// import RegoStatusForm from './RegoStatusForm'
import RegoProfileForm from './RegoProfileForm'
import FormNavControllers from './FormNavControllers'
// import RegoBioForm from './RegoBioForm'

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
    // let datepicker = document.querySelectorAll('.datepicker')
    // M.Datepicker.init(datepicker)

    // let select = document.querySelectorAll('select')
    // M.FormSelect.init(select)

    M.AutoInit()
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
    console.log(selected)
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
        {/* <div className='row'> */}
        {/* <div className='col m8 s12  form-container'> */}
        <div className='form-container'>
          <form onSubmit={this.handleSubmit}>
            {/* <div className='row'> */}
            <RegoProfileForm
              handleChange={this.handleChange}
              state={this.state}
              handleSelectChange={this.handleSelectChange}
            />
            {/* <RegoBioForm
                    handleChange={this.handleChange}
                    state={this.state}
                  /> */}
            {/* </div> */}
            <FormNavControllers />
          </form>
        </div>
        {/* </div> */}
        {/* </div> */}
        {/* <RefugeeRegForm /> */}
      </Fragment>
    )
  }
}

export default connect()(RegistrationForm)

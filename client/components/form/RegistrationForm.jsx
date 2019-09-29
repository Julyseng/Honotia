import React, { Component, Fragment } from 'react'
import { register, isAuthenticated, getDecodedToken } from 'authenticare/client'
import { connect } from 'react-redux'
import M from '../../materialize-js/bin/materialize'

import RegoRefugeeForm from './RegoRefugeeForm'
import RegoStatusForm from './RegoStatusForm'
import RegoProfileForm from './RegoProfileForm'
import RegoBioForm from './RegoBioForm'
import FormNavControllers from './FormNavControllers'

import { registerUser } from '../../apiClient'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 3,
      previewProfileUrl: null,
      userStatus: '',
      userAccount: {
        firstName: '',
        lastName: '',
        email: '',
        DOB: '',
        currentCity: '',
        profileUrl: '',
        occupation: '',
        bio: '',
        languages: []
      },
      refugeeDetails: {
        countryOrigin: '',
        yearLeft: null,
        reasonForLeaving: [],
        yearOfArrival: null,
        needs: []
      },
      supports: []
    }
  }

  componentDidMount() {
    this.initiateMaterialize()
  }

  componentDidUpdate() {
    this.initiateMaterialize()

  }

  initiateMaterialize = () => {
    M.AutoInit()

    let datepicker = document.querySelectorAll('.datepicker')
    M.Datepicker.init(datepicker, { yearRange: [1910, 2019] })

    let textNeedCount = document.querySelectorAll('.materialize-textarea')
    M.CharacterCounter.init(textNeedCount)
  }

  handleChange = e => {
    let { name, value } = e.target
    if (e.target.type == 'checkbox') {
      let support = { ...this.state.support, [value]: e.target.checked }
      if (!e.target.checked) {
        delete support[value]
      }
      value = support
    } else if (e.target.type === 'file') {
      let fileUpload = e.target
      let reader = new FileReader()
      let file = fileUpload.files[0]

      if (file) {
        reader.readAsDataURL(file)
        this.setState({ actualFile: file })
      }

      reader.addEventListener('load', () => {
        this.setState({ previewProfileUrl: reader.result })
      })
    }

    this.setState({
      userAccount: { ...this.state.userAccount, [name]: value }
    })
  }

  handleSelectChange = e => {
    let locationSelect = document.querySelector('.locationSelect')
    let instance = M.FormSelect.getInstance(locationSelect)
    let selected = instance.getSelectedValues()
  }

  handlePrevious = () => {
    this.setState({ step: this.state.step - 1 })
  }

  handleNext = () => {
    if (this.state.step === 4) {
      this.handleSubmit({ preventDefault: () => {} })
    } else {
      this.setState({ step: this.state.step + 1 })
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    // register(
    //   {
    //     username: this.state.userAccount.email,
    //     password: this.state.userAccount.password
    //   },
    //   { baseUrl: '/api/v1' }
    // )
    //   .then(() => {
    //     if (isAuthenticated()) {
    //       this.props.history.push('/')
    //     }
    //   })
    //   .then(() => {
    //     // this.props.dispatch(storeFormData(this.state.userAccount))
    //     registerUser(this.state).then(res => {
    //       console.log(res.text)
    //     })
    //   })
  }

  render() {
    return (
      <Fragment>
        <div className='form-container'>
          <form onSubmit={this.handleSubmit}>
            {this.state.step === 1 && <RegoStatusForm />}
            {this.state.step === 2 && (
              <RegoProfileForm
                handleChange={this.handleChange}
                state={this.state}
                handleSelectChange={this.handleSelectChange}
              />
            )}
            {this.state.step === 3 && (
              <RegoBioForm
                handleChange={this.handleChange}
                state={this.state}
              />
            )}
            {this.state.step === 4 && <RegoRefugeeForm />}
            <FormNavControllers
              step={this.state.step}
              handleNext={this.handleNext}
              handlePrevious={this.handlePrevious}
            />
          </form>
        </div>
      </Fragment>
    )
  }
}

export default connect()(RegistrationForm)

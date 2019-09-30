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
      step: 1,
      previewProfileUrl: null,
      userDetails: {
        status: '',
        firstName: '',
        lastName: '',
        DOB: '',
        currentCity: '',
        occupation: '',
        bio: '',
        profileUrl: ''
      },
      refugeeDetails: {
        countryOrigin: '',
        yearLeft: null,
        reasonForLeaving: [],
        yearOfArrival: null
      },
      needs: [],
      languages: [],
      supports: [],
      password: '',
      confirmPassword: ''
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

    let textNeedCount = document.querySelectorAll('.materialize-textarea')
    M.CharacterCounter.init(textNeedCount)
  }

  setUserStatus = status => {
    this.setState({
      userDetails: { ...this.state.userDetails, status }
    })
  }

  handleChange = e => {
    let { name, value } = e.target
    console.log(value)
    if (e.target.type == 'checkbox') {
      let support = { ...this.state.support, [value]: e.target.checked }
      if (!e.target.checked) {
        delete support[value]
      }
      value = support
      console.log(value)

      // let needs = { ...this.state.needs, [value]: e.target.checked }
      // if (!e.target.checked) {
      //   delete needs[value]
      // }
      // value = needs
      // console.log(value)
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
    } else if (e.target.name === 'password') {
      this.setState({ password: e.target.value })
    } else if (e.target.name === 'confirmPassword') {
      this.setState({ confirmPassword: e.target.value })
    } 
    console.log(e.target.name, [name])
    this.setState({
      userDetails: { ...this.state.userDetails, [name]: value }
    })
  }

  handleSelectChange = e => {
    let locationSelect = document.querySelector('.locationSelect')
    let instance = M.FormSelect.getInstance(locationSelect)
    let selected = instance.getSelectedValues()
    this.setState({ userAccount: {currentCity: selected}})
    console.log(selected)
    // also need for languages, year of arrival, year left, year born
  }

  handlePrevious = e => {
    e.preventDefault()
    window.scrollTo(0, 0)
    this.setState({ step: this.state.step - 1 })
  }

  handleNext = e => {
    e.preventDefault()
    window.scrollTo(0, 0)
    this.formValidation()
    if (
      this.state.step === 4 ||
      (this.state.step === 3 && this.state.userDetails.status === 'AL')
    ) {
      this.handleSubmit({ preventDefault: () => {} })
    } else {
      this.setState({ step: this.state.step + 1 })
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    register(
      {
        username: this.state.userDetails.email,
        password: this.state.password
      },
      { baseUrl: '/api/v1' }
    )
      .then(() => {
        if (isAuthenticated()) {
          this.props.history.push('/')
        }
      })
      .then(() => {
        registerUser({
          user: this.state.userDetails,
          refugee: this.state.refugeeDetails,
          needs: this.state.needs,
          languages: this.state.languages,
          supports: this.state.supports
        }).then(res => {
          // console.log(res.text)
          this.props.history.push('/')
        })
      })
  }

  formValidation = () => {
    if (this.state.password != this.state.confirmPassword) {
      return console.log('password does not match')
    }
  }

  render() {
    const {
      handleSubmit,
      setUserStatus,
      handleChange,
      handleSelectChange,
      handleNext,
      handlePrevious,
      state
    } = this
    const { step, userDetails } = this.state

    console.log(this.state)
    return (
      <Fragment>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            {step === 1 && <RegoStatusForm setUserStatus={setUserStatus} />}
            {step === 2 && (
              <RegoProfileForm
                handleChange={handleChange}
                state={state}
                handleSelectChange={handleSelectChange}
              />
            )}
            {step === 3 && (
              <RegoBioForm handleChange={handleChange} state={state} />
            )}
            {step === 4 && userDetails.status != 'AL' && (
              <RegoRefugeeForm 
              handleChange={handleChange}
              state={state}
            />)}
            <FormNavControllers
              userStatus={userDetails.status}
              step={step}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          </form>
        </div>
      </Fragment>
    )
  }
}

export default connect()(RegistrationForm)

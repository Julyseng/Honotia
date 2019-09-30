import React, { Component, Fragment } from 'react'
import { register, isAuthenticated } from 'authenticare/client'
import M from '../../materialize-js/bin/materialize'

import RegoRefugeeForm from './RegoRefugeeForm'
import RegoStatusForm from './RegoStatusForm'
import RegoProfileForm from './RegoProfileForm'
import RegoBioForm from './RegoBioForm'
import FormNavControllers from './FormNavControllers'

import { registerUser } from '../../apiClient'

export default class RegistrationForm extends Component {
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
        email: '',
        currentCity: '',
        occupation: '',
        bio: ''
      },
      refugeeDetails: {
        countryOrigin: '',
        yearLeft: null,
        reasonForLeaving: [],
        yearOfArrival: null,
      },
      needs: [],
      languages: [],
      supports: [],
      password: '',
      confirmPassword: '',
      actualFile: undefined,
      errorMessage: null
    }
  }

  componentDidMount() {
    this.initiateMaterialize()
  }

  componentDidUpdate() {
    this.initiateMaterialize()
    M.updateTextFields()
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

  updateUserDetails = (e) => {
    this.handleChange(e, 'userDetails') 
  }

  updateRefugeeDetails = (e) => {
    this.handleChange(e, 'refugeeDetails') 
  }

  handleChange = (e, section) => {

    let { name, value } = e.target
    if (e.target.type == 'checkbox') {
      let existingState = section ? this.state[section][name] : this.state[name]
      let options = { ...existingState, [value]: e.target.checked }
      if (!e.target.checked) {
        delete options[value]
      }
      value = options
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
    if (section){
      this.setState({
        [section]: {
          ...this.state[section], 
          [name]: value
        }
      })
    }
    else {
      this.setState({
        [name]: value
      })
    }
  }

  handleSelectChangeLanguage = e => {           
    let languageSelect = e.target
    let languageInstance = M.FormSelect.getInstance(languageSelect)
    let languageSelected = languageInstance.getSelectedValues()
    this.setState({ languages: languageSelected})
  }
 
  handlePrevious = e => {
    e.preventDefault()
    window.scrollTo(0, 0)
    this.setState({ step: this.state.step - 1 })
  }

  handleNext = e => {
    e.preventDefault()
    window.scrollTo(0, 0)
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
          supports: this.state.supports,
          actualFile: this.state.actualFile
        }).then(res => {
          this.props.history.push('/')
        })
      })
  }

  formValidation = e => {
    switch (e.target.name) {
      case 'password':
      case 'confirmPassword':
        const { password, confirmPassword } = this.state
        if (password != confirmPassword) {
          e.target.classList.add('invalid')
          this.setState({ errorMessage: 'Password does not match' })
        }
        break
      default:
        this.setState({ errorMessage: null })
    }
  }

  render() {

    const {
      handleSubmit,
      setUserStatus,
      handleChange,
      handleSelectChangeLanguage,
      updateUserDetails,      
      updateRefugeeDetails,
      handleNext,
      handlePrevious,
      state
    } = this
    const { step, userDetails, errorMessage } = this.state

    return (
      <Fragment>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            {step === 1 && <RegoStatusForm setUserStatus={setUserStatus} />}
            {step === 2 && (
              <RegoProfileForm
                handleChange={handleChange}
                updateUserDetails={updateUserDetails}
                state={state}
              />
            )}
            {step === 3 && (
              <RegoBioForm
              handleChange={handleChange} 
              handleSelectChangeLanguage={handleSelectChangeLanguage} 
              updateUserDetails={updateUserDetails}
              state={state} />
            )}
            {step === 4 && userDetails.status != 'AL' && (
              <RegoRefugeeForm 
              handleChange={handleChange}
              updateRefugeeDetails={updateRefugeeDetails}
              state={state}
            />)}
            {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
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
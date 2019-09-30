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
      step: 2,
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
      actualFile: undefined
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
    this.formValidation()

    let { name, value } = e.target
    if (e.target.type == 'checkbox') {
      let supports = { ...this.state.supports, [value]: e.target.checked }
      if (!e.target.checked) {
        delete supports[value]
      }
      value = supports
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
    } else if (e.target.name === 'languages') {
      this.setState({ languages: e.target.value})
    } else if (e.target.name === 'firstName') {
      this.setState ({ firstName: e.target.value})
    } else if (e.target.name === 'lastName') {
      this.setState ({ lastName: e.target.value})
    } else if (e.target.name === 'DOB') {
      this.setState ({ DOB: e.target.value})
    } else if (e.target.name === 'email') {
      this.setState ({ email: e.target.value})
    } else if (e.target.name === 'currentCity') {
      this.setState ({ currentCity: e.target.value})
    } else if (e.target.name === 'occupation') {
      this.setState ({ occupation: e.target.value})
    } else if (e.target.name === 'bio') {
      this.setState ({ bio: e.target.value})
    } else if (e.target.name === 'countryOrigin') {
      this.setState ({ countryOrigin: e.target.value})
    } else if (e.target.name === 'yearLeft') {
      this.setState ({ yearLeft: e.target.value})
    } else if (e.target.name === 'yearOfArrival') {
      this.setState ({ yearOfArrival: e.target.value})
    } 
    // console.log(e.target.name, [name])

    this.setState({
      userDetails: { ...this.state.userDetails, [name]: value }
    })
    if(this.state.step === 4) {
      this.setState({
        refugeeDetails: { ...this.state.refugeeDetails, [name]: value }
      })
    }
  }

  handleSelectChangeAge = e => {
    let ageSelect = e.target
    let ageInstance = M.FormSelect.getInstance(ageSelect)
    let ageSelected = ageInstance.getSelectedValues()
    this.setState({ userDetails: {...this.setState.userDetails, DOB: ageSelected}})
    console.log(ageSelected)
  }

  handleSelectChangeLocation = e => {
    let locationSelect = e.target
    let locationInstance = M.FormSelect.getInstance(locationSelect)
    let locationSelected = locationInstance.getSelectedValues()
    this.setState({ userDetails: {...this.state.userDetails, currentCity: locationSelected}})
    console.log(locationSelected)
  }

  handleSelectChangeLanguage = e => {           
    let languageSelect = e.target
    let languageInstance = M.FormSelect.getInstance(languageSelect)
    let languageSelected = languageInstance.getSelectedValues()
    this.setState({ languages: languageSelected})
    console.log(languageSelected)
  }

  handleSelectChangeLeaving = e => {
    let leavingSelect = e.target
    let leavingInstance = M.FormSelect.getInstance(leavingSelect)
    let leavingSelected = leavingInstance.getSelectedValues()
    console.log(leavingSelected)
    this.setState({ refugeeDetails: {...this.state.refugeeDetails, yearLeft: leavingSelected} })
  }

  handleSelectChangeArrival = e => {
    let arrivalSelect = e.target
    let arrivalInstance = M.FormSelect.getInstance(arrivalSelect)
    let arrivalSelected = arrivalInstance.getSelectedValues()
    this.setState({ refugeeDetails: {...this.state.refugeeDetails, yearOfArrival: arrivalSelected}})
    console.log(arrivalSelected)
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

  formValidation = () => {
    if (this.state.password != this.state.confirmPassword) {
      let passwordInputs = document.querySelectorAll('input[type="password"]')
      passwordInputs.forEach(input => input.classList.add('invalid'))
    }
  }

  render() {
    const {
      handleSubmit,
      setUserStatus,
      handleChange,
      handleSelectChangeAge,
      handleSelectChangeLocation,
      handleSelectChangeLanguage,
      handleSelectChangeLeaving,
      handleSelectChangeArrival,
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
                handleSelectChangeAge={handleSelectChangeAge}
                handleSelectChangeLocation={handleSelectChangeLocation}
              />
            )}
            {step === 3 && (
              <RegoBioForm 
              handleSelectChangeLanguage={handleSelectChangeLanguage} 
              state={state} />
            )}
            {step === 4 && userDetails.status != 'AL' && (
              <RegoRefugeeForm 
              handleChange={handleChange}
              handleSelectChangeLeaving={handleSelectChangeLeaving}
              handleSelectChangeArrival={handleSelectChangeArrival}
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

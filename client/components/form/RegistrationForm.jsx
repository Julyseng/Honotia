import React, { Component, Fragment } from 'react'
import { register, isAuthenticated, getDecodedToken } from 'authenticare/client'
import { connect } from 'react-redux'
import M from '../../materialize-js/bin/materialize'

import { storeFormData } from '../../actions'

// import RefugeeRegForm from './RefugeeRegForm'
// import RegoStatusForm from './RegoStatusForm'
import RegoProfileForm from './RegoProfileForm'
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
    // console.log(getDecodedToken())
    let elems = document.querySelectorAll('.datepicker')
    M.Datepicker.init(elems)

    let elems1 = document.querySelectorAll('.dropdown-trigger')
    M.Dropdown.init(elems1)
  }

  handleChange = e => {
    let { name, value } = e.target
    // console.log(name, value)
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
      console.log(this.props)
      this.props.dispatch(storeFormData(this.state.userAccount))
    // })
  }

  render() {
    return (
      <Fragment>
        <div className='container'>
          {/* <RegoStatusForm /> */}
          <div className='row'>
            <div className='col l8'>
              <form onSubmit={this.handleSubmit}>
                <div className='row'>
                  <RegoProfileForm
                    handleChange={this.handleChange}
                    state={this.state}
                  />
                  {/* <RegoBioForm
                    handleChange={this.handleChange}
                    state={this.state}
                  /> */}
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <RefugeeRegForm /> */}
      </Fragment>
    )
  }
}

export default connect()(RegistrationForm)

import React from 'react'

export default function FormNavControllers({ handleGoBack }) {
  return (
    <div className='form-navArrows-container'>
      <button
        className='btn waves-effect waves-green'
        name='action'
        type='submit'
        onClick={handleGoBack}
      >
        Back
        <i className='material-icons left'>arrow_back</i>
      </button>

      <button
        className='btn waves-effect waves-green'
        name='action'
        type='submit'
      >
        Next
        <i className='material-icons right'>arrow_forward</i>
      </button>
    </div>
  )
}

import React from 'react'

export default function FormNavControllers({
  userStatus,
  step,
  handlePrevious,
  handleNext
}) {
  return (
    <div className='form-navArrows-container'>
      {step > 1 && (
        <button
          className='btn waves-effect waves-green btn-left'
          name='action'
          type='submit'
          onClick={handlePrevious}
        >
          Back
          <i className='material-icons left'>arrow_back</i>
        </button>
      )}
      <button
        className='btn waves-effect waves-green btn-right'
        name='action'
        type='submit'
        onClick={handleNext}
      >
        {step === 4 || (step === 3 && userStatus === 'AL') ? 'Submit' : 'Next'}
        <i className='material-icons right'>arrow_forward</i>
      </button>
      {/* )} */}
    </div>
  )
}

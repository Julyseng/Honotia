import React from 'react'

export default function FormNavControllers({
  step,
  handlePrevious,
  handleNext
}) {
  return (
    <div className='form-navArrows-container'>
      {step > 1 && (
        <button
          className='btn waves-effect waves-green'
          name='action'
          type='submit'
          onClick={handlePrevious}
        >
          Back
          <i className='material-icons left'>arrow_back</i>
        </button>
      )}
      <button
        className='btn waves-effect waves-green'
        name='action'
        type='submit'
        onClick={handleNext}
      >
        {step === 4 ? 'Submit' : 'Next'}
        <i className='material-icons right'>arrow_forward</i>
      </button>
      {/* )} */}
    </div>
  )
}

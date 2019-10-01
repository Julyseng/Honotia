import React from 'react'

export default function ResourcesPage() {
  return (
    <div>
      <h2>Resources</h2>
      <div className="container">
        <div className="section">
          <div className="row">
            
            <div className="col s12 m4">
              <a href="#">
                  <div className="card red lighten-2">
                  <div className="card-content white-text">
                    <h3 className="card-title resources-h3"><i className="material-icons">business_center</i>Employment</h3>
                  </div>
                </div>
              </a>
            </div>

            <div className="col s12 m4">
              <a href="#">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <h3 className="card-title resources-h3"><i className="material-icons">local_library</i>Education</h3>
                  </div>
                </div>
              </a>
            </div>

            <div className="col s12 m4">
              <a href="#">
                <div className="card grey lighten-1">
                  <div className="card-content white-text">
                    <h3 className="card-title resources-h3"><i className="material-icons">local_hospital</i>Healthcare</h3>
                  </div>
                </div>
              </a>
            </div>

            <div className="col s12 m4">
              <a href="#">
                <div className="card grey lighten-1">
                  <div className="card-content white-text">
                    <h3 className="card-title resources-h3"><i className="material-icons">directions_transit</i>Transport</h3>
                  </div>
                </div>
              </a>
            </div>

            <div className="col s12 m4">
              <a href="#">
                <div className="card amber accent-2">
                  <div className="card-content white-text">
                    <h3 className="card-title resources-h3"><i className="material-icons">home</i>Housing</h3>
                  </div>
                </div>
              </a>
            </div>

            <div className="col s12 m4">
              <a href="#">
                <div className="card green lighten-2">
                  <div className="card-content white-text">
                    <h3 className="card-title resources-h3"><i className="material-icons">person</i>Your Rights</h3>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

function Checkbox() {
  return (
    <div>
      {/* Card */}
      <div className="card shadow-sm">
        <div className="card-body">

          <h4 className="mb-4">Employee Management</h4>

          {/* Form Section */}
          <div className="row g-3 align-items-end">

            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </div>

            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Mobile"
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">Country</label>
              <select className="form-select">
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">State</label>
              <select className="form-select">
                <option value="">Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="California">California</option>
                <option value="London">London</option>
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">District</label>
              <select className="form-select">
                <option value="">Select District</option>
                <option value="Pune">Pune</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Westminster">Westminster</option>
              </select>
            </div>

            {/* Gender */}
            <div className="col-md-3">
              <label className="form-label d-block">Gender</label>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="Male"
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="Female"
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="other"
                  value="Other"
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>

            {/* Languages Checkbox */}
            <div className="col-md-6">
              <label className="form-label d-block">Languages</label>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="hindi"
                  value="Hindi"
                />
                <label className="form-check-label" htmlFor="hindi">
                  Hindi
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="english"
                  value="English"
                />
                <label className="form-check-label" htmlFor="english">
                  English
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="marathi"
                  value="Marathi"
                />
                <label className="form-check-label" htmlFor="marathi">
                  Marathi
                </label>
              </div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary btn-sm">
                Add Employee
              </button>
            </div>

          </div>

          <hr className="my-4" />

          {/* Table Section */}
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>District</th>
                  <th>Language</th>
                  <th>Gender</th>
                  <th style={{ width: "150px" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Checkbox
import React from 'react'

function Multiselect() {
  return (
    <div>
              {/* Card */}
      <div className="card shadow-sm">
        <div className="card-body">

          <h4 className="mb-4">Employee Management</h4>

          {/* Form Section */}
          <div className="row g-3 align-items-end">

            <div className="col-md-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">Mobile</label>
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
                  value="Male"
                />
                <label className="form-check-label">
                  Male
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Female"
                />
                <label className="form-check-label">
                  Female
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Other"
                />
                <label className="form-check-label">
                  Other
                </label>
              </div>
            </div>

            {/* Languages Dropdown */}
           <div className="col-md-3">
  <label className="form-label d-block">Language</label>

  <details>
    <summary>Select Language</summary>
    <div>
      <div>
        <input type="checkbox" id="lang1" />
        <label htmlFor="lang1">Hindi</label>
      </div>
      <div>
        <input type="checkbox" id="lang2" />
        <label htmlFor="lang2">English</label>
      </div>
      <div>
        <input type="checkbox" id="lang3" />
        <label htmlFor="lang3">Marathi</label>
      </div>
      <div>
        <input type="checkbox" id="lang4" />
        <label htmlFor="lang4">Spanish</label>
      </div>
    </div>
  </details>
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

export default Multiselect
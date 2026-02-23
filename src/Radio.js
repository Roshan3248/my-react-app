function Radio() {
  return (
    <div className="container mt-4">

      {/* Card */}
      <div className="card shadow-sm">
        <div className="card-body">

          <h4 className="mb-4">Student Management</h4>

          {/* Form Section */}
          <div className="row g-3 align-items-end">

            <div className="col-md-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">Mobile</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter mobile"
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

            <div className="col-12">
              <button className="btn btn-primary btn-sm">
                Save Student
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
                  <th>Gender</th>
                  <th style={{ width: "150px" }}>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Anil</td>
                  <td>anil@test.com</td>
                  <td>9876543210</td>
                  <td>India</td>
                  <td>Maharashtra</td>
                  <td>Pune</td>
                  <td>Male</td>
                  <td>
                    <button className="btn btn-warning me-2">
                      Edit
                    </button>
                    <button className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Sita</td>
                  <td>sita@test.com</td>
                  <td>9876501234</td>
                  <td>USA</td>
                  <td>California</td>
                  <td>Los Angeles</td>
                  <td>Female</td>
                  <td>
                    <button className="btn btn-warning me-2">
                      Edit
                    </button>
                    <button className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Radio;

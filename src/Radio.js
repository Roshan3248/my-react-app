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
              <input
                type="text"
                className="form-control"
                placeholder="Enter country"
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">State</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter state"
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">District</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter district"
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Gender</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Gender"
              />
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

              <thead className="table-dark">
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
              </tbody>

            </table>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Radio;

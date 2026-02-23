
function Searching() {
  return (
    <div className="container my-5">
      <div className="card shadow-sm">
        <div className="card-body">

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="mb-0 fw-bold">Student Management</h4>
            <button className="btn btn-success">
              + Add Student
            </button>
          </div>

          {/* Search Section */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search students..."
                />
                <button className="btn btn-primary">
                  Search
                </button>
              </div>
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
                  <th>Country</th>
                  <th>State</th>
                  <th>District</th>
                  <th>Gender</th>
                  <th style={{ width: "150px" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-semibold">Aarav</td>
                  <td>aarav@mail.com</td>
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
                  <td className="fw-semibold">Sophia</td>
                  <td>sophia@mail.com</td>
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

export default Searching;
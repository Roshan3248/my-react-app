function Export() {
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
             <button className="btn btn-secondary">
                ⬇ Export
              </button>
            </div>

         {/* Search + Records Per Page */}
          <div className="row mb-3 align-items-center">
            <div className="col-md-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name or email"
                />
                <button className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>

            <div className="col-md-4 offset-md-4 text-md-end mt-3 mt-md-0">
              <div className="d-inline-flex align-items-center">
                <label className="me-2 mb-0">Records per page:</label>
                <select className="form-select w-auto">
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="my-3" />
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
                  <td className="fw-semibold">John A. Doe</td>
                  <td>john.doe@example.com</td>
                  <td>USA</td>
                  <td>California</td>
                  <td>Los Angeles</td>
                  <td>Male</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2">
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="fw-semibold">Jane Smith</td>
                  <td>jane.smith@example.com</td>
                  <td>India</td>
                  <td>Maharashtra</td>
                  <td>Mumbai</td>
                  <td>Female</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2">
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm">
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

export default Export;
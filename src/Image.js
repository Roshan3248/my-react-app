function Image() {
  return (
    <div className="container mt-4">

      {/* Card */}
      <div className="card shadow-sm">
        <div className="card-body">

          <h4 className="mb-4">Customer Management</h4>

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

            <div className="col-md-4">
              <label className="form-label">Upload Image</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
              />
            </div>

            <div className="col-12">
              <button className="btn btn-primary btn-sm">
                Add Customer
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
                  <th>Image</th>
                  <th style={{ width: "150px" }}>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>9876543210</td>
                  <td>No Image</td>
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
                  <td>John Doe</td>
                  <td>Jane Smith</td>
                  <td>9876501234</td>
                  <td>No Image</td>
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

export default Image;

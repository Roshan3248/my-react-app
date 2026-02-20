import React from "react";

function Country() {
  return (
    <div className="container mt-4">
      
      <div className="card shadow-sm">
        <div className="card-body">

          <h4 className="mb-4">Manage Countries</h4>

          {/* Input Section */}
          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter country name"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-4">
            <button className="btn btn-primary me-2">
              Save Country
            </button>
            <button className="btn btn-secondary">
              Reset
            </button>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>
                    <button className="btn btn-warning me-4">
                      Edit
                    </button>
                    <button className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Nepal</td>
                  <td>
                    <button className="btn btn-warning me-4">
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

export default Country;

function AdminDashboard() {
    return (
      <div className="d-flex" style={{ minHeight: "80vh" }}>
        {/* Sidebar */}
        <div
          className="bg-dark text-white p-3"
          style={{ width: "220px", minHeight: "100vh" }}
        >
          <h3>Admin Panel</h3>
          <ul className="nav flex-column mt-4">
            <li className="nav-item mb-2">
              <a className="nav-link text-white" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-white" href="#">
                Products
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-white" href="#">
                Orders
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-white" href="#">
                Users
              </a>
            </li>
          </ul>
        </div>
  
        {/* Main Content */}
        <div className="flex-grow-1 p-4">
          <h2>Dashboard</h2>
          <div className="row mt-3">
            <div className="col-md-4 mb-3">
              <div className="card text-white bg-primary">
                <div className="card-body">
                  <h5 className="card-title">Total Products</h5>
                  <p className="card-text">4</p>
                </div>
              </div>
            </div>
  
            <div className="col-md-4 mb-3">
              <div className="card text-white bg-success">
                <div className="card-body">
                  <h5 className="card-title">Total Orders</h5>
                  <p className="card-text">12</p>
                </div>
              </div>
            </div>
  
            <div className="col-md-4 mb-3">
              <div className="card text-white bg-warning">
                <div className="card-body">
                  <h5 className="card-title">Total Users</h5>
                  <p className="card-text">8</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Table */}
          <div className="mt-4">
            <h4>Recent Orders</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>User</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>101</td>
                  <td>Raju</td>
                  <td>Red T-Shirt</td>
                  <td>$20</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Aisha</td>
                  <td>Blue Jeans</td>
                  <td>$40</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Ali</td>
                  <td>Black Shoes</td>
                  <td>$60</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default AdminDashboard;
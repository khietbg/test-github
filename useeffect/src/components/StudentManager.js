import React from "react";
import { useState } from "react";

const StudentManager = () => {
  // chức năng thêm mới sinh viên
  const [lists, setLists] = useState([
    {
      id: "SV001",
      name: "Nguyen van A",
      age: 20,
      sex: true,
      birthDate: "2000-1-1",
      birthPlace: "HN",
      address: "so 1 pham hung",
    },
    {
      id: "SV002",
      name: "Nguyen thi C",
      age: 22,
      sex: false,
      birthDate: "2001-1-1",
      birthPlace: "DN",
      address: "so 3 ly tu trong",
    },
    {
      id: "SV003",
      name: "Nguyen van B",
      age: 30,
      sex: true,
      birthDate: "2004-1-1",
      birthPlace: "HCM",
      address: "so 2 nguyen trai",
    },
  ]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLists((prev) => [
      ...prev,
      {
        id: id,
        name: name,
        age: age,
        sex: sex == "true" ? true : false,
        birthDate: birthDate,
        birthPlace: birthPlace,
        address: address,
      },
    ]);
  };
  // chức năng xoá
  const handleDel = (idDel) => {
    console.log(lists);
    const new_list = lists.filter((item) => item.id !== idDel);
    console.log(new_list);
    setLists(new_list);
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <div className="card-header">
              <div className="row">
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-primary btn-icon-text"
                  >
                    Thêm mới sinh viên
                  </button>
                </div>
                <div className="col-6">
                  <form className="search-form" action="#">
                    <i className="icon-search" />
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search Here"
                      title="Search here"
                    />
                    <button className="btn btn-primary btn-icon-text">
                      Tìm kiếm
                    </button>
                  </form>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <select className="form-control">
                    <option value="">Sắp xếp</option>
                    <option value="">ABC def</option>
                    <option value="">ABC def</option>
                    <option value="">ABC def</option>
                  </select>
                </div>
              </div>
            </div>
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <div className="card-body">
              <h3 className="card-title">Danh sách sinh viên</h3>
              <div className="table-responsive pt-3">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Mã sinh viên</th>
                      <th>Tên sinh viên</th>
                      <th>Tuổi</th>
                      <th>Giới tính</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lists.map((current, i) => {
                      return (
                        <tr key={current.id}>
                          <td>{i + 1}</td>
                          <td>{current.id}</td>
                          <td>{current.name}</td>
                          <td>{current.age}</td>
                          <td>{current.sex ? "nam" : "nu"}</td>
                          <td>
                            <div className="template-demo">
                              <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                              >
                                Xem
                              </button>
                              <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                              >
                                Sửa
                              </button>
                              <button
                                onClick={() => handleDel(current.id)}
                                type="button"
                                className="btn btn-success btn-icon-text"
                              >
                                Xóa
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        <div className="col-5 grid-margin">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Thông tin sinh viên</h3>
              <form className="form-sample">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Mã sinh viên
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="id"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Tên sinh viên
                  </label>
                  <div className="col-sm-9">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="form-control"
                      name="name"
                      value={name}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Tuổi</label>
                  <div className="col-sm-9">
                    {" "}
                    <input
                      onChange={(e) => setAge(e.target.value)}
                      type="text"
                      className="form-control"
                      name="age"
                      value={age}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Giới tính</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="sex"
                      value={sex}
                      onChange={(e) => setSex(e.target.value)}
                    >
                      <option value={true}>nam</option>
                      <option value={false}>nu</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Ngày sinh</label>
                  <div className="col-sm-9">
                    <input
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="form-control"
                      placeholder="dd/mm/yyyy"
                      name="birthDate"
                      value={birthDate}
                      type="date"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Nơi sinh</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="birthPlace"
                      value={birthPlace}
                      onChange={(e) => setBirthPlace(e.target.value)}
                    >
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                      <option value="Đà Nẵng">Đà Nẵng</option>
                      <option value="Quảng Ninh">Quảng Ninh</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Địa chỉ</label>
                  <div className="col-sm-9">
                    <textarea
                      className="form-control"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary me-2"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
};

export default StudentManager;

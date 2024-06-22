import React, { useState } from "react";
<<<<<<< HEAD
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
=======
>>>>>>> 8428b238f8a6752f3381a837f7b17a21f262cf9e
import './ReportForm.css';

export default function ReportForm() {
  const [reportType, setReportType] = useState("lost");
  const [location, setLocation] = useState("Location");
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("Category");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("Add description..");
  const [images, setImages] = useState([]);

  function clearForm() {
    setReportType("lost");
    setLocation("Location");
    setCategory("Category");
    setItemName("");
    setDate("");
    setDesc("Add description..");
    setImages([]);
  }

  function handleImage(e) {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setImages(imageUrls);
  }

  async function handleReport(e) {
    e.preventDefault();
    const report = {
      location,
      itemName,
      category,
      date,
      description: desc,
      images
    };

    const endpoint = reportType === "lost" ? 'http://localhost:5000/api/reports/lost' : 'http://localhost:5000/api/reports/found';

    try {
      await axios.post(endpoint, report);
      toast.success("Item reported successfully!", {
        position: toast.POSITION.TOP_CENTER
      });
      clearForm();
    } catch (error) {
      toast.error("There was an error submitting the report!", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }

  return (
    <div className="Form">
<<<<<<< HEAD
      <ToastContainer />
      <div className="container1">
        <div className="form-wrapper">
          <h1 className="form-title">REPORT AN ITEM</h1>
          <form onSubmit={handleReport} className="form">
            <div className="checkbox">
              <label>
                <input
                  type="radio"
                  value="lost"
                  checked={reportType === "lost"}
                  onChange={() => setReportType("lost")}
                />
                Lost
              </label>
              <label>
                <input
                  type="radio"
                  value="found"
                  checked={reportType === "found"}
                  onChange={() => setReportType("found")}
                />
                Found
              </label>
            </div>
=======
      <div className="container1 dark-mode">
        <div className="form-wrapper">
          <h1 className="form-title">REPORT A LOST ITEM</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleReport();
            }}
            className="form"
          >
>>>>>>> 8428b238f8a6752f3381a837f7b17a21f262cf9e
            <input
              type="text"
              value={itemName}
              placeholder="Item Name"
              id="itemName"
              onChange={(e) => setItemName(e.target.value)}
              className="input"
            />
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input"
            >
<<<<<<< HEAD
              <option value="Location" disabled>
=======
              <option value={location} disabled>
>>>>>>> 8428b238f8a6752f3381a837f7b17a21f262cf9e
                Location
              </option>
              <option value="sportRoom">Sport Room</option>
              <option value="cricketGround">Cricket Ground</option>
              <option value="cafe10">Cafe 10</option>
              <option value="cafe1">Cafe 1</option>
              <option value="cadLab">Cad Lab</option>
            </select>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input"
            >
<<<<<<< HEAD
              <option value="Category" disabled>
=======
              <option value={category} disabled>
>>>>>>> 8428b238f8a6752f3381a837f7b17a21f262cf9e
                Category
              </option>
              <option value="electronic">Electronic</option>
              <option value="notebook">Stationery</option>
              <option value="mobile">Mobile</option>
              <option value="laptop">Laptop</option>
              <option value="sport">Sport</option>
            </select>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              id="date"
              className="input"
            />
            <input
              type="file"
              id="file"
              multiple
<<<<<<< HEAD
              onChange={handleImage}
=======
              onSubmit={handleImage}
>>>>>>> 8428b238f8a6752f3381a837f7b17a21f262cf9e
              className="input"
            />
            <textarea
              placeholder={desc}
              onChange={(e) => setDesc(e.target.value)}
              id="description"
              rows="5"
              className="textarea"
            ></textarea>
            <div className="button-group">
              <input
                type="submit"
<<<<<<< HEAD
                value="Submit"
                className="button21 submit-button"
=======
                onClick={handleReport}
                className="button21 submit-button"
                value="Submit"
>>>>>>> 8428b238f8a6752f3381a837f7b17a21f262cf9e
              />
              <input
                type="button"
                value="Cancel"
                onClick={clearForm}
                className="button21 cancel-button"
              />
            </div>
          </form>
        </div>
        <div className="balls21">
          <div className="ball21 ballz1"></div>
          <div className="ball21 ballz2"></div>
        </div>
      </div>
    </div>
  );
}

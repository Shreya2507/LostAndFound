import { useState } from "react";
import "./ReportForm.css";

export default function ReportForm() {
  const [location, setLocation] = useState("Location");
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("Category");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("Add description..");

  function clearForm() {
    setLocation("Location");
    setCategory("Category");
    setItemName("");
    setDate("");
    setDesc("Add description..");
  }

  function handleImage() {
    // handle image upload
  }

  function handleReport(report) {
    console.log(report);
  }

  return (
    <div className="Form">
      <div className="container1">
        <div className="form-wrapper">
          <h1 className="form-title">REPORT A LOST ITEM</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleReport();
            }}
            className="form"
          >
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
              <option value={location} disabled>
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
              <option value={category} disabled>
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
              onSubmit={handleImage}
              className="input"
            />
            <textarea
              placeholder={desc}
              onChange={(e) => setDesc(e.target.value)}
              id="description"
              rows="5"
              className="textarea"
            ></textarea>
            <div className="checkbox">
              <span>
                <input type="checkbox" name="" id="foundCheck" />
                Found Item
              </span>
              <span>
                <input type="checkbox" name="" id="lostCheck" />
                Lost Item
              </span>
            </div>
            <div className="button-group">
              <input
                type="submit"
                onClick={handleReport}
                className="button21 submit-button"
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

import { useState } from "react";

export default function ReportForm() {
  const [location, setLocation] = useState("Location");
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("Category");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("Add description..");

  function clearForm() {
    setLocation("Location");
    setCategory("Category")
    setItemName("")
    setDate("")
    setDesc("Add description..")

  }
  function handleImage(params) {
    
  }

  function handleReport(report) {
    console.log(report);
  }
  return (
    <>
      <div className=" flex justify-center p-4 min-h-screen">
        <div className="bg-white rounded-xl max-w-[600px] h-full flex flex-col gap-4 justify-center items-center">
          <h1 className="text-2xl font-bold m-5">REPORT A LOST ITEM</h1>
          <form
            onSubmit={(e) => {e.preventDefault(); handleReport()}}
            className="flex flex-col px-5 gap-2 "
          >
            <input
              type="text"
              value={itemName}
              placeholder="Item Name"
              id="itemName"
              onChange={(e) => setItemName(e.target.value)}
              className="placeholder:text-black bg-gray-100 px-3 py-2 rounded-2xl outline-none text-lg"
            />
            <select
              name=""
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-gray-100 px-3 py-2  rounded-2xl outline-none text-lg"
            >
              <option value={location}  disabled>
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
              className="bg-gray-100 px-3 py-2 rounded-2xl outline-none text-lg"
            >
              <option value={category} disabled >
                Category
              </option>
              <option value="electronic">Electronic</option>
              <option value="notebook">Stationery </option>
              <option value="mobile">Mobile</option>
              <option value="laptop">Laptop</option>
              <option value="sport">Sport</option>
            </select>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              id="date"
              className="bg-gray-100 px-3 py-2 rounded-2xl outline-none text-lg"
            />
            <input
              type="file"
              id="file"
              multiple
              onSubmit={handleImage}
              className="bg-gray-100 px-3 py-2 rounded-2xl outline-none text-lg"
            />
            <textarea
              // value={desc}
              placeholder={desc}
              onChange={(e) => setDesc(e.target.value)}
              id="description"
              rows="5"
              className="placeholder:text-black bg-gray-100 px-3 py-2 rounded-2xl outline-none text-lg"
            ></textarea>
            <div className="flex gap-2 px-3 py-5">
              <input
                type="button"
                value="Cancel"
                onClick={clearForm}
                className="w-full bg-gray-600 rounded-xl text-white text-xl font-bold py-1 hover:opacity-80"
              />
              <input
                type="submit"
                onClick={handleReport}
                className="w-full bg-primary rounded-xl text-white text-xl  font-bold py-1 hover:opacity-80"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

import { useNavigate } from "react-router-dom";
import "./CreateAd.css";
import { useState } from "react";

const data = [
  { value: "textad", image: "/textAd.png", title: "Text Ad" },
  { value: "mediaad", image: "/mediaAd.png", title: "Media Ad" },
];

export default function CreateAd() {
  const [value, setvalue] = useState("");
  const navigate = useNavigate();

  const handleChange = (value) => {
    setvalue(value);
    console.log(value);
  };

  const submitHandler = () => {
    navigate(`/${value}`);
  };

  return (
    <div className="conta">
      <h5 className="title">Create Ads</h5>
      <div className="cardContainer">
        {data.map((item) => (
          <div
            className="card text-center"
            key={item.value}
            onClick={() => handleChange(item.value)}
          >
            <div className="card-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item.value}
                  id={`flexCheckDefault-${item.value}`}
                  checked={value === item.value}
                  onChange={() => {}}
                />
              </div>
            </div>
            <img src={item.image} className="card-img" alt="Media Ad" />
            <div className="card-footer">
              <h6 className="card-subtitle mt-2 text-body-secondary">Create</h6>
              <h5 className="card-title">{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className={value === "" ? "btn btn-primary disabled" : "btn btn-primary"}
        onClick={submitHandler}
      >
        Next
      </button>
    </div>
  );
}

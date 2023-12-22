import "./TextAd.css";
import { useNavigate } from "react-router-dom";

export default function TextAd() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/createad");
  };

  const handleSubmit = () => {
    const hiddenButtonRef = document.getElementById("hiddenButtonRef");
    setTimeout(() => {
      hiddenButtonRef.click();
      navigate("/createad");
    }, 800);
  };

  return (
    <div className="cont">
      <h5 class="title">Create Text & Media</h5>
      <div class="container p-0 text-center">
        <div class="row">
          <div class="col-6">
            <div class="row">
              <div class="mb-3">
                <label for="heading01" class="form-label">
                  Heading 01{" "}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="heading01"
                  placeholder="Add a heading that would make users interested"
                />
              </div>
            </div>
            <div class="row">
              <div class="mb-3">
                <label for="heading02" class="form-label">
                  Heading 02{" "}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="heading02"
                  placeholder="Add a heading that would make users interested"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="mb-3">
              <label for="description01" class="form-label">
                Description01
              </label>
              <textarea
                class="form-control"
                id="description01"
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="mb-3">
              <label
                for="businessName"
                class="form-label"
                className="businessLabel"
              >
                Business Name{" "}
              </label>
              <input
                type="text"
                class="form-control"
                id="businessName"
                placeholder="Add your business name"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="mb-3">
              <label
                for="buttonLabel"
                class="form-label"
                className="businessLabel"
              >
                Button Label{" "}
              </label>
              <select
                class="form-select form-select-md"
                aria-label="Default select example"
              >
                <option value="" disabled selected hidden>
                  Select a label that best suits your Ad
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="mb-3">
            <label for="websiteUrl" class="form-label" className="websiteLabel">
              Website URL{" "}
            </label>
            <input
              type="text"
              class="form-control"
              id="websiteUrl"
              placeholder="Add the URL of the landing page you want to redirect users to"
            />
          </div>
        </div>
      </div>
      <div className="buttonCont">
        <button type="button" class="btn1 " onClick={handleBack}>
          Back
        </button>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#submitModal"
          class="btn1"
          className="submitbtn"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

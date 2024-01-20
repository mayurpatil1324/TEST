import { Card, Form, Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;

const Dropdown = ({ label, options, value, onChange, disabled }) => (
  <div>
    <label>{label}:</label>
    <Select value={value} onChange={onChange} disabled={disabled}>
      <Option value="" disabled>
        Select {label}
      </Option>
      {options.map((option) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  </div>
);

const CountryStateCityDropdowns = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (value) => {
    console.log("Country changed:", value);
    setSelectedCountry(value);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (value) => {
    console.log("State changed:", value);
    setSelectedState(value);
    setSelectedCity("");
  };

  const handleCityChange = (value) => {
    console.log("City changed:", value);
    setSelectedCity(value);
  };

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
    alert(
      `Country: ${selectedCountry}\nState: ${selectedState}\nCity: ${selectedCity}`
    );
  };

  return (
    <>
      <Card style={{ width: "100%" }}>
        <div
          className="text"
          style={{ fontSize: `25px`, paddingBottom:"50px" }}
        >
          <strong>Create database for country , state , city table </strong>
        </div>
        <Form onFinish={handleSubmit} style={{ width: "500px" }}>
          <Form.Item>
            <Dropdown
              label="Country"
              options={["India", "Canada"]}
              value={selectedCountry}
              onChange={handleCountryChange}
            />
          </Form.Item>

          <Form.Item>
            <Dropdown
              label="State"
              options={
                selectedCountry === "India"
                  ? ["Mumbai", "Delhi", "Uttar Pradesh"]
                  : ["Ontario", "Quebec", "British Columbia"]
              }
              value={selectedState}
              onChange={handleStateChange}
              disabled={!selectedCountry}
            />
          </Form.Item>

          <Form.Item>
            <Dropdown
              label="City"
              options={
                selectedState === "Mumbai"
                  ? ["Mumbai Central", "Bandra"]
                  : selectedState === "Delhi"
                  ? ["New Delhi", "Old Delhi"]
                  : selectedState === "Uttar Pradesh"
                  ? ["Noida", "Greater Noida"]
                  : selectedState === "Ontario"
                  ? ["Toronto", "Ottawa"]
                  : selectedState === "Quebec"
                  ? ["Montreal", "Quebec City"]
                  : selectedState === "British Columbia"
                  ? ["Vancouver", "Victoria"]
                  : []
              }
              value={selectedCity}
              onChange={handleCityChange}
              disabled={!selectedState}
            />
          </Form.Item>

          <Form.Item>
            <button type="submit">Submit</button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default CountryStateCityDropdowns;

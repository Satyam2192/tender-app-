import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { RiBuilding2Line, RiMapPin2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Forms = () => {
  const [email, setEmail] = useState("");
  const [ptelfax, setPtelfax] = useState("");

  const [summary, setsummary] = useState("");
  const [sector, setsector] = useState("");
  const [cpvno, setcpvno] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [procurementSummarySummary, setprocurementSummarySummary] =
    useState("");
  const [procurementSummaryDeadline, setprocurementSummaryDeadline] =
    useState("");
  const [noticeType, setnoticeType] = useState("");
  const [totNo, settotNo] = useState("");
  const [documentNo, setdocumentNo] = useState("");
  const [competition, setcompetition] = useState("");
  const [financier, setfinancier] = useState("");
  const [ownership, setownership] = useState("");
  const [tenderValue, settenderValue] = useState("");
  const [purchaser, setpurchaser] = useState("");
  const [paddress, setpaddress] = useState("");
  const [pcity, setpcity] = useState("");
  const [pdistrict, setpdistrict] = useState("");
  const [pstate, setpstate] = useState("");
  const [ppin, setppin] = useState("");
  const [url, seturl] = useState("");
  const [description, setdescription] = useState("");
  const [organization, setorganization] = useState("");
  const [tenderDetailNoticeType, settenderDetailNoticeType] = useState("");
  const [userCategory, setuserCategory] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      summary: summary,
      sector: sector,
      cpvNo: cpvno,
      country: country,
      state: state,
      city: city,
      procurementSummarySummary: procurementSummarySummary,
      procurementSummaryDeadline: procurementSummaryDeadline,
      noticeType: noticeType,
      totNo: totNo,
      documentNo: documentNo,
      competition: competition,
      financier: financier,
      ownership: ownership,
      tenderValue: tenderValue,
      purchaser: purchaser,
      paddress: paddress,
      pcity: pcity,
      pdistrict: pdistrict,
      pstate: pstate,
      ppin: ppin,
      ptelfax: ptelfax,
      email: email,
      url: url,
      description: description,
      organization: organization,
      tenderDetailNoticeType: tenderDetailNoticeType,
      userCategory:userCategory,
    };

    const config = {
      headers: {
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY0OTFiY2Y5ZWUyMmQ3OWNjMzA5MWQzOCIsInVzZXJJZCI6IjgzOGRmZSIsIm5hbWUiOiJNYXJpZSBQZXJleiIsImVtYWlsIjoiYXNobGV5aG9kc0BleGFtcGxlLm9yZyIsInVzZXJSb2xlIjoidXNlciIsInVzZXJDYXRlZ29yeSI6ImNvbnRyYWN0b3IiLCJwaG9uZU51bWJlciI6IjAwMTEzLTE5Mi01NjU0eDQ4MSIsImNvdW50cnkiOiJCb3Rzd2FuYSIsInN0YXRlIjoiTWlzc291cmkiLCJjaXR5IjoiS2VubmV0aGhhdmVuIiwiX192IjowfSwiaWF0IjoxNjg3MjcyNzQ4fQ.7CoLHhsy6sGqnrbXUNFCLgAB__8n0Tc28vv8kFHDgzU",
      },
    };

    axios
      .post(
        "http://localhost:5000/apiTender/tenderdetails/add-tender",
        data,
        config
      )
      .then(function (response) {
        console.log(response.data);
        alert("Sent tender details")
      })
      .catch(function (error) {
        console.log(error);
        error("error in sending request", error);
      });
  };

  const [isVisible, setIsVisible] = useState(false);

  const showForm = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container mx-auto py-8 md:max-w-7xl">
      <div className="space-y-8">
        <div className="flex items-center justify-center flex-col md:flex-row">
          <form
            onSubmit={handleFormSubmit}
            className="md:w-2/3 mx-auto border-2 p-8 rounded-xl shadow-md"
          >
            <h1 className="text-3xl font-bold text-center mb-4">
              Tenders Forms
            </h1>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Summery
              </label>
              <input
                type="text"
                id="summary"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={summary}
                onChange={(e) => setsummary(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Sector
              </label>
              <input
                type="text"
                id="sector"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={sector}
                onChange={(e) => setsector(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="flex items-center">
                <AiOutlinePhone className="mr-2" />
                CPV No
              </label>
              <input
                type="text"
                id="cpvno"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={cpvno}
                onChange={(e) => setcpvno(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Country
              </label>
              <input
                type="text"
                id="country"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={country}
                onChange={(e) => setcountry(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                State
              </label>
              <input
                type="text"
                id="state"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={state}
                onChange={(e) => setstate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                City
              </label>
              <input
                type="text"
                id="city"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={city}
                onChange={(e) => setcity(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Procurement Summary
              </label>
              <input
                type="text"
                id="procurementSummarySummary"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={procurementSummarySummary}
                onChange={(e) => setprocurementSummarySummary(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Procurement Deadline
              </label>
              <input
                type="text"
                id="procurementSummaryDeadline"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={procurementSummaryDeadline}
                onChange={(e) => setprocurementSummaryDeadline(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Notice type
              </label>
              <input
                type="text"
                id="noticeType"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={noticeType}
                onChange={(e) => setnoticeType(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                TOT NO
              </label>
              <input
                type="text"
                id="totNo"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={totNo}
                onChange={(e) => settotNo(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Documentation NO
              </label>
              <input
                type="text"
                id="documentNo"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={documentNo}
                onChange={(e) => setdocumentNo(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Competition
              </label>
              <input
                type="text"
                id="competition"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={competition}
                onChange={(e) => setcompetition(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Financer
              </label>
              <input
                type="text"
                id="financier"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={financier}
                onChange={(e) => setfinancier(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                ownership
              </label>
              <input
                type="text"
                id="ownership"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={ownership}
                onChange={(e) => setownership(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Tender Value
              </label>
              <input
                type="text"
                id="tenderValue"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={tenderValue}
                onChange={(e) => settenderValue(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                purchaser
              </label>
              <input
                type="text"
                id="purchaser"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={purchaser}
                onChange={(e) => setpurchaser(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Address
              </label>
              <input
                type="text"
                id="paddress"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={paddress}
                onChange={(e) => setpaddress(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                City
              </label>
              <input
                type="text"
                id="pcity"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={pcity}
                onChange={(e) => setpcity(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Distic
              </label>
              <input
                type="text"
                id="pdistrict"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={pdistrict}
                onChange={(e) => setpdistrict(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                state
              </label>
              <input
                type="text"
                id="pstate"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={pstate}
                onChange={(e) => setpstate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Pin Code
              </label>
              <input
                type="text"
                id="ppin"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={ppin}
                onChange={(e) => setppin(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Fax
              </label>
              <input
                type="text"
                id="ptelfax"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={ptelfax}
                onChange={(e) => setPtelfax(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                URL
              </label>

              <input
                type="text"
                id="url"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={url}
                onChange={(e) => seturl(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Description
              </label>
              <input
                type="text"
                id="description"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="organization" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Organization
              </label>
              <input
                type="text"
                id="organization"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={organization}
                onChange={(e) => setorganization(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="notice" className="flex items-center">
                <RiBuilding2Line className="mr-2" />
                Tender Notice Type
              </label>
              <input
                type="text"
                id="tenderDetailNoticeType"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={tenderDetailNoticeType}
                onChange={(e) => settenderDetailNoticeType(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="services" className="flex items-center">
                Select
              </label>
              <select
                id="services"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={userCategory}
                onChange={(e) => setuserCategory(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="contracter">Contracter</option>
                <option value="subcontractor">Sub Contractor</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300 w-full"
              
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Forms;






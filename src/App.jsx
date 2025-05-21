import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const App = () => {
  const printRef = React.useRef(null);

  const farmerData = {
    applicationId: "APP123456",
    registrationDate: "2025-05-20",
    firstName: "Pranjal",
    middleName: "Ramesh",
    lastName: "Kuhikar",
    mobileNumber: "9876543210",
    dateOfBirth: "1990-01-01",
    adharNo: "1234-5678-9012",
    gender: "Male",
    isNewBusiness: true,
    address: {
      village: "Some Village",
      pincode: "440001",
      residentialType: "Own",
      streetAddress: "123 Main St",
    },
    farmerType: "Small",
    cropsGrown: ["Wheat", "Rice"],
    sellingLocation: "Local Market",
    landDetails: {
      state: "Maharashtra",
      district: "Nagpur",
      taluka: "Hingna",
      village: "Some Village",
      surveyNumber: "SN123",
      subSurveyNumber: "SSN456",
      ownerName: "Pranjal Kuhikar",
    },
    cscCentre: "CSC123",
  };

  // Helper to split content into two pages and add both to PDF
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) return;
    // Get both page divs
    const pages = element.querySelectorAll(".pdf-page");
    const pdf = new jsPDF({ unit: "px", format: [794, 1123] });
    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL("image/png");
      if (i > 0) pdf.addPage([794, 1123], "p");
      pdf.addImage(imgData, "PNG", 0, 0, 794, 1123);
    }
    pdf.save(
      `${farmerData.firstName || "Farmer"}_${farmerData.lastName || ""}.pdf`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Farmer Registry PDF Download</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded mb-4"
        onClick={handleDownloadPdf}
      >
        Download Farmer PDF
      </button>
      {/* Hidden printable content */}
      <div
        ref={printRef}
        style={{ position: "absolute", left: "-9999px", top: 0 }}
      >
        {/* Page 1 */}
        <div
          className="pdf-page"
          style={{ width: 794, height: 1123, background: "#fff" }}
        >
          <main
            style={{
              minHeight: "100vh",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px 0",
              fontFamily: "Roboto,Arial,sans-serif",
              position: "relative",
            }}
          >
            <section
              style={{
                position: "relative",
                width: 794,
                height: 1123,
                border: "1px solid #d1d5db",
                padding: 24,
                background: "#fff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                fontFamily: "Roboto,Arial,sans-serif",
              }}
            >
              <header
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    color: "#000",
                    textTransform: "uppercase",
                    fontFamily: "Roboto,Arial,sans-serif",
                  }}
                >
                  <img
                    src="/twcgroup1.png"
                    alt="Logo"
                    style={{ width: 240, height: "auto" }}
                  />
                  <span>Farmer Registry Enrollement Data</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      background: "#d1d5db",
                    }}
                  ></div>
                  <span
                    style={{
                      fontSize: 14,
                      textTransform: "uppercase",
                      fontFamily: "Roboto,Arial,sans-serif",
                    }}
                  >
                    Farmer Photograph
                  </span>
                </div>
              </header>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  textTransform: "uppercase",
                  fontFamily: "Roboto,Arial,sans-serif",
                  marginBottom: 16,
                }}
              >
                <span>
                  <b>Application ID:</b> {farmerData.applicationId}
                </span>
                <span>
                  <b>Registration Date:</b> {farmerData.registrationDate}
                </span>
              </div>
              {/* Profile Details */}
              <section
                style={{
                  marginBottom: 16,
                  fontFamily: "Roboto,Arial,sans-serif",
                }}
              >
                <h2
                  style={{
                    fontSize: 12,
                    background: "#e5e5e5",
                    padding: "2px 8px",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    fontFamily: "Roboto,Arial,sans-serif",
                    marginBottom: 4,
                  }}
                >
                  Profile Details
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    border: "1px solid #d1d5db",
                    textTransform: "uppercase",
                    fontFamily: "Roboto,Arial,sans-serif",
                    fontSize: 12,
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>First Name</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.firstName}
                    </span>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Middle Name</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.middleName}
                    </span>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Last Name</strong>
                    <span style={{ marginLeft: 8 }}>{farmerData.lastName}</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    border: "1px solid #d1d5db",
                    textTransform: "uppercase",
                    fontFamily: "Roboto,Arial,sans-serif",
                    fontSize: 12,
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Mobile Number</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.mobileNumber}
                    </span>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Date of Birth</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.dateOfBirth}
                    </span>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Aadhar No.</strong>
                    <span style={{ marginLeft: 8 }}>{farmerData.adharNo}</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    border: "1px solid #d1d5db",
                    textTransform: "uppercase",
                    fontFamily: "Roboto,Arial,sans-serif",
                    fontSize: 12,
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Gender</strong>
                    <span style={{ marginLeft: 8 }}>{farmerData.gender}</span>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>New Business</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.isNewBusiness ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </section>
              {/* Address Details */}
              <section
                style={{
                  marginBottom: 16,
                  fontFamily: "Roboto,Arial,sans-serif",
                }}
              >
                <h2
                  style={{
                    fontSize: 12,
                    background: "#e5e5e5",
                    padding: "2px 8px",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    fontFamily: "Roboto,Arial,sans-serif",
                    marginBottom: 4,
                  }}
                >
                  Address Details
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    border: "1px solid #d1d5db",
                    textTransform: "uppercase",
                    fontFamily: "Roboto,Arial,sans-serif",
                    fontSize: 12,
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Village</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.address.village}
                    </span>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Pincode</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.address.pincode}
                    </span>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Residential Type</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.address.residentialType}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #d1d5db",
                    textTransform: "uppercase",
                    fontFamily: "Roboto,Arial,sans-serif",
                    fontSize: 12,
                    padding: 8,
                    width: "100%",
                    flexBasis: "100%",
                    maxWidth: "100%",
                  }}
                >
                  <strong>Street Address</strong>
                  <span style={{ marginLeft: 8 }}>
                    {farmerData.address.streetAddress}
                  </span>
                </div>
              </section>
              {/* Farm Details */}
              <section
                style={{
                  marginBottom: 16,
                  fontFamily: "Roboto,Arial,sans-serif",
                }}
              >
                <h2
                  style={{
                    fontSize: 12,
                    background: "#e5e5e5",
                    padding: "2px 8px",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    fontFamily: "Roboto,Arial,sans-serif",
                    marginBottom: 4,
                  }}
                >
                  Farm Details
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    border: "1px solid #d1d5db",
                    textTransform: "uppercase",
                    fontFamily: "Roboto,Arial,sans-serif",
                    fontSize: 12,
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Farmer Type</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.farmerType}
                    </span>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Crops Grown</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.cropsGrown.join(", ")}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    border: "1px solid #d1d5db",
                    textTransform: "uppercase",
                    fontFamily: "Roboto,Arial,sans-serif",
                    fontSize: 12,
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Where Do You Sell</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.sellingLocation}
                    </span>
                  </div>
                </div>
              </section>
              {/* Land Details */}
              <section
                style={{
                  marginBottom: 16,
                  fontFamily: "Roboto,Arial,sans-serif",
                }}
              >
                <h2
                  style={{
                    fontSize: 12,
                    background: "#e5e5e5",
                    padding: "2px 8px",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    fontFamily: "Roboto,Arial,sans-serif",
                    marginBottom: 4,
                  }}
                >
                  Land Details
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    border: "1px solid #d1d5db",
                    textTransform: "uppercase",
                    fontFamily: "Roboto,Arial,sans-serif",
                    fontSize: 12,
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>State</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.landDetails.state}
                    </span>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>District</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.landDetails.district}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    border: "1px solid #d1d5db",
                    textTransform: "uppercase",
                    fontFamily: "Roboto,Arial,sans-serif",
                    fontSize: 12,
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Taluka</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.landDetails.taluka}
                    </span>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Village</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.landDetails.village}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    border: "1px solid #d1d5db",
                    textTransform: "uppercase",
                    fontFamily: "Roboto,Arial,sans-serif",
                    fontSize: 12,
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Survey No.</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.landDetails.surveyNumber}
                    </span>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minWidth: "33%",
                      padding: 8,
                      borderRight: "1px solid #d1d5db",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>Sub-Survey No.</strong>
                    <span style={{ marginLeft: 8 }}>
                      {farmerData.landDetails.subSurveyNumber}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #d1d5db",
                    textTransform: "uppercase",
                    fontFamily: "Roboto,Arial,sans-serif",
                    fontSize: 12,
                    padding: 8,
                    width: "100%",
                    flexBasis: "100%",
                    maxWidth: "100%",
                  }}
                >
                  <strong>Owner's Name</strong>
                  <span style={{ marginLeft: 8 }}>
                    {farmerData.landDetails.ownerName}
                  </span>
                </div>
              </section>
              {/* Footer */}
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  right: 8,
                  transform: "translateX(-50%)",
                  color: "#000",
                  textTransform: "uppercase",
                  fontFamily: "Roboto,Arial,sans-serif",
                }}
              >
                Page 1/2
              </div>
            </section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <img
                src="/TAC 1.png"
                alt="Logo"
                style={{
                  width: 384,
                  height: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0.1,
                }}
              />
            </div>
          </main>
        </div>
        {/* Page 2 */}
        <div
          className="pdf-page"
          style={{ width: 794, height: 1123, background: "#fff" }}
        >
          <div
            style={{
              position: "relative",
              background: "#fff",
              width: 794,
              height: 1123,
              margin: "0 auto",
              padding: 40,
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              border: "1px solid #d1d5db",
              fontFamily: "Roboto,Arial,sans-serif",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2
                style={{
                  color: "#000",
                  fontWeight: 600,
                  fontSize: 16,
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Farmer Consent Declaration
              </h2>
              <p
                style={{
                  lineHeight: 1.5,
                  color: "#000",
                  fontSize: 12,
                  margin: 0,
                }}
              >
                I agree to share my identity information, address details, and
                land details along with my Aadhaar number with the{" "}
                <strong>TAC</strong> (Technology Agriculture Creater) for the
                purpose of farmer registration. I also give consent to the TAC
                to seed my data into the Farmer Registry and other relevant
                databases to be used for the TAC farmer registration, for
                delivering various current and upcoming services, and for TAC
                mobile application access.
              </p>
              <ul
                style={{
                  listStyle: "disc inside",
                  color: "#000",
                  fontSize: 12,
                  margin: 0,
                  paddingLeft: 20,
                }}
              >
                <li>
                  Consent for Data Collection: I hereby give my consent to share
                  my personal information including Aadhaar number, photograph,
                  and land ownership documents (7/12 extract) with{" "}
                  <strong>TAC</strong> for verification and registration
                  purposes.
                </li>
                <li>
                  Purpose of Data Usage: I understand that the above information
                  is being collected solely for the purpose of identity
                  verification and confirmation of agricultural land ownership
                  for availing services offered by <strong>TAC</strong>.
                </li>
                <li>
                  Voluntary Submission: I acknowledge that the submission of
                  Aadhaar and land documents is voluntary and necessary for the
                  full use of this platform's services.
                </li>
                <li>
                  Privacy and Data Protection Assurance: <strong>TAC</strong>{" "}
                  ensures that all submitted data will be securely stored and
                  will not be shared with third parties without my consent,
                  except as required by law.
                </li>
                <li>
                  Photograph Usage Declaration: I agree to the use of my
                  photograph for identification purposes within the app and for
                  verification by authorized personnel.
                </li>
                <li>
                  Accuracy of Information: I declare that all information and
                  documents provided by me are true and correct to the best of
                  my knowledge. If any discrepancy is found, I shall be held
                  responsible.
                </li>
                <li>
                  Right to Withdraw: I understand that I have the right to
                  withdraw my consent at any time by deleting my account or
                  contacting support, but this may limit access to certain
                  services.
                </li>
                <li>
                  Legal Compliance: I agree to abide by the rules and terms of
                  service as stated by <strong>TAC</strong>, and understand that
                  any misuse or fraud submissions may result in legal action.
                </li>
              </ul>
              <div
                style={{
                  border: "1px solid #d1d5db",
                  padding: 16,
                  marginTop: 16,
                  fontSize: 12,
                  color: "#000",
                }}
              >
                <p style={{ margin: 0 }}>
                  "I hereby declare that I have read and understood the above
                  information, and I willingly agree to the collection and use
                  of my Aadhaar details, photograph, and 7/12 land document for
                  verification purposes as per the terms and conditions of the{" "}
                  <strong>TAC</strong>."
                </p>
                <div
                  style={{
                    marginTop: 16,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <div>
                    <strong>Farmer Name:</strong> {farmerData.firstName}{" "}
                    {farmerData.lastName}
                  </div>
                  <div>
                    <strong>Mobile Number:</strong> {farmerData.mobileNumber}
                  </div>
                  <div>
                    <strong>CSC Centre:</strong> {farmerData.cscCentre}
                  </div>
                </div>
              </div>
            </div>
            <footer
              style={{
                position: "absolute",
                bottom: 16,
                right: 8,
                transform: "translateX(-50%)",
                fontSize: 9.3,
                color: "#000",
                textTransform: "uppercase",
              }}
            >
              Page 2/2
            </footer>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                inset: 0,
              }}
            >
              <img
                src="/TAC 1.png"
                alt="Logo"
                style={{ width: 384, height: "auto", opacity: 0.1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

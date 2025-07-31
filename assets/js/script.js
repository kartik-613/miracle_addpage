function logFormData() {
  const name = document.getElementById("form-field-name").value;
  const mobile = document.getElementById("form-field-field_3fb6f82").value;
  const email = document.getElementById("form-field-email").value;
  const city = document.getElementById("form-field-field_91678e6").value;
  const course = document.getElementById("form-field-course").value;

    const button = document.getElementById("submitButton");
  const buttonText = document.getElementById("buttonText");

    // Disable button and show loader
  button.disabled = true;
  buttonText.innerHTML = "⏳ Submitting...";

  const htmlTable = `
             <table border="1" cellpadding="5" style="border-collapse: collapse;">
               <tr>
                 <th>Field</th>
                 <th>Value</th>
               </tr>
               <tr>
                 <td><strong>Name</strong></td>
                 <td>${name}</td>
               </tr>
               <tr>
                 <td><strong>Mobile</strong></td>
                 <td>${mobile}</td>
               </tr>
               <tr>
                 <td><strong>Email</strong></td>
                 <td>${email}</td>
               </tr>
               <tr>
                 <td><strong>City</strong></td>
                 <td>${city}</td>
               </tr>
               <tr>
                 <td><strong>Course</strong></td>
                 <td>${course}</td>
               </tr>
             </table>
           `;

  // Build query parameters
  const subject = course;
  const text = `Name: ${name}, Mobile Number: ${mobile}, Email: ${email}, City: ${city}, Course: ${course}`;

  const apiUrl = `https://hotelapi.shriyanshnath.com/api/SEND_ENQUIRY_MAIL?subject=${subject}&text=${text}`;
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      alert("Form submitted successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    })
    .finally(()=>{
      button.disabled = false;
  buttonText.innerHTML = "Get One-On-One Career Guidance";
    })
}

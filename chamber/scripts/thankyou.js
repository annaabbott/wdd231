const formInfo = new URLSearchParams( window.location.search);
console.log(formInfo);


let formResults = document.querySelector("#formResults");
let applicationResults = document.createElement("p");
applicationResults.textContent = `Application submitted for ${formInfo.get("firstName")} ${formInfo.get("lastName")}.`;
formResults.append(applicationResults);
let applicantEmail = document.createElement("p");
applicantEmail.textContent = `Email Address: ${formInfo.get("email")}`;
formResults.append(applicantEmail);
let applicantPhone = document.createElement("p");
applicantPhone.textContent = `Phone Number: ${formInfo.get("phone")}`;
formResults.append(applicantPhone);
let applicantBusiness = document.createElement("p");
applicantBusiness.textContent = `Business Organization: ${formInfo.get("businessName")}`;
formResults.append(applicantBusiness);
let timeApplied = document.createElement("p");
timeApplied.textContent = `Application sent on ${formInfo.get("timestamp")}`;
formResults.append(timeApplied);
const formInfo = new URLSearchParams( window.location.search);
console.log(formInfo);

export function displayFormData() {
    let formResults = document.querySelector("#formResults");
    let applicationResults = document.createElement("p");
    applicationResults.textContent = `Welcome, ${formInfo.get("firstName")} ${formInfo.get("lastName")}. We're so glad to have you join our group. We will send your newsletter to ${formInfo.get("email")}`;
    formResults.append(applicationResults);
   }

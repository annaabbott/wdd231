const dialogBoxText = document.querySelector("#modal div");

{
  /* <h2>Fall 2025 Reunion</h2>
<p>Date: Oct 4, 2025</p>
<p>Time: 6-8:30 pm</p>
<div>
    <p>Mesa AZ meetinghouse</p>
    <address>address</address>
</div> */
}
export function createModal0() {
  const modal = document.querySelector("#modal");
  dialogBoxText.textContent = "";
  let modalh2 = document.createElement("h2");
  modalh2.textContent = `Spring 2026 Reunion`;
  dialogBoxText.appendChild(modalh2);
  let modalDate = document.createElement("p");
  modalDate.textContent = `Date: April 3, 2025`;
  modalh2.append(modalDate);
  let modalTime = document.createElement("p");
  modalTime.textContent = `Time: 6-8:30 PM`;
  modalDate.append(modalTime);
  let modalDiv = document.createElement("div");
  modalTime.append(modalDiv);
  let modalLocation = document.createElement("p");
  modalLocation.textContent = `Gilbert 9th Ward Meetinghouse`;
  modalDiv.appendChild(modalLocation);
  let modalAddress = document.createElement("address");
  modalAddress.textContent = `1150 East Guadalupe Gilbert, AZ 85234`;
  modalDiv.appendChild(modalAddress);
  modal.showModal();
}

export function createModal1() {
    const modal = document.querySelector("#modal");
    dialogBoxText.textContent = "";
    let modalh2 = document.createElement("h2");
    modalh2.textContent = `Fall 2025 Reunion`;
    dialogBoxText.appendChild(modalh2);
    let modalDate = document.createElement("p");
    modalDate.textContent = `Date: October 4, 2025`;
    modalh2.append(modalDate);
    let modalTime = document.createElement("p");
    modalTime.textContent = `Time: 6-8:30 PM`;
    modalDate.append(modalTime);
    let modalDiv = document.createElement("div");
    modalTime.append(modalDiv);
    let modalLocation = document.createElement("p");
    modalLocation.textContent = `Southgate Ward Meetinghouse`;
    modalDiv.appendChild(modalLocation);
    let modalAddress = document.createElement("address");
    modalAddress.textContent = `2702 South Main Street Salt Lake City UT 84115`;
    modalDiv.appendChild(modalAddress);
    modal.showModal();
  }
  
const { response } = require("express");

document
    .getElementById("ajaxMessageForm")
    .addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const country = document.getElementById("country").value;
        const message = document.getElementById("message").value;

        if (username && country && message) {
            fetch("/ajaxmessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, country, message }),
            })
            .then((response) => response.json())
            .then((messages) => {
                const messagesContainer =
                    document.getElementById("messagesContainer");
                messagesContainer.innerHTML = "";

                messages.forEach((message) => {
                    const messageDiv = document.createElement("div");
                    messageDiv.classList.add("card", "mb-3");
                    messageDiv.innerHTML = `
                    <div class="card-body">
                      <h5 class="card-title">${message.username} - ${message.country}</h5>
                      <p class="card-text">${message.message}</p>
                    </div>
                  `;
                  messagesContainer.appendChild(messageDiv);
                });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        } else {
            alert("All fields are required.");
        }

    });

/*
    const guestForm = document.getElementById('guestForm'); 
const guestList = document.getElementById('guestList'); 
  
guestForm.addEventListener('submit', function (e) { 
    e.preventDefault(); 
  
    const lastName = document.getElementById('lastName').value; 
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value; 
  
    const guestCard = document.createElement('div'); 
    guestCard.classList.add('guest-card'); 
    guestCard.innerHTML = ` 
                <h2>${lastName}</h2>
                <h2>${firstName}</h2> 
                <p><strong>Email:</strong> ${email}</p> 
                `; 
  
    guestList.appendChild(guestCard); 
  
    guestForm.reset(); 
});

guestForm.addEventListener('submit', function (e) { 
    e.preventDefault(); 

    const lastName = document.getElementById('lastName').value; 
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value; 

    // AJAX request to the /ajaxmessage route
    fetch('/ajaxmessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            lastName: lastName,
            firstName: firstName,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        // Handle response data if needed
        console.log(data);
    })
    .catch(error => console.error(error));

    // Reset the form
    guestForm.reset(); 
});
*/
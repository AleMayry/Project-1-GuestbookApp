
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const messagesFilePath = path.join(__dirname, "data", "messages.json");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
  res.sendFile(__dirname, "/views/index.html");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});




 
app.get("/guestbook", (req, res) => {
  readMessages()
    .then((messages) => {
      res.render("guestbook", { messages });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error while trying to read messages.");
    });
});

app.get("/newmessage", (req, res) => {
  res.sendFile(__dirname + "/views/newmessage.html");
});

app.get("/ajaxmessage", (req, res) => {
  res.sendFile(__dirname + "/views/ajaxmessage.html");
});

app.post("/newmessage", (req, res) => {
  const newMessage = req.body;

  if (newMessage.username && newMessage.country && newMessage.message) {
    fs.readFile(messagesFilePath, (err, data) => {
      if (err) throw err;

      const messages = JSON.parse(data);
      messages.push(newMessage);

      fs.writeFile(
        messagesFilePath,
        JSON.stringify(messages, null, 2),
        (err) => {
          if (err) throw err;
          res.redirect("/guestbook");
        }
      );
    });
  } else {
    res.status(400).send("Required to fill all fields.");
  }
});



app.post("/ajaxmessage", (req, res) => {
  const newMessage = req.body;

  if (newMessage.username && newMessage.country && newMessage.message) {
    fs.readFile(messagesFilePath, (err, data) => {
      if (err) throw err;

      const messages = JSON.parse(data);
      messages.push(newMessage);

      fs.writeFile(
        messagesFilePath,
        JSON.stringify(messages, null, 2),
        (err) => {
          if (err) throw err;
          res.json(messages);
        }
      );
    });
  } else {
    res.status(400).send("Required to fill all fields.");
  }
});

function readMessages() {
  return new Promise((resolve, reject) => {
    fs.readFile(messagesFilePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}




app.get("/:page", (req, res) => {
  const page = req.params.page;
  res.sendFile(path.join(__dirname, "views", `${page}.html`));
});

/*app.get("/:page", (req, res) => {
const page = req.params.page;
res.render(page);
});*/





app.listen(3000, () => {
  console.log("Server running on port 3000 ( http://localhost:3000/ )!");
});

/*
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Load messages from JSON file
let messages = [];
const messagesFilePath = './messages.json';
if (fs.existsSync(messagesFilePath)) {
    const messagesData = fs.readFileSync(messagesFilePath);
    messages = JSON.parse(messagesData);
}

// Render front page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Render guestbook page
app.get('/guestbook', (req, res) => {
    res.json(messages);
});

// Render new message form
app.get('/newmessage', (req, res) => {
    res.sendFile(__dirname + '/newmessage.html');
});

// Handle form submission and save new message
app.post('/newmessage', (req, res) => {
    const { username, country, message } = req.body;
    if (!username || !country || !message) {
        res.status(400).send('All fields are required.');
        return;
    }

    const newMessage = { username, country, message };
    messages.push(newMessage);
    fs.writeFileSync(messagesFilePath, JSON.stringify(messages));

    res.redirect('/guestbook');
});

// Handle AJAX request for new message submission
app.post('/ajaxmessage', (req, res) => {
    const { username, country, message } = req.body;
    if (!username || !country || !message) {
        res.status(400).send('All fields are required.');
        return;
    }

    const newMessage = { username, country, message };
    messages.push(newMessage);
    fs.writeFileSync(messagesFilePath, JSON.stringify(messages));

    res.json(messages);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
  */
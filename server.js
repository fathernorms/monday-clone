const PORT = process.env.PORT || 8000;
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "./build")));
app.use(express.json());

const url = process.env.URL;
const token = process.env.ASTRA_TOKEN;

app.get("/tickets", async (req, res) => {
    const options = {
        method: "GET",
        headers: {
            Accepts: "application/json",
            "X-Cassandra-Token": token,
        },
    };
    try {
        const response = await axios(`${url}?page-size=20`, options);
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});

app.get("/tickets/:documentId", async (req, res) => {
    const id = req.params.documentId;

    const options = {
        method: "GET",
        headers: {
            Accepts: "application/json",
            "X-Cassandra-Token": token,
        },
    };

    try {
        const response = await axios(`${url}/${id}`, options);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

app.post("/tickets", async (req, res) => {
    const formData = req.body.formData;

    const options = {
        method: "POST",
        headers: {
            Accepts: "application/json",
            "X-Cassandra-Token": token,
            "Content-Type": "application/json",
        },
        data: formData,
    };

    try {
        const response = await axios(url, options);
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});

app.put("/tickets/:documentId", async (req, res) => {
    const id = req.params.documentId;
    const data = req.body.data;

    const options = {
        method: "PUT",
        headers: {
            Accepts: "application/json",
            "X-Cassandra-Token": token,
        },
        data,
    };

    try {
        const response = await axios(`${url}/${id}`, options);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

app.delete("/tickets/:documentId", async (req, res) => {
    const id = req.params.documentId;

    const options = {
        method: "DELETE",
        headers: {
            Accepts: "application/json",
            "X-Cassandra-Token": token,
        },
    };

    try {
        const response = await axios(`${url}/${id}`, options);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

app.listen(PORT, () => console.log("Server running on PORT " + PORT));

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    // Validate the request body
    const { name, email, message } = req.body;
    if (
      !name ||
      !email ||
      email.trim().length === 0 ||
      !message ||
      message.trim().length === 0
    ) {
      // Check if all required fields are filled
      res
        .status(422)
        .json({ status: "error", message: "Missing required fields" });
      return;
    }
    //store in db
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://manuelmanu008:6W1jYv7l8tAVFx7r@cluster0.6nblf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }
    const db = client.db("my-blog");
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed" });
      return;
    }
    client.close();
    res.status(201).json({
      status: "success",
      message: "Message sent successfully!",
      data: newMessage,
    });
  }
}
export default handler;

function handler(req, res) {
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
    res.status(201).json({
      status: "success",
      message: "Message sent successfully!",
      data: newMessage,
    });
  }
}

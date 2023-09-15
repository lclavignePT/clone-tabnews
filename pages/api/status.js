function status(request, response) {
  response.status(200).json({ message: "Testando página de status" });
}

export default status;

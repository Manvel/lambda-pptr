const handler = async () => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Testing lambda function.'),
  };
  return response;
};

module.exports = { handler };

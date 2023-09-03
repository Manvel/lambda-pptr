export const handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Testing lambda function, updated message'),
  };
  return response;
};

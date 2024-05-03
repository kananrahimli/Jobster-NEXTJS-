
export const checkForUnauthorizedResponse =  (err:any) => {
  if (
    err.response.status === 401 &&
    err.response.data.msg !== "Invalid Credentials"
  ) {
    return 'Authentication invalid'
  }
  return err.response.data.msg;
};

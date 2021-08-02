const Verify = (() => {
  const userData = (data) => {
    console.log(`user data: ${data}`);
    return false;
  };
  return {
    userData,
  };
})();

export default Verify;

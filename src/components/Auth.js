const isAuth = () => {
  const payload = localStorage.getItem("userData");
  if (payload != null) {
    return true;
  } else {
    return false;
  }
};

export default isAuth;

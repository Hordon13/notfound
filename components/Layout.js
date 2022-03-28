import Cursor from "./Cursor";

const Layout = ({ children }) => {
  return (
    <>
      <Cursor />
      {children}
    </>
  );
};

export default Layout;

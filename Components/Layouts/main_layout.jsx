import Navbar from "../Headers/main_navbar";
import Page_Header from "../Headers/page_header";

const Main_Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <main>
          <Page_Header title={"Title"} />
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default Main_Layout;

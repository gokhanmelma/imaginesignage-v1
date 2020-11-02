import Header from "./header";
import Footer from "./footer";

import '../../public/styles/index.scss';

const Layout = props => (
  <div className="layout" >
    <Header />
    <div className="content">
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;
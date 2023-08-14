import { Outlet, Link } from "react-router-dom";
import './Comp.css';

import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Layout = () => {
  return (
    <>
      <nav>
      <Dropdown title="Dispaly" id='dp'>
                <Dropdown.Item>
                Grouping 
                    <Dropdown title="Status">
                    <Dropdown.Item as="a" href="/"> 
                    Status
                    </Dropdown.Item>
                    
                    <Dropdown.Item as="a" href="/ByPriority">
                    Priority
                    </Dropdown.Item>
      
                    <Dropdown.Item as="a" href="/ByUser">
                    User
                    </Dropdown.Item>
                  </Dropdown>
                </Dropdown.Item>
  
                <Dropdown.Item>
                Sorting 
                <Dropdown title="Priority">
                    <Dropdown.Item as="a" href="/Sort_ByPriority">
                     Priority
                    </Dropdown.Item>
                    
                    <Dropdown.Item as="a" href="/Sort_ByTitle">
                     Title
                    </Dropdown.Item>
      
              
                  </Dropdown>
                </Dropdown.Item>
            </Dropdown>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;
import './Comp.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Sort_ByTitle = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://apimocha.com/quicksell/data");
        const sortedData = response.data.tickets.sort((a, b) => a.title.length - b.title.length);
        
        setJsonData(sortedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <h3>Task in Ascending order of Title</h3>
      </header>
      <div className="grid-container">
        <div className="item">
          {jsonData.map((item) => (
            <>
              {item.title.length >= 0 && (
                <div className="crd" key={item.id}>
                  <>
                    <img src="./img_avatar.png" alt="Avatar" />
                    <div className="container">
                      <p>{item.id}</p>
                      <p>
                        <b>{item.title}</b>
                      </p>
                      <br></br>
                      <label>!</label>
                      <label>{item.tag}</label>
                    </div>
                  </>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sort_ByTitle;
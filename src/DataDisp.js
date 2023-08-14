import './Comp.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

const DataDisplay = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://apimocha.com/quicksell/data");
        setJsonData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    

    fetchData();
  }, []);

  return (
    <>
<div className='grid-container'>
<div className='item'>
       <header><b>Backlog</b></header> 
      {jsonData.tickets?.map((item) => (
        <>
        {item.status === "Backlog" &&
        <div className="crd" key={item.id}>
          
          <><img src="./img_avatar.png" alt="Avatar" />
          <div className="container">
              <p>{item.id}</p>
              <b><p>{item.title}</p></b>
              <br></br>
              <label>!</label><label>{item.tag}</label>
            </div></>
        
        </div>
           }
           </>
      ))}
    </div>
    
    <div className='item'>
       <header><b>Todo</b></header> 
      {jsonData.tickets?.map((item) => (
        <>
        {item.status === "Todo" &&
        <div className="crd" key={item.id}>
            <><img src="./img_avatar.png" alt="Avatar" />
              <div className="container">
                <p>{item.id}</p>
                <b><p>{item.title}</p></b>
                <br></br>
                <label>!</label><label>{item.tag}</label>
              </div></>
        </div>
            }
        </>
        
      ))}
    </div>

    <div className='item'>
      <header><b>In Progress</b></header>
      {jsonData.tickets?.map((item) => (
        <>
        {item.status === "In progress" &&
        <div className="crd" key={item.id}>
          
          <><img src="./img_avatar.png" alt="Avatar" />
          <div className="container">
              <p>{item.id}</p>
              <b><p>{item.title}</p></b>
              <br></br>
              <label>!</label><label>{item.tag}</label>
            </div></>
        
        </div>
           }
           </>
        
      ))}
    </div>

     <div className='item'>
      <header><b>Done</b></header>
      {jsonData.tickets?.map((item) => (
        <>
        {item.status === "Done" &&
        <div className="crd" key={item.id}>
          
          <><img src="./img_avatar.png" alt="Avatar" />
          <div className="container">
              <p>{item.id}</p>
              <b><p>{item.title}</p></b>
              <br></br>
              <label>!</label><label>{item.tag}</label>
            </div></>
        
        </div>
           }
           </>
        
      ))}
    </div>
    
    <div className='item'>
      <header><b>Cancel</b></header>
      {jsonData.tickets?.map((item) => (
       <>
       {item.status === "Cancel" &&
       <div className="crd" key={item.id}>
         
         <><img src="./img_avatar.png" alt="Avatar" />
         <div className="container">
             <p>{item.id}</p>
             <b><p>{item.title}</p></b>
             <br></br>
             <label>!</label><label>{item.tag}</label>
           </div></>
       
       </div>
          }
          </>
        
      ))}
    </div> 
    </div>

    </>
  );
};

export default DataDisplay;


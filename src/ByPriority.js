import './Comp.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

const ByPriority = () => {
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
       <header><b>No priority</b></header> 
      {jsonData.tickets?.map((item) => (
        <>
        {item.priority === 0 &&
        <div className="crd" key={item.id}>
          
          <><img src="./img_avatar.png" alt="Avatar" />
          <div className="container">
              <p>{item.id}</p>
              <p><b>{item.title}</b></p>
              <br></br>
              <label>!</label><label>{item.tag}</label>
            </div></>
        
        </div>
           }
           </>
      ))}
    </div>
    
    <div className='item'>
       <header><b>Urgent</b></header> 
      {jsonData.tickets?.map((item) => (
        <>
        {item.priority === 4 &&
        <div className="crd" key={item.id}>
            <><img src="./img_avatar.png" alt="Avatar" />
              <div className="container">
                <p>{item.id}</p>
                <p><b>{item.title}</b></p>
                 <br></br>  
                <label>!</label><label>{item.tag}</label>
              </div></>
        </div>
            }
        </>
        
      ))}
    </div>

    <div className='item'>
      <header><b>High</b></header>
      {jsonData.tickets?.map((item) => (
        <>
        {item.priority === 3 &&
        <div className="crd" key={item.id}>
          
          <><img src="./img_avatar.png" alt="Avatar" />
          <div className="container">
              <p>{item.id}</p>
              <p><b>{item.title}</b></p>
              <br></br>  
                <label>!</label><label>{item.tag}</label>
            </div></>
        
        </div>
           }
           </>
        
      ))}
    </div>

     <div className='item'>
      <header><b>Medium</b></header>
      {jsonData.tickets?.map((item) => (
        <>
        {item.priority === 2 &&
        <div className="crd" key={item.id}>
          
          <><img src="./img_avatar.png" alt="Avatar" />
          <div className="container">
              <p>{item.id}</p>
              <p><b>{item.title}</b></p>
              <br></br>  
                <label>!</label><label>{item.tag}</label>
            </div></>
        
        </div>
           }
           </>
        
      ))}
    </div>
    
    <div className='item'>
      <header><b>Low</b></header>
      {jsonData.tickets?.map((item) => (
       <>
       {item.priority === 1 &&
       <div className="crd" key={item.id}>
         
         <><img src="./img_avatar.png" alt="Avatar" />
         <div className="container">
             <p>{item.id}</p>
             <p><b>{item.title}</b></p>
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

export default ByPriority;


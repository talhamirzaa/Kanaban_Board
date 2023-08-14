import './Comp.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

const ByUser = () => {
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
<header><b>Anoop Sharma</b></header> 
{/* {jsonData.users?.map((us) => (
        
   
        
           
      ))} */}

      {jsonData.tickets?.map((item) => (
        <>
        {item.userId === 'usr-1' &&
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
       <header><b>Yogesh</b></header> 
      {jsonData.tickets?.map((item) => (
        <>
        {item.userId === 'usr-2' &&
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
      <header><b>Shankar Kumar</b></header>
      {jsonData.tickets?.map((item) => (
        <>
        {item.userId === 'usr-3' &&
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
      <header><b>Ramesh</b></header>
      {jsonData.tickets?.map((item) => (
        <>
        {item.userId === 'usr-4' &&
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
      <header><b>Suresh</b></header>
      {jsonData.tickets?.map((item) => (
       <>
       {item.userId === 'usr-5' &&
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

export default ByUser;


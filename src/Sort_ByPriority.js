import './Comp.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Sort_ByPriority = () => {
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
    <header><h3>Task in descending order of priority</h3></header>     
<div className='grid-container'>

<div className='item'>  
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
    
    </div>

    </>
  );
};

export default Sort_ByPriority;


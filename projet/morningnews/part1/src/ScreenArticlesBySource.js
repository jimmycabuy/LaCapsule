import React from 'react';
import './App.css';
import { Card, Icon} from 'antd';
import Nav from './Nav'

const { Meta } = Card;

function ScreenArticlesBySource() {

  return (
    <div>
         
            <Nav/>

            <div className="Banner"/>

            <div className="Card">
    
              <div  style={{display:'flex',justifyContent:'center'}}>

                <Card
                  style={{ 
                  width: 300, 
                  margin:'15px', 
                  display:'flex',
                  flexDirection: 'column',
                  justifyContent:'space-between' }}
                  cover={
                  <img
                      alt="example"
                      src='../images/alaska.jpg'
                  />
                  }
                  actions={[
                      <Icon type="read" key="ellipsis2" />,
                      <Icon type="like" key="ellipsis"/>
                  ]}
                  >

                  <Meta
                    title='Article title'
                    description='Article Description'
                  />

                </Card>

              </div>


            

           </div> 

         
      
      </div>
  );
}

export default ScreenArticlesBySource;

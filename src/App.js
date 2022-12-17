import {useState} from 'react';
import styled from 'styled-components';
import React from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([]);
  const fetchPosts = () =>{
    axios.get('https://dummyjson.com/products')
      .then(function(res){
        setPosts(res.data.products);
        console.log(res.data);
      })
      .catch(function(error){
        console.log(error)
      }
  )}
  

  // useEffect(() => {
  //   fetchPosts();
  // },[])




// ------------------------------------------------------------------------
  const Myautobox = styled.div`
    width: 100%;
    background-color: #f3f3f3;
  `;

  const HeaderBox = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
    background-color: #fff;
    justify-content: space-around;
    
  
  `
  const HeaderLogo = styled.div`

  `
  const HeaderLogin = styled.div`

  `
  const MenuList = styled.ul`
    list-style: none;
    display: flex;
    width: 1000px;
    height: 40px;
    align-items: center;
    background-color: #1d314a;
    justify-content: space-around;
    color: #fff;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    margin: 0 auto;

  `
  const DropMenu = styled.div`
    display: flex;
    flex-direction: column;
`
  const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
  `

  const TransportBox = styled.div`

  `
  const VehicleBox = styled.div`
    width: 150px;
    height: 40px;
    background-color:#fff;
    justify-content: center;
    text-align: center;
    display:flex;
    border-radius: 8px;
    margin-top: 10px;
    border-right: 4px solid #fd4100;
    align-items: center;
  `
  const OptionStyle = styled.option`
      text-align= center;
  `
  const DropSelect = styled.select`
    height: 40px;
    width: 144px;
    margin-top: 10px;
    border-radius: 6px;
    // margin-left: 14px;
  `



  
  
  const menuLi = ['ავტონაწილები', 'განბაჟება', 'დილერი', 'ავტოსალონები', 'აუქციონი'];
  const listItems = menuLi.map((menuLi) =>
    <li>{menuLi}</li>
  );


  return (
    <Myautobox>
      <HeaderBox>      
        <HeaderLogo>
          <img src={require('./image/Screenshot_4.png')} alt='Logo' />
        </HeaderLogo>
        <HeaderLogin>
          <img src={require('./image/Screenshot_1.png')} alt='Logo' />
        </HeaderLogin>
      </HeaderBox>
      <Wrapper>
        
        <MenuList>{listItems}</MenuList>
        <InputWrapper>
          <TransportBox>
            <VehicleBox>
              <img src={require('./image/car.png')} height='20' alt='Logo' />
            </VehicleBox>
            <VehicleBox>
              <img src={require('./image/trt.png')} height='20' alt='Logo' />
            </VehicleBox>
            <VehicleBox>
              <img src={require('./image/mot.png')} height='20' alt='Logo' />
            </VehicleBox>
          </TransportBox>
          <DropMenu> 
            <DropSelect>
              <OptionStyle>გარიგების ტიპი</OptionStyle>
              <OptionStyle >იყიდება</OptionStyle>
              <OptionStyle>ქირავდენა</OptionStyle>
            </DropSelect>
            <DropSelect>
              <OptionStyle>მწარმოებელი</OptionStyle>
              <OptionStyle >BMW</OptionStyle>
              <OptionStyle>AUDI</OptionStyle>
            </DropSelect>
            <DropSelect>
              <OptionStyle>მოდელი</OptionStyle>
              <OptionStyle >330</OptionStyle>
              <OptionStyle>A4</OptionStyle>
            </DropSelect>
          </DropMenu>
          <DropMenu> 
            <DropSelect>
              <OptionStyle>წელი - დან</OptionStyle>
              <OptionStyle >1990</OptionStyle>
              <OptionStyle>2020</OptionStyle>
            </DropSelect>
            <DropSelect>
              <OptionStyle>ფასი - დან</OptionStyle>
            </DropSelect>
            <DropSelect>
              <OptionStyle>ძრავი - დან</OptionStyle>
              <OptionStyle >1.1</OptionStyle>
              <OptionStyle>10.10</OptionStyle>
            </DropSelect>
          </DropMenu>
          <DropMenu> 
            <DropSelect>
              <OptionStyle>მდე</OptionStyle>
              <OptionStyle >2020</OptionStyle>
              <OptionStyle>2022</OptionStyle>
            </DropSelect>
            <DropSelect>
              <OptionStyle>მდე</OptionStyle>
            </DropSelect>
            <DropSelect>
              <OptionStyle>მდე</OptionStyle>

            </DropSelect>
          </DropMenu>
          <DropMenu> 
            <DropSelect>
              <OptionStyle>ტრანსმისია</OptionStyle>
              <OptionStyle >მექანიკა</OptionStyle>
              <OptionStyle>ავტომატიკა</OptionStyle>
            </DropSelect>
            <DropSelect>
              <OptionStyle>საწვავის ტიპი</OptionStyle>
              <OptionStyle>ბენზინი</OptionStyle>
              <OptionStyle>დიზელი</OptionStyle>
            </DropSelect>
            <DropSelect>
              <OptionStyle>პერიოდი</OptionStyle>
              <OptionStyle>ბოლო 1 საათი</OptionStyle>
              <OptionStyle>ბოლო 2 საათი</OptionStyle>
            </DropSelect>
          </DropMenu>
          <DropMenu> 
            <DropSelect>
              <OptionStyle>საჭე</OptionStyle>
              <OptionStyle>მარჯვნივ</OptionStyle>
              <OptionStyle>მარცხნივ</OptionStyle>
            </DropSelect>
            <DropSelect>
              <OptionStyle>მდებარეობა</OptionStyle>
              <OptionStyle >თბილისი</OptionStyle>
              <OptionStyle>სხვაგან</OptionStyle>
            </DropSelect>
            <DropSelect>
              <OptionStyle>განბაჟება</OptionStyle>
              <OptionStyle >განბაჟებული</OptionStyle>
              <OptionStyle>განსაბაჟებელი</OptionStyle>
            </DropSelect>
          </DropMenu>
        </InputWrapper>


        <button onClick={fetchPosts}>search</button>
          <div>
          {
            posts.map((post, index) =>
            <div key={index}>
              <div>
                <img width={100} src= {post.thumbnail} alt='i'/>
              </div>
              <div>
                {post.id}, {post.title} 
              </div>      
              <div>
                {post.body}
              </div>
              <hr></hr>
            </div>)
          }
        </div>
      </Wrapper>

      

    </Myautobox>
  );

}

export default App;

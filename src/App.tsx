import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import Header from './components/organisms/header';
import ProductList from './components/organisms/product-list';
import CarrouselContainer from './components/organisms/carrousel-container';
import RecientsActions from './components/molecules/recients-actions';
import Profile from './components/atoms/profile';
import { data } from './constants/data';
import './App.css'
import 'swiper/css';

const SAppMain = styled.main`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 20px 10px;
  box-sizing: border-box;
`;

function App() {

  return (
    <div className="App">
      <Header {...data.userInfo}></Header>
      <SAppMain>
        <ProductList products={data.products}></ProductList>
        <CarrouselContainer title='Estados de productos'>
          <SwiperSlide>
            <RecientsActions {...data.recientsActions} ></RecientsActions>
          </SwiperSlide>
          <SwiperSlide>
            <RecientsActions {...data.recientsActions} ></RecientsActions>
          </SwiperSlide>
          <SwiperSlide>
            <RecientsActions {...data.recientsActions} ></RecientsActions>
          </SwiperSlide>
          <SwiperSlide>
            <RecientsActions {...data.recientsActions} ></RecientsActions>
          </SwiperSlide>
        </CarrouselContainer>
        <CarrouselContainer title='Perfiles'>
          {
            data.profiles.map((profile, index) => {
              return (
                <SwiperSlide key={index}>
                  <Profile {...profile}></Profile>
                </SwiperSlide>
              )
            })
          }
        </CarrouselContainer>
      </SAppMain>
    </div>
  )
}

export default App

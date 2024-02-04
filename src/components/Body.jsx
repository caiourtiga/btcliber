import React, { Component } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const Body = () => {

  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="my-4">
      <br />
      <div>
        <div className="container text-center my-4">
          <button className="usbutton container text-center m-1" onClick={() => changeLanguage("en")}> <span className="bttext"> EN </span> </button>
          <button className="brasilbutton container text-center m-1" onClick={() => changeLanguage("pt")}> <span className="bttext"> PT </span> </button>
        </div>
        <img src="/assets/images/Bitcoinlogo.png" className="img-fluid simg mx-auto d-block my-5 mb-4 rounded-4" alt="Bitcoin logo" />
        <h1 className="text-center m-4">Bitcoin Liber</h1>
        <div className="container skills">
          <div className="row">
            <div className="mx-auto col-lg-8">
              <p>&ensp;{t('Hero')}</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container"  id="projetos">
        <div className="adada">
          {t('description', { returnObjects: true }).map((item) => (
            <div className="rounded-4 m-2" key={item.id}>
              <div className="sectionbody">
                <h2 className="m-2">{item.id}. {item.title}</h2>
                <p className="h5 py-2">&ensp;{item.text}</p>
                <iframe className="text-center col-12" width="560" height="400" src={item.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className="asas">{item.text2} <a href={item.link2}>{item.link2}</a></p>
                <p className="asas">{item.text3} <a href={item.link3}>{item.link3}</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Body


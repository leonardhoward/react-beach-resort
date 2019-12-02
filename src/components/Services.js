import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
       services:[
           {
               icon:<FaCocktail/>,
               title:"Free cocktails",
               info:"Enjoy deliciious cocktails from our beach-side bar as part of your vacation package"
           },
           {
            icon:<FaHiking/>,
            title:"Great hiking",
            info:"We have experienced hiking guides ready to take you on an adventure!"
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free shuttle rides",
            info:"We have shuttles ready to take you to many of the popular attractions on the island!"
        },
        {
            icon:<FaBeer/>,
            title:"Beer",
            info:"Its vegan, baby!"
        }
       ] 
    }
    render() {
        return (
            <section className="services">
              <Title title="services" />
              <div className="services-center">
                  {this.state.services.map((item, index) => {
                      return (
                          <article key={index} className="service">
                          <span>{item.icon}</span>
                          <h6>{item.title}</h6>
                          <p>{item.info}</p>
                      </article>
                  );
                  })}
              </div>
            </section>
        );
    }
}

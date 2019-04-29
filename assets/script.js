import "normalize.css";
import "babel-polyfill";
import $ from "jquery";
import "../css/style.css";
import gNews from "./modules/gNews";
import { newsTemplate } from "./modules/template";


const getSocialNews = async () => {
    try {
    let resp = await gNews("/everything?q=social");
    let newsList = resp.data.articles.map(news => newsTemplate(news));
    $("#socialNews").html(newsList);
  } catch (error){
    console.log(error);
  }
};

const getEntertainmentNews = async () => {
    try {
      let resp = await gNews("/everything?q=Entertainment");
      let newsList = resp.data.articles.map(news => newsTemplate(news));
      $("#entertainmentNews").html(newsList);
    } catch (error){
      console.log(error);
    }
  };

  const getSportNews = async () => {
    try {
      let resp = await gNews("/everything?q=Sport");
      let newsList = resp.data.articles.map(news => newsTemplate(news));
      $("#SportNews").html(newsList);
    } catch (error){
      console.log(error);
    }
  };

  const getTaiwanNews = async () => {
    try {
      let resp = await gNews("/everything?q=Taiwan");
      let newsList = resp.data.articles.map(news => newsTemplate(news));
      $("#TaiwanNews").html(newsList);
    } catch (error){
      console.log(error);
    }
  };

  getSocialNews()
  getEntertainmentNews()
  getSportNews()
  getTaiwanNews()


import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./components/Card";
import "./index.css";

const App = () => {
   const jobOpenings = [
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/c1/20230822192910%21Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUW5Ek6IWyeN53c7nVYESmhlLWOhbZK201Q&s",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Delhi, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK-b-GRJP49S_nvl8UDCQ2DDusVBUmQcN1Ug&s",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaccosNSRKcgzDGFxfVTrCUCMuKWcCi1MXw&s",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdY3TXXdvYGoJ5JZhQNhXLmIyrvfRl-3KSQ&s",
    companyName: "Adobe",
    datePosted: "4 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnM8U7Fu9UbOMCakFdEen8a8sl_EavE10XHw&s",
    companyName: "Uber",
    datePosted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Gurgaon, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfoGTt90LdSKRGBgQKLNLkEZs1V7CmgFs97A&s",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbJUliWXK40RqL2lWi67a362b_1SnbOVxNg&s",
    companyName: "Spotify",
    datePosted: "5 weeks ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Remote"
  }
];
console.log(jobOpenings);

  return (
    <div className="parent">
      {jobOpenings.map(function(elem){
        return <Card company={elem.companyName} post={elem.post} pay={elem.pay} brandlogo={elem.brandlogo} tag1={elem.tag1} tag2={elem.tag2} datePosted={elem.datePosted} location = {elem.location}/>
      })}
    </div>
  );
};

export default App;
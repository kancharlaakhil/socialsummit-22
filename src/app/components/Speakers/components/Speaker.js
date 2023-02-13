 import React from "react";

// import "../styles/Speaker.css";
// import Content from  "./ReadMore";

// function Speaker(props) {
//   return (
//     <div className="speaker">
//       <div className="left" style={{ order: props.id % 2 === 1 ? 0 : 1 }}>
//         <img src={props.image} alt="" />

//         <div
//           className="title"
//           style={{ right: props.id % 2 === 1 ? "-119%" : "85%" }}
//         >
//           <h1 style={{ textAlign: props.id % 2 === 1 ? "left" : "right" }}>
//             {props.name}
//           </h1>
//           <p style={{ textAlign: props.id % 2 === 1 ? "left" : "right" }}>
//             {props.post}
//           </p>
//         </div>
//       </div>
//       <div className="leftmob" style={{ order: props.id % 2 === 1 ? 0 : 0 }}>
//         <img src={props.image} className="img2" />

//         {/* <div
//           className="titlemob"
       
//         >
//           <h1 style={{ textAlign: props.id % 2 === 1 ? "left" : "right" }}>
//             {props.name}
//           </h1>
//         </div> */}
//       </div>
//       <div className="right">
//         <div className="whitespace"></div>
//         <div className="para">
//           { <p>{props.descp}</p> }
//           <Content data={props.descp}/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Speaker;


import "../styles/Speaker.css";
import Content from './ReadMore';

function Speaker(props) {
   return (
     <div className="speaker"  >
      { <img src={props.image} className="img"  style={{ order: props.id % 2 == 1 ? 0 : 1 }}/> }
       {/* <div className="left" style={{ order: props.id % 2 == 1 ? 0 : 1  }}   >
         
 
        
       </div>
       <div className="leftmob" style={{ order: props.id % 2 === 1 ? 1 : 0 }}>
        <img src={props.imagemob} className="img2"  
        style={{backgroundColor: props.id%2==1 ? '#22495A':'#FFFFFF'}}/>

      </div> */}
      <div className="leftmob" style={{ order: props.id % 2 === 1 ? 0 : 0 }}>
        <img src={props.imagemob} className="img2"  />

        {/* <div
          className="titlemob"
       
        >
          <h1 style={{ textAlign: props.id % 2 === 1 ? "left" : "right" }}>
            {props.name}
          </h1>
        </div> */}
      </div>
       
       
       <div className="right" >
         
         <div
           className="title"
           >
         
           <h1 style={{textAlign:"center"}}>
             {props.name}
           </h1>
           <p >
             {props.post}
           </p>
         </div>
         <div className="para" style={{paddingLeft: "0vw" }}>
             <p>{props.descp}</p>  
           {/* { <Content data={props.descp}/> }
           style={{backgroundColor: props.id%2==1 ?  '#22495A':'#FFFFFF'}} */}
         </div>
       </div>
       <div className="rightmob">
         {/* <div className="whitespace"></div> */}
         <div
           className="titlemob"
           >
         
           <h1 style={{textAlign:"center"}}>
             {props.name}
           </h1>
           <p >
             {props.post}
           </p>
         </div>
         { <Content data={props.descp}/> } 
         {/* <div className="para" style={{paddingLeft: props.id===1? "18vw":"18vw" }}>
         </div> */}
            {/* { <p>{props.descp}</p>  } */}
            
        
       </div>
     </div>
   );
 }
 
 export default Speaker;

// export default function Main(props) {
//     return (
      
//        <div className="main">
//          <div className="memo">
//           <h1>{props.title}</h1>
//           </div> 
               
            
//              <div className="sp1">
//                 <div className="img1">
//                    <img src={img1} />
//                 </div>
//                 <div className="con1"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quaerat earum labore fugit vero beatae eligendi excepturi quisquam rerum molestias!</p></div>
//              </div>
//              <div className="sp2">
//                 <div className="img2">
//                    <img src={img2} />
//                 </div>
//                 <div className="con2"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quaerat earum labore fugit vero beatae eligendi excepturi quisquam rerum molestias!</p></div>
//              </div>
//              <div className="sp3">
//                 <div className="img3">
//                    <img src={img3} />
//                 </div>
//                 <div className="con3"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quaerat earum labore fugit vero beatae eligendi excepturi quisquam rerum molestias!</p></div>
//              </div>
//              <div className="sp4">
//                 <div className="img4">
//                    <img src={img4} />
//                 </div>
//                 <div className="con4"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quaerat earum labore fugit vero beatae eligendi excepturi quisquam rerum molestias!</p></div>
//              </div>
//              <div className="sp5">
//                 <div className="img5">
//                    <img src={img5} />
//                 </div>
//                 <div className="con5"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quaerat earum labore fugit vero beatae eligendi excepturi quisquam rerum molestias!</p></div>
//              </div>
//              <div className="sp6">
//                 <div className="img6">
//                    <img src={img6} />
//                 </div>
//                 <div className="con6"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quaerat earum labore fugit vero beatae eligendi excepturi quisquam rerum molestias!</p></div>
//              </div>
             
             

//           </div>
//     );
//   }


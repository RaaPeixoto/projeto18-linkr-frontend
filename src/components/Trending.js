// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { COLORS, FONTS } from "../constants/layoutConstants";

// export default function Trending() {
//   const [hashtags, setHashtags] = useState([]);
//   useEffect(() => {
//     // const config = {
//     //   headers: {
//     //     Authorization: `Bearer}`
//     //   },
//     // };

//     axios
//       .get("http://localhost:5000/hashtag")
//       .then((res) => {
//         setHashtags(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <TrendingConteiner>
//       <h1>trending</h1>
//       <Line></Line>
//       {hashtags.map((hash) => {
//         const { id, hashtags } = hash;
//         return (
//           <Link key={id} to={`/hashtag/${hashtags}`}>
//             <h2># {hashtags}</h2>
//           </Link>
//         );
//       })}
//     </TrendingConteiner>
//   );
// }

// const TrendingConteiner = styled.div`
//   width: 23vw;
//   height: 406px;
//   background-color: ${COLORS.trending};
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   margin-left: 25px;
//   padding: 9px 0px 12px 0px;
//   border-radius: 16px;

//   h1 {
//     color: ${COLORS.text};
//     font-weight: 700;
//     font-size: 27px;
//     line-height: 40px;
//     padding-left: 16px;
//   }

//   h2 {
//     color: ${COLORS.text};
//     font-family: ${FONTS.text};
//     font-weight: 700;
//     font-size: 19px;
//     line-height: 23px;
//     letter-spacing: 0.05em;
//     padding-left: 16px;
//     margin-bottom: 10px;
//   }
// `;
// const Line = styled.div`
//   width: 23vw;
//   height: 0px;
//   border: 1px solid #484848;
//   margin-bottom: 22px;
// `;

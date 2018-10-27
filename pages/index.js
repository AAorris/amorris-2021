// import React from 'react'
// import { Flex, Box } from 'rebass'
import sections from '../content/index.mdx'
import Article from '../components/article'

export default () => <Article sections={sections} />

// export default () => {
//   return (
//     <div className='page'>
//       <style global jsx>{`
//         html, body, #__next, .page {
//           width: 100%;
//           height: 100%;
//           margin: 0;
//           padding: 0;
//         }
//       `}</style>
//     {
//       slides.map(
//         Component => (
//           <Flex
//             alignItems='center'
//             justifyContent='center'
//             style={{height: '100%'}}
//           >
//             <Component />
//           </Flex>
//         )
//       )
//     }</div>
//   )
// }
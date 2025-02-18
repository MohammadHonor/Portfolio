import React from 'react'

const Projects = () => {

    const projects = [
        { url: "./chatpdf.png", name: "ChatPdf" },
        { url: "./portfolio.png", name: "Profile" },
        { url: "./voting-system.png", name: "Voting System" },
        { url: "./Tic-tac-toe.png", name: "Tic-Tac-Toe" },
        { url: "./chatroom.png", name: "ChatRoom" },

        


    ]
  return (
    <div className='flex flex-col bg-slate-900 p-3'>
      <b className='text-2xl'>Project</b>

    {/* <div className='flex flex-col gap-6 items-center justify-items-center sm:w-[360px] md:flex-row mt-4 '>
        <div className=' gap-2'>
          <img src="./porfolio.jpg"
          className='h-48 w-48'
          alt="" />
          <p>Portfolio</p>
        </div>
        <div className='gap-2'>
          <img src="./chatpdf.png" 
          className='h-48 w-48'
          alt="" />
          <p>ChatPdf</p>
        </div>
        <div className='gap-2'>
          <img src="./voting-vector.jpg" 
          className='h-48 w-48'
          alt="" />
          <p>voting system</p>
        </div>
    </div> */}
          
          <div className='flex flex-col gap-8 sm:flex-row  overflow-x-hidden flex-nowrap justify-center items-center mt-10 overflow-y-hidden'>
              {
                  projects.map((project,idx) => {
                      return (
                        <div className='flex flex-col gap-4 shrink-0 animate:none sm:animate-scroll-x ' key={idx}>
                            <img src={project.url} 
                            className='size-48 rounded shadow-md shadow-white border border-blue-900 '
                            alt="" />
                              <p>{project.name}</p>
                        </div>
                  )
              })
                  
              }
          </div>
    </div>
    
  )
}

export default Projects

// import React from 'react';

// const Projects = () => {

//     const projects = [
//         { url: "./chatpdf.png", name: "ChatPdf" },
//         { url: "./portfolio.jpg", name: "Profile" },
//         { url: "./voting-vector.jpg", name: "Voting System" },

//     ]

//   return (
//     <div className='flex h-[100%] bg-slate-900 p-3'>
//       <b className='text-2xl'>Projects</b>

//       <div className='flex h-[50%] gap-8 overflow-x-auto flex-nowrap justify-center items-center mt-10 border p-2 overflow-y-hidden'>
//         {
//           projects.map((project, idx) => {
//             return (
//               <div className='flex flex-col gap-4 animate-scroll-x' key={idx}>
//                 <img src={project.url} 
//                     className='w-48 rounded shadow-md shadow-white'
//                     alt="" />
//                 <p>{project.name}</p>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default Projects;

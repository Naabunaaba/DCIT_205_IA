import React from 'react'

export default function Footer() {
    const navigation = [
        {title:"Academics",
         links:[
            {
                name:"Undergraduate Courses",
                href:"#"
            },
            {
                name:"Graduate Courses(MPhil Computer Science)",
                href:"#"
            },

            {
                name:"Graduate Courses(PhD)",
                href:"#"
            },
            {
                name:"Academic Calendar",
                href:"#"
            },
        ]
      },
        {title:"Admissions",
         links:[
            {
                name:"Undergraduate",
                href:"#"
            },

            {
                name:"International Students",
                href:"#"
            },
            {
                name:"Entry Requirements",
                href:"#"
            },
            {
                name:"Contact Us",
                href:"#"
            },
        ]
      },
        {title:"Research",
         links:[
            {
                name:"Research at DCS",
                href:"#"
            },

            {
                name:"Libraries",
                href:"#"
            }
        ]
      },
        {title:"About The Department",
         links:[
            {
                name:"Introducing DCS",
                href:"#"
            },

            {
                name:"Faculty",
                href:"#"
            },
            {
                name:"Events",
                href:"#"
            }
        ]
      },
        
    ]
  return (
    <div className='main footer flex'>
        {
          navigation.map((nav) => {
            return (
              <div className='footer-column'>
                  <h1 className='title-text' style={{margin:"20px 5px ",textAlign:"left"}}>{nav.title}</h1>
                  <ul>
                      {
                        nav.links.map(nav => {
                          return (
                               <li className='link'><a className="link" href={nav.href}>{nav.name}</a></li>
                          )
                        })
                      }
                  </ul>
               </div>
            )
          })
        }

    </div>
  )
}
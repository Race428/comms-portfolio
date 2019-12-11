import tender from './photos/tender.png'
import viddy from './photos/viddy.png'
import DR from './photos/DR.jpg'
export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Race Acheson',
        headerTagline: [//Line 1 For Header
                        `My name is Race, and yes, that's my real name`,
                        //Line 2 For Header
                        `I'm a Software Developer and I'm`,
                        //Line 3 For Header
                        'from Provo, Utah'
    ],
        //Contact Email
        contactEmail:'raceacheson@gmail.com',
        // Add Your About Text Here
        abouttext: "My name is Race and I am a student at BYU in Provo, Utah. After switching from business to Communication Studies, I attended DevMountain a coding bootcamp to learn how to develop websites.",
        aboutImage:'https://tender-connections.s3-us-west-1.amazonaws.com/f1420c05-2670-4aa0-a90d-26da285fec31-Race-Picture.jpg',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Viddy', //Project Title - Add Your Project Title Here
            service:'Videograhy', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:`${viddy}`,
             //Project URL - Add Your Project Url Here
             url:'https://viddy.app/'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Tender Connections',
                service: 'Food Dating App',
                imageSrc: `${tender}`,
                url: 'https://tenderconnections.net/'
            },

            {
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Disaster Recovery Blog',
                service: 'Blog for Micro Focus',
                imageSrc: `${DR}`,
                url: ' https://blog.microfocus.com/top-3-disaster-recovery-considerations/'
            },
            


        //     { 
        //         id: 3,//DO NOT CHANGE THIS (Please)😅
        //         title: 'Project Three',
        //         service: 'Web App',
        //         imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        //         url: 'http://chetanverma.com/'
        //     },
        //     {
        //         id: 4,//DO NOT CHANGE THIS (Please)😅
        //         title: 'Project Four',
        //         service: 'Branding',
        //         imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        //         url: 'http://chetanverma.com/'
        //    }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/race428'},
          
            {
                name: 'Linkedin',
                url: 'https://www.linkedin.com/in/race/'
            }

        ]
    }
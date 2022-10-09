import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

import {
  grv,
  chillin,
  gauto,
  imnt,
  wifak,
  gericht,
  huddle,
  restCOuntry,
} from '../../assets/images'

// projects data
export const projects = [
  {
    id: 1,
    name: 'IMNT',
    desc:
      'Personalized web application for a training center "IMNT"',
    stack: 'ReactJs ExpressJs MongoDB ',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Maskhi-Aymen/imnt',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://imnt.netlify.app/home',
    },
    imgUrl: imnt,
  },
  {
    id: 2,
    name: 'CHILLIN\'',
    desc: 'Web and smart application for mental health on implementing ML model',
    stack: 'ReactJS Django MongoDB',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Maskhi-Aymen/chillin-pcd-ensi',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://chillin-app.herokuapp.com/',
    },
    imgUrl: chillin,
  },
  {
    id: 3,
    name: 'G-Auto',
    desc: 'A web application for driving schools to manage their financial, material and human resources. ',
    stack: 'React JS',
    imgUrl: gauto,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/KhalilThabet/GAuto',
    },
    website: {
      icon: <TbWorld />,
      url: '',
    },
  },
  {
    id: 4,
    name: 'Al Wifak',
    desc: 'Personalized web application for a Car Rental "Al Wifak"',
    stack: 'ReactJS ExpressJS MongoDB',
    gitHubUrl: {
      icon: <GrGithub />,
      url: '',
    },
    website: {
      icon: <TbWorld />,
      url: '',
    },
    imgUrl:wifak,
  },

  {
    id: 5,
    name: 'G-RendezVous',
    desc: 'A project that displays all information about a country',
    stack: 'C++',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Maskhi-Aymen/G-RendezVous',
    },
    website: {
      icon: <TbWorld />,
      url: '',
    },
    imgUrl: grv,
  },
  
]

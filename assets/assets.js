import user_image from './user-image.jpg';
import code_icon from './coding-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './education-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import hoby_icon from './hoby.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import nextjs_icon from './nextjs.png';
import postgressql_icon from './postgresql.png';
import aws_icon from './aws.png';
import database_icon from './database.png';
import fastapi_icon from './fastapi.png';
import python_icon from './python.png';
import mongodb from './mongodb.png';
import react_icon from './react.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web.png';
import web2_icon from './web2.png';
import dataviz_icon from './data.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import web_image from './public/web.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    web_image,
    python_icon,
    fastapi_icon,
    aws_icon,
    nextjs_icon,
    postgressql_icon,
    react_icon,
    hoby_icon,
    database_icon,
    web2_icon,
    dataviz_icon
};

export const workData = [
    {
        title: 'Data Analysis with R',
        description: 'Analysing and data visualisation with R and R studio',
        bgImage: "/data.png",
        link:"",
    },
    {
        title: 'Multi cloud Cost calculator ',
        description: 'Software Architecture and Web app prototype with Angular ',
        bgImage: '/sa.png',
        link:"https://git.rwth-aachen.de/junayed0786/cloud-service-estimation-prototype/-/tree/dev?ref_type=heads",
        
    },
    {
        title: 'Karma Online Page',
        description: 'Web Design',
        bgImage: '/web.png',
        link:"https://kamna-web-frontend-dfpilk5q1-junayed786.vercel.app/",
    },
    {
        title: 'Sentiment Relation with Crypto Price',
        description: 'Finding co relation of Human sentiment with cryto prices',
        bgImage: './crypto.png',
        link:"https://ieeexplore.ieee.org/abstract/document/8641075",
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web Development', description: 'Full Stack developer at StrategyBridgeAi...', link: 'experiences/strategybridge' },
    { icon: assets.database_icon, title: 'Web Development', description: 'Full Stack developer at E.On Research Center...', link: 'experiences/eon' },
    { icon: assets.dataviz_icon, title: 'Data Science Focus', description: 'Python and Web developer at RWTH Aachen University...', link: 'experiences/rwth' },
    { icon: assets.web2_icon, title: 'Web design and Development', description: 'Full Stack developer at Hydroplace Gmbh...', link: 'experiences/hydroplace' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, Java, HTML, CSS, JavaScript, TypeScript, Latex' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'MSc in Softwer Systems Engineering and BSc in Computer Science Engineering' },
    { icon: assets.hoby_icon, iconDark: assets.hoby_icon, title: 'Hobies', description: 'Football, Table Tennis, Badmintion' }
];

export const toolsData = [
    assets.vscode, 
    assets.python_icon, 
    assets.mongodb, assets.figma, 
    assets.git, assets.fastapi_icon, 
    assets.aws_icon, 
    assets.postgressql_icon, 
    assets.nextjs_icon,
    assets.react_icon,
];
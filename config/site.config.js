/**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 */
module.exports = {
  // This is what we use to identify who you are when you are initialising the website for the first time.
  // Make sure this is exactly the same as the email address you use to sign into your Microsoft account.
  // You can also put this in your Vercel's environment variable 'NEXT_PUBLIC_USER_PRINCIPLE_NAME' if you worry about
  // your email being exposed in public.
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'hang@x-gap.ml',

  // [OPTIONAL] This is the website icon to the left of the title inside the navigation bar. It should be placed under the
  // /public directory of your GitHub project (not your OneDrive folder!), and referenced here by its relative path to /public.
  icon: '/icons/512.png',

  // Prefix for KV Storage
  kvPrefix: process.env.KV_PREFIX || '',

  // The name of your website. Present alongside your icon.
  title: "HFUT2020EM",

  // The folder that you are to share publicly with onedrive-vercel-index. Use '/' if you want to share your root folder.
  baseDirectory: '/',

  // [OPTIONAL] This represents the maximum number of items that one directory lists, pagination supported.
  // Do note that this is limited up to 200 items by the upstream OneDrive API.
  maxItems: 100,

  // [OPTIONAL] We use Google Fonts natively for font customisations.
  // You can check and generate the required links and names at https://fonts.google.com.
  // googleFontSans - the sans serif font used in onedrive-vercel-index.
  googleFontSans: 'Josefin Sans',
  // googleFontMono - the monospace font used in onedrive-vercel-index.
  googleFontMono: 'Josefin Sans',
  // googleFontLinks -  an array of links for referencing the google font assets.
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,500&display=swap'],

  // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
  // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
  footer:
    'Powered by <a href="https://github.com/hang2048/onedrive-vercel-index" target="_blank" rel="noopener noreferrer">ONE-Index</a>. Made with ❤ by HANG＆XU·2GOU.',

  // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
  // the directories in which you have .password set. Check the documentation for details.
  protectedRoutes: [
    '/H_个人文件', 
    '/B_班级通知/F_力学系班导师制度个人信息档案', '/B_班级通知/X_先进班级', '/B_班级通知/Z_2021-2022大二中期寒假/个人志愿活动认定', '/A_学业文件/Z_已完成/L_流体力学/课堂演讲', 
    '/A_学业文件/Z_已完成/Y_英语', '/A_学业文件/Z_已完成/S_数学物理方程/杂文件', '/A_学业文件/Z_已完成/ZZzz_题库', '/A_学业文件/Y_杂文件/陈年外刊/2022 Soren18期寒假课(完结)'
  ], 
  
  // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
  email: 'mailto:lzh20022020@gmail.com',

  // [OPTIONAL] This is an array of names and links for setting your social information and links.
  // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
  // you provide. See the documentation for details.
  links: [
    {
      name: 'Telegram',
      link: 'https://t.me/I_am_niu_touren',
    }, 
    {
      name: 'WeChat',
      link: 'https://u.wechat.com/MG6QMN8yDxKQwOuxuWtbStw',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/hang2048',
    },
  ],

  // This is a day.js-style datetime format string to format datetimes in the app. Ref to
  // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
  // without timezone and replacing T with space.
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}

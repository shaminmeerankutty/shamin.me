(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4U9V":function(e,t,s){"use strict";s.r(t),s.d(t,"_frontmatter",(function(){return o})),s.d(t,"default",(function(){return c}));var a=s("zLVn"),n=(s("q1tI"),s("7ljp")),i=s("Tqsq"),o={},r={_frontmatter:o},l=i.a;function c(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(n.b)(l,Object.assign({},r,s,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"I wanted to create a blog for a long time and I also wanted to start it from scratch. So I did a quick research on the stacks I can use.\nI was familiar with ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://gatsby.com"}),"Gatsby"),", it is an amazing tool which can be used to generate static html files. The best thing about\nthe gatsby is you can write the code in React and it will create static html files for you. "),Object(n.b)("p",null,"The main thing to care about writing a blog is to SEO, nobody\nwant's to write a blog that is hidden from outside world. Writing it in React directly with CRA or a custom webpack configuration doesn't directly supports\nserver side rendering. So you will need to have additional tools like Next.js for doing this."),Object(n.b)("p",null,"Another good thing about having static html files is you can deploy it easlily with some services like ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"netlify.com"}),"Netlify"),", ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://surge.sh/"}),"Surge")," etc. or you can use github pages.\nThere are a lot of good articles on how to setup a continous deployment (CD) to these systems using github actions and travis."),Object(n.b)("p",null,"Also gatsby have a lot of cool plugins which can help you create awesome blogs. I can list some of them which I used."),Object(n.b)("h2",null,"Gatsby plugins I used."),Object(n.b)("h3",null,Object(n.b)("a",Object.assign({parentName:"h3"},{href:"https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/"}),"gatsby-plugin-react-helmet")),Object(n.b)("p",null,"This plugin helps you make your SEO better by updating the title and description dynamically and also setting the meta tags.\nYou can see my ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/shamin/shamin.github.io/blob/master/src/components/seo.tsx"}),"seo.tsx")," file to know more about how I set it up. This plugin uses ",Object(n.b)("inlineCode",{parentName:"p"},"react-helmet")," underneath."),Object(n.b)("h3",null,Object(n.b)("a",Object.assign({parentName:"h3"},{href:"https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/"}),"gatsby-source-filesystem")),Object(n.b)("p",null,"Gatsby's filesystem plugin is one of the commonly used plugin. Usually it is used if one of the plugins or your custom plugin need to read some files in source.\nLike, for example In our case we want our ",Object(n.b)("inlineCode",{parentName:"p"},"gatsby-plugin-mdx")," to read all the ",Object(n.b)("inlineCode",{parentName:"p"},"mdx")," files, so I have set filesystem to read the ",Object(n.b)("inlineCode",{parentName:"p"},"posts")," folder which contain all\nmy mdx files."),Object(n.b)("h3",null,Object(n.b)("a",Object.assign({parentName:"h3"},{href:"https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/"}),"gatsby-plugin-mdx")),Object(n.b)("p",null,"This is an amazing gatsby plugin which lets you write pages in ",Object(n.b)("inlineCode",{parentName:"p"},"mdx")," format. ",Object(n.b)("inlineCode",{parentName:"p"},"mdx")," is a superset of markdown which supports ",Object(n.b)("inlineCode",{parentName:"p"},"jsx"),". That means you can import and\nuse react components along with markdown. This plugin takes care of everything and render the ",Object(n.b)("inlineCode",{parentName:"p"},"mdx")," to a page."),Object(n.b)("h3",null,Object(n.b)("a",Object.assign({parentName:"h3"},{href:"https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/"}),"gatsby-plugin-manifest")),Object(n.b)("p",null,"This plugin is used to create a manifest file for your web application. This is mostly useful for creating PWA apps, but I used it because I want to generate the favicons\nand icons."),Object(n.b)("p",null,"These were the gatsby plugins I used. Apart from this I have used 2 other thirdparty libraries. This include emotion and prism js."),Object(n.b)("h2",null,"Other libraries I used."),Object(n.b)("h3",null,Object(n.b)("a",Object.assign({parentName:"h3"},{href:"https://emotion.sh/"}),"Emotion")),Object(n.b)("p",null,"I am big fan of css and I believe that a frontend developer show definetly have a solid css understanding. Emotion is css-in-js library which helps you write\nscoped css. One of the major benefits of using a scoped css is if you are ever going to remove a component file it will thereby remove the css also.\nSo you don't have to go into other files and remove it. It also have great benefits if you are writing shared components."),Object(n.b)("h3",null,Object(n.b)("a",Object.assign({parentName:"h3"},{href:"https://prismjs.com/"}),"Prism js")),Object(n.b)("p",null,"I am actually using a React version of this library called ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/FormidableLabs/prism-react-renderer"}),"prism-react-renderer"),". It helps in syntax highlighting the code blocks. So I have created a mapping\nin my ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/shamin/shamin.github.io/blob/master/src/components/markdown/mdxStyler.tsx"}),"mdxStyler.tsx")," file which maps my code component to a syntax hightlight component which uses prism-react-renderer. Prism js also comes with some awesome\nthemes."),Object(n.b)("p",null,"I will be constantly improving this blog and I will try to update this post about the changes I make in the future. Thanks for reading."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-posts-11-2020-how-i-created-this-blog-mdx-99375e4500558f7c0518.js.map
# Static Generation & Issues
+ Static Generation is a method of pre-rendering where the HTML pages are generated at the build time.
+ The pre-rendred static pages can be pushed to a CDN, cashed and served to clients across the globe almost instantly.
+ Static content is fast and better for SEO as they are immediately indexed by search engines
+ Static generation with getStaticProps for data fetching and getStaticPaths for dynamic pages seems like really good approach to a wide variety of applications in production
## Issues
- The build time is proportional to the number of pages in the application  
- A page, once generated, can contain stale data till the time you rebuild the application  
## ISR ( Incremental Static Regeneration )
- You can statically generate individual pages without needing to rebuild the entire site, effectively solving the issue of dealing with stale data 
### How ?
- In the getStaticProps function, apart from the props key, we can specify a revalidate key the value for it is the number of seconds after which page re-generation can occur 
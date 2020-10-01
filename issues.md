production about page error - copied project page and edited the about contents

unable to prerender all routes (/project)
mounted() -> created() or mounted() -> beforeMount()

strategy don't prerender if error occurs

never refresh the same document like / and /index.html

use vw units to p for breakpoint intensive container


how to use root vue instance methods in views/components
how to use root vue instance methods in props/attributes



https://stackoverflow.com/questions/14963393/my-body-background-color-disappears-when-scrolling    (html, body height 100%)

vue-headroom plugin registration name headroom or vueHeadroom
understanding component registration in vue

---- chained dependency issues on npm run build
Building for production...
Browserslist: caniuse-lite is outdated. Please run next command `npm update caniuse-lite browserslist`

---
https://www.google.com/safebrowsing/static/faq.html#q1


----site verification (your site redirects to a site that serves malware site)
https://www.stopbadware.org/clearinghouse/search
https://transparencyreport.google.com/safe-browsing/search?hl=en
https://support.google.com/webmasters/answer/9008080#domain_name_verification
https://developers.google.com/web/fundamentals/security/hacked/how_do_I_know_if_site_hacked


https://support.google.com/webmasters/troubleshooter/6155978?hl=en

https://www.stopbadware.org/hacked-sites-resources

https://sitecheck.sucuri.net/results/mvbuilders.in
https://urlquery.net/report/1a06d50c-dcd4-4342-9ae7-680524a53efc
https://heimdalsecurity.com/blog/javascript-malware-explained/
https://support.google.com/webmasters/answer/9012289
https://developers.google.com/search/docs/guides/submit-URLs

---- strategy to remove vbdropper

remove vbscript manually which is after the end of html tag in each file. (total 360 worked like a charm)

---- check if a html element exists

if(typeof(element) != 'undefined' && element != null){
        alert('Element exists!');
    } else{
        alert('Element does not exist!');
    }

---- empty buttons (WAVE accessibility)
&#160; &nbsp; ()&#160;.&nbsp;)

https://stackoverflow.com/questions/10835500/how-to-change-text-transparency-in-html-css

opacity applies to the whole element, so if you have a background, border or other effects on that element, those will also become transparent. If you only want the text to be transparent, use rgba.

#foo {
    color: #000; /* Fallback for older browsers */
    color: rgba(0, 0, 0, 0.5);

---- list style image

The list-style property is a bit problematic in IE (minus IE8). Instead make it a background image, disable the default list style, add a padding to accomodate for the image width, and the space between your bullet image and the text, then adjust your image with positioning the background to your liking.

.list_links ul {
    list-style:none;
}

.list_links li {
     background:url(bullet.png) no-repeat left center;
     padding-left: (n)px; /* the width of your image + some space */
     margin: 3px 0;
}

Or, for even more control:

.list_links li {
     background:url(bullet.png) no-repeat 0 (n)px;
     padding-left: (n)px; /* the width of your image + some space */
     margin: 3px 0;
}

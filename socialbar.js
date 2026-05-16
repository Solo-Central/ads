(function() {
    var script = document.createElement('script');
    script.src = "https://throbbingimmensely.com/9b/33/6a/9b336a9bd19b2fadcf2b7b37d07d051f.js";
    script.async = true; // this thingy allows the page load while still loading the script which is really useful.  -qatual
    var head = document.head || document.getElementsByTagName('head')[0];

    if (head) {
        head.insertBefore(script, head.firstChild);
    } else {
        document.documentElement.appendChild(script);
    }
})();
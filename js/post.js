window.addEventListener('load', function(){
  toc = document.getElementById('markdown-toc');
  panel = document.getElementById('insert-toc');
  bar = document.getElementById("toc-panel");
  toc = document.getElementById("markdown-toc");

  if (window.innerWidth <1000) {
      content.appendChild(bar);
  }else {
      panel.appendChild(bar);
  };
  toc.className = toc.className.split('disabled').join('');

  if (bar.offsetHeight > window.innerHeight - 100 && !toc.className.includes('pre-scrollable')) {
    toc.className = toc.className + " pre-scrollable";
  };

},true)

window.addEventListener('resize', function(){
  console.log('RESIZE')
  bar = document.getElementById("toc-panel");
  toc = document.getElementById("markdown-toc");
  content = document.getElementById("content");

  if (bar.offsetHeight > window.innerHeight && !toc.className.includes('pre-scrollable')) {
    toc.className = toc.className + " pre-scrollable";
  }else if(window.innerHeight > 650) {
    toc.className = toc.className.split(' pre-scrollable').join('');
  };

  if (window.innerWidth < 1000) {
      content.appendChild(bar);
  }else {
      panel.appendChild(bar);
  };

}, true)


document.addEventListener('scroll', function(){
  sticky = document.getElementById("toc-panel");
  content = document.getElementById("topics");
  footer = document.getElementById("footer");
  footerCoords = footer.getBoundingClientRect();
  contentCoords = content.getBoundingClientRect();
  stickyCoords = sticky.getBoundingClientRect();
  widthToc = sticky.offsetWidth;
  // console.log(contentCoords);



      sticky.className = sticky.className.split(' post-end').join('');

        if (contentCoords.bottom <= 0 && window.innerWidth > 990) {

          sticky.className = sticky.className.split(' affix').join('');
          sticky.className = sticky.className + " affix";
          sticky.style = "top:30px; width:" + widthToc + "px;";
          // console.log(contentCoords);

        }else{

          sticky.className = sticky.className.split(' affix').join('');
          sticky.style = "";

        };




},true)

window.addEventListener('load', function(){
  toc = document.getElementById('markdown-toc');
  console.log(toc);
  panel = document.getElementById('insert-toc');
  panel.appendChild(toc);
  
  bar = document.getElementById("toc-panel");
  if (bar.offsetHeight > 500 && !bar.className.includes('pre-scrollable')) {
    bar.className = bar.className + " pre-scrollable";
  };
},true)

window.addEventListener('resize', function(){
  console.log('RESIZE')
  bar = document.getElementById("toc-panel");
  if (bar.offsetHeight > window.innerHeight && !bar.className.includes('pre-scrollable')) {
    bar.className = bar.className + " pre-scrollable";
  }else if(window.innerHeight > 650) {
    bar.className = bar.className.split(' pre-scrollable').join('');
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
  console.log(contentCoords);


    
      sticky.className = sticky.className.split(' post-end').join('');
      
        if (contentCoords.bottom <= 0 && window.innerWidth > 990) {
          
          sticky.className = sticky.className.split(' affix').join('');
          sticky.className = sticky.className + " affix"; 
          sticky.style = "top:30px; width:" + widthToc + "px;";
          console.log(contentCoords);
          
        }else{
          
          sticky.className = sticky.className.split(' affix').join('');
          sticky.style = "";
          
        };
        


  
},true) 

  function highlightCurrentLink() {
      var arr = document.getElementsByTagName("a");
      for (var i = 0, len = arr.length; i < len; ++i) {
          if (arr[i].href == window.location.href) {
              arr[i].style.fontWeight = "bold";
              // break;
          }
      }
  }
  highlightCurrentLink();


window.addEventListener('scroll', function() {
  let aaa = document.querySelector('.counter__pointer');


  if (window.pageYOffset < 1220) {
    aaa.style = 'top: 0';
  }

  if (window.pageYOffset > 1220) {
    aaa.style = 'top: 60px';

  }  if (window.pageYOffset > 2020) {
    aaa.style = 'top: 120px';

  }  if (window.pageYOffset > 2920) {
    aaa.style = 'top: 180px';
  }

});

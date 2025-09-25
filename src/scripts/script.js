document.addEventListener('DOMContentLoaded', () => {
  const tocar = document.getElementById('tocar');
  const barra = document.getElementById('barra');
  
    tocar.addEventListener('click', () => {
        barra.innerHTML=`<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A402531966&color=%23e9db62&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`
        barra.classList.toggle('visible');
    })
})

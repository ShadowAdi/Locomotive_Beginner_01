const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
const el=document.getElementById("img")

scroll.on("call",(ans)=>{
    if (ans=="testEvent") {
        el.style.borderRadius="10px"
    }
})
document.querySelector('#mine').addEventListener('click', () => {
    scroll.scrollTo(0);
  });
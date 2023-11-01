$(document).ready(function(){
  function skill(id, percent){
  var bar = new ProgressBar.Circle(id,{
    strokeWidth: 5,
    trailWidth: 4,
    color: '#194569',
    duration: 2400,
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + '%')}
  })
  bar.animate(percent)
  }
  skill('#ae',0.6);
  skill('#pr',0.35)
  skill('#c4d',0.2)
  skill('#ps',0.5)
  skill('#ai',0.2)
  skill('#html',0.37)
})

var circulo = $('circle'),
	 flechas= $('.flechas'),
    tl = new TimelineMax({
      delay:0.2
    })

tl.from(flechas,1,{
	rotation:'-180',
	transformOrigin:'50% 50%'
	}).staggerFrom(circulo, 0.5,{
  	autoAlpha:0,
	scale:0,
	transformOrigin:'50% 50%',
	ease:Back.easeOut
},'0.2')




function play(what, ev)
{
	if(ev)
		ev.preventDefault();
	var appendPlaylist = ev ? ev.shiftKey : false;
	w = window.open('','ru_spb_vir_Player_MP3','directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,height=275px,width=350px');
	if(w.location.href === 'about:blank') {
		w.location.href = '/player.html';
		w.addEventListener('load', function() { w.play(what, appendPlaylist) }, false);
	} else
		w.play(what, appendPlaylist);
}
function possess(el)
{
	Array.prototype.forEach.call(el.getElementsByTagName('a'), function(e) {
		if(e.href.match(/\.m3u$/i))
			e.setAttribute('onClick', 'play(this.href, event)');
	});
}

var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(d){var a=function(f){var g=this;this.$el=f;this.$el.click(function(j){var i=d(this),h=i.data("userId");j.preventDefault();if(i.hasClass("not-following")){g.follow(h)}else{if(i.hasClass("following")){g.unfollow(h)}}}).mouseleave(function(){d(this).removeClass("cancel-hover")})};a.prototype={follow:function(g){var h=this,f="/ajax/becomeFan/"+g;d.post(f,function(i){parseResponse(i);if(responseArray.code=="0"){h.setState("following");h.$el.addClass("cancel-hover")}resetResponse()})},unfollow:function(g){var h=this,f="/ajax/removeIdol/"+g;d.post(f,function(i){parseResponse(i);if(responseArray.code=="0"){h.setState("not-following")}resetResponse()})},setState:function(f){this.$el.removeClass("following not-following").addClass(f)}};d(".follow-button").each(function(){var f=d(this);if(!f.data("followButton")){f.data("followButton",new a(f))}});d("#videos, #favorites, #followers, #following").on("click","[data-page]",function(j){var i=d(this),g=i.data("page"),h=i.closest(".go-pagination").data("target"),f=i.closest(".go-pagination").data("endPoint");j.preventDefault();if(i.parent().hasClass("disabled")){return}d(h).addClass("loading");d.get(f,{page:g,ajax:1},function(k){d.scrollTo(h,{duration:200,offset:{top:-50}});d(h).html(k).removeClass("loading")})}).on("submit",".go-pagination-form",function(j){var i=d(this),g=parseInt(i.find('input[name="page"]').val(),10),h=i.closest(".go-pagination").data("target"),f=i.closest(".go-pagination").data("endPoint");j.preventDefault();if(g<=0||g>i.data("maxPage")){alert(GT.gettext("Please input a valid page number"));return}d(h).addClass("loading");d.get(f,{page:g,ajax:1},function(k){d.scrollTo(h,{duration:200,offset:{top:-50}});d(h).html(k).removeClass("loading")})});function b(){var f=calcServerTime(srv_tz_os);d("#feeds .feed-time").each(function(){var j=d(this);var k=j.attr("title").substr(0,10).split("-");var i=j.attr("title").substr(11,8).split(":");var h=new Date(k[0],k[1]-1,k[2],i[0],i[1],i[2]);var g=timeAgo((f.getTime()-h.getTime())/1000|0);j.text(g)})}var e=d("#feeds");if(e.length){var c=e.data("userId");d.get("/ajax/getUserFeed/"+c+"/other/5/0/all/0",function(f){parseResponse(f);e.html(responseArray.html);b()})}})(jQuery);

}
/*
     FILE ARCHIVED ON 07:21:41 Nov 04, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:59:50 Mar 27, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 102.482
  exclusion.robots: 0.228
  exclusion.robots.policy: 0.222
  RedisCDXSource: 0.735
  esindex: 0.008
  LoadShardBlock: 78.445 (3)
  PetaboxLoader3.datanode: 68.124 (4)
  CDXLines.iter: 20.775 (3)
  load_resource: 106.296
  PetaboxLoader3.resolve: 85.987
*/
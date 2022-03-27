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

(function(a){var b=function(c){var d=this;this.$el=c;this.$el.on("submit.users.goanimate",".user-message-form",function(g){var f=a(this);g.preventDefault();d.post(f)})};b.prototype=a.extend({},ModalBase.prototype,{post:function(f){var h=this,g=f.find('[name="subject"]'),d=f.find('[name="comment_content"]');if(g.length>0&&g.val()==""){this.alert(GT.gettext("Please enter the subject"),"error");return}if(d.val()==""){this.alert(GT.gettext("Your message is too short"),"error");return}this.alert("");var c=f.serialize();f.form("disable").find('[type="submit"]').button("loading");if(typeof Recaptcha=="object"){Recaptcha.destroy()}a.post(f.attr("action"),c,function(i){parseResponse(i);switch(responseArray.code){case"0":h.$el.modal("hide");showNotice(GT.gettext("Message sent successfully"));a(document).trigger(e=a.Event("messagePosted"));f.form("reset").find('[type="submit"]').button("done");setTimeout(function(){f.find('[type="submit"]').prop("disabled",true)},1);break;case"1":f.find(".recaptcha-container").show();f.form("enable").find('[type="submit"]').button("reset");if(typeof Recaptcha=="object"){Recaptcha.create(recaptcha_public_key,"recaptcha",a.extend({},recaptcha_options,{callback:Recaptcha.focus_response_field}))}break;default:h.alert(responseArray.json.error,"error");f.form("enable").find('[type="submit"]').button("reset");break}resetResponse()})}});a(document).on("click",'[data-action="users-message"]',function(g){var f=a(this),c=ModalBase.ensure("users-message"),d=c.data("sendMessage");if(!d){c.data("sendMessage",d=new b(c))}g.preventDefault();d.load(f.data("remote"))})})(jQuery);

}
/*
     FILE ARCHIVED ON 07:21:41 Nov 04, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:59:23 Mar 27, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 266.928
  exclusion.robots: 0.279
  exclusion.robots.policy: 0.273
  RedisCDXSource: 0.76
  esindex: 0.008
  LoadShardBlock: 245.169 (3)
  PetaboxLoader3.datanode: 247.239 (4)
  CDXLines.iter: 18.479 (3)
  load_resource: 91.788
  PetaboxLoader3.resolve: 67.456
*/
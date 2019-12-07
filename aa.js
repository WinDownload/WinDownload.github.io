var scripts=document.getElementsByTagName("script");var src=scripts[scripts.length-1].src;
function t5490a20_BuildAccessWidget(){var x;$(".accessWidget,.BigAccessWidget,.BigAccessLanguageWidget").remove();$("head").append('<link rel="stylesheet" type="text/css" href="https://accessibility.f-static.com/site/free-accessibility-plugin/accessibility.min.css?v=2">');x='<div class="accessWidget '+widgetPlace+" distance"+widgetDistance+'"><i class="accessfont accessfont-universal-access"></i></div>';$(x).insertAfter("body");t5490a20_localStorageActions();t5490a20_access_transalte();$(".accessWidget").click(function(){t5490a20_CloseAll();
y='<div class="BigAccessWidget '+(access_l=="he"||access_l=="ar"?"rtl":"ltr")+" "+widgetPlace+" distance"+widgetDistance+'">';y+="<h6>"+access_t["accessibility_tool"]+"</h6>";y+='<div class="separateLine"></div>';y+="<ul>";y+='<li class="increase-text" title="'+access_t["increase_text"]+'"><i class="accessfont accessfont-search-plus"></i></li>';y+='<li class="decrease-text" title="'+access_t["decrease_text"]+'"><i class="accessfont accessfont-search-minus"></i></li>';y+='<li class="grayscale" title="'+
access_t["grayscale"]+'"><i class="accessfont accessfont-barcode"></i></li>';y+='<li class="high-contrast" title="'+access_t["high_contrast"]+'"><i class="accessfont accessfont-adjust"></i></li>';y+='<li class="contrast-inverted" title="'+access_t["contrast_inverted"]+'"><i class="accessfont accessfont-low-vision"></i></li>';y+='<li class="light-background" title="'+access_t["light_background"]+'"><i class="accessfont accessfont-lightbulb-o"></i></li>';y+='<li class="highlighting-links" title="'+
access_t["highlighting_links"]+'"><i class="accessfont accessfont-link"></i></li>';y+='<li class="readable-font" title="'+access_t["readable_font"]+'"><i class="accessfont accessfont-font"></i></li>';y+='<li class="reset" title="'+access_t["reset"]+'"><i class="accessfont accessfont-repeat"></i></li>';y+="</ul>";y+='<div class="separateLine"></div>';y+='<div class="powerd">'+access_t["site123_link"]+"</div>";y+='<div class="separateLine"></div>';y+='<div class="powerd"><a href="http://www.free-accessibility-plugin.com/terms-of-use" target="_blank">'+
access_t["terms"]+'</a> | <a href="http://www.free-accessibility-plugin.com" target="_blank">'+access_t["add_to"]+"</a> | v1</div>";y+='<div class="BigAccessWidgetClose">X</div>';y+="</div>";$(y).insertAfter("body");$(".BigAccessWidget").show(200);$(".increase-text").click(function(){var zoom=parseFloat($("body").css("zoom"));zoom+=.2;$("body").css("zoom",zoom);t5490a20_saveToLocalStorage("text-zoom",zoom)});$(".decrease-text").click(function(){var zoom=parseFloat($("body").css("zoom"));zoom-=.2;
$("body").css("zoom",zoom);t5490a20_saveToLocalStorage("text-zoom",zoom)});$(".grayscale").click(function(){t5490a20_resetAll();$("body").addClass("accessibility-plugin-grayscale");t5490a20_saveToLocalStorage("grayscale","active");t5490a20_setBackground($(this))});$(".high-contrast").click(function(){t5490a20_resetAll();$("body").addClass("accessibility-plugin-high-contrast");t5490a20_saveToLocalStorage("high-contrast","active");t5490a20_setBackground($(this))});$(".contrast-inverted").click(function(){t5490a20_resetAll();
$("body").addClass("accessibility-plugin-negative-contrast");t5490a20_saveToLocalStorage("contrast-inverted","active");t5490a20_setBackground($(this))});$(".light-background").click(function(){t5490a20_resetAll();$("body").addClass("accessibility-plugin-light-background");t5490a20_saveToLocalStorage("light-background","active");t5490a20_setBackground($(this))});$(".highlighting-links").click(function(){t5490a20_resetAll();$("body").addClass("accessibility-plugin-links-underline");t5490a20_saveToLocalStorage("highlighting-links",
"active");t5490a20_setBackground($(this))});$(".readable-font").click(function(){t5490a20_resetAll();$("body").addClass("accessibility-plugin-readable-font");t5490a20_saveToLocalStorage("readable-font","active");t5490a20_setBackground($(this))});$(".reset").click(function(){t5490a20_resetAllIncludeZoom()});$(".BigAccessWidgetClose").click(function(){t5490a20_CloseAll()});$(".BigAccessWidgetLanguageButton").click(function(){y='<div class="BigAccessLanguageWidget">';y+="<h6>"+access_t["choose_language"]+
"</h6>";y+="<ul>";y+='<li class="english"><a>English</a></li>';y+='<li class="hebrew"><a>\u05e2\u05d1\u05e8\u05d9\u05ea</a></li>';y+="</ul>";y+="</div>";$(y).insertAfter("body");$(".BigAccessLanguageWidget").show(200);$(".BigAccessWidgetLanguageClose").click(function(){$(".BigAccessLanguageWidget").hide(200)});$(".english").click(function(){access_l="en";t5490a20_BuildAccessWidget();t5490a20_saveToLocalStorage("language","en")});$(".hebrew").click(function(){access_l="he";t5490a20_BuildAccessWidget();
t5490a20_saveToLocalStorage("language","he")})})})}function t5490a20_CloseAll(){$(".BigAccessWidget").remove();$(".BigAccessLanguageWidget").remove()}var access_t=[];var access_l=t5490a20_getParameterByName("lan");var html_lang=$("html").attr("lang");if(access_l!="en"&&access_l!="he"&&access_l!="ru"&&access_l!="ar"&&access_l!="fr")access_l="en";if(html_lang=="en"||html_lang=="he"||html_lang=="ru"||html_lang=="ar"||html_lang=="fr")access_l=html_lang;var widgetPlace=t5490a20_getParameterByName("place");
if(widgetPlace!="bottom-right"&&widgetPlace!="top-right"&&widgetPlace!="bottom-left"&&widgetPlace!="top-left")widgetPlace="bottom-right";var widgetDistance=t5490a20_getParameterByName("distance");if(widgetDistance=="")widgetDistance="50";
function t5490a20_access_transalte(){if(access_l=="en"){access_t["accessibility_tool"]="Accessibility Tool";access_t["increase_text"]="Increase text";access_t["decrease_text"]="Decrease text";access_t["grayscale"]="Grayscale";access_t["high_contrast"]="High Contrast";access_t["contrast_inverted"]="Contrast inverted";access_t["light_background"]="Light background";access_t["highlighting_links"]="Highlighting links";access_t["readable_font"]="Readable font";access_t["reset"]="Reset";access_t["choose_language"]=
"Choose Language";access_t["terms"]="Terms";access_t["add_to"]="Add to your site";access_t["site123_link"]='Contributed with love from <a href="https://www.site123.com" target="_blank">SITE123 Website Builder</a>.'}if(access_l=="he"){access_t["accessibility_tool"]="\u05db\u05dc\u05d9 \u05e0\u05d2\u05d9\u05e9\u05d5\u05ea";access_t["increase_text"]="\u05d4\u05d2\u05d3\u05dc \u05d8\u05e7\u05e1\u05d8";access_t["decrease_text"]="\u05d4\u05e7\u05d8\u05df \u05d8\u05e7\u05e1\u05d8";access_t["grayscale"]=
"\u05d2\u05d5\u05d5\u05e0\u05d9 \u05d0\u05e4\u05d5\u05e8";access_t["high_contrast"]="\u05e0\u05d9\u05d2\u05d5\u05d3\u05d9\u05d5\u05ea \u05d2\u05d1\u05d5\u05d4\u05d4";access_t["contrast_inverted"]="\u05e0\u05d9\u05d2\u05d5\u05d3\u05d9\u05d5\u05ea \u05d4\u05e4\u05d5\u05db\u05d4";access_t["light_background"]="\u05e8\u05e7\u05e2 \u05d1\u05d4\u05d9\u05e8";access_t["highlighting_links"]="\u05d4\u05d3\u05d2\u05e9\u05ea \u05e7\u05d9\u05e9\u05d5\u05e8\u05d9\u05dd";access_t["readable_font"]="\u05e4\u05d5\u05e0\u05d8 \u05e7\u05e8\u05d9\u05d0";
access_t["reset"]="\u05d0\u05d9\u05e4\u05d5\u05e1";access_t["choose_language"]="\u05d1\u05d7\u05e8 \u05e9\u05e4\u05d4";access_t["terms"]="\u05ea\u05e0\u05d0\u05d9 \u05e9\u05d9\u05de\u05d5\u05e9";access_t["add_to"]="\u05d4\u05d5\u05e1\u05e3 \u05dc\u05d0\u05ea\u05e8\u05da";access_t["site123_link"]='\u05e0\u05ea\u05e8\u05dd \u05d1\u05d0\u05d4\u05d1\u05d4 \u05de - <a href="https://he.site123.com" target="_blank">SITE123 \u05d1\u05e0\u05d9\u05d9\u05ea \u05d0\u05ea\u05e8\u05d9\u05dd</a>.'}if(access_l==
"ru"){access_t["accessibility_tool"]="\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439";access_t["increase_text"]="\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442";access_t["decrease_text"]="\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442";access_t["grayscale"]="\u041e\u0442\u0442\u0435\u043d\u043a\u0438 \u0441\u0435\u0440\u043e\u0433\u043e";
access_t["high_contrast"]="\u0412\u044b\u0441\u043e\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u0441\u0442";access_t["contrast_inverted"]="\u041a\u043e\u043d\u0442\u0440\u0430\u0441\u0442\u043d\u044b\u0439 \u0438\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439";access_t["light_background"]="\u0421\u0432\u0435\u0442\u043b\u044b\u0439 \u0444\u043e\u043d";access_t["highlighting_links"]="\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0441\u0441\u044b\u043b\u043e\u043a";
access_t["readable_font"]="\u0427\u0438\u0442\u0430\u0435\u043c\u044b\u0439 \u0448\u0440\u0438\u0444\u0442";access_t["reset"]="\u0421\u0431\u0440\u043e\u0441";access_t["choose_language"]="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044f\u0437\u044b\u043a";access_t["terms"]="\u0441\u0440\u043e\u043a\u0438";access_t["add_to"]="\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0441\u0432\u043e\u0439 \u0441\u0430\u0439\u0442";access_t["site123_link"]='\u0412\u043d\u0435\u0441\u0435\u043d \u0432 \u043b\u044e\u0431\u043e\u0432\u044c \u0441 <a href="https://ru.site123.com" target="_blank">SITE123</a>.'}if(access_l==
"ar"){access_t["accessibility_tool"]="\u0623\u062f\u0627\u0629 \u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0627\u0644\u0648\u0635\u0648\u0644";access_t["increase_text"]="\u0632\u064a\u0627\u062f\u0629 \u0627\u0644\u0646\u0635";access_t["decrease_text"]="\u062a\u0642\u0644\u064a\u0644 \u0627\u0644\u0646\u0635";access_t["grayscale"]="\u0627\u0644\u0631\u0645\u0627\u062f\u064a";access_t["high_contrast"]="\u062a\u0628\u0627\u064a\u0646 \u0639\u0627\u0644\u064a";access_t["contrast_inverted"]="\u0627\u0644\u062a\u0628\u0627\u064a\u0646 \u0645\u0642\u0644\u0648\u0628";
access_t["light_background"]="\u0627\u0644\u062e\u0644\u0641\u064a\u0629";access_t["highlighting_links"]="\u062a\u0633\u0644\u064a\u0637 \u0627\u0644\u0636\u0648\u0621 \u0639\u0644\u0649 \u0627\u0644\u0631\u0648\u0627\u0628\u0637";access_t["readable_font"]="\u062e\u0637 \u0642\u0627\u0628\u0644 \u0644\u0644\u0642\u0631\u0627\u0621\u0629";access_t["reset"]="\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646";access_t["choose_language"]="\u0627\u062e\u062a\u0631 \u0627\u0644\u0644\u063a\u0629";
access_t["terms"]="\u0634\u0631\u0648\u0637";access_t["add_to"]="\u0627\u0636\u0641 \u0627\u0644\u0649 \u0645\u0648\u0642\u0639\u0643";access_t["site123_link"]='\u062a\u0645\u062a \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0628\u062d\u0628 \u0645\u0646 <a href="https://ar.site123.com" target="_blank">SITE123</a>.'}if(access_l=="fr"){access_t["accessibility_tool"]="Outil d'accessibilit\u00e9";access_t["increase_text"]="Augmenter le texte";access_t["decrease_text"]="Diminuer le texte";access_t["grayscale"]=
"Niveaux de gris";access_t["high_contrast"]="Contraste \u00e9lev\u00e9";access_t["contrast_inverted"]="Contraste invers\u00e9";access_t["light_background"]="Fond clair";access_t["highlighting_links"]="Mise en surbrillance des liens";access_t["readable_font"]="Police lisible";access_t["reset"]="R\u00e9initialiser";access_t["choose_language"]="Choisissez la langue";access_t["terms"]="termes";access_t["add_to"]="Ajouter \u00e0 votre site";access_t["site123_link"]='A contribu\u00e9 avec l\'amour de <a href="https://fr.site123.com" target="_blank">SITE123</a>.'}}
function t5490a20_resetAll(){$("body").removeClass("accessibility-plugin-grayscale");t5490a20_removeLocalStorage("grayscale");$("body").removeClass("accessibility-plugin-high-contrast");t5490a20_removeLocalStorage("high-contrast");$("body").removeClass("accessibility-plugin-negative-contrast");t5490a20_removeLocalStorage("negative-contrast");$("body").removeClass("accessibility-plugin-light-background");t5490a20_removeLocalStorage("light-background");$("body").removeClass("accessibility-plugin-links-underline");
t5490a20_removeLocalStorage("links-underline");$("body").removeClass("accessibility-plugin-readable-font");t5490a20_removeLocalStorage("readable-font");$(".BigAccessWidget ul li").css("background-color","transparent")}
function t5490a20_resetAllIncludeZoom(){$("body").css("zoom","1");t5490a20_removeLocalStorage("zoom");$("body").removeClass("accessibility-plugin-grayscale");t5490a20_removeLocalStorage("grayscale");$("body").removeClass("accessibility-plugin-high-contrast");t5490a20_removeLocalStorage("high-contrast");$("body").removeClass("accessibility-plugin-negative-contrast");t5490a20_removeLocalStorage("negative-contrast");$("body").removeClass("accessibility-plugin-light-background");t5490a20_removeLocalStorage("light-background");
$("body").removeClass("accessibility-plugin-links-underline");t5490a20_removeLocalStorage("links-underline");$("body").removeClass("accessibility-plugin-readable-font");t5490a20_removeLocalStorage("readable-font");$(".BigAccessWidget ul li").css("background-color","transparent")}function t5490a20_setBackground(e){e.css("background-color","#ececec")}function t5490a20_saveToLocalStorage(key,action){localStorage.setItem("accessibility-plugin-"+key,action)}
function t5490a20_removeLocalStorage(key){localStorage.removeItem("accessibility-plugin-"+key)}
function t5490a20_localStorageActions(){var language=localStorage.getItem("accessibility-plugin-language");if(language!=""&&language!=null)access_l=language;var zoom=localStorage.getItem("accessibility-plugin-zoom");if(zoom!=""&&language!=null)$("body").css("zoom",zoom);if(localStorage.getItem("accessibility-plugin-grayscale")=="active")$("body").addClass("accessibility-plugin-grayscale");if(localStorage.getItem("accessibility-plugin-high-contrast")=="active")$("body").addClass("accessibility-plugin-high-contrast");
if(localStorage.getItem("accessibility-plugin-negative-contrast")=="active")$("body").addClass("accessibility-plugin-negative-contrast");if(localStorage.getItem("accessibility-plugin-light-background")=="active")$("body").addClass("accessibility-plugin-light-background");if(localStorage.getItem("accessibility-plugin-links-underline")=="active")$("body").addClass("accessibility-plugin-links-underline");if(localStorage.getItem("accessibility-plugin-readable-font")=="active")$("body").addClass("accessibility-plugin-readable-font")}
function t5490a20_getParameterByName(name){url=$("#free_accessibility_plugin_script").attr("src");name=name.replace(/[\[\]]/g,"\\$&");var regex=new RegExp("[?&]"+name+"(=([^&#]*)|&|#|$)"),results=regex.exec(url);if(!results)return null;if(!results[2])return"";return decodeURIComponent(results[2].replace(/\+/g," "))}$(function(){t5490a20_BuildAccessWidget()});
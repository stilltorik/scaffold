this["app"] = this["app"] || {};

this["app"]["app/404.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <title>Page Not Found :(</title>\n        <style>\n            ::-moz-selection {\n                background: #b3d4fc;\n                text-shadow: none;\n            }\n\n            ::selection {\n                background: #b3d4fc;\n                text-shadow: none;\n            }\n\n            html {\n                padding: 30px 10px;\n                font-size: 20px;\n                line-height: 1.4;\n                color: #737373;\n                background: #f0f0f0;\n                -webkit-text-size-adjust: 100%;\n                -ms-text-size-adjust: 100%;\n            }\n\n            html,\n            input {\n                font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            }\n\n            body {\n                max-width: 500px;\n                _width: 500px;\n                padding: 30px 20px 50px;\n                border: 1px solid #b3b3b3;\n                border-radius: 4px;\n                margin: 0 auto;\n                box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n                background: #fcfcfc;\n            }\n\n            h1 {\n                margin: 0 10px;\n                font-size: 50px;\n                text-align: center;\n            }\n\n            h1 span {\n                color: #bbb;\n            }\n\n            h3 {\n                margin: 1.5em 0 0.5em;\n            }\n\n            p {\n                margin: 1em 0;\n            }\n\n            ul {\n                padding: 0 0 0 40px;\n                margin: 1em 0;\n            }\n\n            .container {\n                max-width: 380px;\n                _width: 380px;\n                margin: 0 auto;\n            }\n\n            /* google search */\n\n            #goog-fixurl ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n            }\n\n            #goog-fixurl form {\n                margin: 0;\n            }\n\n            #goog-wm-qt,\n            #goog-wm-sb {\n                border: 1px solid #bbb;\n                font-size: 16px;\n                line-height: normal;\n                vertical-align: top;\n                color: #444;\n                border-radius: 2px;\n            }\n\n            #goog-wm-qt {\n                width: 220px;\n                height: 20px;\n                padding: 5px;\n                margin: 5px 10px 0 0;\n                box-shadow: inset 0 1px 1px #ccc;\n            }\n\n            #goog-wm-sb {\n                display: inline-block;\n                height: 32px;\n                padding: 0 10px;\n                margin: 5px 0 0;\n                white-space: nowrap;\n                cursor: pointer;\n                background-color: #f5f5f5;\n                background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                -webkit-appearance: none;\n                -moz-appearance: none;\n                appearance: none;\n                *overflow: visible;\n                *display: inline;\n                *zoom: 1;\n            }\n\n            #goog-wm-sb:hover,\n            #goog-wm-sb:focus {\n                border-color: #aaa;\n                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n                background-color: #f8f8f8;\n            }\n\n            #goog-wm-qt:hover,\n            #goog-wm-qt:focus {\n                border-color: #105cb6;\n                outline: 0;\n                color: #222;\n            }\n\n            input::-moz-focus-inner {\n                padding: 0;\n                border: 0;\n            }\n        </style>\n    </head>\n    <body>\n        <div class=\"container\">\n            <h1>Not found <span>:(</span></h1>\n            <p>Sorry, but the page you were trying to view does not exist.</p>\n            <p>It looks like this was the result of either:</p>\n            <ul>\n                <li>a mistyped address</li>\n                <li>an out-of-date link</li>\n            </ul>\n            <script>\n                var GOOG_FIXURL_LANG = (navigator.language || '').slice(0,2),GOOG_FIXURL_SITE = location.host;\n            </script>\n            <script src=\"//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js\"></script>\n        </div>\n    </body>\n</html>\n";
},"useData":true});

this["app"]["app/pages/error.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "<h1>"
    + alias1(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"message","hash":{},"data":data}) : helper)))
    + "</h1>\n<h2>"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.error : depth0)) != null ? stack1.status : stack1), depth0))
    + "</h2>\n<pre>"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.error : depth0)) != null ? stack1.stack : stack1), depth0))
    + "</pre>\n";
},"useData":true});

this["app"]["app/pages/landingPage/landingPage.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<template name=\"landingPage\">\n	<div class=\"landingPage\">\n		<form class=\"searchPanel\">\n"
    + ((stack1 = container.invokePartial(partials.autocomplete,(depth0 != null ? depth0.acConfig : depth0),{"name":"autocomplete","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "			<input name=\"dateTimePicker\" id=\"dateTimePicker\" class=\"date\" placeholder=\"when\" type=\"text\" autocomplete=\"off\">\n			<button type=\"submit\" class=\"searchButton\"></button>\n		</form>\n	</div>\n</template>\n";
},"usePartial":true,"useData":true});

this["app"]["app/pages/layout-min.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<!DOCTYPE html>\n<html>\n  <head>\n    <title>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n    <link rel=\"stylesheet\" href=\"style-min.css\"/>\n    <script src=\"application-min.js\"></script> \n  </head>\n  <body>\n    "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  </body>\n</html>\n";
},"useData":true});

this["app"]["app/pages/layout.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<!DOCTYPE html>\n<html>\n  <head>\n    <title>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n    <link rel=\"stylesheet\" href=\"styles.css\"/>\n    <script src=\"application.js\"></script> \n  </head>\n  <body>\n    "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  </body>\n</html>\n";
},"useData":true});

this["app"]["app/widgets/autocomplete/autocomplete.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "			<li class=\"suggestion\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n				"
    + alias3((helpers.suggestionString || (depth0 && depth0.suggestionString) || alias2).call(alias1,(depth0 != null ? depth0.suggestion : depth0),{"name":"suggestionString","hash":{},"data":data}))
    + "\n			</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<template name=\"autocomplete\">\n	<input id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"autocomplete-input "
    + alias4(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" autocomplete=\"off\"/>\n	<ul class=\"suggestions\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.suggestion : depth0),(depth0 != null ? depth0["in"] : depth0),(depth0 != null ? depth0.displayedSuggestions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n</template>";
},"useData":true});

this["app"]["node_modules/yargs/completion.sh.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "###-begin-"
    + alias4(((helper = (helper = helpers.app_name || (depth0 != null ? depth0.app_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"app_name","hash":{},"data":data}) : helper)))
    + "-completions-###\n#\n# yargs command completion script\n#\n# Installation: "
    + alias4(((helper = (helper = helpers.app_path || (depth0 != null ? depth0.app_path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"app_path","hash":{},"data":data}) : helper)))
    + " completion >> ~/.bashrc\n#    or "
    + alias4(((helper = (helper = helpers.app_path || (depth0 != null ? depth0.app_path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"app_path","hash":{},"data":data}) : helper)))
    + " completion >> ~/.bash_profile on OSX.\n#\n_yargs_completions()\n{\n    local cur_word args type_list\n\n    cur_word=\"${COMP_WORDS[COMP_CWORD]}\"\n    args=$(printf \"%s \" \"${COMP_WORDS[@]}\")\n\n    # ask yargs to generate completions.\n    type_list=`"
    + alias4(((helper = (helper = helpers.app_path || (depth0 != null ? depth0.app_path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"app_path","hash":{},"data":data}) : helper)))
    + " --get-yargs-completions $args`\n\n    COMPREPLY=( $(compgen -W \"${type_list}\" -- ${cur_word}) )\n    return 0\n}\ncomplete -F _yargs_completions "
    + alias4(((helper = (helper = helpers.app_name || (depth0 != null ? depth0.app_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"app_name","hash":{},"data":data}) : helper)))
    + "\n###-end-"
    + alias4(((helper = (helper = helpers.app_name || (depth0 != null ? depth0.app_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"app_name","hash":{},"data":data}) : helper)))
    + "-completions-###\n";
},"useData":true});
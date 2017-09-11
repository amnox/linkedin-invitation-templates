import Vue from 'vue'
import $ from 'jquery';
var vue_instance;



var Child = {
        template: 
    
        "<div class='dropdown'>"+
            "<a id='dLabel' role='button' data-toggle='dropdown' class='btn btn-primary' data-target='#' href='/page.html'>"+
                "Dropdown <span class='caret'></span>"+
            "</a>"+
            "<ul class='dropdown-menu multi-level' role='menu' aria-labelledby='dropdownMenu'>"+
                "<li v-on:click='saveit'><a>Save Current</a></li>"+
                "<li class='divider'></li>"+
                "<li class='dropdown-submenu'>"+
                "<a tabindex='-1' href='#'>Hover me for more options</a>"+
                "<ul class='dropdown-menu'>"+
                    "<li><a tabindex='-1'>Second level</a></li>"+
                    "<li v-on:click='increment'><a>Second level</a></li>"+
                    "<li><a href='#'>Second level</a></li>"+
                    "<li><a href='#'>Second level</a></li>"+
                    "<li><a href='#'>Second level</a></li>"+
                "</ul>"+
                "</li>"+
            "</ul>"+
        "</div>",
        data:function(){
            return{
                save_templates:[]
            }
        },
        methods: {
            increment: function () {
                console.log(window.chrome.cookies);
                $("textarea#custom-message").val("Amd your gramma too");
            },
            saveit: function(){
                $.ajax( { url: "https://api.mlab.com/api/1/databases/heroku_w6n26w98/collections/linkedin_templates?apiKey=W5pxFyujjp0eGHxgTF_sgNqan8BsTJDg",
                data: JSON.stringify( { "x" : 1 } ),
                type: "POST",
                contentType: "application/json" } );
            }
  },
}

export function myLogic() {
    vue_instance = new Vue({
        el: '#custum_invite',
        data: {
            message: 'Hello Vue!'
        },
        components: {
            'my-component': Child
        }
    });
    
}

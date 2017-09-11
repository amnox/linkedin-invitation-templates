import $ from 'jquery';
import { myLogic, moreLogic } from './logic';

//var $ = require("jquery");
var shits=22;

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function disp() {
    
    $("textarea#custom-message").val("FUck yo mama nigga");
    $("div.send-invite__actions").append("<div id = 'custum_invite'><my-component></my-component></div>");
    $("div.send-invite__actions").append(
        "<style type='text/css'' id='styles'>"+
            ".dropdown-submenu {"+
            "position: relative;"+
            "}"+

            ".dropdown-submenu>.dropdown-menu {"+
            "top: 0;"+
            "left: 100%;"+
            "margin-top: -6px;"+
            "margin-left: -1px;"+
            "-webkit-border-radius: 0 6px 6px 6px;"+
            "-moz-border-radius: 0 6px 6px;"+
                "border-radius: 0 6px 6px 6px;"+
            "}"+
            ".dropdown-submenu:hover>.dropdown-menu {"+
            "    display: block;"+
            "}"+

            ".dropdown-submenu>a:after {"+
            "display: block;"+
            "content: ' ';"+
            "float: right;"+
            "width: 0;"+
                "height: 0;"+
                "border-color: transparent;"+
                "border-style: solid;"+
                "border-width: 5px 0 5px 5px;"+
                "border-left-color: #ccc;"+
                "margin-top: 5px;"+
                "margin-right: -10px;"+
            "}"+

            ".dropdown-submenu:hover>a:after {"+
                "border-left-color: #fff;"+
            "}"+

            ".dropdown-submenu.pull-left {"+
                "float: none;"+
            "}"+

            ".dropdown-submenu.pull-left>.dropdown-menu {"+
                "left: -100%;"+
                "margin-left: 10px;"+
                "-webkit-border-radius: 6px 0 6px 6px;"+
                "-moz-border-radius: 6px 0 6px 6px;"+
                "border-radius: 6px 0 6px 6px;"+
            "}"+
        "</style>"
    );
    console.log('Shit', $("textarea#custom-message").html());
    myLogic();
}

$( document ).ready(function() {

    console.log( "ready!" );
    $("div.pv-top-card-section__overflow-wrapper.pv-top-card-section__right-corner-action").click(function(){
        sleep(500).then(() => {
            // Do something after the sleep!
            $("li.action.connect.overflow.ember-view").click(function(){
                    // Do something after the sleep!
                sleep(500).then(() => {
                    $("button.button-secondary-large").click(function(){
                        shits++;
                        sleep(500).then(()=>{disp()});
                    });
                });

            });
        });
        
    });
    
    $("button.connect.primary.top-card-action.ember-view").click(function(){
        console.log("im here");
        sleep(500).then(() => {
            $("button.button-secondary-large").click(function(){
                shits++;
                console.log("bauss");
                sleep(500).then(()=>{disp()});
            });
        });
        console.log("before timeout");
        console.log("after timeout");
    });

});


    // ==UserScript==
    // @name         虎牙/BL/斗鱼 广告
    // @namespace    111
    // @version      1.1.0
    // @description  虎牙直播网页 去广告|去特效|简洁模式
    // @author       wj
    // @match        https://www.huya.com/*
    // @match        https://live.bilibili.com/*
    // @match        https://www.douyu.com/*
    // @icon         https://www.huya.com/favicon.ico
    // ==/UserScript==

    (function() {
      'use strict';
      /* --------------------- 虎牙 ------------------------ */
      // 虎牙顶部广告
      function HY_topHidden(){
          const body = document.querySelector('#J_mainRoom')
          const ele = body.querySelector('#J_roomGgTop')
          ele.style.display = 'none'

      }

      // 虎牙总
      function HY() {
        HY_topHidden()
      }
      /* --------------------- 虎牙 ------------------------ */

      /* --------------------- BILI ------------------------ */
      // bilibili中部广告
      function BILI_middleHidden() {
      }

      // BILI总
      function BILI() {
      }
      /* --------------------- BILI ------------------------ */

      /* --------------------- 斗鱼------------------------ */

      function DY() {
      }
      /* --------------------- 斗鱼------------------------ */


      // 执行
      window.onload = function () {
          const currentUrl = window.location.host
          switch(currentUrl) {
              case 'www.huya.com': 
                  HY()
                  break;
              ;
              case 'live.bilibili.com': 
                  BILI()
                  break;
              ;
              case 'www.douyu.com': 
                  DY()
                  break;
          }
      }
  })();

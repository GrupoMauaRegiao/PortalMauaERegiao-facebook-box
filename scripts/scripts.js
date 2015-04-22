var PortalMauaERegiao;

PortalMauaERegiao = {};
PortalMauaERegiao.utils = {
  botaoFechar: function() {
    "use strict";

    var overlay,
      modalWindow,
      botao,
      fechar;

    overlay = document.querySelector('.facebook-box-overlay');
    modalWindow = document.querySelector('.facebook-box');
    botao = document.querySelector('.close-bar .close-button');

    fechar = function() {
      overlay.setAttribute('class', 'facebook-box-overlay close-overlay');
      modalWindow.setAttribute('class', 'facebook-box close-facebook-box');
    };

    botao.addEventListener('click', fechar);

    if (localStorage.paginaCurtida === 'true') {
      // fechar();
    }
  },

  controlarExibicaoLikeBox: function() {
    var curtir,
      descurtir;

    curtir = function(url, html) {
      console.log(url);
      console.log(html);
      localStorage.setItem('paginaCurtida', 'true');
    };

    descurtir = function(url, html) {
      console.log(url);
      console.log(html);
      localStorage.setItem('paginaCurtida', 'false');
    };

    FB.Event.subscribe('edge.create', curtir);
    FB.Event.subscribe('edge.remove', descurtir);
  }
};

PortalMauaERegiao.utils.botaoFechar();

window.onload = function() {
  PortalMauaERegiao.utils.controlarExibicaoLikeBox();
};

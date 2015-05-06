(function() {

  function doWriting() {
    var theater = new TheaterJS(),
      options = { speed: .8, accuracy: .8, invincibility: 4 };

    document.querySelector('h1').textContent = '';
    document.querySelector('#technologies').textContent = '';
    document.querySelector('#character').textContent = '';

    theater
      .describe("Title", options, "h1")
      .describe("Technologies", options, "#technologies")
      .describe("Character", options, "#character");

    theater
      .write('Title: Stepan Suvorov', 400)
      .write('Technologies: PHP, ', 400)
      .write('Technologies: JavaScript,', 100 ,' jQuery,', 100 ,' AngularJs,', 100 ,' Ember.js,', 100 ,
                           ' Grunt,', 100 ,' Jasmine,', 100 ,
                           ' PHP,', 100 ,' Python,', 100 ,' Ruby,', 100 ,
                           ' SQL,', 100 ,' MongoDB,', 100 ,' HTML+CSS,', 100 ,' nginx,', 100 ,' node.js,', 100 ,' git', 400)
      .write('Character: optimistic, hard-working, flexible thinking, leader skills, decision-maker', 400);
  }

  if (Math.random() * 10 > 8) {
    doWriting();
  }
})();
javascript:(function(){
  if (!window.Matter) {
    let s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.14.2/matter.min.js';
    s.onload = startGravity;
    document.head.appendChild(s);
  } else {
    startGravity();
  }

  function startGravity() {
    const { Engine, Render, World, Bodies, Body, Composite, Events } = Matter;

    let engine = Engine.create();
    let render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent'
      }
    });

    document.body.querySelectorAll("*").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        let x = rect.left + rect.width / 2;
        let y = rect.top + rect.height / 2;
        let body = Bodies.rectangle(x, y, rect.width, rect.height, {
          restitution: 0.4,
          friction: 0.8
        });
        World.add(engine.world, body);

        el.style.position = 'fixed';
        el.style.left = rect.left + 'px';
        el.style.top = rect.top + 'px';
        el.style.margin = 0;
        el.style.zIndex = 9999;

        Events.on(engine, "beforeUpdate", () => {
          el.style.left = body.position.x - rect.width / 2 + "px";
          el.style.top = body.position.y - rect.height / 2 + "px";
        });
      }
    });

    const ground = Bodies.rectangle(window.innerWidth/2, window.innerHeight + 50, window.innerWidth, 100, { isStatic: true });
    World.add(engine.world, ground);

    Engine.run(engine);
    Render.run(render);
  }
})();

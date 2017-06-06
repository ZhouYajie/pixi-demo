


//var stage = new PIXI.Stage(0x000000);
//document.body.appendChild(stage.view);
//var renderer = PIXI.autoDetectRenderer(400, 300);
//var texture = PIXI.Texture.fromImage("./img/cloud4.png");
//
//var sprite = new PIXI.Sprite(texture);//由材质创建
//sprite.position.x = 30;
//sprite.position.y = 20;

var winWidth = $(window).get(0).innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var winHeight = $(window).get(0).innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

var app = new PIXI.Application(winWidth, winHeight, {
  backgroundColor: 0x000000,
  transparent: true, //背景是否设为透明
});
document.body.appendChild(app.view);
app.view.style.position = "absolute";
app.view.style.left = "0px";
app.view.style.top = "0px";

var sun = PIXI.Sprite.fromImage('./img/sunshine.png');
sun.anchor.set(0.4);
app.stage.addChild(sun);
TweenMax.to(sun.scale, 0, {
  x: 0.3,
  y: 0.3
});
TweenMax.to(sun, 90000, {
  rotation: 360,
  repeat: -1
})



//var bunny = PIXI.Sprite.fromImage('./img/cloud4.png')
////bunny.anchor.set(0.5); //设置原点位置
////显示精灵X轴位置
//bunny.x = app.renderer.width / 2;
////显示精灵Y轴位置
//bunny.y = app.renderer.height / 2;
////将显示精灵添加进舞台
//app.stage.addChild(bunny);
////每次渲染的监听函数
////app.ticker.add(function(delta) {
////  bunny.rotation += 0.1;
////});
//bunny.buttonMode = true;
//bunny.interactive = true;
//bunny.on('pointerdown', onClick);
//function onClick(e) {
//  console.log(e)
//}
var isBallRender = false;
var ball = new PIXI.Sprite(PIXI.Texture.fromImage('./img/ball.png'));
ball.anchor.set(0.5);
ball.x = app.renderer.width * 0.7;
ball.y = app.renderer.height / 2.5;
app.stage.addChild(ball);
ballAnimate();
function ballAnimate() {
  console.log('ballAnimate')
  if(isBallRender) {
    console.log(isBallRender)
    ball.x = app.renderer.width * 0.7;
    ball.y = app.renderer.height / 2.5;
    ball.alpha = 1;
  }
  TweenMax.from(ball, 30, {
    alpha: 0,
    x: app.renderer.width * Math.random(),
    y: app.renderer.height / 6 * Math.random(),
    rotation:  Math.random() * 0.9,
    onComplete: ballAnimate2
  })
  TweenMax.from(ball.scale, 40, {
    x: 0.3,
    y: 0.3
  })
}

function ballAnimate2() {
  isBallRender = true;
  TweenMax.to(ball, 30, {
    x: app.renderer.width * Math.random(),
    y: - app.renderer.height * 0.07,
    alpha: 0,
    onComplete: ballAnimate
  })
}

ball.buttonMode = true;
ball.interactive = true;
var ballClick = 0;
ball.on('pointerdown', function() {
  ballClick++;
  if(ballClick % 2 == 0) {
    TweenMax.to(app.stage, 1, {
      width: app.stage.width * 0.8,
      height: app.stage.height*0.8
    })
  }else {
    TweenMax.to(app.stage, 1, {
      width: app.stage.width * 1.2,
      height: app.stage.height * 1.2
    })
  }

})






//  var bubble = PIXI.Sprite.fromImage('./img/pao.png')
//  bubble.anchor.set(0.4); //设置原点位置
//  bubble.x = -app.renderer.width;
//  bubble.y = app.renderer.height * 0.5;
//  app.stage.addChild(bubble);
//
//  TweenMax.from(bubble, 15, {
//    alpha: 0,
//    ease: Elastic.strongOut
//  });
//  TweenMax.from(bubble, 13, {
//    x: app.renderer.width,
//    y: app.renderer.height,
//    ease: Strong.easeOut,
//    onComplete: function () {
//      TweenMax.to(bubble, 0, {
//        alpha: 0,
//        ease: Strong.easeOut
//      })
//    }
//  });
//  TweenMax.from(bubble.scale, 0, {
//    x: app.renderer.width * 0.1,
//    y: app.renderer.height * 0.1
//  });
////app.ticker.add(function(delta) {
////  bunny.rotation += 0.1;
////});
//  bubble.buttonMode = true;
//  bubble.interactive = true;
//  bubble.on('pointerdown', onClick);
//  function onClick(e) {
//    console.log(e)
//  }

var city, city2, isrendered = false;
function createCity1() {
  if(isrendered) {
    TweenMax.to(city2, 5, {
      x: -app.renderer.width * 1.5,
      ease: Linear.easeOut
    })
  }
  city = PIXI.Sprite.fromImage('./img/city.png');
  city.anchor.set(0);
  city.x = app.renderer.width * 0.02;
  city.y = app.renderer.height * 0.4;
  if(isrendered) {
    city.x = app.renderer.width;
  }

  app.stage.addChild(city);

  TweenMax.to(city, 5, {
    x:  -app.renderer.width * 0.6 ,
    ease: Linear.easeInOut,
    onComplete: createCity2
  })

  TweenMax.to(city.scale, 0, {
    x: app.renderer.width / 800,
    y: app.renderer.height / 1000
  })
}

function createCity2() {
  isrendered = true;
  TweenMax.to(city, 5, {
    x: -app.renderer.width * 1.5,
    ease: Linear.easeOut
  })

  city2 = PIXI.Sprite.fromImage('./img/city.png');
  city2.anchor.set(0);
  city2.x = app.renderer.width ;
  city2.y = app.renderer.height * 0.4;
  app.stage.addChild(city2);
  TweenMax.to(city2, 15, {
    x: -app.renderer.width * 0.6 ,
    ease: Linear.easeOut,
    onComplete: createCity1
  })
  TweenMax.to(city2.scale, 0, {
    x: app.renderer.width / 800,
    y: app.renderer.height / 1000
  })
}


var text = new PIXI.Text('PLEASE TOUCH ME', {fontSize: 40});
text.anchor.set(0.5);
text.x = app.renderer.width / 2;
text.y = app.renderer.height * 0.9;
app.stage.addChild(text);
text.buttonMode = true;
text.interactive = true;
text.on('pointerdown', function(){
  createCity1();
  text.setText('');

})

var stats = new Stats();
stats.domElement.style.position = "absolute";
stats.domElement.style.top = '0px';
stats.domElement.style.right = '10px';
document.body.appendChild(stats.domElement);
function animate() {
  requestAnimationFrame(animate);
  app.render(app.stage);
  if(stats) stats.update();

};

animate();
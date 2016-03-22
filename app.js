// create some a-frame objects

function createRobot(inParent, inName) {
      var robot = document.createElement('a-entity');
      robot.setAttribute('data-name', inName);

      var body = createBody(robot);
      body.setAttribute('position', '0, 13, 0');

      var head  = createHead(robot);
      head.setAttribute('position', '0, 25, 0');

      var leftleg = createLeg(robot, "leftleg");
      leftleg.setAttribute('position', '-2, 14, 0');

      var rightleg = createLeg(robot, "rightleg");
      rightleg.setAttribute('position', '2, 14, 0');

      var leftarm = createArm(robot, "leftarm");
      leftarm.setAttribute('position', '-4.5, 24, 0');

      var rightarm = createArm(robot, "rightarm");
      rightarm.setAttribute('position', '4.5, 24, 0');

      inParent.appendChild(robot);
      return robot;
}

function createBody(inParent) {
      var body = document.createElement('a-entity');
      body.setAttribute('data-name', 'body');

      var tank1 = createTank(body, 'tank1');
      var tank2 = createTank(body, 'tank2');
      tank1.setAttribute('position', '-1.5 8 2.5');
      tank2.setAttribute('position', '1.5 8 2.5');

      var tube = document.createElement('a-cylinder');
      tube.setAttribute('position', '0 11 0');
      tube.setAttribute('rotation', '0 0 0');
      tube.setAttribute('radius', '1.5');
      tube.setAttribute('height', '2');
      tube.setAttribute('color', '#00FF00');
      body.appendChild(tube);

      var bodyBox = document.createElement('a-entity');
      bodyBox.setAttribute('geometry', 'primitive: box; height: 8; width: 7; depth: 3');
      bodyBox.setAttribute('position','0 8 0');
      bodyBox.setAttribute('mixin', 'yellow-metal');
      body.appendChild(bodyBox);

      var hips = document.createElement('a-entity');
      hips.setAttribute('geometry', 'primitive: box; height: 3; width: 5; depth: 3');
      hips.setAttribute('position', '0 2 0');
      hips.setAttribute('rotation', '0 0 0');
      hips.setAttribute('mixin', 'gray-metal');
      body.appendChild(hips);

      var belt = document.createElement('a-entity');
      belt.setAttribute('geometry', 'primitive: box; height: 3; width: 4.3; depth: 2');
      belt.setAttribute('position', '0 4 0');
      belt.setAttribute('rotation', '0 0 0');
      belt.setAttribute('mixin', 'yellow-metal');
      body.appendChild(belt);


      inParent.appendChild(body);
      return body;
}

function createTank(inParent, inName) {
      var tank = document.createElement('a-entity');
      tank.setAttribute('data-name', inName);

      var cylinder = document.createElement('a-entity');
      cylinder.setAttribute('geometry', 'primitive: cylinder; radius: 1; height: 6; depth: 1');
      cylinder.setAttribute('position', '0 0 0');
      cylinder.setAttribute('rotation', '0 0 0');
      cylinder.setAttribute('mixin', 'yellow-metal');
      tank.appendChild(cylinder);            

      var topSphere = document.createElement('a-entity');
      topSphere.setAttribute('geometry', 'primitive: sphere; radius: 1');
      topSphere.setAttribute('position', '0 3 0');
      topSphere.setAttribute('mixin', 'yellow-metal');
      tank.appendChild(topSphere);            

      var bottomSphere = document.createElement('a-sphere');
      bottomSphere.setAttribute('position', '0 -3 0');
      bottomSphere.setAttribute('rotation', '0 0 0');
      bottomSphere.setAttribute('radius', '1');
      bottomSphere.setAttribute('color', '#FFC65D');
      tank.appendChild(bottomSphere);            

      var topTorus = document.createElement('a-cylinder');
      topTorus.setAttribute('position', '0 3 0');
      topTorus.setAttribute('rotation', '0 0 0');
      topTorus.setAttribute('radius', '1.1');
      topTorus.setAttribute('height', '0.1');
      topTorus.setAttribute('color', '#FF0000');
      tank.appendChild(topTorus);            

      var bottomTorus = document.createElement('a-cylinder');
      bottomTorus.setAttribute('position', '0 -3 0');
      bottomTorus.setAttribute('rotation', '0 0 0');
      bottomTorus.setAttribute('radius', '1.1');
      bottomTorus.setAttribute('height', '0.1');
      bottomTorus.setAttribute('color', '#FF0000');
      tank.appendChild(bottomTorus);            

      inParent.appendChild(tank);
      return tank;
}
function createEye(inParent, inName) {
      var eye = document.createElement('a-entity');
      eye.setAttribute('data-name', inName);

      var socket = document.createElement('a-cylinder');
      socket.setAttribute('position', '0 0 0');
      socket.setAttribute('rotation', '90 0 0');
      socket.setAttribute('radius', 0.5);
      socket.setAttribute('height', 2);
      socket.setAttribute('color', '#FFC65D');
      eye.appendChild(socket);   


      // var light = this.createLight();
      // light.position.z = -11.3;
      // eye.add(light);

      inParent.appendChild(eye);
      return eye;
}


function createHead(inParent) {
      var head = document.createElement('a-entity');
      head.setAttribute('data-name', 'head');

      var skull = document.createElement('a-cylinder');
      skull.setAttribute('position', '0 2 0');
      skull.setAttribute('rotation', '0 0 0');
      skull.setAttribute('radius', 1.8);
      skull.setAttribute('height', 2.5);
      skull.setAttribute('color', '#FF0000');
      head.appendChild(skull);   

      var neck = document.createElement('a-cylinder');
      neck.setAttribute('position', '0 0 0');
      neck.setAttribute('rotation', '0 0 0');
      neck.setAttribute('radius', 1);
      neck.setAttribute('height', 1);
      neck.setAttribute('color', '#FFC65D');
      head.appendChild(neck);   

      var lefteye = createEye(head, 'left-eye');
      lefteye.setAttribute('position', '1, 2.3, -1');
      head.add(lefteye);

      var righteye = this.createEye(head, 'right-eye');
      righteye.setAttribute('position', '-1, 2.3, -1');
      head.add(righteye);

      inParent.appendChild(head);
      return head;
}

function createShinJet(inParent, inName) {
      var shinjet = document.createElement('a-entity');
      shinjet.setAttribute('data-name', inName);

      var tube = document.createElement('a-cylinder');
      tube.setAttribute('position', '0 5 0');
      tube.setAttribute('rotation', '0 0 0');
      tube.setAttribute('radius', 1.5);
      tube.setAttribute('height', 6);
      tube.setAttribute('color', '#FF0000');
      shinjet.appendChild(tube);            

      // var light = this.createFlare();
      // light.position.y = 10;
      // light.name = 'flare';

      // shinjet.add(light);

      // shinjet.name = inName;

      inParent.appendChild(shinjet);
      return shinjet;
}


function createLimbJoint(inParent, inName, inRadius, inThickness) {
      var joint = document.createElement('a-entity');
      joint.setAttribute('data-name', inName);

      var outerCylinder = document.createElement('a-cylinder');
      outerCylinder.setAttribute('position', '0 0 0');
      outerCylinder.setAttribute('rotation', '0 0 0');
      outerCylinder.setAttribute('radius', inRadius);
      outerCylinder.setAttribute('height', inThickness);
      outerCylinder.setAttribute('color', '#FFC65D');
      joint.appendChild(outerCylinder);            

      var innerCylinder = document.createElement('a-cylinder');
      innerCylinder.setAttribute('position', '0 0 0');
      innerCylinder.setAttribute('rotation', '0 0 0');
      innerCylinder.setAttribute('radius', inRadius * 0.5);
      innerCylinder.setAttribute('height', inThickness + 0.2);
      innerCylinder.setAttribute('color', '#FF0000');
      joint.appendChild(innerCylinder);          

      joint.setAttribute('rotation', '90 0 90');

      inParent.appendChild(joint);
      return joint;
}

function createLimbSegment(inParent, inName, length, thickness) {
      var segment = document.createElement('a-entity');
      segment.setAttribute('data-name', inName);

      var bone1 = document.createElement('a-cylinder');
      bone1.setAttribute('position', '0 -' + length + ' ' + (0.7 * thickness));
      bone1.setAttribute('rotation', '0 0 0');
      bone1.setAttribute('radius', 0.6 * thickness);
      bone1.setAttribute('height', length);
      bone1.setAttribute('color', '#FF0000');
      segment.appendChild(bone1);            

      var bone2 = document.createElement('a-cylinder');
      bone2.setAttribute('position', '0 -' + length + ' -' + (0.7 * thickness));
      bone2.setAttribute('rotation', '0 0 0');
      bone2.setAttribute('radius', 0.6 * thickness);
      bone2.setAttribute('height', length);
      bone2.setAttribute('color', '#FF0000');
      segment.appendChild(bone2);            

      inParent.appendChild(segment);
      return segment;
}

function createLeg(inParent, inName) {
      var leg = document.createElement('a-entity');
      leg.setAttribute('data-name', inName);

      var hip = this.createLimbJoint(leg, "hip", 1.6, 1.9);

      var thigh = this.createLimbSegment(leg, "thigh", 7, 0.5);
      thigh.setAttribute('position', '0 4 0');

      var shin = document.createElement('a-entity');
      shin.setAttribute('data-name', 'shin');
      shin.setAttribute('position', '0 -7 0');

      var knee = this.createLimbJoint(shin, "knee", 0.8, 1.4)

      var shinJet = this.createShinJet(shin, "shinJet");
      shinJet.setAttribute('position', '0 -8 0');

      leg.appendChild(shin);

      inParent.appendChild(leg);
      return leg;
}


function createArm(inParent, inName) {
      var arm = document.createElement('a-entity');
      arm.setAttribute('data-name', inName);

      var shoulder = createLimbJoint(arm, 'shoulder', 1, 1.5);

      var bicep = createLimbSegment(arm, 'bicep', 5, 0.5);
      bicep.setAttribute('position', '0 2 0');

      var forearm = document.createElement('a-entity');
      forearm.setAttribute('data-name', inName);
      forearm.setAttribute('position', '0 -5.5 0');

      var elbow = createLimbJoint(forearm, 'elbow', 0.8, 1.2);
      elbow.setAttribute('position', '0 0 0');

      var bone = createLimbSegment(forearm, 'bone', 5, 0.4);
      bone.setAttribute('position', '0 2.5 0');

      var hand = document.createElement('a-sphere');
      hand.setAttribute('radius', 1);
      hand.setAttribute('data-name', 'hand');
      hand.setAttribute('position', '0 -5.7 0');
      hand.setAttribute('color', '#FFC65D')
      forearm.appendChild(hand);

      arm.appendChild(forearm);

      inParent.appendChild(arm);
      return arm;
}


document.addEventListener('DOMContentLoaded', function(event) { 
      var scene = document.getElementById('scene');

      var robot = createRobot(scene);
      robot.setAttribute('position', '0 -20 -10');

      var start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var theAngle = progress/80.0;
        robot.setAttribute('rotation', '0 ' + theAngle + ' 0');
        window.requestAnimationFrame(step);
      }

      window.requestAnimationFrame(step);
});





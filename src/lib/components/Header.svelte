<script lang="ts">
  let title = 'alex.burgos';

  // TODO: use this sketch somewhere else
  // const sketch = (p5: any) => {
  //   let x: number[] = [],
  //     y: number[] = [],
  //     segNum = 6,
  //     segLength = 40;
  //   let interFont: any;
  //   let isHovering = false;

  //   p5.preload = () => {
  //     interFont = p5.loadFont('/fonts/Inter.ttf');
  //   };

  //   for (let i = 0; i < segNum; i++) {
  //     x[i] = 0;
  //     y[i] = 0;
  //   }

  //   p5.setup = () => {
  //     p5.createCanvas(window.innerWidth, 300);
  //     p5.strokeWeight(20);
  //     p5.stroke('#9f0712');
  //     p5.textAlign(p5.CENTER, p5.CENTER);
  //     p5.textFont(interFont);
  //   };

  //   p5.draw = () => {
  //     p5.background(0);

  //     // Check if mouse is hovering over the text
  //     const textWidth = (p5.textWidth(title) * (p5.width * 0.15)) / p5.textSize();
  //     const textHeight = p5.textAscent() + p5.textDescent();
  //     const textX = p5.width / 2 - textWidth / 2;
  //     const textY = p5.height / 2 - textHeight / 2;

  //     isHovering =
  //       p5.mouseX > textX &&
  //       p5.mouseX < textX + textWidth &&
  //       p5.mouseY > textY &&
  //       p5.mouseY < textY + textHeight;

  //     // Draw the title
  //     p5.noStroke();
  //     p5.fill(isHovering ? '#9f0712' : 255); // Red on hover, white otherwise
  //     p5.textSize(p5.width * 0.15);
  //     p5.text(title, p5.width / 2, p5.height / 2);

  //     // Draw the snake effect
  //     p5.stroke('#9f0712');
  //     dragSegment(0, p5.mouseX, p5.mouseY);
  //     for (let i = 0; i < x.length - 1; i++) {
  //       dragSegment(i + 1, x[i], y[i]);
  //     }
  //   };

  //   function dragSegment(i: number, xin: number, yin: number) {
  //     const dx = xin - x[i];
  //     const dy = yin - y[i];
  //     const angle = p5.atan2(dy, dx);
  //     x[i] = xin - p5.cos(angle) * segLength;
  //     y[i] = yin - p5.sin(angle) * segLength;
  //     segment(x[i], y[i], angle);
  //   }

  //   function segment(x: number, y: number, a: number) {
  //     p5.push();
  //     p5.translate(x, y);
  //     p5.rotate(a);
  //     p5.line(0, 0, segLength, 0);
  //     p5.pop();
  //   }
  // };
</script>

<div class="relative mt-10 mb-20 md:mt-0 md:mb-24">
  <h1
    class="cursor-pointer text-center text-[10rem] font-bold tracking-tight hover:text-red-800 sm:text-[6rem]"
  >
    {title}
  </h1>
</div>

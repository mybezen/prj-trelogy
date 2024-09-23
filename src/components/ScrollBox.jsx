import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Button } from "@material-tailwind/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function ScrollB() {
  const buttonRotate = useRef(null);

  // Fix the function definition for the click handler
  const onClickGood = () => {
    // Rotate the button by 180 degrees on click
    gsap.to(buttonRotate.current, {
      rotation: 180,
      duration: 1,
      toggleActions: "play reverse play reverse",
    });
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: buttonRotate.current,
        start: "top bottom", // Trigger when the element hits the center of the viewport
        toggleActions: "play reverse play reverse", // Controls animation on scroll in/out
        scrub: 1, // Makes the animation follow the scroll
      },
    });

    // Animate the button moving along x-axis and rotating on scroll
    tl.to(buttonRotate.current, {
      x: 400,
      rotation: 360,
      duration: 3,
    });
  }, []);

  return (
    <div className="flex flex-col w-20 h-20 items-center">
      <Button>A</Button>
      <Button>B</Button>
      <div
        onClick={onClickGood} // Call the click handler here
        ref={buttonRotate}
        className="w-20 h-20 c"
      >
        <Button>C</Button>
      </div>
    </div>
  );
}

export default ScrollB;

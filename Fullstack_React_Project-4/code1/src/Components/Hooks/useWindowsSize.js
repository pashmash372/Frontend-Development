import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(function () {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }; // unmounting phase of component removing eventlistener from here
  }, []);

  return windowSize;
}

export default useWindowSize;

// if(page1) {render components of page1}
// else(page2){render component of page2}
// page1 is loaded and event listener is attached
// page 1 is going to use this event listener
// page 2 is not depenndent
//

// provide you a way
// which would be called on every unmount
// MOunting
// rendering
// unmounting
// when you component is no longer in the dom
// that is know as you unmounting phase
// when unmounting is happening
// you should clean up all the mess that you had created

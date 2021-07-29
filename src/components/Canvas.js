import { useEffect, useRef } from "react";
import { fadeOut } from "../helper"
import loader from "../loader";

const Canvas = () => {
  const canvas = useRef()
  const wrapper = useRef()

  useEffect(() => {
    if (canvas.current) {
      loader(canvas.current);
      window.setTimeout(() => {
        fadeOut(wrapper.current);
      }, 1000)
    }
  }, [])

  return (
    <div ref={wrapper} className="loader-wrapper">
      <canvas ref={canvas} id="canvas"></canvas>
    </div>
  );
}

export default Canvas;
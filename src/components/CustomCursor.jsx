import { useEffect, useRef } from "react";

function getCursorLabel(element) {
  if (element.matches("img, .project-art")) return "DRAG";
  if (element.matches("a")) return element.closest(".project-info") ? "VIEW" : "OPEN";
  if (element.matches("button")) return "OPEN";
  return "";
}

function CustomCursor() {
  const cursorRef = useRef(null);
  const pointerRef = useRef({
    dotX: -100,
    dotY: -100,
    ringX: -100,
    ringY: -100,
    targetX: -100,
    targetY: -100,
    velocityX: 0,
    velocityY: 0,
  });
  const hoverRef = useRef({ element: null, label: "" });

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursor?.querySelector(".custom-cursor-dot");
    const ring = cursor?.querySelector(".custom-cursor-ring");
    const supportsCustomCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!cursor || !dot || !ring || !supportsCustomCursor || prefersReducedMotion) return undefined;

    document.body.classList.add("custom-cursor-enabled");

    const updateHoverTarget = (target) => {
      const element = target?.closest?.("a, button, img, .project-art");
      const label = element ? getCursorLabel(element) : "";
      hoverRef.current = { element, label };
      cursor.classList.toggle("is-hovering", Boolean(element));
      ring.classList.toggle("hovering", Boolean(element));
      cursor.classList.toggle(
        "is-image",
        element?.matches("img, .project-art") ?? false,
      );
      cursor.querySelector(".custom-cursor-label").textContent = label;
    };

    const handlePointerMove = (event) => {
      const { element } = hoverRef.current;
      let targetX = event.clientX;
      let targetY = event.clientY;

      if (element) {
        const bounds = element.getBoundingClientRect();
        const pull = element.matches("img, .project-art") ? 0.1 : 0.16;
        targetX += (bounds.left + bounds.width / 2 - targetX) * pull;
        targetY += (bounds.top + bounds.height / 2 - targetY) * pull;
      }

      pointerRef.current.targetX = event.clientX;
      pointerRef.current.targetY = event.clientY;
      cursor.classList.add("is-visible");
      updateHoverTarget(event.target);
    };

    const handlePointerLeave = () => cursor.classList.remove("is-visible");
    const animate = () => {
      const pointer = pointerRef.current;
      pointer.dotX += (pointer.targetX - pointer.dotX) * 0.55;
      pointer.dotY += (pointer.targetY - pointer.dotY) * 0.55;

      const remainingX = pointer.dotX - pointer.ringX;
      const remainingY = pointer.dotY - pointer.ringY;
      const remaining = Math.hypot(remainingX, remainingY);
      const ringIsSettled = remaining < 0.5 && Math.hypot(
        pointer.targetX - pointer.dotX,
        pointer.targetY - pointer.dotY,
      ) < 0.5;

      if (ringIsSettled) {
        pointer.ringX = pointer.dotX;
        pointer.ringY = pointer.dotY;
        pointer.velocityX = 0;
        pointer.velocityY = 0;
      } else {
        pointer.ringX += remainingX * 0.18;
        pointer.ringY += remainingY * 0.18;
      }
      const speed = Math.hypot(pointer.velocityX, pointer.velocityY);
      const stretch = 1 + Math.min(speed * 0.025, 0.32);
      const squash = 1 / Math.sqrt(stretch);
      const angle = Math.atan2(pointer.velocityY, pointer.velocityX);
      dot.style.left = `${pointer.dotX}px`;
      dot.style.top = `${pointer.dotY}px`;
      ring.style.left = `${pointer.ringX}px`;
      ring.style.top = `${pointer.ringY}px`;
      ring.style.setProperty("--cursor-angle", `${angle}rad`);
      ring.style.setProperty("--cursor-stretch", stretch.toFixed(3));
      ring.style.setProperty("--cursor-squash", squash.toFixed(3));
      pointer.animationFrame = requestAnimationFrame(animate);
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);
    pointerRef.current.animationFrame = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(pointerRef.current.animationFrame);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
      <span className="custom-cursor-dot" />
      <span className="custom-cursor-ring">
        <span className="custom-cursor-label" />
      </span>
    </div>
  );
}

export default CustomCursor;

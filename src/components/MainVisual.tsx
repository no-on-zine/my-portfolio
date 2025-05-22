export default function MainVisual() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="main-visual relative z-10 flex flex-col h-full justify-center px-5 gap-y-5">
        <h1 className="flex flex-col text-4xl font-bold whitespace-nowrap gap-y-2 tracking-tight">
          <span>Creative Web Designer</span>
          <span>Front-End Engineer</span>
          <span>Web Director</span>
          <span>Photographer</span>
        </h1>
        <p>
          Blending aesthetics with code to craft meaningful digital experiences.
        </p>
      </div>
    </div>
  );
}

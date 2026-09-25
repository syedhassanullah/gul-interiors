import "./ServicesSection.css";

const SERVICES = [
  {
    name: "Wallpaper",
    swatch: "wallpaper",
    description:
      "3D, textured and imported wallpaper for living rooms, bedrooms and feature walls.",
  },
  {
    name: "Wall Panels",
    swatch: "panels",
    description:
      "PVC, wooden and WPC panels that add texture and warmth without the upkeep.",
  },
  {
    name: "False Ceiling",
    swatch: "ceiling",
    description:
      "POP and gypsum ceilings with built-in lighting, shaped to fit the room.",
  },
  {
    name: "Custom Interiors",
    swatch: "custom",
    description:
      "Full-room planning that brings wallpaper, panels and ceiling together as one look.",
  },
  {
    name: "Wallpaper",
    swatch: "wallpaper",
    description:
      "3D, textured and imported wallpaper for living rooms, bedrooms and feature walls.",
  },
  {
    name: "Wall Panels",
    swatch: "panels",
    description:
      "PVC, wooden and WPC panels that add texture and warmth without the upkeep.",
  },
  {
    name: "False Ceiling",
    swatch: "ceiling",
    description:
      "POP and gypsum ceilings with built-in lighting, shaped to fit the room.",
  },
  {
    name: "Custom Interiors",
    swatch: "custom",
    description:
      "Full-room planning that brings wallpaper, panels and ceiling together as one look.",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-intro">
          <p className="services-eyebrow">What we install</p>
          <h2 className="services-heading">Four ways to finish a room</h2>
          <p className="services-lede">
            Every job we take on at the display center falls into one of these.
            Walk in and see the materials before you decide.
          </p>
        </div>

        <div className="services-strip">
          {SERVICES.map((service) => (
            <article className="services-item" key={service.name}>
              <div
                className={`services-swatch services-swatch--${service.swatch}`}
                aria-hidden="true"
              />
              <h3 className="services-name">{service.name}</h3>
              <p className="services-desc">{service.description}</p>
              <a className="services-link" href="#contact">
                Ask about this
              </a>
            </article>
          ))}
        </div>
        <div className="button">
          
        </div>
      </div>
    </section>
  );
}

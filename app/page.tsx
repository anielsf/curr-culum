const projects = [
  {
    number: "01",
    title: "Plataforma web para venta de entradas teatrales",
    description: "Proyecto web orientado a la comercialización de entradas para obras teatrales, con funcionalidades de gestión y seguimiento.",
    tags: ["Next.js / React", "Supabase", "Vercel"],
    href: "https://teatrando-netxt.vercel.app/",
    link: "Visitar proyecto",
  },
  {
    number: "02",
    title: "Sistema personal de gestión de proyectos KAMBA",
    description: "Herramienta para organizar proyectos por módulos, registrar notas, relacionar funcionalidades y controlar fechas de entrega.",
    tags: ["Google Apps Script", "HTML", "CSS"],
    href: "https://script.google.com/macros/s/AKfycby44WJsO4XQ08vb6af2PgT2ElsNG1ePfjbWYMV1PwNKS-wIq6n-Q-kHoZTBJKcN2XzD/exec",
    link: "Abrir aplicación",
  },
  {
    number: "03",
    title: "Sistema de ventas automatizado con Excel y VBA",
    description: "Solución para el seguimiento y control de ventas mediante Excel, macros y automatización de tareas operativas.",
    tags: ["Excel", "VBA", "Automatización"],
  },
];

const experience = [
  {
    period: "MAR 2023 — ACTUALIDAD",
    role: "Consultor II · Área de Monitorización",
    company: "Bekesantos · Asignación en el entorno tecnológico de BBVA",
    details: [
      "Gestión y monitorización de sistemas operativos Windows y Unix.",
      "Seguimiento de alertas e incidencias con Instana, Nagios y SolarWinds.",
      "Análisis de eventos para apoyar la identificación de anomalías y el seguimiento de problemas tecnológicos.",
      "Apoyo a la estabilidad y continuidad de los servicios tecnológicos.",
    ],
  },
  {
    period: "FEB 2023",
    role: "Soporte y pruebas de SGE",
    company: "AdaptaPro · Los Dos Caminos, Miranda",
    details: [
      "Soporte y pruebas del Service Pack del sistema de gestión empresarial SGE.",
      "Verificación del funcionamiento e identificación de posibles incidencias.",
      "Trabajo con herramientas de gestión empresarial e información de clientes.",
    ],
  },
  {
    period: "OCT 2022 — ENE 2023",
    role: "Soporte de instalación",
    company: "Multicanal · Los Cortijos, Miranda",
    details: [
      "Soporte relacionado con instalaciones de telecomunicaciones.",
      "Trabajo con conexiones inalámbricas por radiofrecuencia e instalación de equipos Ubiquiti.",
      "Verificación de conectividad y configuración de equipos.",
    ],
  },
  {
    period: "SEP 2020 — DIC 2020",
    role: "Informática y gestión de sistemas",
    company: "Ferretería Bomplomeri · Caracas",
    details: [
      "Desarrollo de un sistema de seguimiento y control de ventas con Excel y VBA.",
      "Automatización de procesos según las necesidades operativas.",
      "Apoyo a la supervisión del sistema de cámaras CCTV.",
    ],
  },
];

const skills = [
  { name: "Análisis y visualización de datos", items: "Power BI · Informes · Dashboards" },
  { name: "Automatización", items: "Excel avanzado · Macros · VBA" },
  { name: "Monitorización", items: "Instana · Nagios · SolarWinds" },
  { name: "Sistemas operativos", items: "Windows · Unix" },
  { name: "Gestión de información", items: "Bases de datos de clientes · SGE" },
  { name: "Redes y telecomunicaciones", items: "Ubiquiti · Radiofrecuencia · Conectividad inalámbrica" },
  { name: "Desarrollo de soluciones", items: "Herramientas de gestión · Proyectos web · Automatización" },
];

const certificates = [
  { title: "Cybersecurity for Managers", file: "/certificaciones/Coursera_2MCFUNYYP4S6.pdf", date: "23 agosto 2023" },
  { title: "Data & Cybersecurity", file: "/certificaciones/Coursera_CT74DE5NS8LG.pdf", date: "07 febrero 2024" },
  { title: "Cybersecurity for Tech Professionals", file: "/certificaciones/Coursera_VZWB86MGYJHK.pdf", date: "14 abril 2024" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="wordmark" href="#inicio">AF<span>.</span></a>
        <div className="navlinks">
          <a href="#perfil">Perfil</a><a href="#experiencia">Experiencia</a><a href="#proyectos">Proyectos</a><a href="#contacto">Contacto</a>
        </div>
        <a className="nav-cta" href="mailto:anielsfceo@gmail.com">Hablemos <span>↗</span></a>
      </nav>

      <section className="hero wrap" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> TECNOLOGÍA · DATOS · AUTOMATIZACIÓN</p>
          <h1>Ángel Farías<span className="accent">.</span></h1>
          <h2>Convierto procesos e información en <em>soluciones útiles.</em></h2>
          <p className="hero-description">Profesional de TI, TSU en Informática y estudiante de Ingeniería de Sistemas. Experiencia en monitorización tecnológica, automatización y gestión de información.</p>
          <div className="hero-actions">
            <a className="button primary" href="#proyectos">Explorar proyectos <span>↘</span></a>
            <a className="button secondary" href="mailto:anielsfceo@gmail.com">Contactar</a>
          </div>
          <div className="hero-meta"><span>CARACAS, VENEZUELA</span><span className="meta-line" /><span>DISPONIBLE PARA NUEVOS RETOS</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid" />
          <div className="portrait-frame"><img src="/foto-perfil.png" alt="Imagen de perfil de Ángel Farías" /></div>
          <div className="float-card card-top"><span className="card-icon">↗</span><div><b>Automatización</b><small>Procesos más eficientes</small></div></div>
          <div className="float-card card-bottom"><span className="pulse-bars"><i/><i/><i/><i/><i/></span><div><b>Monitorización</b><small>Observabilidad de sistemas</small></div></div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <span className="visual-index">PORTAFOLIO / 2026</span>
        </div>
      </section>

      <section className="ticker" aria-label="Áreas de especialización"><div className="ticker-track"><span>ANÁLISIS DE DATOS</span><b>✳</b><span>BUSINESS INTELLIGENCE</span><b>✳</b><span>AUTOMATIZACIÓN</span><b>✳</b><span>MONITORIZACIÓN</span><b>✳</b><span>ANÁLISIS DE DATOS</span><b>✳</b><span>BUSINESS INTELLIGENCE</span><b>✳</b></div></section>

      <section className="section wrap profile-section" id="perfil">
        <div className="section-label"><span>01 / PERFIL</span><span className="label-rule" /></div>
        <div className="profile-grid">
          <h2 className="section-heading">Tecnología con enfoque en <em>mejora continua.</em></h2>
          <div className="profile-text"><p>Me desempeño como Consultor II en el área de monitorización, en el entorno tecnológico de BBVA a través de Bekesantos. Trabajo con sistemas Windows y Unix, seguimiento de alertas e incidencias y análisis de eventos tecnológicos.</p><p>Complemento esta experiencia con automatización mediante Excel y VBA, conocimientos de Power BI y desarrollo de soluciones digitales. Mi objetivo es evolucionar hacia el análisis de datos y la inteligencia de negocio para aportar información útil a la toma de decisiones.</p><div className="education"><div><span>FORMACIÓN ACTUAL</span><b>Ingeniería de Sistemas</b><small>Universidad Nacional Abierta (UNA) · En curso, tercer trimestre</small></div><div><span>TÍTULO OBTENIDO</span><b>TSU en Informática</b><small>IUTA · Graduación: 2022</small></div></div></div>
        </div>
      </section>

      <section className="section experience-section" id="experiencia"><div className="wrap">
        <div className="section-label"><span>02 / EXPERIENCIA</span><span className="label-rule" /></div>
        <div className="section-title-row"><h2 className="section-heading">Trayectoria <em>profesional.</em></h2><p>Experiencia en soporte, monitorización de sistemas y optimización de procesos tecnológicos.</p></div>
        <div className="timeline">{experience.map((job) => <article className="timeline-item" key={job.role}><div className="timeline-period">{job.period}</div><div className="timeline-content"><h3>{job.role}</h3><p className="company">{job.company}</p><ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div><span className="timeline-marker" /></article>)}</div>
      </div></section>

      <section className="section wrap projects-section" id="proyectos">
        <div className="section-label"><span>03 / PORTAFOLIO</span><span className="label-rule" /></div>
        <div className="section-title-row"><h2 className="section-heading">Ideas convertidas<br/>en <em>herramientas.</em></h2><p>Proyectos tecnológicos que combinan desarrollo web, automatización y organización de procesos.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-top"><span>{project.number} / PROYECTO</span><span className="project-arrow">↗</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.link} <span>↗</span></a>}</article>)}</div>
      </section>

      <section className="skills-section"><div className="wrap skills-layout"><div><div className="section-label"><span>04 / COMPETENCIAS</span><span className="label-rule" /></div><h2 className="section-heading">Herramientas para<br/><em>resolver problemas.</em></h2><p className="skills-intro">Conocimientos aplicados al seguimiento operativo, la automatización y la gestión de información.</p></div><div className="skills-list">{skills.map((skill, i) => <div className="skill-row" key={skill.name}><span className="skill-num">0{i+1}</span><div><h3>{skill.name}</h3><p>{skill.items}</p></div><span className="skill-plus">+</span></div>)}</div></div></section>

      <section className="section wrap cert-section"><div className="section-label"><span>05 / CERTIFICACIONES</span><span className="label-rule" /></div><div className="cert-layout"><h2 className="section-heading">Aprendizaje <em>continuo.</em></h2><div className="cert-list">{certificates.map((cert) => <a className="cert-item" href={cert.file} target="_blank" rel="noreferrer" key={cert.title}><span className="cert-symbol">↗</span><span className="cert-name"><b>{cert.title}</b><small>Coursera · {cert.date}</small></span><span className="cert-open">Ver certificado ↗</span></a>)}</div></div></section>

      <section className="contact-section" id="contacto"><div className="wrap contact-inner"><p className="eyebrow">¿TRABAJAMOS JUNTOS?</p><h2>Hablemos de tu<br/><em>próximo proyecto.</em></h2><a className="contact-email" href="mailto:anielsfceo@gmail.com">anielsfceo@gmail.com <span>↗</span></a><div className="contact-bottom"><span>Caracas, Venezuela</span><span>+58 412-9092058</span><a href="https://www.linkedin.com/in/angel-aniel-farias-soler-9315b1216" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://wa.me/584129092058" target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div></section>
      <footer className="footer wrap"><a className="wordmark" href="#inicio">AF<span>.</span></a><span>© {new Date().getFullYear()} Ángel Farías. Portafolio profesional.</span><a href="#inicio">Volver arriba ↑</a></footer>
    </main>
  );
}

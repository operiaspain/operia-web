import './App.css'

const stats = [
  {
    label: 'ROI',
    value: '3-6 meses',
    detail: 'Proyectos con pymes industriales',
  },
  {
    label: 'Registro de parada',
    value: '< 2 min',
    detail: 'Operario en tablet o móvil rugerizado',
  },
  {
    label: 'Reducción de paradas',
    value: '-12% a -20%',
    detail: 'Primeros 90 días con disciplina de datos',
  },
]

const problems = [
  {
    title: 'Paradas invisibles',
    text: 'Incidencias cortas no quedan registradas y el coste real de las máquinas paradas se pierde.',
  },
  {
    title: 'Decisiones a ciegas',
    text: 'Sin datos por línea, turno y causa, las prioridades de mantenimiento se definen por intuición.',
  },
  {
    title: 'Coste real desconocido',
    text: 'Cada minuto parado tiene un coste en mano de obra, energía y pedidos retrasados que nadie ve.',
  },
]

const solutions = [
  {
    title: 'Registro simple de paradas',
    text: 'El operario marca inicio/fin, línea y causa en dos toques. Sin papeles ni hojas de cálculo.',
  },
  {
    title: 'Dashboard claro',
    text: 'Tiempo de parada, coste €/minuto, ranking de causas y líneas en una sola vista comprensible.',
  },
  {
    title: 'Tiempo → dinero',
    text: 'Convierte cada minuto parado en euros perdidos para priorizar inversiones y acciones correctivas.',
  },
]

const steps = [
  {
    title: 'Operario registra',
    text: 'Un único formulario rápido en planta: inicio, fin, causa, turno y línea.',
  },
  {
    title: 'Datos a la base',
    text: 'Información estructurada y segura, lista para auditar y compartir con dirección.',
  },
  {
    title: 'Análisis en dashboard',
    text: 'KPIs de parada, coste, MTTR/MTBF y alertas de desviaciones por equipo.',
  },
  {
    title: 'Mejora continua',
    text: 'Planes semanales con responsables, impacto estimado y seguimiento de ahorros.',
  },
]

const benefits = [
  {
    title: 'Ahorro económico directo',
    text: 'Menos minutos parados y decisiones con el coste real visible en euros.',
  },
  {
    title: 'Control para mantenimiento',
    text: 'Ranking de causas que guía repuestos, planes preventivos y contratos externos.',
  },
  {
    title: 'Confianza para dirección',
    text: 'Panel claro para presentar impacto en comités y negociar inversiones.',
  },
  {
    title: 'Velocidad de implantación',
    text: 'Arranca en semanas, sin proyectos IT largos ni personal técnico dedicado.',
  },
  {
    title: 'Adopción en planta',
    text: 'Interfaz industrial, sin ruido, operarios formados en una sesión.',
  },
  {
    title: 'Datos auditables',
    text: 'Histórico con trazabilidad: turno, línea, causa, responsable y acción.',
  },
]

const downtimeCauses = [
  { name: 'Ajuste de línea', value: 42, cost: '€1.9k' },
  { name: 'Cambio de formato', value: 31, cost: '€1.2k' },
  { name: 'Avería mecánica', value: 24, cost: '€0.9k' },
  { name: 'Setups lentos', value: 18, cost: '€0.6k' },
]

const miniKpis = [
  { label: 'Coste acumulado semana', value: '€12.4k' },
  { label: 'Tiempo parado hoy', value: '00:47 h' },
  { label: 'Líneas con alerta', value: '2' },
  { label: 'Impacto evitado', value: '€3.1k' },
]

function App() {
  return (
    <div className="page">
      <header className="top-bar">
        <nav>
          <div className="brand">
            <div className="brand-mark">
              <span aria-hidden="true" />
            </div>
            <div>
              <h1>Operia</h1>
              <small className="tagline">Industria · Eficiencia · Datos</small>
            </div>
          </div>
          <div className="nav-links" aria-label="Navegación principal">
            <a href="#problema">Problema</a>
            <a href="#solucion">Solución</a>
            <a href="#producto">Dashboard</a>
            <a href="#contacto">Contacto</a>
          </div>
          <a className="cta ghost" href="#contacto">
            Hablar con Operia
          </a>
        </nav>
      </header>

      <main className="shell">
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="hero-badge">
              <span aria-hidden="true">●</span>
              Cada minuto de máquina parada es dinero perdido. Operia te lo muestra.
            </div>
            <h2>Eficiencia industrial que se nota en caja</h2>
            <p>
              Operia ayuda a pymes industriales a reducir paradas, cuantificar pérdidas y tomar decisiones con datos,
              no con intuición. Sin capas de marketing: control real y ahorros medibles.
            </p>
            <div className="hero-actions">
              <a className="cta primary" href="#contacto">
                Solicitar demo
              </a>
              <a className="cta ghost" href="#producto">
                Ver dashboard
              </a>
            </div>
            <div className="hero-stats" aria-label="Indicadores clave">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                  <span>{stat.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <div>
                <div className="section-kicker">Valor inmediato</div>
                <h3 className="section-title">App para operarios · Dashboard para dirección</h3>
                <p className="section-subtitle">
                  Captura cada parada en menos de dos minutos y transforma el tiempo perdido en impacto económico por
                  línea, turno y causa.
                </p>
              </div>
              <a className="cta ghost" href="#solucion">
                Cómo funciona
              </a>
            </div>
            <div className="grid-3">
              <div className="card solution-card">
                <h3>Operario</h3>
                <p>Formulario mínimo en planta. Sin cables, sin IT complejo, con foco en registrar y seguir produciendo.</p>
              </div>
              <div className="card solution-card">
                <h3>Base de datos</h3>
                <p>Datos estructurados por equipo, causa, turno y responsable. Listos para auditoría y mejora continua.</p>
              </div>
              <div className="card solution-card">
                <h3>Dirección</h3>
                <p>Dashboard claro: coste en euros, ranking de paradas y alertas para actuar donde duele más.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="panel" id="problema">
          <div className="panel-header">
            <div>
              <div className="section-kicker">Problema</div>
              <h3 className="section-title">Paradas no controladas · Decisiones a ciegas</h3>
              <p className="section-subtitle">
                Cada minuto parado es dinero. Cuando no se registra bien, se pierde visibilidad, se pierde control y se
                pierde margen.
              </p>
            </div>
            <a className="cta ghost" href="#contacto">
              Calcular impacto
            </a>
          </div>
          <div className="grid-3">
            {problems.map((item) => (
              <div className="card problem-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="panel" id="solucion">
          <div className="panel-header">
            <div>
              <div className="section-kicker">Solución Operia</div>
              <h3 className="section-title">Registro simple · Dashboard claro · Tiempo → dinero</h3>
              <p className="section-subtitle">
                Nada de “IA bonita”. Operia hace visible el dinero que se pierde con cada parada y guía las acciones que
                lo evitan.
              </p>
            </div>
            <a className="cta primary" href="#contacto">
              Solicitar demo
            </a>
          </div>
          <div className="grid-3">
            {solutions.map((item) => (
              <div className="card solution-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="panel" id="como-funciona">
          <div className="panel-header">
            <div>
              <div className="section-kicker">Cómo funciona</div>
              <h3 className="section-title">De planta a dirección en cuatro pasos</h3>
              <p className="section-subtitle">
                Operarios registran, la base guarda, el dashboard traduce a euros y el equipo decide con seguridad.
              </p>
            </div>
          </div>
          <div className="step-grid">
            {steps.map((item, idx) => (
              <div className="step" key={item.title}>
                <div className="step-number">{idx + 1}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel" id="beneficios">
          <div className="panel-header">
            <div>
              <div className="section-kicker">Beneficios</div>
              <h3 className="section-title">Reducción de paradas · Ahorro económico · Decisiones con datos</h3>
              <p className="section-subtitle">
                Impacto visible en producción y en cuenta de resultados, con un lenguaje que cualquier gerente entiende.
              </p>
            </div>
          </div>
          <div className="benefit-list">
            {benefits.map((item) => (
              <div className="benefit" key={item.title}>
                <div className="dot" aria-hidden="true" />
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel" id="producto">
          <div className="panel-header">
            <div>
              <div className="section-kicker">Producto</div>
              <h3 className="section-title">Dashboard industrial · Claro, sobrio, accionable</h3>
              <p className="section-subtitle">
                Sin ruido ni futurismo. KPIs de planta, coste por parada y alertas para decidir dónde atacar primero.
              </p>
            </div>
            <a className="cta ghost" href="#contacto">
              Ver en directo
            </a>
          </div>
          <div className="dashboard">
            <div className="mock-panel" aria-label="Vista simulada del dashboard Operia">
              <div className="mock-header">
                <span>Tiempo parado · Últimas 24h</span>
                <span>€ / línea</span>
              </div>
              <div className="chart-bars">
                {downtimeCauses.map((cause) => (
                  <div className="bar-row" key={cause.name}>
                    <div className="bar" role="presentation">
                      <span style={{ width: `${Math.min(cause.value, 100)}%` }} />
                    </div>
                    <div>
                      <strong>{cause.cost}</strong>
                      <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{cause.name}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mini-cards" aria-label="Indicadores rápidos">
                {miniKpis.map((kpi) => (
                  <div className="mini" key={kpi.label}>
                    <label>{kpi.label}</label>
                    <strong>{kpi.value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="contact-panel" id="contacto">
              <h3>Conversemos sobre tus paradas</h3>
              <p>
                Te ayudamos a medir el coste real de tus paradas en menos de un mes y a priorizar las primeras acciones
                de ahorro.
              </p>
              <div className="contact-actions">
                <a className="cta primary" href="mailto:hola@operia.com">
                  Solicitar demo
                </a>
                <a className="cta ghost" href="tel:+34123456789">
                  Llamar ahora
                </a>
              </div>
              <p style={{ margin: 0, color: 'var(--muted)' }}>
                Implementación guiada, sin proyectos IT largos. Pensado para gerencia, mantenimiento y dirección de
                planta.
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          Operia · Eficiencia industrial | Sin humo, solo datos y ahorro. <span>Listo para tu planta.</span>
        </footer>
      </main>
    </div>
  )
}

export default App

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Check, ScanLine } from "lucide-react";
import "./story.css";

function Story() {
  const steps = [
    {
      number: "01",
      title: "SCAN",
      text: "Capture the product label, packaging, or image you need to inspect.",
    },
    {
      number: "02",
      title: "UNDERSTAND",
      text: "CheckMate reads the visible information and turns the label into structured data.",
    },
    {
      number: "03",
      title: "CHECK",
      text: "The information is evaluated against the declarations and checks relevant to the inspection.",
    },
    {
      number: "04",
      title: "FLAG",
      text: "Potential gaps, missing information, and attention points are surfaced with evidence.",
    },
    {
      number: "05",
      title: "REPORT",
      text: "The inspection becomes a clear compliance report that can be reviewed and acted on.",
    },
  ];

  return (
    <div className="story-page">

      {/* NAVBAR */}
      <nav className="story-nav">
        <a href="/" className="story-logo">
          <span className="story-logo-mark">
            <Check size={17} strokeWidth={3} />
          </span>
          <span>checkmate</span>
        </a>

        <a href="/" className="story-back">
          Back to CheckMate
          <ArrowRight size={15} />
        </a>
      </nav>

      {/* HERO */}
      <section className="story-hero">
        <div className="story-hero-grid" />

        <motion.div
          className="story-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="story-eyebrow">
            <ScanLine size={15} />
            THE CHECKMATE STORY
          </div>

          <h1>
            A label tells you
            <br />
            <span>what is inside.</span>
          </h1>

          <p>
            But who checks whether it tells you everything
            it should?
          </p>

          <motion.div
            className="story-scroll"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* PROBLEM */}
      <section className="story-problem">
        <div className="story-section-label">01 — THE PROBLEM</div>

        <div className="story-problem-layout">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Compliance lives
            <br />
            in the <em>details.</em>
          </motion.h2>

          <motion.div
            className="story-problem-copy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              A packaged product can look completely ordinary
              while its label contains dozens of details that
              need to be checked.
            </p>

            <p>
              Declarations. Quantities. Dates. Manufacturer
              information. Consumer details. Placement,
              readability and completeness.
            </p>

            <p className="story-highlight">
              The problem isn't finding information.
              <br />
              It's knowing what to check.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IDEA */}
      <section className="story-idea">
        <div className="story-section-label">02 — THE IDEA</div>

        <motion.div
          className="story-idea-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="story-idea-mark">
            <Check size={34} strokeWidth={2.5} />
          </div>

          <h2>
            What if the product
            <br />
            could <span>check itself?</span>
          </h2>

          <p>
            That's where CheckMate comes in.
          </p>

          <div className="story-idea-line" />

          <p className="story-idea-description">
            An AI-powered inspection system designed to turn
            a product label into something that can be examined,
            understood and reported.
          </p>
        </motion.div>
      </section>

      {/* ENGINE */}
      <section className="story-engine">
        <div className="story-section-label">03 — THE ENGINE</div>

        <div className="story-engine-heading">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Five steps.
            <br />
            <span>One inspection.</span>
          </motion.h2>

          <p>
            CheckMate transforms a simple product scan into
            a structured compliance workflow.
          </p>
        </div>

        <div className="story-steps">
          {steps.map((step, index) => (
            <motion.div
              className="story-step"
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span className="story-step-number">
                {step.number}
              </span>

              <div className="story-step-line" />

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="story-before-after">
        <div className="story-section-label">04 — THE DIFFERENCE</div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          From looking
          <br />
          to <span>knowing.</span>
        </motion.h2>

        <div className="story-comparison">

          <div className="story-card story-card-before">
            <span className="story-card-label">BEFORE</span>

            <div className="story-fake-label">
              <div className="fake-label-title">
                PRODUCT LABEL
              </div>

              <div className="fake-label-lines">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="fake-label-price">
                ₹ 249
              </div>
            </div>

            <h3>Manual inspection</h3>

            <p>
              Information is visible, but checking every
              declaration manually takes time and can leave
              room for oversight.
            </p>
          </div>

          <div className="story-comparison-arrow">
            <ArrowRight size={24} />
          </div>

          <div className="story-card story-card-after">
            <span className="story-card-label">WITH CHECKMATE</span>

            <div className="story-check-result">
              <div className="story-result-score">
                92<span>%</span>
              </div>

              <div className="story-result-status">
                <Check size={15} />
                INSPECTION COMPLETE
              </div>

              <div className="story-result-lines">
                <div>
                  <span>Declarations</span>
                  <b>PASS</b>
                </div>

                <div>
                  <span>Quantity</span>
                  <b>PASS</b>
                </div>

                <div>
                  <span>Manufacturer</span>
                  <b>PASS</b>
                </div>

                <div>
                  <span>Attention points</span>
                  <b>02</b>
                </div>
              </div>
            </div>

            <h3>Structured inspection</h3>

            <p>
              The label becomes an inspection with findings,
              evidence and a report that can be reviewed.
            </p>
          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="story-vision">
        <div className="story-section-label">05 — THE VISION</div>

        <motion.div
          className="story-vision-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="story-vision-small">
            CHECKMATE IS BUILT AROUND ONE SIMPLE IDEA
          </p>

          <h2>
            Make compliance
            <br />
            <span>inspectable.</span>
          </h2>

          <p className="story-vision-copy">
            Not hidden inside spreadsheets.
            <br />
            Not buried inside manual checks.
            <br />
            Not left to guesswork.
          </p>

          <a href="/" className="story-final-link">
            Explore CheckMate
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="story-footer">
        <span>checkmate</span>
        <span>AI-POWERED PRODUCT COMPLIANCE & INSPECTION</span>
      </footer>

    </div>
  );
}

export default Story;
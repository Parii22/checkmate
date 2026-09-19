import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Story from "./story";
import Demo from "./demo";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import "./index.css";
function Home() {
  
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-mark">
            <Check size={18} strokeWidth={3} />
          </div>

          <span>checkmate</span>
        </div>

        <div className="nav-links">
          <a href="#product">Product</a>
          <a href="/story">How It Works</a>
          <a href="#features">Features</a>
          <a href="#standards">Standards</a>
          <a href="#about">About</a>
        </div>

        <a href="/demo" className="nav-cta">
  View Demo
  <ArrowUpRight size={16} />
</a>
        <button className="mobile-menu">
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow-dot"></span>
            AI-POWERED PRODUCT COMPLIANCE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Every product
            <br />
            has something
            <br />
            <span>to check.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            CheckMate uses AI, OCR and computer vision to inspect packaged
            products, understand their labels and surface what needs attention.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <button className="primary-button">
              Explore CheckMate
              <ArrowUpRight size={17} />
            </button>

            <button className="secondary-button">
              See how it works
              <ArrowDown size={16} />
            </button>
          </motion.div>
        </div>

        {/* INSPECTION VISUAL */}
        <motion.div
          className="inspection-stage"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <div className="stage-grid"></div>

          <div className="inspection-top">
            <div>
              <span className="tiny-label">LIVE INSPECTION</span>
              <strong>Product analysis</strong>
            </div>

            <div className="live-status">
              <span></span>
              SCANNING
            </div>
          </div>

          {/* PRODUCT */}
          <motion.div
            className="product-pack"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <div className="pack-top">
              <span>CHECK</span>
              <span>MATE</span>
            </div>

            <div className="pack-center">
              <div className="pack-symbol">
                <ShieldCheck size={36} strokeWidth={1.5} />
              </div>

              <strong>PREMIUM</strong>
              <span>PRODUCT SAMPLE</span>
            </div>

            <div className="pack-bottom">
              <span>NET QTY. 500 g</span>
              <span>INDIA</span>
            </div>

            {/* SCAN LINE */}
            <motion.div
              className="scan-line"
              animate={{ top: ["8%", "92%", "8%"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* DETECTION BOXES */}
          <motion.div
            className="detect-box detect-one"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span></span>
          </motion.div>

          <motion.div
            className="detect-box detect-two"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span></span>
          </motion.div>

          <motion.div
            className="detect-box detect-three"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <span></span>
          </motion.div>

          {/* ANNOTATIONS */}
          <motion.div
            className="annotation annotation-one"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="annotation-line"></div>
            <div>
              <span>01</span>
              <strong>Product name</strong>
              <small>Detected</small>
            </div>
          </motion.div>

          <motion.div
            className="annotation annotation-two"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
          >
            <div>
              <span>02</span>
              <strong>Net quantity</strong>
              <small>Verified</small>
            </div>
            <div className="annotation-line"></div>
          </motion.div>

          <motion.div
            className="annotation annotation-three"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="annotation-line"></div>
            <div>
              <span>03</span>
              <strong>Declaration</strong>
              <small className="attention">Needs attention</small>
            </div>
          </motion.div>

          {/* SCORE CARD */}
          <motion.div
            className="score-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
          >
            <div className="score-ring">
              <span>92</span>
              <small>%</small>
            </div>

            <div>
              <span>COMPLIANCE</span>
              <strong>Good standing</strong>
            </div>
          </motion.div>

          {/* OCR CARD */}
          <motion.div
            className="ocr-card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
          >
            <ScanLine size={17} />
            <div>
              <span>OCR ENGINE</span>
              <strong>Reading label data...</strong>
            </div>
            <Check size={17} />
          </motion.div>
        </motion.div>
      </section>

            {/* LOOK CLOSER SECTION */}
      <section className="look-closer">
        <div className="look-header">
          <motion.span
            className="section-number"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            01 — THE LABEL
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Looks simple.
            <br />
            <span>Look closer.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Behind every packaged product is a dense layer of information.
            Every declaration has a purpose. Every detail may need to be
            checked.
          </motion.p>
        </div>

        <div className="label-inspection">
          {/* LEFT CALLOUTS */}
          <div className="callout callout-left callout-product">
            <span className="callout-index">01</span>
            <div>
              <strong>Product name</strong>
              <small>Identity</small>
            </div>
            <i></i>
          </div>

          <div className="callout callout-left callout-ingredients">
            <span className="callout-index">02</span>
            <div>
              <strong>Ingredients</strong>
              <small>Composition</small>
            </div>
            <i></i>
          </div>

          <div className="callout callout-left callout-allergen">
            <span className="callout-index">03</span>
            <div>
              <strong>Allergen information</strong>
              <small>Consumer safety</small>
            </div>
            <i></i>
          </div>

          {/* PRODUCT LABEL */}
          <motion.div
            className="large-label"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="label-brand">
              <span>CHECK</span>
              <span>MATE</span>
            </div>

            <div className="label-title">
              <div className="label-symbol">
                <ShieldCheck size={46} strokeWidth={1.4} />
              </div>

              <h3>PRODUCT<br />SAMPLE</h3>

              <span>PACKAGED COMMODITY</span>
            </div>

            <div className="label-info">
              <div>
                <span>NET QUANTITY</span>
                <strong>500 g</strong>
              </div>

              <div>
                <span>MANUFACTURED BY</span>
                <strong>CHECKMATE FOODS</strong>
              </div>

              <div>
                <span>LICENSE NO.</span>
                <strong>XXXXXXXXXXXX</strong>
              </div>
            </div>

            <div className="label-ingredients">
              <span>INGREDIENTS</span>
              <p>
                Whole grain, natural ingredients, permitted additives,
                nutritional components...
              </p>
            </div>

            <div className="label-footer">
              <span>MADE IN INDIA</span>
              <span>500 g</span>
            </div>

            {/* SCAN HIGHLIGHTS */}
            <motion.div
              className="label-highlight highlight-one"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            />

            <motion.div
              className="label-highlight highlight-two"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            />

            <motion.div
              className="label-highlight highlight-three"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            />
          </motion.div>

          {/* RIGHT CALLOUTS */}
          <div className="callout callout-right callout-quantity">
            <i></i>
            <div>
              <strong>Net quantity</strong>
              <small>Measurement</small>
            </div>
            <span className="callout-index">04</span>
          </div>

          <div className="callout callout-right callout-manufacturer">
            <i></i>
            <div>
              <strong>Manufacturer</strong>
              <small>Traceability</small>
            </div>
            <span className="callout-index">05</span>
          </div>

          <div className="callout callout-right callout-declaration">
            <i className="warning-line"></i>
            <div>
              <strong>Mandatory declaration</strong>
              <small className="warning-text">Needs attention</small>
            </div>
            <span className="callout-index warning-index">06</span>
          </div>
        </div>

        <div className="look-bottom">
          <span>THE QUESTION</span>
          <strong>
            How do you check all of this —
            <em>every single time?</em>
          </strong>
        </div>
            </section>

      {/* CHECKMATE REVEAL */}
      <section className="checkmate-reveal">
        <div className="reveal-intro">
          <motion.span
            className="section-number"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            02 — THE IDEA
          </motion.span>

          <motion.p
            className="reveal-small-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Manual inspection means reading, interpreting and validating
            hundreds of tiny details.
          </motion.p>

          <motion.div
            className="reveal-question"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span>So we asked...</span>

            <h2>
              What if a product
              <br />
              <em>could check itself?</em>
            </h2>
          </motion.div>
        </div>

        {/* CHECKMATE PRODUCT REVEAL */}
        <div className="product-reveal">
          <motion.div
            className="reveal-orbit orbit-one"
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="reveal-orbit orbit-two"
            animate={{ rotate: -360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="checkmate-interface"
            initial={{ opacity: 0, y: 80, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* INTERFACE TOP BAR */}
            <div className="interface-topbar">
              <div className="interface-brand">
                <div className="interface-mark">
                  <Check size={13} strokeWidth={3} />
                </div>
                <strong>checkmate</strong>
              </div>

              <div className="interface-search">
                Search inspections...
              </div>

              <div className="interface-user">
                <span></span>
                Inspector
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="interface-sidebar">
              <div className="sidebar-label">WORKSPACE</div>

              <div className="sidebar-item active">
                <ScanLine size={15} />
                Inspections
              </div>

              <div className="sidebar-item">
                <ShieldCheck size={15} />
                Standards
              </div>

              <div className="sidebar-item">
                <ArrowUpRight size={15} />
                Reports
              </div>

              <div className="sidebar-item">
                <ArrowDown size={15} />
                History
              </div>

              <div className="sidebar-bottom">
                <div className="sidebar-label">ACCOUNT</div>

                <div className="sidebar-item">
                  <span className="profile-dot"></span>
                  Profile
                </div>
              </div>
            </aside>

            {/* MAIN INTERFACE */}
            <div className="interface-main">
              <div className="interface-heading">
                <div>
                  <span>INSPECTION / #CM-00248</span>
                  <h3>Inspection Overview</h3>
                </div>

                <div className="inspection-complete">
                  <span></span>
                  Analysis complete
                </div>
              </div>

              {/* DASHBOARD GRID */}
              <div className="inspection-grid">

                {/* PRODUCT CARD */}
                <div className="interface-card product-analysis">
                  <div className="card-header">
                    <div>
                      <span>PRODUCT ANALYSIS</span>
                      <strong>Packaged Product</strong>
                    </div>

                    <span className="verified">
                      <Check size={11} />
                      VERIFIED
                    </span>
                  </div>

                  <div className="mini-product-area">
                    <div className="mini-package">
                      <div>CHECK</div>
                      <ShieldCheck size={30} />
                      <strong>PRODUCT</strong>
                      <small>500 g</small>

                      <div className="mini-scan"></div>
                    </div>

                    <div className="detected-fields">
                      <div>
                        <span>PRODUCT NAME</span>
                        <strong>Product Sample</strong>
                      </div>

                      <div>
                        <span>NET QUANTITY</span>
                        <strong>500 g</strong>
                      </div>

                      <div>
                        <span>MANUFACTURER</span>
                        <strong>CheckMate Foods</strong>
                      </div>

                      <div>
                        <span>BARCODE</span>
                        <strong>890XXXXXXXXX</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SCORE CARD */}
                <div className="interface-card compliance-card">
                  <div className="card-header">
                    <span>COMPLIANCE SCORE</span>

                    <span className="score-status">
                      GOOD
                    </span>
                  </div>

                  <div className="big-score">
                    <strong>92</strong>
                    <span>%</span>
                  </div>

                  <div className="score-bar">
                    <span></span>
                  </div>

                  <small>
                    Based on applicable checks
                  </small>
                </div>

                {/* CHECKS */}
                <div className="interface-card checks-card">
                  <div className="card-header">
                    <div>
                      <span>INSPECTION RESULTS</span>
                      <strong>Checks performed</strong>
                    </div>

                    <span className="checks-count">
                      126
                    </span>
                  </div>

                  <div className="check-row">
                    <span className="check-icon pass">
                      <Check size={11} />
                    </span>

                    <div>
                      <strong>Product information</strong>
                      <small>Complete</small>
                    </div>

                    <span className="pass-text">PASS</span>
                  </div>

                  <div className="check-row">
                    <span className="check-icon pass">
                      <Check size={11} />
                    </span>

                    <div>
                      <strong>Net quantity</strong>
                      <small>Detected & verified</small>
                    </div>

                    <span className="pass-text">PASS</span>
                  </div>

                  <div className="check-row">
                    <span className="check-icon pass">
                      <Check size={11} />
                    </span>

                    <div>
                      <strong>Manufacturer details</strong>
                      <small>Detected</small>
                    </div>

                    <span className="pass-text">PASS</span>
                  </div>

                  <div className="check-row warning-row">
                    <span className="check-icon warning">
                      !
                    </span>

                    <div>
                      <strong>Mandatory declaration</strong>
                      <small>Requires review</small>
                    </div>

                    <span className="warning-text">REVIEW</span>
                  </div>
                </div>

                {/* ACTIVITY */}
                <div className="interface-card activity-card">
                  <div className="card-header">
                    <div>
                      <span>AI ANALYSIS</span>
                      <strong>What CheckMate found</strong>
                    </div>
                  </div>

                  <div className="analysis-step complete">
                    <span>01</span>
                    <div>
                      <strong>Text extracted</strong>
                      <small>OCR complete</small>
                    </div>
                    <Check size={13} />
                  </div>

                  <div className="analysis-step complete">
                    <span>02</span>
                    <div>
                      <strong>Information structured</strong>
                      <small>Product fields identified</small>
                    </div>
                    <Check size={13} />
                  </div>

                  <div className="analysis-step complete">
                    <span>03</span>
                    <div>
                      <strong>Requirements checked</strong>
                      <small>Applicable rules evaluated</small>
                    </div>
                    <Check size={13} />
                  </div>

                  <div className="analysis-step current">
                    <span>04</span>
                    <div>
                      <strong>Potential issue detected</strong>
                      <small>Evidence available for review</small>
                    </div>
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FLOATING LABELS */}
          <motion.div
            className="reveal-floating floating-ai"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <span className="floating-dot"></span>
            AI + OCR
            <small>Reading the label</small>
          </motion.div>

          <motion.div
            className="reveal-floating floating-check"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            <Check size={13} />
            Rule engine
            <small>Checking requirements</small>
          </motion.div>
        </div>

        <motion.div
          className="reveal-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>THIS IS CHECKMATE</span>
          <p>
            One scan turns a dense product label into
            <strong> structured, inspectable information.</strong>
          </p>
        </motion.div>
      </section>

            {/* WORKFLOW */}
      <section className="workflow-section" id="how-it-works">
        <div className="workflow-header">
          <motion.span
            className="section-number"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            03 — HOW IT WORKS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            One scan.
            <br />
            <span>Five intelligent steps.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            CheckMate turns a product image into structured,
            inspectable information — then tells you what needs attention.
          </motion.p>
        </div>

        <div className="workflow-container">

          {/* LEFT TIMELINE */}
          <div className="workflow-timeline">

            <div className="workflow-progress">
              <span></span>
            </div>

            <motion.div
              className="workflow-step active"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="step-number">01</div>

              <div className="step-content">
                <span>SCAN</span>
                <h3>Start with the product.</h3>
                <p>
                  Capture or upload a clear image of the packaged product.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="step-number">02</div>

              <div className="step-content">
                <span>UNDERSTAND</span>
                <h3>Read what humans usually read.</h3>
                <p>
                  OCR and AI identify text, declarations and important
                  product information.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="step-number">03</div>

              <div className="step-content">
                <span>CHECK</span>
                <h3>Compare it against requirements.</h3>
                <p>
                  Applicable compliance requirements are evaluated against
                  the information detected on the package.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="step-number">04</div>

              <div className="step-content">
                <span>FLAG</span>
                <h3>Make the problem visible.</h3>
                <p>
                  Potential issues are highlighted with evidence,
                  severity and recommendations.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="step-number">05</div>

              <div className="step-content">
                <span>REPORT</span>
                <h3>Turn inspection into action.</h3>
                <p>
                  Generate a structured report that can be reviewed,
                  shared and tracked.
                </p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT PRODUCT VISUAL */}
          <div className="workflow-visual">

            <div className="workflow-visual-top">
              <div>
                <span>CHECKMATE ENGINE</span>
                <strong>Inspection in progress</strong>
              </div>

              <div className="engine-status">
                <span></span>
                ACTIVE
              </div>
            </div>

            <div className="workflow-screen">

              {/* SCAN STAGE */}
              <motion.div
                className="workflow-product"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="workflow-product-top">
                  CHECKMATE
                </div>

                <ShieldCheck size={46} strokeWidth={1.4} />

                <strong>PRODUCT</strong>
                <span>PACKAGED COMMODITY</span>

                <div className="workflow-product-info">
                  <span>NET QTY.</span>
                  <strong>500 g</strong>
                </div>

                <div className="workflow-scan"></div>
              </motion.div>

              {/* DATA LAYERS */}
              <div className="workflow-data">

                <div className="data-layer">
                  <div className="data-icon">
                    01
                  </div>

                  <div>
                    <span>OCR EXTRACTION</span>
                    <strong>
                      Product information detected
                    </strong>
                  </div>

                  <Check size={15} />
                </div>

                <div className="data-layer">
                  <div className="data-icon">
                    02
                  </div>

                  <div>
                    <span>AI UNDERSTANDING</span>
                    <strong>
                      24 product fields identified
                    </strong>
                  </div>

                  <Check size={15} />
                </div>

                <div className="data-layer warning-layer">
                  <div className="data-icon warning-icon">
                    03
                  </div>

                  <div>
                    <span>COMPLIANCE CHECK</span>
                    <strong>
                      1 potential issue requires review
                    </strong>
                  </div>

                  <span className="review-badge">
                    REVIEW
                  </span>
                </div>

              </div>

              {/* BOTTOM STATUS */}
              <div className="workflow-status">

                <div>
                  <span>ANALYSIS</span>
                  <strong>92%</strong>
                </div>

                <div className="workflow-status-bar">
                  <span></span>
                </div>

                <div>
                  <span>STATUS</span>
                  <strong className="good-status">
                    GOOD
                  </strong>
                </div>

              </div>

            </div>

            {/* DECORATIVE CORNERS */}
            <div className="visual-corner corner-one"></div>
            <div className="visual-corner corner-two"></div>
            <div className="visual-corner corner-three"></div>
            <div className="visual-corner corner-four"></div>

          </div>
        </div>

        {/* FLOW LINE */}
        <div className="workflow-bottom">
          <span>THE CHECKMATE JOURNEY</span>

          <div className="journey-line">
            <div className="journey-item">
              <span>01</span>
              SCAN
            </div>

            <i></i>

            <div className="journey-item">
              <span>02</span>
              UNDERSTAND
            </div>

            <i></i>

            <div className="journey-item">
              <span>03</span>
              CHECK
            </div>

            <i></i>

            <div className="journey-item">
              <span>04</span>
              FLAG
            </div>

            <i></i>

            <div className="journey-item">
              <span>05</span>
              REPORT
            </div>
          </div>
        </div>
      </section>

            {/* ISSUE EXPLORER */}
      <section className="issue-explorer" id="features">
        <div className="issue-header">
          <motion.span
            className="section-number"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            04 — WHEN SOMETHING IS WRONG
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Don't just find
            <br />
            <span>the problem.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            CheckMate connects every potential issue to the evidence
            behind it — so an inspector knows what to review and why.
          </motion.p>
        </div>

        <div className="issue-workspace">



          {/* LEFT — LABEL */}
          <motion.div
            className="issue-product-panel"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="issue-panel-label">
              <span>01</span>
              SOURCE IMAGE
            </div>

            <div className="issue-package">

              <div className="package-brand">
                CHECK
              </div>

              <div className="package-shield">
                <ShieldCheck size={42} strokeWidth={1.4} />
              </div>

              <h3>PRODUCT<br />SAMPLE</h3>

              <span className="package-type">
                PACKAGED COMMODITY
              </span>

              <div className="package-divider"></div>

              <div className="package-details">
                <div>
                  <span>NET QUANTITY</span>
                  <strong>500 g</strong>
                </div>

                <div>
                  <span>MANUFACTURED BY</span>
                  <strong>CHECKMATE FOODS</strong>
                </div>
              </div>

              <div className="package-warning">
                <span></span>
                DECLARATION
              </div>

              <div className="issue-box issue-box-one"></div>
              <div className="issue-box issue-box-two"></div>

              <div className="issue-marker">
                <span>03</span>
                <i></i>
              </div>
            </div>

            <div className="image-meta">
              <div>
                <span>IMAGE</span>
                <strong>Product_248.jpg</strong>
              </div>

              <div>
                <span>CAPTURE</span>
                <strong>Front label</strong>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — ISSUE */}
          <motion.div
            className="issue-detail-panel"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="issue-detail-top">
              <div>
                <span>02 — ANALYSIS RESULT</span>
                <h3>Potential issue detected</h3>
              </div>

              <div className="severity-badge">
                <span></span>
                NEEDS REVIEW
              </div>
            </div>

            <div className="issue-main">

              <div className="issue-number">
                03
              </div>

              <div className="issue-copy">
                <span>MANDATORY DECLARATION</span>

                <h4>
                  Declaration requires
                  <br />
                  manual review.
                </h4>

                <p>
                  CheckMate detected a declaration that may require
                  verification against the applicable packaged commodity
                  requirements.
                </p>
              </div>
            </div>

            <div className="evidence-block">
              <div className="evidence-title">
                <span>EVIDENCE</span>
                <small>Detected on product label</small>
              </div>

              <div className="evidence-highlight">
                <div className="evidence-line"></div>

                <div className="evidence-text">
                  <span>DETECTED FIELD</span>
                  <strong>
                    Mandatory declaration
                  </strong>
                </div>

                <div className="evidence-status">
                  REVIEW
                </div>
              </div>
            </div>

            <div className="recommendation-block">
              <div className="recommendation-icon">
                <ArrowUpRight size={16} />
              </div>

              <div>
                <span>RECOMMENDATION</span>

                <strong>
                  Verify the declaration and its placement
                  before approving the product.
                </strong>
              </div>
            </div>

            <div className="issue-footer">
              <div>
                <span>CHECK TYPE</span>
                <strong>Compliance rule</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong className="review-status">
                  Requires review
                </strong>
              </div>

              <button className="issue-action">
                View requirement
                <ArrowUpRight size={13} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          className="issue-statement"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>FROM DETECTION TO DECISION</span>

          <p>
            Every flag comes with <strong>context.</strong>
            <br />
            Every decision has <strong>evidence.</strong>
          </p>
        </motion.div>
      </section>

            {/* COMPLIANCE SCORE */}
      <section className="score-section" id="standards">
        <div className="score-intro">
          <motion.span
            className="section-number"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            05 — THE RESULT
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            One product.
            <br />
            <span>Every check.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            CheckMate turns hundreds of individual checks into one
            inspection view — showing what passed, what needs attention,
            and what should happen next.
          </motion.p>
        </div>

        <motion.div
          className="score-dashboard"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="score-dashboard-top">
            <div>
              <span>INSPECTION / #CM-00248</span>
              <h3>Compliance overview</h3>
            </div>

            <div className="score-status">
              <span></span>
              ANALYSIS COMPLETE
            </div>
          </div>

          <div className="score-dashboard-body">

            <div className="score-main">
              <span className="score-label">
                COMPLIANCE SCORE
              </span>

              <div className="score-number">
                <strong>92</strong>
                <span>%</span>
              </div>

              <div className="score-track">
                <div className="score-track-fill"></div>
              </div>

              <p>
                Based on applicable checks
              </p>
            </div>

            <div className="score-metrics">

              <div className="score-metric">
                <span>CHECKS PERFORMED</span>
                <strong>126</strong>
                <small>Across applicable requirements</small>
              </div>

              <div className="score-metric">
                <span>CHECKS PASSED</span>
                <strong>118</strong>
                <small>Verified successfully</small>
              </div>

              <div className="score-metric warning">
                <span>NEEDS ATTENTION</span>
                <strong>08</strong>
                <small>Requires review</small>
              </div>

              <div className="score-metric">
                <span>NOT APPLICABLE</span>
                <strong>04</strong>
                <small>Excluded from score</small>
              </div>

            </div>
          </div>

          <div className="score-breakdown">

            <div className="breakdown-heading">
              <span>CHECK BREAKDOWN</span>
              <small>Inspection #CM-00248</small>
            </div>

            <div className="breakdown-row">
              <div className="breakdown-name">
                <i className="pass-dot"></i>
                Product information
              </div>

              <div className="breakdown-bar">
                <span style={{ width: "100%" }}></span>
              </div>

              <strong>PASS</strong>
            </div>

            <div className="breakdown-row">
              <div className="breakdown-name">
                <i className="pass-dot"></i>
                Net quantity
              </div>

              <div className="breakdown-bar">
                <span style={{ width: "100%" }}></span>
              </div>

              <strong>PASS</strong>
            </div>

            <div className="breakdown-row">
              <div className="breakdown-name">
                <i className="pass-dot"></i>
                Manufacturer details
              </div>

              <div className="breakdown-bar">
                <span style={{ width: "100%" }}></span>
              </div>

              <strong>PASS</strong>
            </div>

            <div className="breakdown-row attention">
              <div className="breakdown-name">
                <i className="warning-dot"></i>
                Mandatory declaration
              </div>

              <div className="breakdown-bar">
                <span style={{ width: "72%" }}></span>
              </div>

              <strong>REVIEW</strong>
            </div>

          </div>
        </motion.div>

        <motion.div
          className="score-statement"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>THE DIFFERENCE</span>

          <p>
            Not a black box.
            <br />
            <strong>A traceable inspection.</strong>
          </p>
        </motion.div>
      </section>

            {/* STANDARDS */}
      <section className="standards-section">
        <div className="standards-top">
          <motion.span
            className="section-number"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            06 — THE RULES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Compliance isn't
            <br />
            <span>one rule.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Different products carry different requirements.
            CheckMate brings the applicable checks into one
            inspection workflow.
          </motion.p>
        </div>

        <div className="standards-grid">

          <motion.div
            className="standard-card standard-main"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="standard-number">01</div>

            <div className="standard-icon">LM</div>

            <div className="standard-content">
              <span>LEGAL METROLOGY</span>

              <h3>
                Packaged commodity
                declarations.
              </h3>

              <p>
                Checks can cover declarations such as net quantity,
                manufacturer details, identity and other applicable
                packaged commodity requirements.
              </p>
            </div>

            <div className="standard-arrow">↗</div>
          </motion.div>


         <motion.div
  className="standard-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 }}
>
            <div className="standard-number">02</div>

            <div className="standard-icon teal">FS</div>

            <div className="standard-content">
              <span>FOOD & LABEL INFORMATION</span>

              <h3>
                Ingredient & allergen
                information.
              </h3>

              <p>
                Product information can be structured and surfaced
                for applicable checks.
              </p>
            </div>

            <div className="standard-arrow">↗</div>
          </motion.div>


          <motion.div
            className="standard-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="standard-number">03</div>

            <div className="standard-icon dark">BI</div>

            <div className="standard-content">
              <span>STANDARDS</span>

              <h3>
                Applicable requirements,
                made visible.
              </h3>

              <p>
                Inspection results connect detected information
                with the requirements being evaluated.
              </p>
            </div>

            <div className="standard-arrow">↗</div>
          </motion.div>


          <motion.div
            className="standard-card"
            initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="standard-number">04</div>

            <div className="standard-icon orange">DC</div>

            <div className="standard-content">
              <span>DECLARATIONS</span>

              <h3>
                Missing or unclear
                information gets flagged.
              </h3>

              <p>
                Potential issues are surfaced with evidence and
                recommendations for review.
              </p>
            </div>

            <div className="standard-arrow">↗</div>
          </motion.div>

        </div>

        <div className="standards-bottom">
          <span>CHECKMATE</span>
          <p>
            The rules stay behind the scenes.
            <strong> The decision stays visible.</strong>
          </p>
        </div>
      </section>

            {/* INSPECTION HISTORY */}
      <section className="history-section" id="product">

        <div className="history-intro">

          <motion.span
            className="section-number"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            07 — THE RECORD
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Every inspection.
            <br />
            <span>One place.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Every scan becomes part of a searchable inspection history —
            so teams can review products, track decisions and return to
            the evidence behind them.
          </motion.p>

        </div>


        <motion.div
          className="history-app"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* APP TOP BAR */}

          <div className="history-topbar">

            <div className="history-brand">
              <div className="history-logo">✓</div>
              <strong>checkmate</strong>
            </div>

            <div className="history-search">
              <span>⌕</span>
              Search inspections...
            </div>

            <div className="history-user">
              <div className="user-avatar">I</div>
              <span>Inspector</span>
            </div>

          </div>


          {/* APP BODY */}

          <div className="history-body">

            {/* SIDEBAR */}

            <aside className="history-sidebar">

              <span className="sidebar-label">
                WORKSPACE
              </span>

              <div className="sidebar-item active">
                <span>⌗</span>
                Inspections
              </div>

              <div className="sidebar-item">
                <span>◇</span>
                Standards
              </div>

              <div className="sidebar-item">
                <span>↗</span>
                Reports
              </div>

              <div className="sidebar-item">
                <span>↓</span>
                History
              </div>

            </aside>


            {/* MAIN */}

            <main className="history-main">

              <div className="history-page-heading">

                <div>
                  <span>WORKSPACE / INSPECTIONS</span>

                  <h3>
                    Inspection history
                  </h3>
                </div>

                <button className="new-inspection">
                  + New inspection
                </button>

              </div>


              {/* SUMMARY */}

              <div className="history-summary">

                <div>
                  <span>TOTAL INSPECTIONS</span>
                  <strong>248</strong>
                </div>

                <div>
                  <span>COMPLIANT</span>
                  <strong>196</strong>
                </div>

                <div>
                  <span>NEEDS REVIEW</span>
                  <strong>32</strong>
                </div>

                <div>
                  <span>IN PROGRESS</span>
                  <strong>20</strong>
                </div>

              </div>


              {/* TABLE */}

              <div className="inspection-table">

                <div className="table-heading">
                  <span>PRODUCT</span>
                  <span>INSPECTION</span>
                  <span>STATUS</span>
                  <span>SCORE</span>
                  <span>DATE</span>
                </div>


                <div className="inspection-row">

                  <div className="product-cell">
                    <div className="product-mini">P</div>

                    <div>
                      <strong>Product Sample</strong>
                      <small>Packaged commodity</small>
                    </div>
                  </div>

                  <span className="inspection-id">
                    #CM-00248
                  </span>

                  <span className="status good">
                    <i></i>
                    Compliant
                  </span>

                  <strong className="row-score">
                    92%
                  </strong>

                  <span className="row-date">
                    Today
                  </span>

                </div>


                <div className="inspection-row">

                  <div className="product-cell">
                    <div className="product-mini teal">
                      F
                    </div>

                    <div>
                      <strong>Food Product 02</strong>
                      <small>Food label</small>
                    </div>
                  </div>

                  <span className="inspection-id">
                    #CM-00247
                  </span>

                  <span className="status review">
                    <i></i>
                    Needs review
                  </span>

                  <strong className="row-score review-score">
                    78%
                  </strong>

                  <span className="row-date">
                    Yesterday
                  </span>

                </div>


                <div className="inspection-row">

                  <div className="product-cell">
                    <div className="product-mini">
                      B
                    </div>

                    <div>
                      <strong>Consumer Product</strong>
                      <small>Packaged commodity</small>
                    </div>
                  </div>

                  <span className="inspection-id">
                    #CM-00246
                  </span>

                  <span className="status good">
                    <i></i>
                    Compliant
                  </span>

                  <strong className="row-score">
                    96%
                  </strong>

                  <span className="row-date">
                    08 Sep 2026
                  </span>

                </div>


                <div className="inspection-row">

                  <div className="product-cell">
                    <div className="product-mini orange">
                      N
                    </div>

                    <div>
                      <strong>Nutrition Sample</strong>
                      <small>Food label</small>
                    </div>
                  </div>

                  <span className="inspection-id">
                    #CM-00245
                  </span>

                  <span className="status progress">
                    <i></i>
                    In progress
                  </span>

                  <strong className="row-score muted">
                    —
                  </strong>

                  <span className="row-date">
                    08 Sep 2026
                  </span>

                </div>

              </div>

            </main>

          </div>

        </motion.div>


        <div className="history-statement">

          <span>BUILT FOR CONTINUITY</span>

          <p>
            A single inspection tells you what happened.
            <br />
            <strong>A history tells you what keeps happening.</strong>
          </p>

        </div>

      </section>

            {/* FINAL CTA */}
      <section className="final-section">

        <div className="final-grid"></div>

        <motion.div
          className="final-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="final-kicker">
            08 — THE NEXT CHECK
          </span>

          <h2>
            Don't just
            <br />
            <span>trust the label.</span>
          </h2>

          <p>
            See what happens when product inspection
            becomes intelligent, traceable and built for scale.
          </p>

          <div className="final-actions">

            <button className="final-primary">
              Explore CheckMate
              <span>↗</span>
            </button>

            <button className="final-secondary">
              See how it works
              <span>↓</span>
            </button>

          </div>

        </motion.div>


        <div className="final-signal">

          <div className="signal-line"></div>

          <div>
            <span>CHECKMATE ENGINE</span>
            <strong>READY TO INSPECT</strong>
          </div>

          <div className="signal-dot"></div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="site-footer">

        <div className="footer-top">

          <div className="footer-brand">

            <div className="footer-logo">
              ✓
            </div>

            <div>
              <strong>checkmate</strong>
              <span>
                AI-powered product compliance
              </span>
            </div>

          </div>


          <div className="footer-links">

            <div>
              <span>PRODUCT</span>

              <a href="#product">
                Product
              </a>

              <a href="#standards">
                Standards
              </a>

              <a href="#features">
                Features
              </a>
            </div>


            <div>
              <span>EXPLORE</span>

              <a href="/story">
                How it works
              </a>

             <a href="/demo">
  View Demo
</a>
              <a href="#about">
                About
              </a>
            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 CheckMate
          </span>

          <span>
            AI + OCR + COMPUTER VISION
          </span>

          <span>
            BUILT FOR PRODUCT INSPECTION
          </span>

        </div>

      </footer>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span>SCROLL TO INSPECT</span>
        <ArrowDown size={15} />
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
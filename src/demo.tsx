import { motion } from "framer-motion";
import { useState } from "react";

import {
  ArrowLeft,
  Check,
  ChevronRight,
  FileCheck2,
  ScanLine,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import "./demo.css";

function Demo() {
    
    const [isScanning, setIsScanning] = useState(false);
const [isComplete, setIsComplete] = useState(false);

const startInspection = () => {
  setIsScanning(true);
  setIsComplete(false);

  setTimeout(() => {
    setIsScanning(false);
    setIsComplete(true);
  }, 2500);
};
  const checks = [
    {
      name: "Product identity",
      status: "PASS",
    },
    {
      name: "Net quantity declaration",
      status: "PASS",
    },
    {
      name: "Manufacturer details",
      status: "PASS",
    },
    {
      name: "MRP declaration",
      status: "PASS",
    },
    {
      name: "Consumer care information",
      status: "ATTENTION",
    },
  ];

  return (
    <div className="demo-page">

      {/* NAV */}
      <nav className="demo-nav">
        <a href="/" className="demo-back">
          <ArrowLeft size={16} />
          Back
        </a>

        <div className="demo-brand">
          <span className="demo-brand-mark">
            <Check size={16} strokeWidth={3} />
          </span>
          checkmate
        </div>

        <span className="demo-status">
          DEMO MODE
        </span>
      </nav>

      {/* HEADER */}
      <section className="demo-header">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="demo-eyebrow">
            <ScanLine size={15} />
            PRODUCT INSPECTION
          </div>

          <h1>
            See what
            <br />
            <span>CheckMate finds.</span>
          </h1>

          <p>
            A simulated inspection showing how a packaged
            product moves from scan to compliance report.
          </p>
        </motion.div>
      </section>

      {/* WORKSPACE */}
      <main className="demo-workspace">

        {/* LEFT — PRODUCT */}
        <motion.section
          className="demo-product-panel"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="demo-panel-top">
            <div>
              <span className="demo-panel-label">
                SOURCE IMAGE
              </span>

              <h2>Packaged Product</h2>
            </div>

            <span className="demo-image-number">
              01 / 01
            </span>
          </div>

          <div className="demo-product-image">

            <div className="demo-package">

              <div className="demo-package-top">
                DAILY
              </div>

              <div className="demo-package-name">
                OATS
              </div>

              <div className="demo-package-sub">
                WHOLE GRAIN
              </div>

              <div className="demo-package-circle">
                100%
                <small>WHOLE<br />GRAIN</small>
              </div>

              <div className="demo-package-info">
                <span>NET WT.</span>
                <strong>500 g</strong>
              </div>

              <div className="demo-package-bottom">
                ₹ 249
              </div>

            </div>

            <div className="demo-scan-line" />

            <span className="demo-scan-corner corner-tl" />
            <span className="demo-scan-corner corner-tr" />
            <span className="demo-scan-corner corner-bl" />
            <span className="demo-scan-corner corner-br" />

          </div>

          <div className="demo-image-meta">
            <span>IMAGE QUALITY</span>
            <strong>GOOD</strong>
          </div>
        </motion.section>

        <button
  className="demo-report"
  onClick={startInspection}
  disabled={isScanning}
>
  <ScanLine size={17} />
  {isScanning
    ? "Scanning Product..."
    : isComplete
      ? "Scan Again"
      : "Start Inspection"}
  <ChevronRight size={17} />
</button>

        {/* RIGHT — ANALYSIS */}
        <motion.section
          className="demo-analysis-panel"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="demo-panel-top">
            <div>
              <span className="demo-panel-label">
                INSPECTION
              </span>

              <h2>Analysis</h2>
            </div>

            <div className="demo-score">
              <span>92</span>%
            </div>
          </div>

          {/* PROGRESS */}
          <div className="demo-progress">
            <div className="demo-progress-head">
              <span>INSPECTION COMPLETE</span>
              <strong>100%</strong>
            </div>

            <div className="demo-progress-track">
              <motion.div
                className="demo-progress-fill"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, delay: 0.5 }}
              />
            </div>
          </div>

          {/* CHECKS */}
          <div className="demo-checks">
            {checks.map((check, index) => (
              <motion.div
                className="demo-check"
                key={check.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.55 + index * 0.1,
                }}
              >
                <div className="demo-check-icon">
                  {check.status === "PASS" ? (
                    <Check size={14} />
                  ) : (
                    <TriangleAlert size={14} />
                  )}
                </div>

                <span>{check.name}</span>

                <strong
                  className={
                    check.status === "PASS"
                      ? "pass"
                      : "attention"
                  }
                >
                  {check.status}
                </strong>

                <ChevronRight size={15} />
              </motion.div>
            ))}
          </div>

          {/* RESULT */}
          <div className="demo-result">
            <div className="demo-result-icon">
              <ShieldCheck size={22} />
            </div>

            <div>
              <span>OVERALL RESULT</span>
              <strong>COMPLIANT WITH ATTENTION</strong>
            </div>
          </div>

          {/* REPORT */}
          <button className="demo-report">
            <FileCheck2 size={17} />
            View Inspection Report
            <ChevronRight size={17} />
          </button>

        </motion.section>

      </main>

      {/* FOOTER NOTE */}
      <div className="demo-note">
        <span>CHECKMATE DEMO</span>
        <span>
          Sample inspection data · For demonstration purposes
        </span>
      </div>

    </div>
  );
}

export default Demo;
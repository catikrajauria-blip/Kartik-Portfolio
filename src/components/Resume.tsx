import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ArrowLeft, Download, Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary cyber-grid">
      {/* Navigation */}
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 px-10 md:px-16 py-8 flex justify-between items-center backdrop-blur-xl bg-background/40 border-b border-primary/10"
      >
        <Link to="/">
          <motion.div 
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[4px] font-bold text-primary cursor-pointer font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </motion.div>
        </Link>
        <div className="flex items-center gap-8">
          <Button 
            onClick={() => window.print()}
            variant="outline" 
            className="rounded-md border-primary/30 text-[11px] uppercase tracking-[2px] hover:bg-primary/10 h-10 px-6 font-mono neon-blue"
          >
            <Download className="w-3 h-3 mr-2" />
            Download PDF
          </Button>
        </div>
      </motion.nav>

      <main className="pt-48 pb-32 px-10 md:px-16 lg:px-24 max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-bold mb-8 text-primary"
          >
            Resume<span className="text-accent">.</span>
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Kartik Rajauria</h2>
              <p className="text-muted-foreground text-lg max-w-md font-sans">
                I am focused on creating <span className="text-accent">real-world impact</span>. My work centers on improving workflows and enhancing visibility to solve meaningful problems through modern solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[11px] uppercase tracking-widest font-bold text-muted-foreground font-mono">
              <a href="mailto:rajauriak1@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                rajauriak1@gmail.com
              </a>
              <a href="tel:9893025912" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                9893025912
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                Indore, Madhya Pradesh
              </div>
              <a 
                href="https://www.linkedin.com/in/kartik-rajauria-2a52b521a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4 text-primary" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-24">
            {/* Experience */}
            <section>
              <h3 className="text-[10px] uppercase tracking-[4px] font-bold text-primary mb-12 font-mono">Experience</h3>
              <div className="space-y-16">
                {[
                  {
                    company: "VE Commercial Vehicles",
                    role: "Assistant Manager",
                    period: "April 2024 — May 2026",
                    location: "Pithampur, MP",
                    description: [
                      "Overseeing the maintenance and operation of a comprehensive machine shop.",
                      "Managing equipment such as honing machines, milling machines, ABB robots, and Siemens PLC systems.",
                      "Ensuring seamless functionality of conveyor, hydraulic, and pneumatic systems.",
                      "Conducting troubleshooting and preventive maintenance to minimize downtime."
                    ]
                  },
                  {
                    company: "Cognizant",
                    role: "Analyst Trainee",
                    period: "Jan 2024 — April 2024",
                    location: "Chennai, TN",
                    description: [
                      "Training in Agile, SDLC, UNIX, GIT, HTML, CSS, JavaScript, and Java.",
                      "Developing in SQL and Java.",
                      "Projects involving JDBC, Spring Boot, and Python."
                    ]
                  },
                  {
                    company: "CNH Industrials",
                    role: "Summer Intern",
                    period: "June 2022 — July 2022",
                    location: "Pithampur, MP",
                    description: [
                      "Advanced purchasing research to ensure raw material delivery schedules.",
                      "Developed price negotiation strategies resulting in a 5% reduction in raw material costs."
                    ]
                  }
                ].map((exp, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h4>
                        <p className="text-lg font-mono text-accent">{exp.company}</p>
                      </div>
                      <div className="text-right font-mono">
                        <p className="text-[10px] uppercase tracking-widest font-bold text-primary">{exp.period}</p>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, j) => (
                        <li key={j} className="text-muted-foreground text-sm flex gap-3 font-sans">
                          <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-[10px] uppercase tracking-[4px] font-bold text-primary mb-12 font-mono">Key Projects</h3>
              <div className="space-y-12">
                {[
                  {
                    title: "CMV Reduction in Single Phase qZSI",
                    period: "Jan 2023 — May 2023",
                    details: "Addressed common mode voltage (CMV) issues in Single Phase Quasi Z Source Inverters for PV applications. Achieved 90% CMV reduction using specialized PWM techniques."
                  },
                  {
                    title: "g POD - Dual Purpose Device",
                    period: "June 2022 — July 2022",
                    details: "Presented at the 3rd International Conference on Data Intelligence and Cognitive Informatics. Innovative concept for waste management and cleaning."
                  },
                  {
                    title: "BMS On MATLAB",
                    period: "April 2022 — May 2022",
                    details: "Created a comprehensive Battery Management System for EVs. Implemented safety algorithms for overcharging and thermal protection."
                  }
                ].map((project, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 border border-primary/10 bg-primary/5 hover:bg-primary/10 transition-all rounded-lg glass neon-blue"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-primary">{project.title}</h4>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground font-mono">{project.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">{project.details}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Awards */}
            <section>
              <h3 className="text-[10px] uppercase tracking-[4px] font-bold text-primary mb-12 font-mono">Awards & Recognition</h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Operation Innovation Challenge - VECV",
                    award: "Winner",
                    desc: "Presented innovative machine shopfloor optimization projects."
                  },
                  {
                    title: "Technology Day - VECV",
                    award: "Winner",
                    desc: "Recognized for technical excellence in shopfloor implementation."
                  },
                  {
                    title: "CII Innovation Challenge - Maintenance Circle",
                    award: "Platinum Winner",
                    desc: "Highest recognition for maintenance innovation in machine shop operations."
                  }
                ].map((award, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 border border-primary/10 bg-primary/5 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-bold text-primary">{award.title}</h4>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-accent font-mono">{award.award}</span>
                    </div>
                    <p className="text-muted-foreground text-sm font-sans">{award.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Content */}
          <div className="lg:col-span-4 space-y-24">
            {/* Education */}
            <section>
              <h3 className="text-[10px] uppercase tracking-[4px] font-bold text-primary mb-12 font-mono">Education</h3>
              <div className="space-y-10">
                <div>
                  <h4 className="text-lg font-bold mb-1">TAPMI</h4>
                  <p className="text-sm font-mono text-accent">MBA-International Business</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-mono">2026 — 2028</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">SRM University</h4>
                  <p className="text-sm font-mono text-accent">B.Tech in EEE</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-mono">GPA: 9.1 | 2019 — 2023</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-muted-foreground">Higher Secondary</h4>
                  <p className="text-sm font-mono">Indore, MP</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-mono">76.8% | 2017 — 2019</p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-[10px] uppercase tracking-[4px] font-bold text-primary mb-12 font-mono">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["MATLAB", "JAVA", "SQL", "Agile", "UNIX", "GIT", "AutoCAD", "C++", "Python", "Spring Boot", "PLC Systems"].map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-primary/5 border border-primary/20 text-[10px] uppercase tracking-widest font-bold font-mono text-primary rounded-md glass">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Leadership */}
            <section>
              <h3 className="text-[10px] uppercase tracking-[4px] font-bold text-primary mb-12 font-mono">Leadership</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-1">AARUUSH</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-2 text-accent font-mono">Committee Head</p>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    Managed Quality Assurance domain for SRM's techno-fest. Coordinated volunteers and worked with NGOs for social causes.
                  </p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-[10px] uppercase tracking-[4px] font-bold text-primary mb-12 font-mono">Languages</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">English</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">Professional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">Hindi</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">Native</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 px-10 md:px-16 border-t border-primary/10 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-mono text-primary text-lg mb-8">Kartik Rajauria — Resume 2026</div>
          <div className="text-[10px] uppercase tracking-[4px] opacity-20 font-mono">
            Designed for Excellence
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resume;

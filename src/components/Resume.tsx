import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Download, Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/30 selection:text-accent">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-10 md:px-16 py-8 flex justify-between items-center mix-blend-difference">
        <Link to="/">
          <motion.div 
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[4px] font-medium text-white cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </motion.div>
        </Link>
        <div className="flex items-center gap-8">
          <Button 
            onClick={() => window.print()}
            variant="outline" 
            className="rounded-none border-white/10 text-[11px] uppercase tracking-[2px] hover:bg-white/5 h-10 px-6"
          >
            <Download className="w-3 h-3 mr-2" />
            Download PDF
          </Button>
        </div>
      </nav>

      <main className="pt-40 pb-32 px-10 md:px-16 lg:px-24 max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-serif italic mb-8"
          >
            Resume.
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif">Kartik Rajauria</h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Electrical and Electronics Engineer with a focus on renewable energy, 
                power systems, and industrial automation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[11px] uppercase tracking-widest font-medium text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                rajauriak1@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                9893025912
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                Indore, Madhya Pradesh
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-accent" />
                LinkedIn Profile
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-24">
            {/* Experience */}
            <section>
              <h3 className="text-[10px] uppercase tracking-[4px] font-bold text-accent mb-12">Experience</h3>
              <div className="space-y-16">
                {[
                  {
                    company: "VE Commercial Vehicles",
                    role: "Assistant Manager",
                    period: "April 2024 — May 2026",
                    location: "Pitampur, MP",
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
                    location: "Pitampur, MP",
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
                        <h4 className="text-2xl font-serif italic group-hover:text-accent transition-colors">{exp.role}</h4>
                        <p className="text-lg font-serif">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-widest font-bold">{exp.period}</p>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, j) => (
                        <li key={j} className="text-muted-foreground text-sm flex gap-3">
                          <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
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
              <h3 className="text-[10px] uppercase tracking-[4px] font-bold text-accent mb-12">Key Projects</h3>
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
                    className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-serif italic">{project.title}</h4>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{project.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.details}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Content */}
          <div className="lg:col-span-4 space-y-24">
            {/* Education */}
            <section>
              <h3 className="text-[10px] uppercase tracking-[4px] font-bold text-accent mb-12">Education</h3>
              <div className="space-y-10">
                <div>
                  <h4 className="text-lg font-serif italic mb-1">TAPMI</h4>
                  <p className="text-sm font-medium">MBA-International Business</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">2026 — 2028</p>
                </div>
                <div>
                  <h4 className="text-lg font-serif italic mb-1">SRM University</h4>
                  <p className="text-sm font-medium">B.Tech in EEE</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">GPA: 9.1 | 2019 — 2023</p>
                </div>
                <div>
                  <h4 className="text-lg font-serif italic mb-1">Higher Secondary</h4>
                  <p className="text-sm font-medium">Indore, MP</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">76.8% | 2017 — 2019</p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-[10px] uppercase tracking-[4px] font-bold text-accent mb-12">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["MATLAB", "JAVA", "SQL", "Agile", "UNIX", "GIT", "AutoCAD", "C++", "Python", "Spring Boot", "PLC Systems"].map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Leadership */}
            <section>
              <h3 className="text-[10px] uppercase tracking-[4px] font-bold text-accent mb-12">Leadership</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-serif italic mb-1">AARUUSH</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Committee Head</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Managed Quality Assurance domain for SRM's techno-fest. Coordinated volunteers and worked with NGOs for social causes.
                  </p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-[10px] uppercase tracking-[4px] font-bold text-accent mb-12">Languages</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-serif italic">English</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Professional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-serif italic">Hindi</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Native</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 px-10 md:px-16 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-serif italic text-lg mb-8">Kartik Rajauria — Resume 2026</div>
          <div className="text-[10px] uppercase tracking-[4px] opacity-20">
            Designed for Excellence
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resume;

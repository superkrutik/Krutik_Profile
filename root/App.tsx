

import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { GitHubIcon, LinkedInIcon, EmailIcon, PhoneIcon, ExternalLinkIcon } from './components/icons';
import type { PortfolioData, ExperienceEntry, Project, EducationEntry, SkillCategory, Certification, Activity, AdditionalInfoType } from './types';
import ExperienceCard from './components/ExperienceCard'; 

const portfolioData: PortfolioData = {
  name: "Krutik Patel",
  title: "Embedded Software Engineer", 
  profilePicUrl: "none", // Replace "none" with your actual image URL or keep "none" for placeholder
  contact: {
    phone: "+91-9429109240",
    email: "Krutik1995.kp@gmail.com",
    linkedin: "https://www.linkedin.com/in/superkrutik",
    github: "https://github.com/superkrutik",
    location: "New Jersey, USA / Ahmedabad, India",
  },
  summary: "Results-driven Embedded Software Engineer with 3+ years of experience in developing and testing firmware for industrial data acquisition, control, and communication systems. Proficient in real-time data processing, multi-channel I/O, and protocol conversion (Modbus RTU/TCP). Hands-on experience in developing low-level drivers for UART, SPI, I2C, MQTT, seven-segment displays, and memory interfaces. Skilled in managing and upgrading existing firmware, optimizing execution timing, and implementing feature enhancements. Well-versed in Controller like PIC32, AT128 AVR, ARM Cortex M, ESP32, STM32, EFR32MG Zigbee Controllers and Languages Embedded C, Python, Knowledge of RTOS, and Linux command-line tools for embedded development and automated testing. Holds a Master's in IoT and a strong foundation in Electronics & Communication, integrating both hardware and software expertise.",
  education: [
    { degree: "Masters in Computer Engineering (IoT)", institution: "Graduate School of Engineering and Technology (GTU)", specialization: "Internet of Things", cgpa: "8.25", dates: "Aug 2021 - Jul 2023", location: "Ahmedabad, Gujarat" },
    { degree: "Bachelor's in Electronics & Communications Engineering", institution: "Vishwakarma Government Engineering College (GTU)", cgpa: "7.96", dates: "Aug 2018 - May 2021", location: "Ahmedabad, Gujarat" },
    { degree: "Diploma in Electronics & Communications Engineering", institution: "Government Polytechnic College (GTU)", cgpa: "8.43", dates: "Aug 2018 - May 2021", location: "Gandhinagar, Gujarat" },
  ],
  experience: [
    {
      role: "Research and Development Engineer",
      company: "Masibus, A Sonepar Company",
      dates: "Aug 2023 - Present",
      location: "Gandhinagar, Gujarat",
      projects: [
        { title: "Masibus 85XX+ Scanner Project", description: "Reliable multi-channel universal input data acquisition and logging device for comprehensive industrial process monitoring and Control. Designed and spearheaded the development and Upgradation of the Masibus 85XX+ Series Data Scanner, a critical instrument for industrial process data acquisition. The project focused on creating a reliable, multi-channel system capable of accurately scanning and logging various universal inputs. Development involved complex firmware design for microcontroller integration, implementing new Remote I/O, Modbus relay control, Modbus analog output control, Dual functional alarm setpoint and Control setpoint functionalities also universal analog and digital input conditioning, driving a high-resolution color display, building robust data logging mechanisms with external storage support, and integrating standard industrial communication protocols like Modbus RTU over RS485 and Modbus TCP/IP over Ethernet. The system also included advanced alarm logic and relay control. This comprehensive effort resulted in a versatile and dependable solution widely deployed to enhance monitoring and operational efficiency in diverse industrial applications.", keySkills: ["Embedded C", "Assembly", "PIC Microcontroller", "Universal Input Handling", "Data Logging", "Modbus RTU", "Modbus TCP/IP", "Ethernet", "RS485", "UART", "Interrupts", "Timers", "SPI", "PWM", "ADC", "Memory", "LED Display", "Alarms and Indication", "Relay Control"] },
        { title: "Masibus MSC-RS-RS Serial Converter Project", description: "Repeaters that can boost RS-485 signals and reduce noise, allowing for longer distances and more nodes on the RS-485 network. Its an Hardware Design Based Project.", keySkills: ["Circuit Design and Schematics", "Development Planing", "Orcad Design Suite"] },
        { title: "Masibus 8204/8208 Scanner Project", description: "Designed and developed the Masibus 8204/8 Series (models 8204 and 8208), a range of multi-channel universal input scanners also added Modbus Process Value Functionalities and protection relays for industrial monitoring and equipment protection. Focused on Relay Grouping and creating a reliable, compact, scalable platform (4 or 8 channels) featuring robust firmware, fast sampling, flexible alarm/trip logic, isolated RS485 Modbus communication, and configurable relay outputs with internal relay grouping which can handle multiple relay's groupwise and also Modbus Relay Operation Mode as Remote I/O, all designed for compact panel mounting. These versatile and dependable devices are widely used to enhance monitoring and operational efficiency.", keySkills: ["Embedded C", "AVR Microcontroller", "Universal Input Handling and Modbus PV Input", "Modbus RTU", "RS485", "UART", "SPI", "PWM", "ADC", "Memory", "LED Display", "Alarms and Indication", "Relay Grouping", "Relay Control with Internal Logic and with Modbus Input", "Product Development Planing", "Product Designing and Prototyping"] },
        { title: "Masibus Transformer Protection Relay TPR-8208 Project", description: "Designed and developed the Masibus TPR-8208 Transformer Protection Relay for critical Temperature monitoring and protection of transformers. Engineered for high reliability, it accurately measures various sensor inputs and applies advanced protection algorithms with customizable trip/alarm logic for fast fault detection. Features include Maximium Temperature Loging so user get at what temperature sensor got Open with Dedicated Maximium Temperature Display Mode shows Channel wise Maximium Tempurature and highest Maximium Temperature amoung all channel and RS485 Modbus communication, enhancing transformer safety and substation reliability.", keySkills: ["Embedded C", "AVR Microcontroller", "Universal Input Handling and Modbus PV Input", "Modbus RTU", "RS485", "UART", "SPI", "PWM", "Interrupts", "Timers", "ADC", "Memory Structure", "LED Display", "Alarms/Trip and Fan Logic", "Relay Grouping", "Relay Control with Internal Logic and with Modbus Input", "Product Development Planing", "Product Designing and Prototyping", "Brown Out Task Scheduling"] },
        { title: "Masibus MSG-21 IIoT Gateway Project", description: "Made Development inputs and Testing of Masibus MSG-21, an industrial Modbus Gateway bridging serial Modbus RTU devices to Ethernet (Modbus TCP/IP) and IIoT platforms (MQTT). Engineered a reliable device featuring robust firmware for efficient data polling/buffering, user-friendly web configuration (Design Web Page Prototype), communication error handling, and optional 4G cellular connectivity, streamlining industrial data access and enhancing remote monitoring capabilities.", keySkills: ["Product Development Planing", "Product Documentation and Prototyping Mbed OS Embedded C", "Novuton Microcontroller", "Modbus RTU", "Modbus TCP/IP", "RS485", "Ethernet", "TCP/IP Stack", "Embedded Web Server", "Network Programming", "MQTT", "Cellular Communication (4G/LTE)", "HTML and Java Script based Web page designing"] },
      ]
    },
    {
      role: "Research and Development Intern",
      company: "Masibus, A Sonepar Company",
      dates: "July 2022 - Aug 2023",
      location: "Gandhinagar, Gujarat",
      projects: [
        { title: "IIoT Gateway with Indication & HMI Project", description: "Crafted a Modbus TCP/IP and RTU-based Data Acquisition IIoT Gateway, complete with Relay Control and Monitoring, utilizing the MQTT Messaging Protocol. This marvel includes SQL-based data storage and presents information through captivating charts, Excel formats, and various reporting modes. Optional Zigbee Communication and Sensor Connections have also been explored.", keySkills: ["Embedded C", "Putty Terminal", "Python", "Zigbee", "UART", "SPI", "ADC", "GPIO", "SQL", "Mongo DB", "Node-RED", "HTML", "JAVA Script", "Apache Web Server", "PHP", "MQTT Protocol", "VPN", "CAN Protocol", "I2C Protocol", "Modbus RTU", "Modbus TCP/IP", "Linux Command Line", "DNS Server Configuration", "FTP", "OTA Update", "Reporting Algorithm", "Coral Draw Designing", "Orcad PCB", "Orcad Schematic", "Logic Analyser", "Ethernet IP", "Remote Access Algo,etc."] },
        { title: "LoRa and Zigbee Wireless Gateway Testing Project", description: "Project focused on wireless gateway validation.", details: ["Validated LoRaWAN/Zigbee protocols, focusing on security and performance under stress.", "Conducted RF performance testing and characterized data integrity and latency from devices through the gateway.", "Verified OTA firmware updates and implemented test cases for configuration via web interface.", "Assessed communication stability, error handling, and long-term reliability under continuous load."], keySkills: ["LoRaWAN", "Zigbee", "RF Testing", "OTA Updates", "Performance Analysis", "Security Testing"] },
      ]
    }
  ],
  technicalSkills: [
    { name: "Programming Languages", skills: ["C", "C++", "Embedded C", "Python", "Assembly"] },
    { name: "Microcontrollers", skills: ["ARM Cortex (STM32)", "Atmel", "Arduino", "ESP-32/8266 (Wi-Fi module)", "PIC32", "AVR", "Novuton"] },
    { name: "IDEs & Tools", skills: ["VS Code", "STM32Cube IDE/MX", "MPLABX Microchip", "Arduino IDE", "ICCAVR7", "Keil", "X-CTU", "Cadence OrCAD Capture", "Wireshark", "Node-Red"] },
    { name: "Domain Experience", skills: ["Consumer Electronics", "Industrial Automation", "Wireless Networking"] },
    { name: "Communication Protocols", skills: ["UART", "SPI", "I2C", "RS485", "RS232", "USB", "Ethernet (TCP/IP, UDP)", "MODBUS", "ZigBee", "Wi-Fi", "NFC", "LoRa", "GSM/GPRS", "Bluetooth (BLE)", "HTTP", "UDP", "WebSocket", "MQTT", "AMQP"] },
    { name: "Lab Equipment", skills: ["Logic Analyzer", "CRO", "DSO", "DMM", "LCR Meter"] },
    { name: "Software Tools", skills: ["Tera Term", "PuTTY", "Serial Monitor Analyzer", "Docklight", "Packet Tracer", "Postman", "MQTTBox"] },
    { name: "Operating Systems", skills: ["Windows", "Linux", "FreeRTOS"] },
  ],
  certifications: [
    { name: "Computer Architecture Essentials", issuer: "LinkedIn Learning" },
    { name: "Advanced Linux: The Linux Kernel", issuer: "LinkedIn Learning" },
    { name: "IoT Programming", issuer: "Programming Hub" },
    { name: "Introduction To Industry 4.0 And Industrial Internet Of Things", issuer: "IIT Kharagpur" },
    { name: "Embedded Systems Design", issuer: "IIT Kharagpur" },
    { name: "Advance Python Programming", issuer: "Udemy" },
  ],
   additionalInfo: {
    languages: ["English", "Hindi", "Gujarati"],
    dob: "29/10/1999",
    awardsActivities: [
        { description: "Hosted State Level TechFest in College and Technical Co-ordinator in Various Events of College." },
        { description: "State Level Volleyball Sports RunnerUp in School and College." }
    ],
    hobbies: ["Travelling", "Tech Debates", "Technology Deep Research", "FinTech"],
    areasOfInterest: ["Embedded Products Developments", "Software Development", "Industrial Automation Developments", "Internet Of Things Developments", "Automotive Systems (CAN/AUTOSAR)", "Linux Development", "Aerospace Systems"],
  }
};

const Hero: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const memoizedTypingPhrases = useMemo(() => [
    { text: `Hi, I'm ${data.name}`, highlight: data.name, isName: true },
    { text: `I'm a Software Developer`, highlight: "Software Developer", isName: false },
    { text: `I'm an IoT Developer`, highlight: "IoT Developer", isName: false },
  ], [data.name]);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBeforeDelete = 2000;
  const delayAfterDelete = 300;

  useEffect(() => {
    const currentPhrase = memoizedTypingPhrases[phraseIndex];
    let timeoutId: number;

    if (isDeleting) {
      if (subText === "") { 
        setIsDeleting(false);
        setPhraseIndex(prev => (prev + 1) % memoizedTypingPhrases.length);
      } else { 
        timeoutId = window.setTimeout(() => {
          setSubText(prev => prev.slice(0, -1));
        }, deletingSpeed);
      }
    } else { 
      if (subText === currentPhrase.text) { 
        timeoutId = window.setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeDelete);
      } else { 
        timeoutId = window.setTimeout(() => {
          setSubText(prev => currentPhrase.text.slice(0, prev.length + 1));
        }, subText === "" ? delayAfterDelete : typingSpeed); 
      }
    }
    return () => window.clearTimeout(timeoutId);
  }, [subText, isDeleting, phraseIndex, memoizedTypingPhrases, typingSpeed, deletingSpeed, delayBeforeDelete, delayAfterDelete]);

  const getAnimatedStyledText = () => {
    const currentPhrase = memoizedTypingPhrases[phraseIndex];
    const prefixBoundaryInFullText = currentPhrase.text.indexOf(currentPhrase.highlight);
    
    if (prefixBoundaryInFullText === -1) {
      return <>{subText}</>;
    }

    const highlightEndInFullText = prefixBoundaryInFullText + currentPhrase.highlight.length;
    
    let prefixPart = subText.substring(0, Math.min(subText.length, prefixBoundaryInFullText));
    let highlightPart = "";

    if (subText.length > prefixBoundaryInFullText) {
      highlightPart = subText.substring(prefixBoundaryInFullText, Math.min(subText.length, highlightEndInFullText));
    }
    
    return (
      <>
        {prefixPart}
        {highlightPart && (
          <span className={`text-accent dark:text-dark-accent ${currentPhrase.isName ? '' : 'font-mono'}`}>
            {highlightPart}
          </span>
        )}
      </>
    );
  };
  
  return (
  <section id="hero" className="min-h-screen flex flex-col justify-center bg-background dark:bg-dark-background text-text-primary dark:text-dark-text-primary pt-24 md:pt-0 relative overflow-hidden">
    {/* Optional: Subtle gradient overlay for dark mode */}
    <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-dark-background dark:via-dark-background/90 dark:to-dark-card/50 opacity-75 -z-10"></div>
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight h-28 md:h-36 lg:h-24 text-text-primary dark:text-dark-text-primary">
            {getAnimatedStyledText()}
            <span className="typing-cursor"></span>
          </h1>
          <p className="text-md text-text-secondary dark:text-dark-text-secondary mb-8 max-w-xl mx-auto md:mx-0">{data.contact.location}</p>
          <div className="flex justify-center md:justify-start space-x-5 mb-10">
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300 transform hover:scale-110">
              <LinkedInIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300 transform hover:scale-110">
              <GitHubIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a href={`mailto:${data.contact.email}`} className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300 transform hover:scale-110">
              <EmailIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a href={`tel:${data.contact.phone}`} className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300 transform hover:scale-110">
              <PhoneIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
          </div>
          <a
            href="#contact"
            className="inline-block bg-accent dark:bg-dark-accent text-accent-content dark:text-dark-accent-content font-semibold py-3.5 px-10 rounded-lg shadow-lg hover:bg-accent-hover dark:hover:bg-dark-accent-hover dark:shadow-futuristic-hover-dark transition-all duration-300 text-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/50 dark:focus:ring-dark-accent/40"
          >
            Get In Touch
          </a>
        </div>
        <div className="animate-fade-in-up md:justify-self-end relative" style={{ animationDelay: '0.2s' }}>
          <img 
            src={data.profilePicUrl === "none" ? `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name.split(' ')[0][0] + (data.name.split(' ')[1]? data.name.split(' ')[1][0] : ''))}&background=C026D3&color=FFFFFF&size=384&font-size=0.33&bold=true` : data.profilePicUrl} 
            alt={data.name} 
            className="rounded-xl shadow-futuristic-light dark:shadow-futuristic-dark mx-auto object-cover w-64 h-80 md:w-80 md:h-96 border-2 border-card dark:border-dark-accent/30 transform transition-all duration-500 hover:scale-105 dark:hover:shadow-futuristic-hover-dark"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 dark:bg-dark-accent/15 rounded-full blur-2xl -z-10 animate-subtle-pulse"></div>
        </div>
      </div>
    </div>
  </section>
)};

const About: React.FC<{ summary: string }> = ({ summary }) => (
  <Section id="about" title="About Me">
    <p className="text-lg md:text-xl text-text-secondary dark:text-dark-text-secondary leading-relaxed max-w-3xl mx-auto text-center">
      {summary}
    </p>
  </Section>
);


const EducationCard: React.FC<{ entry: EducationEntry }> = ({ entry }) => (
 <div className="bg-card dark:bg-dark-card p-6 rounded-xl shadow-futuristic-light dark:shadow-futuristic-dark border border-border-color dark:border-dark-border-color/70 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-futuristic-hover-light dark:hover:shadow-futuristic-hover-dark dark:hover:border-dark-accent/50">
    <h3 className="text-xl font-heading font-semibold text-accent dark:text-dark-accent">{entry.degree}</h3>
    {entry.specialization && <p className="text-md text-text-primary dark:text-dark-text-primary">{entry.specialization}</p>}
    <p className="text-md text-text-secondary dark:text-dark-text-secondary">{entry.institution}</p>
    <p className="text-sm text-text-secondary dark:text-dark-text-secondary">{entry.dates} | {entry.location}</p>
    {entry.cgpa && <p className="text-sm text-accent dark:text-dark-accent mt-1">CGPA: {entry.cgpa}</p>}
  </div>
);

const SkillPill: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="font-mono bg-accent dark:bg-dark-accent text-accent-content dark:text-dark-accent-content hover:bg-accent/20 dark:hover:bg-dark-accent/25 hover:text-accent dark:hover:text-dark-accent text-xs font-medium px-3 py-1.5 rounded-md border border-transparent shadow-sm transition-all duration-200 hover:shadow-md transform hover:scale-105 cursor-default">
    {skill}
  </span>
);

const CertificationCard: React.FC<{ cert: Certification }> = ({ cert }) => (
  <div className="bg-card dark:bg-dark-card p-4 rounded-lg shadow-futuristic-light dark:shadow-futuristic-dark border border-border-color dark:border-dark-border-color/70 flex items-center space-x-3 transition-all duration-300 hover:shadow-futuristic-hover-light dark:hover:shadow-futuristic-hover-dark hover:scale-[1.03] dark:hover:border-dark-accent/50">
    <ExternalLinkIcon className="w-5 h-5 text-accent dark:text-dark-accent flex-shrink-0"/>
    <div>
      <h4 className="font-semibold text-text-primary dark:text-dark-text-primary">{cert.name}</h4>
      <p className="text-sm text-text-secondary dark:text-dark-text-secondary">{cert.issuer}</p>
    </div>
  </div>
);

const AdditionalInfoCard: React.FC<{title: string, children: React.ReactNode, className?: string}> = ({title, children, className=""}) => (
  <div className={`bg-card dark:bg-dark-card p-6 rounded-xl shadow-futuristic-light dark:shadow-futuristic-dark border border-border-color dark:border-dark-border-color/70 ${className} dark:hover:border-dark-accent/50 transition-colors`}>
    <h3 className="text-xl font-heading text-accent dark:text-dark-accent mb-3 tracking-wide">{title}</h3>
    {children}
  </div>
);

const AdditionalInfoSection: React.FC<{ info: AdditionalInfoType }> = ({ info }) => (
  <Section id="additional" title="More About Me">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-text-secondary dark:text-dark-text-secondary">
      <AdditionalInfoCard title="Languages">
        <ul className="list-disc list-inside space-y-1 text-text-primary dark:text-white">
          {info.languages.map(lang => <li key={lang} className="hover:text-accent dark:hover:text-dark-accent transition-colors duration-150 cursor-default">{lang}</li>)}
        </ul>
      </AdditionalInfoCard>
       <AdditionalInfoCard title="Date of Birth">
        <p className="text-text-primary dark:text-dark-text-primary">{info.dob}</p>
      </AdditionalInfoCard>
      <AdditionalInfoCard title="Awards & Activities">
        <ul className="list-disc list-inside space-y-1 text-text-primary dark:text-white">
          {info.awardsActivities.map((act, i) => <li key={i} className="hover:text-accent dark:hover:text-dark-accent transition-colors duration-150 cursor-default">{act.description}</li>)}
        </ul>
      </AdditionalInfoCard>
      <AdditionalInfoCard title="Hobbies">
         <div className="flex flex-wrap gap-2">
            {info.hobbies.map(hobby => (
                 <span 
                   key={hobby} 
                   className="font-mono bg-accent dark:bg-dark-accent text-accent-content dark:text-dark-accent-content hover:bg-accent/20 dark:hover:bg-dark-accent/25 hover:text-accent dark:hover:text-dark-accent text-sm font-medium px-3 py-1.5 rounded-full shadow-sm border border-transparent transition-all duration-200 cursor-default"
                 >
                   {hobby}
                 </span>
            ))}
        </div>
      </AdditionalInfoCard>
      <div className="md:col-span-2 lg:col-span-1">
        <AdditionalInfoCard title="Areas of Interest">
          <ul className="list-disc list-inside space-y-1 text-text-primary dark:text-white">
              {info.areasOfInterest.map(interest => <li key={interest} className="hover:text-accent dark:hover:text-dark-accent transition-colors duration-150 cursor-default">{interest}</li>)}
          </ul>
        </AdditionalInfoCard>
      </div>
    </div>
  </Section>
);


const Contact: React.FC<{ data: PortfolioData['contact'] }> = ({ data }) => (
  <Section id="contact" title="Get In Touch" className="bg-background dark:bg-dark-background">
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-lg text-text-secondary dark:text-dark-text-secondary mb-10">
        I'm actively seeking new opportunities and collaborations.
        Let's connect and build something amazing together!
      </p>
      <a 
        href={`mailto:${data.email}`}
        className="inline-block bg-accent dark:bg-dark-accent text-accent-content dark:text-dark-accent-content font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-accent-hover dark:hover:bg-dark-accent-hover dark:shadow-futuristic-hover-dark transition-all duration-300 transform hover:scale-105 text-xl mb-12 focus:outline-none focus:ring-4 focus:ring-accent/50 dark:focus:ring-dark-accent/40"
      >
        Say Hello
      </a>
      <div className="flex justify-center space-x-8">
        <a href={data.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors transform hover:scale-110">
          <LinkedInIcon className="w-10 h-10" />
        </a>
        <a href={data.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors transform hover:scale-110">
          <GitHubIcon className="w-10 h-10" />
        </a>
        <a href={`tel:${data.phone}`} aria-label="Phone" className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors transform hover:scale-110">
          <PhoneIcon className="w-10 h-10" />
        </a>
      </div>
    </div>
  </Section>
);

const Footer: React.FC<{ name: string }> = ({ name }) => (
  <footer className="bg-card dark:bg-dark-card/50 py-8 text-center border-t border-border-color dark:border-dark-border-color/30">
    <p className="text-text-secondary dark:text-dark-text-secondary text-sm">
      &copy; {new Date().getFullYear()} {name}. All rights reserved.
    </p>
    <p className="text-xs font-mono text-text-secondary/70 dark:text-dark-text-secondary/60 mt-1 tracking-wider">
      Crafted with <span className="text-accent dark:text-dark-accent animate-subtle-pulse inline-block">&hearts;</span> and Tailwind CSS.
    </p>
  </footer>
);


const App: React.FC = () => {
  // Use fuchsia (C026D3) for the avatar placeholder
  const actualProfilePicUrl = portfolioData.profilePicUrl === "none" 
    ? `https://ui-avatars.com/api/?name=${encodeURIComponent(portfolioData.name.split(' ')[0][0] + (portfolioData.name.split(' ')[1]? portfolioData.name.split(' ')[1][0] : ''))}&background=C026D3&color=FFFFFF&size=128&font-size=0.33&bold=true`
    : portfolioData.profilePicUrl;

  return (
    <>
      <Navbar profilePicUrl={actualProfilePicUrl} />
      <main className="bg-background dark:bg-dark-background text-text-primary dark:text-dark-text-primary">
        <Hero data={{...portfolioData, profilePicUrl: actualProfilePicUrl}} />
        <About summary={portfolioData.summary} />
        
        <Section id="experience" title="Experience">
          {portfolioData.experience.map((entry, idx) => (
            <ExperienceCard key={idx} entry={entry} />
          ))}
        </Section>

        <Section id="skills" title="Technical Skills" className="bg-card-alt dark:bg-dark-card-alt">
          <div className="space-y-8">
            {portfolioData.technicalSkills.map((category) => (
              <div key={category.name} className="bg-card dark:bg-dark-card p-6 rounded-xl shadow-futuristic-light dark:shadow-futuristic-dark border border-border-color dark:border-dark-border-color/70 border-l-4 border-accent dark:border-dark-accent transition-colors dark:hover:border-dark-accent/70">
                <h3 className="text-xl font-mono font-semibold text-text-primary dark:text-dark-text-primary mb-4 tracking-wider">{category.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(skill => <SkillPill key={skill} skill={skill} />)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.education.map((entry, idx) => (
              <EducationCard key={idx} entry={entry} />
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications & Learning" className="bg-card-alt dark:bg-dark-card-alt">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.certifications.map((cert, idx) => (
              <CertificationCard key={idx} cert={cert} />
            ))}
          </div>
        </Section>
        
        <AdditionalInfoSection info={portfolioData.additionalInfo} />
        <Contact data={portfolioData.contact} />
      </main>
      <Footer name={portfolioData.name} />
    </>
  );
};

export default App;

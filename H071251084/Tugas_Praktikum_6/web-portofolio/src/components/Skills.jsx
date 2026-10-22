function Skills() {
  const skills = [
    'SQL / Database',
    'Python',
    'HTML & CSS',
    'JavaScript',
    'Java',
    'JavaFX',
    'React.js',
    'Tailwind CSS',
    'PostgreSQL',
    'Git',
    'GitHub',
    'VS Code',
    'Figma',
    'Conda',
  ];

  const skillIcons = {
    'SQL / Database': 'fas fa-database',
    'Python': 'fab fa-python',
    'HTML & CSS': 'fab fa-html5',
    'JavaScript': 'fab fa-js',
    'Java': 'fab fa-java',
    'JavaFX': 'fas fa-desktop',
    'React.js': 'fab fa-react',
    'Tailwind CSS': 'fas fa-wind',
    'PostgreSQL': 'fas fa-server',
    'Git': 'fab fa-git-alt',
    'GitHub': 'fab fa-github',
    'VS Code': 'fas fa-code',
    'Figma': 'fab fa-figma',
    'Conda': 'fas fa-terminal',
  };

  return (
    <section id="skills" className="py-36 sm:py-48 min-h-[75vh] flex flex-col justify-center bg-[#eef3ff] border-b border-[#dbeafe]">
      <div className="max-w-[1100px] w-full mx-auto px-5">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1c35] mb-3 tracking-tight">
            Keahlian &amp; <span className="accent">Tools</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4b6280]">
            Teknologi, bahasa, dan tools yang saya gunakan
          </p>
        </div>

        {/* (Render via .map() & key={index}) */}
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-3.5 sm:gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-[#dbeafe] text-sm sm:text-[15px] font-semibold text-[#0f1c35] shadow-[0_2px_10px_rgba(37,99,235,0.06)] hover:border-[#2563eb] hover:text-[#2563eb] hover:-translate-y-1 hover:shadow-[0_6px_18px_rgba(37,99,235,0.14)] transition-all duration-200"
            >
              <i className={`${skillIcons[skill] || 'fas fa-check'} text-[#2563eb] text-base`}></i>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

'use client'

const EonExperience = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Student Assistant – Full Stack Developer</h1>
      <h2 className="text-xl text-gray-700 mb-6">E.ON Energy Research Center, Aachen</h2>

      <p className="text-gray-700 mb-4">
        Worked on the development and enhancement of <strong>ENTIRETY Version 2</strong>, a web-based research platform.
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
        <li>Extended and improved backend services using Python and Flask</li>
        <li>Developed and maintained frontend components using Jinja and JavaScript</li>
        <li>Reduced deployment time by implementing shell scripts and adjusting configuration files</li>
        <li>Integrated new features and refactored existing modules to improve system performance and maintainability</li>
        <li>Actively contributed to project meetings, providing technical suggestions and feedback</li>
      </ul>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">🚀 Most Proud Feature</h3>
        <p className="text-gray-700">
          Implemented automatic data model generation from ontology-based RDF files, allowing RDF inputs to dynamically generate data models for the platform.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">🛠️ Tech Stack</h3>
        <p className="text-gray-700">
          Python, Flask, JavaScript, Jinja, Shell Scripting, Docker, MongoDB, PostgreSQL, JSON, Linux
        </p>
      </div>
    </div>
  );
};

export default EonExperience;

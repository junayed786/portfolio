'use client'

const RwthExperience = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">
        Python and Web Developer | Part-time
      </h1>
      <h2 className="text-xl text-gray-700 mb-1">
        RWTH Aachen University
      </h2>
      <p className="text-sm text-gray-500 mb-6">Jun 2020 – Mar 2022</p>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Chair of Finance Project</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Conducted comprehensive data processing and analysis, uncovering key insights and trends that informed strategic decision-making using Python and R.
          </li>
          <li>
            Developed advanced predictive models using NLP, text mining, and machine learning algorithms, leading to an improvement in predictive accuracy.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">AICES Project</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Developed the initial GUI of a web app for Ice Data Hub using Python and Dash, significantly improving user experience and facilitating data visualization.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">IME Project</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Pre-processed lab data and created insightful visualizations using Python, reducing manual work and increasing data analysis efficiency and accuracy.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">🛠️ Overall Tech Stack</h3>
        <p className="text-gray-700">
          Python, scikit-learn, NumPy, TensorFlow, pandas, Matplotlib, Jupyter Notebook, Dash, CSS, HTML, YAML, Git
        </p>
      </div>
    </div>
  );
};

export default RwthExperience;

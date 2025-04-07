'use client'

const DataVisualizationProject = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">📊 Data Visualization and Analytics</h1>

      {/* <div>
        <h3 className="text-lg font-semibold">Tools & Language:</h3>
        <p className="text-gray-700">R, ggplot2, dplyr, caret, RMarkdown</p>
      </div> */}

      <div>
        <h3 className="text-lg font-semibold">Project Summary:</h3>
        <p className="text-gray-700">
          In this comprehensive project, I explored the entire data science pipeline—from raw data to actionable insights—using R as the primary tool.
          The project was designed to build a strong foundation in data handling, visualization, and predictive modeling, gradually moving into more complex,
          real-world datasets and analytical challenges.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">🔹 Data Acquisition & Processing</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Imported and cleaned data from CSV</li>
          <li>Handled missing values, outliers, and inconsistent data formats</li>
          <li>Applied data transformation techniques such as normalization, encoding, and scaling</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">🔹 Exploratory Data Analysis (EDA)</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {/* <li>Performed univariate and multivariate analysis</li> */}
          <li>Used summary statistics and visual tools (e.g., boxplots, histograms, scatter plots)</li>
          <li>Identified meaningful correlations and trends between features</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">🔹 Data Visualization</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Developed dynamic and static visualizations using ggplot2 and plotly</li>
          <li>Created dashboards and storytelling visuals with RMarkdown and Shiny</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">🔹 Predictive Modeling</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Applied regression models (Linear, Ridge, Lasso)</li>
          <li>Built classification models (Logistic Regression, Decision Trees, KNN)</li>
          <li>Evaluated models with accuracy, precision, recall, F1 score, ROC-AUC</li>
        </ul>
      </div>
{/* 
      <div>
        <h3 className="text-lg font-semibold">🔹 Statistical Analysis & Hypothesis Testing</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Formulated and tested hypotheses to answer business questions</li>
          <li>Used confidence intervals and significance testing to validate insights</li>
        </ul>
      </div> */}

      <div>
        <h3 className="text-lg font-semibold">🔹 Capstone Challenge with Real-World Data</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Worked on open datasets in public health, e-commerce, and finance</li>
          <li>Answered domain-specific questions through structured analysis</li>
          <li>Delivered findings via visual reports and presentations</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">✅ Outcome</h3>
        <p className="text-gray-700">
          This project solidified my understanding of data analytics workflows and enhanced my practical skills in turning raw data into valuable insights.
          It taught me how to ask the right questions, clean and interpret data meaningfully, and present outcomes clearly for both technical and non-technical audiences.
        </p>
      </div>
    </div>
  )
}

export default DataVisualizationProject

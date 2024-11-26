export default function Experience() {
  const experience = [
    {
      title: "Digital Marketing Coordinator",
      company: "TechStart Marketing Agency",
      period: "2020 - Present",
      responsibilities: [
        "Develop and implement comprehensive digital marketing strategies for clients across various industries",
        "Manage social media accounts, creating engaging content and increasing follower engagement by 50%",
        "Conduct SEO audits and implement optimization strategies, resulting in a 30% increase in organic traffic",
        "Analyze campaign performance using Google Analytics and create detailed reports for clients"
      ]
    },
    {
      title: "Marketing Intern",
      company: "InnovateCorp",
      period: "Summer 2019",
      responsibilities: [
        "Assisted in the creation of content for various digital platforms",
        "Conducted market research and competitor analysis",
        "Helped manage email marketing campaigns, achieving a 25% open rate"
      ]
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-4">{job.company} | {job.period}</p>
              <ul className="list-disc pl-5 space-y-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


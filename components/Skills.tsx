export default function Skills() {
  const skills = [
    { name: "Content Creation", level: 90 },
    { name: "SEO", level: 85 },
    { name: "Social Media Management", level: 95 },
    { name: "Google Analytics", level: 80 },
    { name: "Email Marketing", level: 85 },
    { name: "PPC Advertising", level: 75 }
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


const references = [
  "Alby, T. (2023). Ethical Handling of Data and Algorithms. Data science in practice. Chapman and Hall/CRC.",
  "Berman, F., Rutenbar, R., Hailpern, B., Christensen, H., Davidson, S., Estrin, D., Franklin, M., Martonosi, M., Raghavan, P., Stodden, V., & Szalay, A. (2018). Realizing the potential of data science. Communications of the ACM, 61(4), 67–72. https://doi.org/10.1145/3188721",
  "Cloudera. (n.d.). Data lifecycle explained [Video]. Cloudera Videos. https://video.cloudera.com/detail/video/6294749411001/data-lifecycle-explained",
  "European Parliament, & Council of the European Union. (2016). Regulation (EU) 2016/679 (General Data Protection Regulation). https://gdpr-info.eu/art-17-gdpr/",
  "Freepik. (n.d.). Cyberpunk justice scales [AI-generated image]. Freepik. https://www.freepik.com/free-ai-image/cyberpunk-justice-scales_422337921.htm",
  "Freepik. (2016, April 12). Ipad with a diagram [Photograph]. Freepik. https://www.freepik.com/free-photo/ipad-with-diagram_851719.htm",
  "Freepik. (2021, January 14). Cyber attack. law enforcement. criminal stealing money online [Vector]. Freepik. https://www.freepik.com/free-vector/cyber-attack-law-enforcement-criminal-stealing-money-online_12085308.htm",
  "Gutman, A. J., & Goldmeier, J. (2021). Becoming a Data Head: How to Think, Speak, and Understand Data Science, Statistics, and Machine Learning. Wiley.",
  "Johnston, L. R. (2017). Curating research data: Practical strategies for your digital repository. Association of College and Research Libraries.",
  "Koltay, T. (2022). Data quality, the essential “ingredient” (Chapter 3). In Research Data Management and Data Literacies (pp. 49–75). Elsevier. https://doi.org/10.1016/B978-0-12-824475-3.00004-7",
  "Library of Congress. (n.d.). Digital preservation: File format migration. https://www.loc.gov/preservation/digital/formats/migration.shtml",
  "Mayan, M. J. (2009). Data analysis. In Essentials of qualitative inquiry. Left Coast Press.",
  "Ranger, H. (2020, November 12). How to publish your research data. Research Office. https://blog.westminster.ac.uk/researchoffice/how-to-publish-your-research-data/",
  "Rosnow, R. L., & Rosenthal, R. (2011). Ethical principles in data analysis: An overview. In A. T. Panter (Ed.), Handbook of ethics in quantitative methodology. Routledge.",
  "Schoentgen, A., & Wilkinson, L. (2021). Ethical issues in digital technologies. 23rd Biennial Conference of the International Telecommunications Society (ITS).",
  "SlideEgg. (n.d.). Free - Creative Data Cleansing Process PowerPoint And Google Slides [Presentation slides]. SlideEgg. https://www.slideegg.com/data-cleansing-process",
  "starline. (n.d.). Digital global connection network technology background [Vector]. Freepik. https://www.freepik.com/free-vector/digital-global-connection-network-technology-background_6864937.htm",
  "Van den Broeck, J., Argeseanu Cunningham, S., Eeckels, R., & Herbst, K. (2005). Data cleaning: Detecting, diagnosing, and editing data abnormalities. PLoS Medicine, 2(10), e267. https://doi.org/10.1371/journal.pmed.0020267",
  "Warsy, A. S., & Warsy, I. A. (2019). Publish ethically or perish. Journal of Nature and Science of Medicine, 2(4), 186–195. https://doi.org/10.4103/JNSM.JNSM_17_19",
];

export default function Conclusion() {
  return (
    <section
      id="conclusion"
      className="relative w-full bg-slate-950 scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5 pointer-events-none" />

            <div className="relative z-10 p-5 sm:p-7 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-blue-400 to-cyan-300" />
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Conclusion
              </h2>

              <p className="mt-6 max-w-4xl text-sm sm:text-base lg:text-lg text-slate-300 leading-7 sm:leading-8">
                Across these six weeks, I explored how ethics is connected to
                the work with data, and how the data goes through its lifecycle.
                I began with general questions about the data definition, then
                discovered the main stages of working with data: acquisition,
                cleaning, use, publication, preservation, and destruction. Each
                module showed that work with data includes real ethical choices
                that can affect people, privacy, trust, and fairness. I believe
                that data processing should be ethically sound. For example, it
                should not violate the rights of the people surveyed, and it
                should not be altered in a way that would falsify the results.
              </p>
              <div className="mt-10 rounded-2xl border border-white/10 bg-slate-950/50 p-4 sm:p-5 lg:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Reference list
                </h3>

                <div className="mt-5 space-y-4 text-sm sm:text-base text-slate-300 leading-7">
                  {references.map((reference, index) => (
                    <p key={index} className="break-words">
                      {reference}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

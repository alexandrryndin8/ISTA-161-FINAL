import { useState } from "react";
import { X } from "lucide-react";

type WeekItem = {
  id: string;
  weekNumber: number;
  title: string;
  description: string;
  originalPost: string;
};

const weeksData: WeekItem[] = [
  {
    id: "week1",
    weekNumber: 1,
    title: "Introduction to Course, Ethics, & the Digital World",
    description:
      "In this week, I reflected on the connection between ethics and modern technology. I used the example of blockchain to show that digital tools can create both useful opportunities and serious ethical problems, especially when there is little control over how they are used. This introduction prepared me to the next topic, where I examined how data is collected and managed. Morever, I introduced myself to the class using photo and short description.",
    originalPost: `This visual is a meme that reflects the ethical issues surrounding blockchain technology. According to Schoentgen & Wilkinson (2021), blockchain technology leads to greater transparency in international trade of goods and supply chain management, but it also enables blockchain-based cryptocurrencies that facilitate illegal transactions. In other words, this technology has two ethical aspects, one negative and one positive.
This visual, from a week's work, illustrates the connection between ethics and modern technology. The introduction of blockchain into currency exchange, in my opinion, highlights the most glaring ethical issue, which manifests itself in the lack of oversight of cryptocurrency transactions. This leads to the development of a black market and is a huge downside to new technologies. That said, blockchain technology does have many advantages and can be convenient for transactions. However, this area truly needs some ethical regulation. In my opinion, the best solution would be government regulation, as it has the greatest influence on society.
I believe this is important, as so many people around the world already use this technology, and ethical issues surrounding it are truly relevant.
2) My introduction 
Hi everyone, my name is Alexander and I'm from Kazakhstan. I'm studying information technology, and my major is Management Information Systems.
My main possession is walking. I really love walking, especially in unfamiliar places, and I often travel between cities for this purpose. I can easily walk all day and get nothing but pleasure from it. This is really important for me because it helps me take a break from sedentary work and routine life.`,
  },
  {
    id: "week2",
    weekNumber: 2,
    title: "Data Life Cycle & Acquisition",
    description:
      "In this week, I explained what data is, how it differs from information, and how it moves through the data life cycle. After looking at how data is acquired, I moved to the cleaning and improving data quality.",
    originalPost: `1) Gutman & Goldmeier note that the concepts of data and information are often confused, but it would be more accurate to say that information is derived knowledge, while data is encoded information. I often worked with data in my studies and personal projects. There were many similar examples, as working with data in my specialty is common. I will describe a case in which I worked with data about schools in my hometown. I had a simple dataset that described the type of school and its name in a string data type. I integrated this dataset into the table on the website and created a fully functional interaction with the database using the website.
2) Berman et al. define data science as a field of study that explores processes and systems that help extract knowledge from various types of data. This field of study combines statistics, data analysis, machine learning, and computation and data management. I believe this is important because the amount of information available today has become overwhelming, and control over such data flows can enable people to make predictions and extract maximum benefit from this unique feature of our age.
3) The data life cycle is the process of data life from creation to destruction or storage.
Steps: Acquire, Clean, Use, Publish, Preserve/Destroy.
I believe this life cycle accurately describes all the steps and doesn't miss anything.
4) I believe that managing data in its lifecycle is ethically important, as much of our lives now revolve around information, and data leaks or corruption can cause significant harm. Monitoring and protecting data within the lifecycle ensures that details are not missed and that data is accurately tracked at each stage.
5) Quantitative data is data that can be expressed as numbers, such as ratings, rankings, quantities, and so on. According to the National Library of Medicine, qualitative data is typically semantic data that is not represented by numbers and is often gathered from interviews and focus groups. In the qualitative life cycle, this type of data goes through the same steps: collected, cleaned, coded into categories, analyzed, and then stored correctly, taking privacy into account. I had experience analyzing qualitative data during a previous data analysis course. I wrote code that, using a third-party library, analyzed text statements from a dataset for polarity and determined which ones were negative and which were positive.
6) I usually use this website for my data analysis projects: https://www.kaggle.com/
7) How significant is the role of error in data analysis? Especially when working with Big Data, due to the enormous volumes of data, calculations can often be inaccurate, and this prediction method cannot be considered accurate. Will it be possible to minimize this error in the future?
`,
  },
  {
    id: "week3",
    weekNumber: 3,
    title: "Data Cleaning",
    description:
      "In this week, I described how data cleaning helps find errors, fix problems, and make analysis more reliable. After focusing on data quality, I asked a question about how data should be used and reused responsibly.",
    originalPost: `1) Data cleaning is the process by which data analysts identify, verify, and correct incorrect values​ in a data set to avoid distorting conclusions. According to Van den Broeck et al., data cleaning is the "Process of detecting, diagnosing, and editing faulty data."
2) During the screening stage, data analysts look for oddities in the data. For example, these could include missing or excess data, outliers and inconsistencies, strange patterns in distributions, or unexpected analysis results. At the diagnostic stage, the main goal is to understand what exactly is happening. Is the strange data caused by a genuine error, or is it actually a real value? Only truly problematic data caused by the error remains in the treatment phase. At this stage, a decision is made on what to do with the problematic data, which typically has three options: fix, delete, or leave as is.
3) Errors arise because data goes through many steps, including recording, entering, transferring between systems, transforming, selecting, and summarizing. At any of these stages, even during the cleaning stage, an error can occur. Most errors are caused by human error. People are imperfect and can always make mistakes, even if they are highly skilled professionals. The medical community especially needs clean data for its research because incorrect data can lead to erroneous conclusions, and in the case of medical research, this can harm the lives of many real people.
4) Koltay emphasizes that data quality is tied to its fitness for use and its contextual clarity. Even the smallest studies must maintain quality for their conclusions to be reliable. As I mentioned earlier, errors can occur at every stage of data processing, and this applies to small datasets as well, as they often undergo the same processing steps.
5) Koltay explains that data quality can have many attributes; for example, researchers have identified dozens and even hundreds of possible quality attributes. Data in research must be of high quality. This is an ethical issue, because if the data is inaccurate, incomplete, or unclear, decisions based on it can harm people. For example, incorrect medical conclusions or unfair decisions can result. In Big Data, truthfulness is especially important. Koltay writes that in Big Data, this is related to data consistency and reliability, and without understanding the context of what the data means, the quality of decisions can be low. 
6) Which stage of the data lifecycle do you think most often compromises data quality? We know that errors can occur at any stage, but at which stage of data interaction do you think there's the greatest risk of erroneous data?`,
  },
  {
    id: "week4",
    weekNumber: 4,
    title: "Data Use & Reuse",
    description:
      "In this week, I discussed how data should be used in ethical and legal ways. It was discussion about attention to privacy, transparency, and research standards. This work connected directly to the next topic, where I examined how data and research should be published honestly.",
    originalPost: `1) The GDPR is the European Data Protection Regulation. It's important because it gives people a clear understanding of how their data is handled. According to Alby (2023), it forces organizations to collect data more responsibly and not turn people into mere objects for analytics. The most important aspect for me is data minimization, as I wouldn't want apps collecting data from me that might not be needed. According to the head of Alby (2023), uniform rules help make working with data more secure. Therefore, I believe the introduction of national data legislation will be a useful experience.
2) Legal protections and ethics are similar in that both describe how a person should act and are based on moral principles. However, law is formal rules with penalties and the institutions that enforce them. Ethics, in my opinion, is a broader concept, often encompassing what the law does not encompass. Therefore, I can say that people rely on ethics when drafting laws.
3) Rosnow & Rosenthal explain that research involving human subjects requires special protection. Standards like the APA help maintain ethical standards by citing the sources of ideas and research. They allow for easy tracking of the origins of data and the conclusions drawn from it. In corporations, the goal of data collection is profit or product optimization, and data may be collected continuously by default. In academic settings, research typically has stronger oversight through IRBs and publication standards, and the goals are analysis and pattern identification. For example, a local example from the University of Arizona demonstrates this difference and greater respect for data ethics.
4) Rosnow & Rosenthal identify five standards: correct use of statistical procedures, accuracy and fairness of calculations and presentation of results, transparency of analytical methods and solutions, verification of assumptions and limitations, and interpretation without forcing a desired result. Transparency seems to me to be the most important standard, as it allows one to understand the mechanism by which the results are obtained. Thanks to this standard, the results can be considered fair.
5) An inductive approach means that the researcher first looks closely at the actual data, for example, reading interviews or observations, noticing recurring themes, and only then formulating a general conclusion. A deductive approach works the other way around: first, a theory or hypothesis is developed, and then the data is used to verify whether it is supported.
An abductive approach is a search for the best explanation. In other words, during the analysis, we try to understand which explanation is the most logical.
6) Quantitative and qualitative research differ in that they work with different data. Quantitative data is associated with numbers and measurements, while qualitative data is associated with meaning, experience, context, and interpretation. Data protection is especially important in qualitative research, as interview responses may contain details that can easily identify individuals.
7) Which standard of analysis is more important in your opinion: transparency of methods or honest interpretation? Can a result be considered fair if the principle of transparency reveals that another principle was violated?`,
  },
  {
    id: "week5",
    weekNumber: 5,
    title: "Publish Data",
    description:
      "In this week, I focused on ethical issues in publishing, such as plagiarism, falsification, consent, and proper citation. After thinking about responsible publication, I moved to the final topic of preserving or destroying data.",
    originalPost: `1) In Table 1, Warsy & Warsy highlight fabrication and falsification as one of the unethical practices, and I think it's the most concerning one. Fabrication means creating data that never existed, and falsification means changing or removing data to force a desired result. I believe such changes in research are unacceptable and can have serious consequences. For example, such practices are absolutely unacceptable in medical research, as they can have consequences that harm people's lives.
2) In Table 2, Warsy & Warsy highlight informed consent and voluntary participation as ethical practices involved in working with humans. I consider this practice to be particularly important, as forced participation in surveys can distort results, as people may express distorted opinions due to pressure exerted on them. It is also clearly ethically unacceptable and prohibited by law. People should not be used as data sources without understanding the nature of the study, the data that will be collected, and the risks involved.
3) In Table 3, Warsy & Warsy note giving credit and avoiding copy-paste plagiarism as one of the ethical practices involved in writing scientific research. I consider this the most important ethical practice because using someone else's ideas without acknowledging the source is unfair to the original author and misleads readers. The table clearly states not to use others' ideas, work, or data without credit, and not to copy-paste from published sources unless properly quoted and referenced. Work done by copying someone else's ideas has no scientific value and is a waste of time. However, when refining or analyzing someone else's ideas, it is important to cite the source, as science is a shared system where readers need to know where the ideas came from.
4) One type of plagiarism that Warsy & Warsy describe is mosaic plagiarism. This refers to the process by which an author uses another author's ideas in their work, replacing words with synonyms and changing a few phrases. This practice is acceptable if the original author is credited. However, when such an idea is presented as one's own without attributing the author, it constitutes plagiarism. An example would be a student who, while reading a scientific article, rewrites its ideas in their work, replacing words with synonyms, for example, pressure becomes stress, or unethical becomes wrong. If the student fails to cite the article, it is mosaic plagiarism, even though the text appears different.
5) What do you think is more ethically important: preventing plagiarism or protecting people's rights in research surveys?`,
  },
  {
    id: "week6",
    weekNumber: 6,
    title: "Data Preserve & Destroy",
    description:
      "In this week, I explored how data can be preserved, reused, or destroyed, and why the right to be forgotten is also important. This final topic brought together the full data journey that I had studied across all previous modules.",
    originalPost: `1) According to Johnston's Step 7, preservation is the process of actively maintaining digital data. This allows data to be preserved and accessible over time. In section 7.1, "Preservation Planning for Long-Term Reuse," Johnston emphasizes that long-term reuse requires careful planning. The core of this planning lies in creating policies and frameworks that define how different file types will be supported over time.
2) One preservation strategy Johnston discusses is format migration. This strategy focuses on changing file formats to ensure information remains accessible. This is because formats tend to become obsolete, and many file formats that were relevant 20 years ago may no longer be viewable on modern devices. This strategy helps ensure files are viewable on modern devices. According to the Library of Congress, format migration is used to preserve data to ensure continued access as technology evolves. For example, older text file formats are converted to more durable archival files, such as PDF/A. However, migration must be carefully documented, as not all format precisions may be perfectly transformed, which can cause problems.
3) In Step 8, Johnston explains that reuse is the ultimate goal of data curation. Monitoring data reuse through citations, downloads, and other activities is essential to understanding the impact and value of datasets. It also allows for data feedback.
4) Johnston explains that repositories must plan for the possibility of ending curation or removing datasets. This can happen for several reasons. For example, the data may be useless, or it may need to be removed due to retention policies or legal circumstances.
5) One modern method of data destruction is cryptographic erasure. This method removes the encryption keys responsible for data protection. Without the key, the encrypted data becomes unreadable and unrecoverable. I chose this method because I've worked with encryption keys in a couple of my projects and have a general understanding of how it works.
6) The "right to be forgotten," established under Article 17 of the GDPR, gives individuals the right to request erasure of personal data under certain conditions. This concept is truly important when discussing preservation because it helps protect people's rights, rather than simply preserving all existing data for future storage.
7) How important is it to apply long-term preservation techniques to all data? Or should we focus only on the most important data? If so, what criteria should determine whether a dataset deserves long-term preservation?`,
  },
];

export default function Weeks() {
  const [selectedWeek, setSelectedWeek] = useState<WeekItem | null>(null);

  return (
    <>
      <section className="relative w-full bg-slate-950">
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              {weeksData.map((week) => (
                <article
                  key={week.id}
                  id={week.id}
                  className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5 pointer-events-none" />

                  <div className="relative z-10 p-5 sm:p-7 lg:p-10">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">
                      <div className="w-full max-w-3xl">
                        <div className="flex items-center gap-3">
                          <span className="h-px w-10 bg-gradient-to-r from-blue-400 to-cyan-300" />
                          <h3 className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-blue-200">
                            Week {week.weekNumber}
                          </h3>
                        </div>

                        <h4 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                          {week.title}
                        </h4>

                        <p className="mt-5 max-w-2xl text-sm sm:text-base lg:text-lg text-slate-300 leading-7 sm:leading-8">
                          {week.description}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <button
                          type="button"
                          onClick={() => setSelectedWeek(week)}
                          className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
                        >
                          Open original post
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedWeek && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedWeek(null)}
          />

          <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-cyan-300" />
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                    Week {selectedWeek.weekNumber}
                  </p>
                </div>

                <h3 className="mt-3 text-xl sm:text-2xl font-bold text-white">
                  {selectedWeek.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedWeek(null)}
                className="shrink-0 rounded-xl border border-white/10 bg-slate-800/80 p-2 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[calc(90vh-100px)] overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
              <p className="whitespace-pre-line text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-slate-300">
                {selectedWeek.originalPost}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

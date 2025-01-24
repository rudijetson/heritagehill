import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "tween",
        duration: 0.2
      }
    }
  };

  const letterContent = {
    title: "Honoring Our Legacy, Embracing the Future",
    greeting: "Dear Heritage Hill Community,",
    introduction: <>I&apos;m Brandon Z. Hoff, founder of Heritage Hill, and as we transition into a new chapter, I want to reflect on the roots of our journey&mdash;a vision deeply anchored in the wisdom of those who came before us. Heritage Hill began with a simple yet profound goal: <em>to do work that would make our ancestors proud</em>. This vision was inspired by the enduring legacy of cooperative economics within the Black Diaspora, principles of Kwanzaa like <em>Ujamaa</em> (collective economics), and the groundbreaking scholarship of <a href="https://www.loc.gov/item/08031624/" className="text-green-600 hover:text-green-700">W.E.B. Du Bois</a> and <a href="https://www.academia.edu/83476479/Collective_Courage_A_History_of_African_American_Cooperative_Economic_Thought_and_Practice_by_Jessica_Gordon_Nembhard" className="text-green-600 hover:text-green-700">Dr. Jessica Gordon Nembhard</a>, whose work illuminated the power of cooperation as a tool for liberation.</>,
    history: <>W.E.B. Du Bois once wrote, <em>&ldquo;Co-operation is the rhythm of life; it is the heartbeat of any people&apos;s economic survival.&rdquo;</em> In his <a href="https://archive.org/details/economiccooperat00dubo" className="text-green-600 hover:text-green-700">1907 study</a>, he documented how Black communities turned to cooperatives to combat systemic exclusion, pooling resources to build schools, farms, and mutual aid networks. Decades later, Dr. Gordon Nembhard&apos;s <a href="https://archive.org/details/collectivecourag0000gord" className="text-green-600 hover:text-green-700">Collective Courage</a> echoed this truth, chronicling how African Americans&mdash;from the Freedom Quilting Bee of Alabama to the North Carolina Mutual Insurance Company&mdash;used cooperatives to reclaim autonomy and create thriving ecosystems in the face of oppression.</>,
    legacy: <>Heritage Hill&apos;s Co-op was our humble contribution to this lineage. Like the mutual aid societies and Black-owned collectives of the past, we sought to centralize resources, democratize supply chains, and empower students and makers through shared ownership. With support from <a href="https://coopcincy.org/heritage-hill" className="text-green-600 hover:text-green-700">Co-op Cincy</a>, we transitioned to a worker-owned model in 2022, ensuring employees could benefit equitably from the company&apos;s success. Though we sunset the Co-op today, its spirit lives on in the lessons we carry forward: <strong>collaboration over competition, community over extraction, and resilience as our birthright.</strong></>,
    evolution: <>What began as a t-shirt company evolved into a laboratory for cooperative economics. We partnered with high schools and HBCUs to create student-led spirit shops, teaching entrepreneurship through hands-on work. We dreamed of a network where Black designers, manufacturers, and educators could thrive together&mdash;a vision fueled by Du Bois&apos;s belief that <em>&ldquo;the Negro must be taught the meaning of co-operation, self-help, and solidarity.&rdquo;</em></>,
    nextChapter: <>Now, we turn to a new frontier: <a href="https://www.tiktok.com/@brandonzh" className="text-green-600 hover:text-green-700">artificial intelligence and its impact on literacy, work, and equity</a>. Over the past two years, I&apos;ve immersed myself in understanding large language models and AI&apos;s ethical implications. Just as cooperatives challenged economic exclusion, we must now ensure technology uplifts, rather than marginalizes, our communities.</>,
    furtherReading: <>
      <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-4">Further Reading &amp; Resources</h3>
      <ol className="list-decimal pl-5">
        <li><a href="http://www.webdubois.org/wdb-AtlUniv.html" className="text-green-600 hover:text-green-700">W.E.B. Du Bois&apos;s Atlanta University Studies</a>: Explore Du Bois&apos;s foundational research on Black economic cooperation.</li>
        <li><a href="https://strangematters.coop/the-black-cooperative-economy-jessica-gordon-nembhard-collective-courage/" className="text-green-600 hover:text-green-700">The Black Cooperative Economy</a>: A deep dive into historical and modern cooperative models.</li>
        <li><a href="https://ncbaclusa.coop/blog/co-op-cincy-supports-transition-of-black-owned-apparel-company-heritage-hill-to-worker-ownership/" className="text-green-600 hover:text-green-700">Co-op Cincy&apos;s Business Legacy Fund</a>: Learn how worker ownership transforms communities.</li>
      </ol>
    </>,
    closing: <>
      <p>To quote Dr. Gordon Nembhard: <em>&ldquo;Cooperatives are not just economic tools&mdash;they are acts of resistance, resilience, and radical hope.&rdquo;</em> While Heritage Hill&apos;s Co-op closes, its heartbeat remains alive in our ongoing commitment to education, cooperative principles, and justice. Thank you for walking this path with me. Together, we honor the ancestors by building futures they&apos;d marvel at.</p>
      
      <div className="mt-8 mb-4">
        <p className="mb-2">With solidarity and hope,</p>
        <p className="mb-1">Brandon Z. Hoff</p>
        <p>Founder, Heritage Hill</p>
      </div>
    </>,
  };

  const upcomingEvents = [
    { 
      name: "GatherVerse AI Summit 2025: Humanity&apos;s Path Forward", 
      location: "Virtual",
      date: "February 4-5, 2025",
      time: "8:00 AM PST",
      description: "3rd Annual GatherVerse AI Summit - A global consortium dedicated to bringing informed dialogues at the crossroads of AI and emerging technologies and their implications for humanity.",
      speaking: "Speaking on &apos;AI and the Human Condition: Examining the Ethical Dimensions of Innovation&apos;",
      speakingTime: "February 4, 2025 • 5:15 PM UTC",
      url: "https://www.linkedin.com/posts/adlunaminc_aisummit2025-gatherverse-artificialintelligence-activity-7288486187822977025-9e7i"
    },
    { 
      name: "RUDI: Responsible Use of Digital Intelligence", 
      subtitle: "Transforming Tomorrow: The Evolution and Ethics of Artificial Intelligence",
      location: "Mercantile Library",
      date: "February 26, 2024",
      time: "7:00 PM - 8:00 PM",
      address: "414 Walnut St, Cincinnati, OH 45202"
    },
    { 
      name: "Culture Impact Lab 2025: A Call for Culture Experience", 
      location: "The Joinery, Chicago",
      date: "May 14-15, 2025",
      time: "9:00 AM - 5:00 PM",
      url: "https://callforculture.com/culture-impact-lab",
      address: "2533 W Homer St, Chicago, IL, 60647"
    }
  ];

  const socialLinks = [
    { platform: "LinkedIn", url: "https://linkedin.com/in/hoffbrandon" },
    { platform: "Newsletter", url: "https://bzhoff.beehiiv.com" },
    { platform: "Substack", url: "https://bzhoff.substack.com" },
    { platform: "TikTok", url: "https://tiktok.com/hoffdigital" },
    { platform: "YouTube", url: "https://youtube.com/@hoffdigital" },
    { platform: "Portfolio", url: "https://bzhoff.com" }
  ];

  return (
    <section className="relative min-h-screen py-24 px-8 overflow-hidden bg-white text-slate-900">
      <motion.div 
        className="relative z-10 w-full max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <Image 
            src="/Heritage Hill RBG LOGO.png" 
            alt="Heritage Hill Logo" 
            width={128}
            height={128}
            className="mx-auto mb-8 object-contain"
          />
        </motion.div>

        {/* Letter Content */}
        <motion.div 
          variants={itemVariants}
          className="prose prose-lg mx-auto text-slate-700"
        >
          <h1 className="text-2xl font-bold text-center mb-8 text-slate-900">
            {letterContent.title}
          </h1>
          
          <p className="text-xl mb-8">{letterContent.greeting}</p>
          <div className="mb-6">{letterContent.introduction}</div>
          
          <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-4">
            Rooted in History, Built on Collective Courage
          </h3>
          <div className="mb-6">{letterContent.history}</div>
          <div className="mb-6">{letterContent.legacy}</div>
          
          <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-4">
            From Threads to Tech: The Next Chapter
          </h3>
          <div className="mb-6">{letterContent.evolution}</div>
          <div className="mb-6">{letterContent.nextChapter}</div>

          {/* Closing Quote and Signature */}
          <div className="my-16 text-slate-700">
            {letterContent.closing}
          </div>

          {/* Further Reading Section */}
          {letterContent.furtherReading}

          {/* Social Links */}
          <div className="my-12 space-y-2">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Stay Connected</h3>
            {socialLinks.map(link => (
              <motion.a
                key={link.platform}
                href={link.url}
                className="block text-green-600 hover:text-green-700 transition-colors"
                whileHover={{ x: 4 }}
              >
                {link.platform} →
              </motion.a>
            ))}
          </div>

          {/* Upcoming Events */}
          <div className="my-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Upcoming Events</h3>
            <ul className="list-none p-0">
              {upcomingEvents.map(event => (
                <li key={event.name} className="mb-4">
                  <div className="font-medium">
                    {event.url ? (
                      <a 
                        href={event.url}
                        className="text-green-600 hover:text-green-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {event.name}
                      </a>
                    ) : (
                      event.name
                    )}
                  </div>
                  
                  {event.subtitle && (
                    <div className="text-slate-600 text-sm mt-1">
                      {event.subtitle}
                    </div>
                  )}
                  
                  {event.location && (
                    <div className="text-slate-500 text-sm mt-1">
                      {event.location}
                      {event.address && (
                        <div className="text-sm">{event.address}</div>
                      )}
                    </div>
                  )}
                  
                  {event.date && (
                    <div className="text-sm text-slate-500 mt-1">
                      {event.date} {event.time && `• ${event.time}`}
                    </div>
                  )}
                  
                  {event.description && (
                    <div className="text-sm text-slate-600 mt-2 italic">
                      {event.description}
                    </div>
                  )}

                  {event.speaking && (
                    <div className="text-sm text-green-600 mt-2">
                      {event.speaking}
                      {event.speakingTime && (
                        <div className="text-slate-500">
                          {event.speakingTime}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
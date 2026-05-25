import type { Section } from "@/lib/projects";

export type Post = {
  slug: string;
  title: string;
  /** ISO-8601 date, e.g. "2026-05-24" */
  date: string;
  /** Short human-readable date for display, e.g. "May 24, 2026" */
  displayDate: string;
  /** One-sentence summary used in the listing card + OG description */
  excerpt: string;
  /** Optional hero image path under /public — leave empty for emoji card fallback */
  hero?: string;
  /** Optional emoji shown when no hero is set */
  emoji?: string;
  /** Optional reading-time hint, e.g. "8 min read" */
  readingTime?: string;
  body: Section[];
};

export const posts: Post[] = [
  {
    slug: "the-doorway",
    title: "The Doorway",
    date: "2026-05-24",
    displayDate: "May 24, 2026",
    // TODO: write your own one-sentence excerpt in your voice.
    // Used only for: (1) the listing card on /blog, (2) OG/LinkedIn link previews.
    // Not rendered on the post page itself.
    excerpt: "",
    readingTime: "8 min read",
    hero: "/images/the-doorway/ribbon-cutting.jpg",
    body: [
      {
        type: "italic-p",
        text:
          "Disclaimer: This post was written partially by myself and partially by my AI agent, Exa. The prose was written by me (dictated, technically) on long walks around the Capitol, as well as in the comfort of my temporary apartment that is being paid for by Gauntlet AI. Exa helped me by surfacing every blog post I have written over the past decade to understand my writing style, and also perused my recent journals to remind me of small details I recorded over the past two months that I might have missed.",
      },
      {
        type: "p",
        text:
          "Howdy from 416 Congress Avenue! It is 11:30 p.m. on Saturday, May 23rd, and I am involuntarily experiencing the nonstop rumble of a fraternity party that has taken over the Speakeasy nightclub on the other side of a brick wall to my right.",
      },
      {
        type: "p",
        text:
          "Despite the deep bass, I am in a state of deep focus. My visual field is occupied by three monitors displaying a prototype of an app that can teach you American Sign Language by reading your hand movements. The thirty or so software engineers burning the midnight oil with me are working on the same project or something similar, the use cases ranging from cryptocurrency to car dealerships.",
      },
      {
        type: "p",
        text:
          "Before I can share how I ended up in a room full of this country's highest caliber programmers, and why I'm writing my first blog post in six years, I need to rewind a few months…",
      },
      {
        type: "image",
        src: "/images/the-doorway/monitors.jpeg",
        alt: "My current coding setup at 416 Congress Avenue — three monitors at 11:30 p.m.",
      },

      { type: "h2", text: "The Moltathon" },
      {
        type: "p",
        text:
          'The first week of February was my "oh s***" moment with AI. I learned about OpenClaw, a new app that had been released, and grasped its significance immediately.',
      },
      {
        type: "p",
        text:
          "Essentially, this tool unleashes your ChatGPT from the constraints of a chatbot interface into a living agent that is literally working around the clock for you. It has access to any digital accounts you're willing to share, helping with ordering groceries on Amazon, to reviewing your workout plan on Strava, to sending emails and texts.",
      },
      {
        type: "p",
        text:
          "A week later, I was invited by my friend Alejandro to compete in my first hackathon, put on by AITX and the Applied AI Society at Antler Venture Capital. Alejandro is one of my good friends whom I met via Swift Fit. I hadn't seen him recently because he'd been accepted into this nebulous program called Gauntlet AI. I didn't know too much about it other than seeing his weekly LinkedIn posts showcasing the very impressive apps he was building.",
      },

      // TODO: photo at the hackathon (Antler VC, the monitor setup, etc.)
      // { type: "image", src: "/images/the-doorway/moltathon.jpg", alt: "Moltathon at Antler VC", caption: "Antler VC, Feb 13" },

      {
        type: "p",
        text:
          'I showed up at the hackathon and immediately fell back into a state of tribal belonging that had not surfaced since my time on the [drones team at McGill University](/projects/drones). The sentiment was one of "these are my people". For the next 48 hours, I nerded out as I learned how to install OpenClaw on my computer and proceeded to create a workflow that replaced a significant part of my sales job. My OpenClaw agent, named AgentXander, would scan the internet for articles indicating buying signals for Swift Fit\'s services, research any associated leads, and create a personalized proposal page.',
      },
      {
        type: "p",
        text:
          "I almost didn't submit an entry as I didn't expect to place in the top three due to the quality of the other engineers. I couldn't stay for the awards ceremony because I had a marathon to run, so I only found out the next day through LinkedIn that I had won the sales track for the hackathon!",
      },
      {
        type: "loom",
        id: "770f552c35b645fd87a88579e30f035e",
        title: "Pipeline Lobster — the Moltathon sales-track build",
        caption:
          "Pipeline Lobster: lead signal → enrichment → personalized proposal page deployed → Telegram alert. 13 seconds end-to-end.",
      },
      {
        type: "p",
        text:
          "This inspired me over the course of the next two months to play with OpenClaw deep into the middle of the night, something I hadn't done since my time at McGill. I found it hard to focus on my actual job as a salesperson as I developed what is now known as AI psychosis: seeing every single action you take as something that can be outsourced to AI. I still made sure to prioritize slow mornings at Barton Springs and long bike rides with friends, as well as guitar-playing sessions.",
      },
      {
        type: "image",
        src: "/images/the-doorway/guitar.JPG",
        alt: "Alexander playing guitar in a park, cream suit",
        size: "small",
      },

      { type: "h2", text: "The Doorway" },
      { type: "italic-p", text: "April 13th, 2026" },

      {
        type: "p",
        text:
          "I'm walking up to Modern Market with my Swift Fit colleagues for lunch. As I hold the door open for a gentleman who's coming out, I see his shirt, which says Gauntlet AI. I tell him I have a friend in the program, and he slows down and asks me about myself. I tell him about my recent hackathon win and the projects I've created with OpenClaw and Claude Code. His eyes perk up. He tells me his name is Matt, that he teaches at Gauntlet, and that I should really consider applying, given I have both technical chops and sales skills. He says that the next cohort starts 14 days from now, on the 27th.",
      },

      // TODO: optional photo here — the Modern Market storefront, or Matt's Gauntlet shirt if you have a candid

      {
        type: "p",
        text:
          "Over lunch, I basically decide I'm going to apply to Gauntlet and that I need to gather as much information as possible. I text Alejandro and we go for a walk an hour later on the river, where he shares passionately about the rigor of this program and the quality of job opportunities available to Gauntlet graduates.",
      },
      {
        type: "italic-p",
        text:
          "I'll talk more about the inner workings of Gauntlet in another post, as they are quite upfront with their business model and are, in my eyes, a shining example of what academia and any upskilling program can look like in the future.",
      },
      {
        type: "p",
        text:
          "The one caveat I get from Alejandro and from a family friend is that Gauntlet is very hard to get into and very intense. On Wednesday evening, my decision to apply is sealed after I attend an inspiring panel at Gauntlet featuring alumni who went on to create Texas Sports Academy and Superbuilders. My favorite part is that as I was preparing to go home at 9:30pm, the current Gauntlet cohort members all went back upstairs to keep working. At home, I take the 15-minute aptitude test required for the application, polish my resume, and click submit.",
      },
      {
        type: "p",
        text:
          "For four days, I get no response, knowing that the start of the cohort is now just about a week away and that Alejandro told me to expect a response within 48 hours of applying. I ping Matt, who, within a couple of hours, is able to give me the feedback that my resume did not showcase enough technical achievements, and that, pending an ability to show my technical skills, the admissions team would pass on my application. Not a complete no, but definitely not a yes. I find the determination in my mind that I am going to get into this program no matter what, even though the start of the cohort is less than a week away.",
      },
      {
        type: "p",
        text:
          "That evening, I attend a free virtual lecture put on by Gauntlet's CTO on the topic of RAG. At the end, he challenges the several hundred attendees to apply this knowledge immediately, as Gauntlet is all about building with AI. I spend the next six hours in a focused building session with Claude Code and emerge with a Swift Fit RAG corpus. That night, I dream about the different layers of RAG before waking up around 5am to go for a run and code a little more. Around 8am, I make my way to Gauntlet HQ because, as fate would have it, there was a ribbon cutting for their office (it is still baffling to me why there just happened to be a ribbon cutting on this day).",
      },

      // TODO: photo of the ribbon cutting — the giant scissors, the group photo, anything

      {
        type: "p",
        text:
          "I show up with one goal: talk with the Gauntlet admissions team. However, when I open the door, I am immediately recognized by several folks from the Chamber of Commerce. The Chamber of Commerce is highly intertwined with Swift Fit, as we tend to have the same clientele. I see Ash across the room but am instead roped into a conversation with people from the Chamber asking me about when Austin Yoga Festival is happening. I end up being whisked into an office tour of the building with all these non-technical people who keep referencing me because they know me from my work at Swift Fit.",
      },
      {
        type: "p",
        text:
          'Finally, as we return to the entrance and get our photo taken with the giant scissors and ribbon, I end up talking to this soft-spoken gentleman with a huge beard. He turns out to be Zac, one of the first employees ever at Gauntlet. After asking some probing questions about my projects, he confirms that I\'m seriously trying to get into the cohort that starts this Monday. I say yes, and he says, "Alright, the person you need to talk to is Drew." He guides me over to Drew\'s office, pushes open the door, and says to Drew that he needs to talk to me. Drew introduces himself as "the final gatekeeper for Gauntlet admissions".',
      },
      {
        type: "p",
        text:
          'Drew asks me about why I want in. I tell him my story, show him the RAG knowledge layer built, and he says, "Alexander, you\'re saying all the right words. Do you want to start on Monday?" I say yes. He says, "All right, I\'ll send the offer shortly. You might be missing some technical skills. We put in all-nighters every single night. You\'re just gonna have to work 30% harder."',
      },
      { type: "p", text: "And just like that, I'm in!" },

      {
        type: "italic-p",
        text:
          "I'm writing this at the end of week four. It's been such a whirlwind that I'm only getting around to this blog now. It's been around six years since I've published a blog post like this. If I reflect back on why I was inspired to write back then, the most cogent explanation is that it was a time of adventure and expansion, and that is exactly how I feel in this current chapter. I'll be publishing one of these each week as the adventure continues!",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Most recent posts first, for the index page */
export function getAllPostsSorted(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

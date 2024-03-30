import { Beach, Clock, Home, Night } from "../../components/images";

export const ActivityData = {
  title:
    "Can you figure out the definition of setting from the following examples?",
  hint: "(take a minute to think about this)",
  question: "So, what do you think the definition of setting is?",
  options: [
    {
      name: "Sunny day at a beach",
      image: Beach,
    },
    {
      name: "A cold rainy night in a haunted house in October",
      image: Night,
    },
  ],
  definition: (
    <>
      Setting is the time
      <img src={Clock} alt="clock" className="inline mx-1 h-[32px]" />
      and place
      <img src={Home} alt="home" className="inline mx-1 h-[32px]" />
      of a story. It often answers the questions: when? and where?
    </>
  ),
  description:
    "The time of the story could be in the past, future, day, night, summer or winter. A story may take place in a school, a mall, a desert, an airplane or in a variety of other places.",
};

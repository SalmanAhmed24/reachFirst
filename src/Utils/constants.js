export const AllUsers = [
  {
    id: 1,
    jobTitle: "Front end development",
    experience: 3,
    education: "Bachelor in Computer Science",
    skills: ["HTML,CSS,Javascript"],
    description: "This is just for test purposes. I am a good developer hehehe",
    hourlyRate: "$20",
    startDate: "10-12-2022",
    careerLevel: "Mid Level",
    gender: "Male",
    equipmentSpecs: "Apple Mac Book",
    scheduledDays: [
      {
        monday: true,
        startTime: "9am",
        endTime: "6pm",
      },
      {
        tuesday: true,
        startTime: "9am",
        endTime: "6pm",
      },
      {
        wednsday: true,
        startTime: "9am",
        endTime: "6pm",
      },
      {
        thursday: true,
        startTime: "9am",
        endTime: "6pm",
      },
      {
        friday: true,
        startTime: "9am",
        endTime: "6pm",
      },
    ],
  },
  {
    id: 2,
    jobTitle: "Backend development",
    experience: 2,
    education: "Bachelor in Electrical",
    skills: ["node,Javascript"],
    description: "This is just for test purposes. I am a good developer hehehe",
    hourlyRate: "$25",
    startDate: "15-12-2022",
    careerLevel: "Sr Level",
    gender: "Male",
    equipmentSpecs: "HP elite book",
    scheduledDays: [
      {
        monday: false,
        startTime: null,
        endTime: null,
      },
      {
        tuesday: true,
        startTime: "9am",
        endTime: "6pm",
      },
      {
        wednsday: false,
        startTime: null,
        endTime: null,
      },
      {
        thursday: true,
        startTime: "9am",
        endTime: "6pm",
      },
      {
        friday: true,
        startTime: "9am",
        endTime: "6pm",
      },
    ],
  },
];

export const jobOpt = [
  { label: "Front end developer", value: 1 },
  { label: "Backend developer", value: 2 },
  { label: "Python developer", value: 3 },
];
export const jobExp = [
  { label: "1 Year", value: 1 },
  { label: "2 Year", value: 2 },
  { label: "3 Year", value: 3 },
];
export const educationOpt = [
  { label: "Bachelors", value: 1 },
  { label: "Masters", value: 2 },
  { label: "PHD", value: 3 },
];
export const skillsOpt = [
  { label: "Javascript", value: 1 },
  { label: "HTML5", value: 2 },
  { label: "CSS3", value: 3 },
  { label: "Node", value: 4 },
  { label: "Bootstrap", value: 5 },
];
export const hourlyOpt = [
  { label: "$20", value: "$20" },
  { label: "$10", value: "$10" },
  { label: "$30", value: "$30" },
  { label: "$25", value: "$25" },
  { label: "$35", value: "$35" },
];
export const careerLevelOpt = [
  { label: "Internship", value: 1 },
  { label: "Jr Developer", value: 2 },
  { label: "Sr Developer", value: 3 },
  { label: "Vice President", value: 4 },
];
export const genderOpt = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];
export const daysOpt = [
  { value: "monday", label: "Monday", disabled: false },
  { value: "tuesday", label: "Tuesday", disabled: false },
  { value: "wednsday", label: "Wednsday", disabled: false },
  { value: "thursday", label: "Thursday", disabled: false },
  { value: "friday", label: "Friday", disabled: false },
];

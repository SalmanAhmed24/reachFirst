export const AllUsers = [
  {
    id: 1,
    jobTitle: "Front end developer",
    experience: 3,
    education: "Bachelors",
    skills: ["HTML5", "CSS3", "Javascript"],
    description: "This is just for test purposes. I am a good developer hehehe",
    hourlyRate: 20,
    startDate: "10-12-2022",
    careerLevel: "Jr Developer",
    gender: "Male",
    equipmentSpecs: "Apple Mac Book",
    days: ["monday", "tuesday"],
    scheduledDays: [
      {
        monday: true,
        startTime: "12:30",
        endTime: "22:00",
      },
      {
        tuesday: true,
        startTime: "14:30",
        endTime: "11:30",
      },
      {
        wednsday: false,
        startTime: null,
        endTime: null,
      },
      {
        thursday: false,
        startTime: null,
        endTime: null,
      },
      {
        friday: false,
        startTime: null,
        endTime: null,
      },
    ],
  },
  {
    id: 2,
    jobTitle: "Backend developer",
    experience: 2,
    education: "Masters",
    skills: ["Node", "Javascript"],
    description: "This is just for test purposes. I am a good developer hehehe",
    hourlyRate: 25,
    startDate: "10-22-2022",
    careerLevel: "Sr Developer",
    gender: "Male",
    equipmentSpecs: "HP elite book",
    file: null,
    days: ["wednsday", "friday"],
    scheduledDays: [
      {
        monday: false,
        startTime: null,
        endTime: null,
      },
      {
        tuesday: false,
        startTime: null,
        endTime: null,
      },
      {
        wednsday: true,
        startTime: "00:30",
        endTime: "09:30",
      },
      {
        thursday: false,
        startTime: null,
        endTime: null,
      },
      {
        friday: true,
        startTime: "01:30",
        endTime: "10:00",
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

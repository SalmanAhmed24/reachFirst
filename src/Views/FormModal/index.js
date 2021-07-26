import React, { useState, useEffect } from "react";
import {
  jobExp,
  jobOpt,
  educationOpt,
  skillsOpt,
  careerLevelOpt,
  genderOpt,
  hourlyOpt,
  daysOpt,
} from "../../Utils/constants";
import Select from "react-select";
import "./style.scss";
import ReactModal from "react-modal";
import { AllUsers } from "../../Utils/constants";
import {
  DatePicker,
  CheckboxGroup,
  TimePicker,
} from "react-rainbow-components";
import { connect } from "react-redux";
import { addUsers } from "../../store/actions/users";
const FormModal = (props) => {
  // props destructure
  const {
    toggleFlag,
    formModalToggle,
    addUsers,
    editFlag,
    currentItem,
    editModalToggle,
    users,
  } = props;
  // state definitions
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [jobValue, setJobValue] = useState(null);
  const [jobValueError, setJobValueError] = useState(false);
  const [jobExpValue, setJobExpValue] = useState(null);
  const [jobEduValue, setJobEduValue] = useState(null);
  const [skillsValue, setSkillsValue] = useState(null);
  const [descValue, setDescValue] = useState("");
  const [submitFlag, setSubmitFlag] = useState(false);
  const [hourlyRateValue, setHourlyRateValue] = useState(null);
  const [startDateValue, setStartDateValue] = useState(new Date());
  const [careerLevelValue, setCareerLevelValue] = useState(null);
  const [genderValue, setGenderValue] = useState(null);
  const [equipSpecsValue, setEquipSpecsValue] = useState("");
  const [daysValue, setDaysValue] = useState(null);
  const [monStartValue, setMonStartValue] = useState(null);
  const [monEndValue, setMonEndValue] = useState(null);

  const [tueStartValue, setTueStartValue] = useState(null);
  const [tueEndValue, setTueEndValue] = useState(null);

  const [wedStartValue, setWedStartValue] = useState(null);
  const [wedEndValue, setWedEndValue] = useState(null);

  const [thuStartValue, setThuStartValue] = useState(null);
  const [thuEndValue, setThuEndValue] = useState(null);

  const [friStartValue, setFriStartValue] = useState(null);
  const [friEndValue, setFriEndValue] = useState(null);
  const [fileUplaod, setFileUpload] = useState(null);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [validNumberError, setValidNumberError] = useState(false);
  const [daysFlag, setDaysFlag] = useState(false);
  const [hourlyValueFlag, setHourlyValueFlag] = useState(false);
  const [monTimeFlag, setMonTimeFlag] = useState(false);
  const [tueTimeFlag, setTueTimeFlag] = useState(false);
  const [wedTimeFlag, setWedTimeFlag] = useState(false);
  const [thuTimeFlag, setThuTimeFlag] = useState(false);
  const [friTimeFlag, setFriTimeFlag] = useState(false);
  //
  useEffect(() => {
    if (editFlag) {
      setJobValue(
        editFlag
          ? currentItem.jobTitle == null
            ? null
            : jobOpt.find((item) => item.label == currentItem.jobTitle)
          : null
      );
      setJobExpValue(
        editFlag
          ? currentItem.experience == null
            ? null
            : jobExp.find((item) => item.value == currentItem.experience)
          : null
      );
      setJobEduValue(
        editFlag
          ? currentItem.education == null
            ? null
            : educationOpt.find((item) => item.label == currentItem.education)
          : null
      );
      const newSkills = [];
      for (const i of currentItem.skills) {
        newSkills.push(skillsOpt.find((item) => item.label == i));
      }
      setSkillsValue(newSkills);
      setDescValue(currentItem.description);
      setHourlyRateValue(
        currentItem.hourlyRate ? currentItem.hourlyRate : null
      );
      setStartDateValue(currentItem.startDate ? currentItem.startDate : null);
      setCareerLevelValue(
        currentItem.careerLevel
          ? careerLevelOpt.find((item) => item.label == currentItem.careerLevel)
          : null
      );
      setGenderValue(
        currentItem.gender
          ? genderOpt.find((item) => item.label == currentItem.gender)
          : null
      );
      setEquipSpecsValue(
        currentItem.equipmentSpecs ? currentItem.equipmentSpecs : null
      );
      setDaysValue(currentItem.days !== null ? currentItem.days : null);
      const monSchFilter = currentItem.scheduledDays.find(
        (item) => item.monday == true
      );
      const tueSchFilter = currentItem.scheduledDays.find(
        (item) => item.tuesday == true
      );
      const wdSchFilter = currentItem.scheduledDays.find(
        (item) => item.wednsday == true
      );
      const thuSchFilter = currentItem.scheduledDays.find(
        (item) => item.thursday == true
      );
      const friSchFilter = currentItem.scheduledDays.find(
        (item) => item.friday == true
      );

      setMonStartValue(
        monSchFilter && monSchFilter !== undefined
          ? monSchFilter.startTime
          : null
      );
      setMonEndValue(
        monSchFilter && monSchFilter !== undefined ? monSchFilter.endTime : null
      );
      setTueStartValue(
        tueSchFilter && tueSchFilter !== undefined
          ? tueSchFilter.startTime
          : null
      );
      setTueEndValue(
        tueSchFilter && tueSchFilter !== undefined ? tueSchFilter.endTime : null
      );
      setWedStartValue(
        wdSchFilter && wdSchFilter !== undefined ? wdSchFilter.startTime : null
      );
      setWedEndValue(
        wdSchFilter && wdSchFilter !== undefined ? wdSchFilter.endTime : null
      );
      setThuStartValue(
        thuSchFilter && thuSchFilter !== undefined
          ? thuSchFilter.startTime
          : null
      );
      setThuEndValue(
        thuSchFilter && thuSchFilter !== undefined ? thuSchFilter.endTime : null
      );
      setFriStartValue(
        friSchFilter && friSchFilter !== undefined
          ? friSchFilter.startTime
          : null
      );
      setFriEndValue(
        friSchFilter && friSchFilter !== undefined ? friSchFilter.endTime : null
      );
    }
  }, []);

  // functions
  const onJobSelectHandler = (value) => {
    setJobValue(value);
    setJobValueError(false);
  };
  const onEduSelectHandler = (value) => {
    setJobEduValue(value);
  };
  const onJobExpSelectHandler = (value) => {
    setJobExpValue(value);
  };
  const onSkillSelectHandler = (value) => {
    setSkillsValue(value);
  };
  const onDescHandler = (e) => {
    setDescValue(e.target.value);
  };
  const nextFormHandler = (e) => {
    if (step1 && !step2 && !step3) {
      if (jobValue && fileUplaod) {
        setStep2(true);
      } else if (jobValue == null) {
        setJobValueError(true);
      } else if (fileUplaod == null) {
        setFileUploadError(true);
      }
    } else if (step1 && step2 && !step3) {
      if (hourlyRateValue == null) {
        setHourlyValueFlag(true);
      } else {
        setStep3(true);
        setSubmitFlag(true);
      }
    } else if (step1 && step2 && step3) {
      if (daysValue == null) {
        setDaysFlag(true);
      } else if (daysValue.length < 2) {
        setDaysFlag(true);
      } else {
        const MonStartHour =
          monStartValue && `${monStartValue[0]}${monStartValue[1]}`;
        const MonEndHour = monEndValue && `${monEndValue[0]}${monEndValue[1]}`;
        const TueStartHour =
          tueStartValue && `${tueStartValue[0]}${tueStartValue[1]}`;
        const TueEndHour = tueEndValue && `${tueEndValue[0]}${tueEndValue[1]}`;
        const WedStartHour =
          wedStartValue && `${wedStartValue[0]}${wedStartValue[1]}`;
        const WedEndHour = wedEndValue && `${wedEndValue[0]}${wedEndValue[1]}`;
        const ThuStartHour =
          thuStartValue && `${thuStartValue[0]}${thuStartValue[1]}`;
        const ThuEndHour = thuEndValue && `${thuEndValue[0]}${thuEndValue[1]}`;
        const FriStartHour =
          friStartValue && `${friStartValue[0]}${friStartValue[1]}`;
        const FriEndHour = friEndValue && `${friEndValue[0]}${friEndValue[1]}`;
        if (
          daysValue.includes("monday") &&
          (monStartValue == null ||
            monEndValue == null ||
            Math.abs(MonStartHour - MonEndHour) < 9)
        ) {
          setMonTimeFlag(true);
        } else if (
          daysValue.includes("tuesday") &&
          (tueStartValue == null ||
            tueEndValue == null ||
            Math.abs(TueStartHour - TueEndHour) < 9)
        ) {
          setTueTimeFlag(true);
        } else if (
          daysValue.includes("wednsday") &&
          (wedStartValue == null ||
            wedEndValue == null ||
            Math.abs(WedStartHour - WedEndHour) < 9)
        ) {
          setWedTimeFlag(true);
        } else if (
          daysValue.includes("thursday") &&
          (thuStartValue == null ||
            thuEndValue == null ||
            Math.abs(ThuStartHour - ThuEndHour) < 9)
        ) {
          setThuTimeFlag(true);
        } else if (
          daysValue.includes("friday") &&
          (friStartValue == null ||
            friEndValue == null ||
            Math.abs(FriStartHour - FriEndHour) < 9)
        ) {
          setFriTimeFlag(true);
        } else {
          const data = {
            id: Math.floor(Math.random() * (10000 + 1)),
            jobTitle: jobValue && jobValue.label,
            experience: jobExpValue && jobExpValue.value,
            education: jobEduValue && jobEduValue.label,
            skills: skillsValue && skillsValue.map((item) => item.label),
            description: descValue,
            hourlyRate: hourlyRateValue,
            startDate: startDateValue && startDateValue,
            careerLevel: careerLevelValue && careerLevelValue.label,
            gender: genderValue && genderValue.label,
            equipmentSpecs: equipSpecsValue,
            days: daysValue,
            scheduledDays: [
              {
                monday: daysValue.includes("monday") ? true : false,
                startTime: daysValue.includes("monday") ? monStartValue : null,
                endTime: daysValue.includes("monday") ? monEndValue : null,
              },
              {
                tuesday: daysValue.includes("tuesday") ? true : false,
                startTime: daysValue.includes("tuesday") ? tueStartValue : null,
                endTime: daysValue.includes("tuesday") ? tueEndValue : null,
              },
              {
                wednsday: daysValue.includes("wednsday") ? true : false,
                startTime: daysValue.includes("wednsday")
                  ? wedStartValue
                  : null,
                endTime: daysValue.includes("wednsday") ? wedEndValue : null,
              },
              {
                thursday: daysValue.includes("thursday") ? true : false,
                startTime: daysValue.includes("thursday")
                  ? thuStartValue
                  : null,
                endTime: daysValue.includes("thursday") ? thuEndValue : null,
              },
              {
                friday: daysValue.includes("friday") ? true : false,
                startTime: daysValue.includes("friday") ? friStartValue : null,
                endTime: daysValue.includes("friday") ? friEndValue : null,
              },
            ],
          };
          if (editFlag) {
            users.map((item) => {
              if (item.id == currentItem.id) {
                item.jobTitle = jobValue && jobValue.label;
                item.experience = jobExpValue && jobExpValue.value;
                item.education = jobEduValue && jobEduValue.label;
                item.skills = skillsValue && skillsValue;
                item.description = descValue;
                item.hourlyRate = hourlyRateValue;
                item.startDate = startDateValue && startDateValue;
                item.careerLevel = careerLevelValue && careerLevelValue.label;
                item.gender = genderValue && genderValue.label;
                item.equipmentSpecs = equipSpecsValue;
                item.days = daysValue;
                item.scheduledDays = [
                  {
                    monday: daysValue.includes("monday") ? true : false,
                    startTime: daysValue.includes("monday")
                      ? monStartValue
                      : null,
                    endTime: daysValue.includes("monday") ? monEndValue : null,
                  },
                  {
                    tuesday: daysValue.includes("tuesday") ? true : false,
                    startTime: daysValue.includes("tuesday")
                      ? tueStartValue
                      : null,
                    endTime: daysValue.includes("tuesday") ? tueEndValue : null,
                  },
                  {
                    wednsday: daysValue.includes("wednsday") ? true : false,
                    startTime: daysValue.includes("wednsday")
                      ? wedStartValue
                      : null,
                    endTime: daysValue.includes("wednsday")
                      ? wedEndValue
                      : null,
                  },
                  {
                    thursday: daysValue.includes("thursday") ? true : false,
                    startTime: daysValue.includes("thursday")
                      ? thuStartValue
                      : null,
                    endTime: daysValue.includes("thursday")
                      ? thuEndValue
                      : null,
                  },
                  {
                    friday: daysValue.includes("friday") ? true : false,
                    startTime: daysValue.includes("friday")
                      ? friStartValue
                      : null,
                    endTime: daysValue.includes("friday") ? friEndValue : null,
                  },
                ];
              }
            });
            editModalToggle();
          } else {
            addUsers(data);
            formModalToggle();
          }
        }
      }
    }
  };
  const prevFormHandler = () => {
    if (step1 && step2 && step3) {
      setStep3(false);
      setSubmitFlag(false);
    } else if (step1 && step2) {
      setStep2(false);
    }
  };
  const onHourlyRateHandler = (e) => {
    setHourlyValueFlag(false);
    setValidNumberError(false);
    const validNumber = new RegExp("^(?:[0-9]{2})$");
    if (validNumber.test(e.target.value)) {
      setHourlyRateValue(e.target.value);
    } else {
      setValidNumberError(true);
    }
  };
  const onStartDateHandler = (value) => {
    setStartDateValue(value);
  };
  const onCareerHandler = (value) => {
    setCareerLevelValue(value);
  };
  const onGenderHandler = (value) => {
    setGenderValue(value);
  };
  const onEquipHandler = (e) => {
    setEquipSpecsValue(e.target.value);
  };
  const onDayHandler = (value) => {
    setDaysFlag(false);
    setDaysValue(value);
  };
  const fileUploadHandler = (e) => {
    setFileUpload(e.target.files[0]);
    setFileUploadError(false);
  };
  const timeRangeSelector = (value, day, time) => {
    if (day == "monday" && time == "start") {
      setMonTimeFlag(false);
      setMonStartValue(value);
    }
    if (day == "monday" && time == "end") {
      setMonTimeFlag(false);
      setMonEndValue(value);
    }
    if (day == "tuesday" && time == "start") {
      setTueTimeFlag(false);
      setTueStartValue(value);
    }
    if (day == "tuesday" && time == "end") {
      setTueTimeFlag(false);
      setTueEndValue(value);
    }
    if (day == "wednsday" && time == "start") {
      setWedTimeFlag(false);
      setWedStartValue(value);
    }
    if (day == "wednsday" && time == "end") {
      setWedTimeFlag(false);
      setWedEndValue(value);
    }
    if (day == "thursday" && time == "start") {
      setThuTimeFlag(false);
      setThuStartValue(value);
    }
    if (day == "thursday" && time == "end") {
      setThuTimeFlag(false);
      setThuEndValue(value);
    }
    if (day == "friday" && time == "start") {
      setFriTimeFlag(false);
      setFriStartValue(value);
    }
    if (day == "friday" && time == "end") {
      setFriTimeFlag(false);
      setFriEndValue(value);
    }
  };

  return (
    <ReactModal isOpen={toggleFlag} className="form-modal-cus">
      <div className="cross-modal">
        <div className="modal-heading">
          <h4>Create a job post</h4>
          <p>Complete the following steps</p>
        </div>
        {editFlag ? (
          <i
            className="far fa-times-circle"
            onClick={() => {
              editModalToggle();
            }}
          ></i>
        ) : (
          <i
            className="far fa-times-circle"
            onClick={() => {
              formModalToggle();
            }}
          ></i>
        )}
      </div>
      <hr />
      <div className="steps-indicator-wrap">
        <div
          className={
            step1
              ? "step step1"
              : step1 && step2
              ? "step step1"
              : step1 && step2 && step3
              ? "step step1"
              : "step"
          }
        >
          <span>Job Information</span>
        </div>
        <div className={step2 && step1 ? "step step1" : "step"}>
          <span>Candinate Type</span>
        </div>
        <div className={step3 && step2 && step1 ? "step step1" : "step"}>
          <span>Shift Timings</span>
        </div>
      </div>
      <div className={step1 && !step2 && !step3 ? "Form-Field1" : "d-none"}>
        <div className="input-wrap">
          <label>Looking For</label>
          <div className="selec-wrap">
            <Select
              options={jobOpt}
              value={jobValue}
              onChange={(value) => onJobSelectHandler(value)}
            />
          </div>
          {jobValueError ? (
            <p style={{ color: "red" }}>
              Please select the Job you are looking for
            </p>
          ) : null}
        </div>
        <div className="input-wrap">
          <label>Experience</label>
          <div className="selec-wrap">
            <Select
              options={jobExp}
              value={jobExpValue}
              onChange={(value) => onJobExpSelectHandler(value)}
            />
          </div>
        </div>
      </div>
      <div className={step1 && !step2 && !step3 ? "Form-Field1" : "d-none"}>
        <div className="input-wrap">
          <label>Education</label>
          <div className="selec-wrap">
            <Select
              options={educationOpt}
              value={jobEduValue}
              onChange={(value) => onEduSelectHandler(value)}
            />
          </div>
        </div>
        <div className="input-wrap">
          <label>Skills</label>
          <div className="selec-wrap">
            <Select
              isMulti={true}
              options={skillsOpt}
              value={skillsValue}
              onChange={(value) => onSkillSelectHandler(value)}
            />
          </div>
        </div>
      </div>
      <div className={step1 && !step2 && !step3 ? "Form-Field1" : "d-none"}>
        <div className="desc-wrap">
          <label>Description</label>
          <textarea
            className="form-control"
            value={descValue}
            cols="5"
            rows="5"
            onChange={(e) => onDescHandler(e)}
          ></textarea>
        </div>
      </div>
      <div className={step1 && !step2 && !step3 ? "Form-Field1" : "d-none"}>
        <div className="desc-wrap">
          <label>Upload Resume</label>
          <input
            style={{ width: "25%" }}
            type="file"
            onChange={(e) => fileUploadHandler(e)}
            className="form-control"
          />
          {fileUploadError ? (
            <p style={{ color: "red" }}>Please upload your Resume</p>
          ) : null}
        </div>
      </div>

      <div className={step1 && step2 && !step3 ? "Form-Field1" : "d-none"}>
        <div className="input-wrap">
          <label>Hourly Rate</label>
          <div className="selec-wrap">
            <input
              className="form-control"
              value={hourlyRateValue}
              type="number"
              max={1000}
              min={-1}
              onChange={(value) => onHourlyRateHandler(value)}
            />
          </div>
          {validNumberError ? (
            <p style={{ color: "red" }}>
              value should be more than 10 with no special characters
            </p>
          ) : null}
          {hourlyValueFlag ? (
            <p style={{ color: "red" }}>Hourly hours must be selected</p>
          ) : null}
        </div>
        <div className="input-wrap">
          <label>Expected Start Date</label>
          <div className="selec-wrap">
            <DatePicker
              formatStyle="small"
              value={startDateValue}
              onChange={(value) => onStartDateHandler(value)}
            />
          </div>
        </div>
      </div>
      <div className={step1 && step2 && !step3 ? "Form-Field1" : "d-none"}>
        <div className="input-wrap">
          <label>Career Level</label>
          <div className="selec-wrap">
            <Select
              options={careerLevelOpt}
              value={careerLevelValue}
              onChange={(value) => onCareerHandler(value)}
            />
          </div>
        </div>
        <div className="input-wrap">
          <label>Gender</label>
          <div className="selec-wrap">
            <Select
              options={genderOpt}
              value={genderValue}
              onChange={(value) => onGenderHandler(value)}
            />
          </div>
        </div>
      </div>
      <div className={step1 && step2 && !step3 ? "Form-Field1" : "d-none"}>
        <div className="desc-wrap">
          <label>Equipment Specification</label>
          <textarea
            className="form-control"
            value={equipSpecsValue}
            cols="5"
            rows="5"
            onChange={(e) => onEquipHandler(e)}
          ></textarea>
        </div>
      </div>

      <div className={step1 && step2 && step3 ? "Form-Field2" : "d-none"}>
        <h4 className="time-head">Schedule Working Days & Timings</h4>
        <div className="days-wrap">
          <CheckboxGroup
            id="checkbox-group-1"
            options={daysOpt}
            value={daysValue}
            onChange={(value) => onDayHandler(value)}
            orientation="horizontal"
          />
          {daysFlag ? (
            <p style={{ color: "red" }}>Atleast select 2 days</p>
          ) : null}
          {}
        </div>
        <div className="main-time-wrap">
          <div className="time-wrap">
            <div className="week-days">
              <span>Monday</span>
              <div className="time-inner-wrap">
                <TimePicker
                  id="time-picker-1"
                  value={monStartValue}
                  onChange={(value) =>
                    timeRangeSelector(value, "monday", "start")
                  }
                  disabled={
                    daysValue == null
                      ? true
                      : daysValue.includes("monday")
                      ? false
                      : true
                  }
                />
                <TimePicker
                  id="time-picker-1"
                  value={monEndValue}
                  onChange={(value) =>
                    timeRangeSelector(value, "monday", "end")
                  }
                  disabled={
                    daysValue == null
                      ? true
                      : daysValue.includes("monday")
                      ? false
                      : true
                  }
                />
              </div>
              {monTimeFlag ? (
                <p style={{ color: "red" }}>
                  The time of the shift should be atleast 9 hrs
                </p>
              ) : null}
            </div>
            <div className="week-days">
              <span>Tuesday</span>
              <div className="time-inner-wrap">
                <TimePicker
                  id="time-picker-1"
                  value={tueStartValue}
                  onChange={(value) =>
                    timeRangeSelector(value, "tuesday", "start")
                  }
                  disabled={
                    daysValue == null
                      ? true
                      : daysValue.includes("tuesday")
                      ? false
                      : true
                  }
                />
                <TimePicker
                  id="time-picker-1"
                  value={tueEndValue}
                  onChange={(value) =>
                    timeRangeSelector(value, "tuesday", "end")
                  }
                  disabled={
                    daysValue == null
                      ? true
                      : daysValue.includes("tuesday")
                      ? false
                      : true
                  }
                />
              </div>
              {tueTimeFlag ? (
                <p style={{ color: "red" }}>
                  The time of the shift should be atleast 9 hrs
                </p>
              ) : null}
            </div>
            <div className="week-days">
              <span>Wednsday</span>
              <div className="time-inner-wrap">
                <TimePicker
                  id="time-picker-1"
                  value={wedStartValue}
                  onChange={(value) =>
                    timeRangeSelector(value, "wednsday", "start")
                  }
                  disabled={
                    daysValue == null
                      ? true
                      : daysValue.includes("wednsday")
                      ? false
                      : true
                  }
                />
                <TimePicker
                  id="time-picker-1"
                  value={wedEndValue}
                  onChange={(value) =>
                    timeRangeSelector(value, "wednsday", "end")
                  }
                  disabled={
                    daysValue == null
                      ? true
                      : daysValue.includes("wednsday")
                      ? false
                      : true
                  }
                />
              </div>
              {wedTimeFlag ? (
                <p style={{ color: "red" }}>
                  The time of the shift should be atleast 9 hrs
                </p>
              ) : null}
            </div>
          </div>
          <div className="time-wrap">
            <div className="week-days">
              <span>Thursday</span>
              <div className="time-inner-wrap">
                <TimePicker
                  id="time-picker-1"
                  value={thuStartValue}
                  onChange={(value) =>
                    timeRangeSelector(value, "thursday", "start")
                  }
                  disabled={
                    daysValue == null
                      ? true
                      : daysValue.includes("thursday")
                      ? false
                      : true
                  }
                />
                <TimePicker
                  id="time-picker-1"
                  value={thuEndValue}
                  onChange={(value) =>
                    timeRangeSelector(value, "thursday", "end")
                  }
                  disabled={
                    daysValue == null
                      ? true
                      : daysValue.includes("thursday")
                      ? false
                      : true
                  }
                />
              </div>
              {thuTimeFlag ? (
                <p style={{ color: "red" }}>
                  The time of the shift should be atleast 9 hrs
                </p>
              ) : null}
            </div>
            <div className="week-days">
              <span>Friday</span>
              <div className="time-inner-wrap">
                <TimePicker
                  id="time-picker-1"
                  value={friStartValue}
                  onChange={(value) =>
                    timeRangeSelector(value, "friday", "start")
                  }
                  disabled={
                    daysValue == null
                      ? true
                      : daysValue.includes("friday")
                      ? false
                      : true
                  }
                />
                <TimePicker
                  id="time-picker-1"
                  value={friEndValue}
                  onChange={(value) =>
                    timeRangeSelector(value, "friday", "end")
                  }
                  disabled={
                    daysValue == null
                      ? true
                      : daysValue.includes("friday")
                      ? false
                      : true
                  }
                />
              </div>
            </div>
            {friTimeFlag ? (
              <p style={{ color: "red" }}>
                The time of the shift should be atleast 9 hrs
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="cancel-btn-wrap">
        {(step1 && step2) || (step1 && step2 && step3) ? (
          <button
            className={step1 ? "d-hidden prev-btn" : "prev-btn"}
            onClick={() => prevFormHandler()}
          >
            Previous
          </button>
        ) : null}
        <button className="next-btn" onClick={() => nextFormHandler()}>
          {submitFlag ? (editFlag ? "Edit" : "Submit") : "Next"}
        </button>
      </div>
    </ReactModal>
  );
};
const mapStateToProps = (state) => ({
  users: state.users.allUsers,
});
const mapStateToDispatch = (dispatch) => ({
  addUsers: (user) => dispatch(addUsers(user)),
});
export default connect(mapStateToProps, mapStateToDispatch)(FormModal);

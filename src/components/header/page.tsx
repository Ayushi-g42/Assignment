import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { useRouter } from "next/navigation";

export const Header = (props: {
  countryData: Array<string>;
  selectCountry: (val: string) => void;
  countryTime: any;
}) => {
  const { countryData, selectCountry, countryTime } = props;
  const router = useRouter();

  const [showTime, setShowTime] = useState("");
  const [timeZone, setTimeZone] = useState<any>("");
  const [isPause, setPause] = useState(false);

  // const [temp, setTemp] = useState({ minute: 0, seconds: 0, milliseconds: 0 });

  useEffect(() => {
    setTimeZone(countryData[0]);
  }, [countryData]);

  useEffect(() => {
    let intervalID: any;
    if (!isPause) {
      intervalID = setInterval(() => updateTime(), 100);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [showTime, isPause, countryTime]);

  const updateTime = () => {
    const time = countryTime ? new Date(countryTime?.datetime) : new Date();

    const minute = time.getMinutes();
    const seconds = time.getSeconds();
    const milliseconds = time.getMilliseconds();
    const microseconds = (time.getUTCMilliseconds() * 1000)
      .toString()
      .slice(0, 3);

    const formattedTime = time.toLocaleTimeString([], {
      timeZone: timeZone?.timeZone ?? countryData[0],
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    setShowTime(formattedTime);
    // setTemp({
    //   minute,
    //   seconds,
    //   milliseconds,
    // });
  };

  return (
    <Container>
      <button className="back-button" onClick={() => router.back()}>
        Back
      </button>
      <div className="country-wrap">
        <select
          id="county"
          name="country"
          className="country-input"
          onChange={(e) => {
            selectCountry(e.target.value);
            setTimeZone(e.target.value);
          }}
        >
          {countryData?.length > 0 &&
            countryData?.map((item) => {
              return (
                <option value={item} key={`country-${item}`}>
                  {item}
                </option>
              );
            })}
        </select>

        <div className="time-wrap">
          <p className="time">{showTime}</p>
        </div>
        <button className="time-button" onClick={() => setPause(!isPause)}>
          {isPause ? "Start" : "Pause"}
        </button>
      </div>
    </Container>
  );
};

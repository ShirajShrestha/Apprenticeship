import { useState } from "react";
import data from "./data";
import "./accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelect = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelect = (id) => {
    let copyMutiple = [...multiple];
    const findIndexOfId = copyMutiple.indexOf(id);

    findIndexOfId === -1
      ? copyMutiple.push(id)
      : copyMutiple.splice(findIndexOfId, 1);
    setMultiple(copyMutiple);
  };

  return (
    <>
      <button
        className="multi-btn"
        onClick={() => setMultiSelect(!multiSelect)}
      >
        Enable Multi-Selection
      </button>
      <div className="accordian-wrapper">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                className="question"
                onClick={
                  multiSelect
                    ? () => handleMultiSelect(item.id)
                    : () => handleSingleSelect(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {multiSelect
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="answer">
                      <p>{item.answer}</p>{" "}
                    </div>
                  )
                : selected === item.id && (
                    <div className="answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
            </div>
          ))
        ) : (
          <h2>Data not found</h2>
        )}
      </div>
    </>
  );
};

export default Accordian;
